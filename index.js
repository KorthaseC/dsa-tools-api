const express = require("express");
const cors = require("cors");
const { generateNames } = require("./name-generator/names");
const { generateBooks } = require("./book-generator/books");
const { getCharacters, getRoomCharacters, skillCheck, setNestedValue } = require("./character-generator/characters");
const { ChatCategory, createChatMessage, rollDice, getSkillCheckMessage } = require("./adventure/chat");

const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:4200", // Ersetze dies mit deiner Netlify-URL
    methods: ["GET", "POST"],
  },
});

const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/generate-names", (req, res) => {
  try {
    const { gender, origin, noble } = req.body;
    if (!origin) {
      return res.status(400).send("Origin is required.");
    }

    const isNoble = noble === true; // Ensure noble is a boolean
    const names = generateNames(gender, origin, isNoble);
    res.json(names);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/generate-books", (req, res) => {
  try {
    const { bookType, feature, bookCounter } = req.body;
    const hasFeature = feature === true;
    const booksInfo = generateBooks(bookType, hasFeature, bookCounter);
    res.json(booksInfo);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//returns characters directly from the json objects saved in data
app.post("/generate-characters", (req, res) => {
  const { names, count } = req.body;

  const characterCount = parseInt(count) || 3;

  // Names of the requested characters (empty array if none specified)
  const requestedNames = Array.isArray(names) ? names : [];

  try {
    const characters = getCharacters(requestedNames, characterCount);
    res.json(characters);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

const rooms = {};

app.post("/create-room", (req, res) => {
  const { roomId, characterCount, characterNames } = req.body;

  if (!roomId || !characterCount) {
    return res.status(400).send("Invalid request: Missing roomId or characterCount");
  }

  if (Object.keys(rooms).length >= 5) {
    return res.status(429).send({ message: "errorMaxRooms" });
  }

  if (!rooms[roomId]) {
    // Create room
    rooms[roomId] = {
      players: [],
      drawings: [],
      chat: [],
      characters: getCharacters(characterNames, characterCount),
    };
    return res.status(201).send({ message: "Room created", roomId });
  }
  res.status(400).send({ message: "errorRoomExists" });
});

app.post("/room-users", (req, res) => {
  const { roomId } = req.body;

  if (!roomId || !rooms[roomId]) {
    return res.status(404).send({ error: "Room not found" });
  }

  try {
    const users = rooms[roomId].players.map((player) => ({
      playerId: player.playerId,
      username: player.username || "Anonymous",
    }));

    res.status(200).send(users);
  } catch (error) {
    console.error("Error fetching room users:", error);
    res.status(500).send({ error: "Internal server error" });
  }
});

app.post("/room-characters", (req, res) => {
  const { roomId, characterCount, characterNames } = req.body;

  if (!roomId || !rooms[roomId]) {
    return res.status(404).send("Room not found");
  }

  const roomCharacters = rooms[roomId].characters;
  count = characterCount ? characterCount : roomCharacters.length;

  try {
    const characters = getRoomCharacters(roomCharacters, characterNames, count);
    res.json(characters);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.post("/add-access-to-character", (req, res) => {
  const { roomId, characterName, playerId, username } = req.body;

  if (!roomId || !characterName || !playerId || !username) return res.status(400).send({ error: "Invalid request data" });

  if (!rooms[roomId]) return res.status(404).send({ error: "Room not found" });

  const room = rooms[roomId];
  const character = getRoomCharacters(room.characters, [characterName], 1)[0];
  if (!character) return res.status(404).send({ error: "Character not found" });

  if (!character.accessList.includes(playerId)) {
    const oldAccesListLength = character.accessList.length;
    character.accessList.push(playerId);
    const newAccesListLength = character.accessList.length;

    // add username for the added player, only for the controlling player
    if (oldAccesListLength === 1 && newAccesListLength === 2) {
      character.username = username;
    }

    return res.status(200).send({
      message: `Player ${username} added to access list of ${characterName}`,
      accessList: character.accessList,
    });
  }

  res.status(200).send({
    message: `Player ${username} is already in the access list`,
    accessList: character.accessList,
  });
});

app.post("/update-character", (req, res) => {
  const { roomId, characterName, path, newValue } = req.body;

  if (!roomId || !characterName || !path || typeof newValue === "undefined") return res.status(400).send({ error: "Invalid request data" });

  if (!rooms[roomId]) return res.status(404).send({ error: "Room not found" });

  const character = rooms[roomId].characters.find((c) => c.name === characterName);

  if (!character) return res.status(404).send({ error: "Character not found" });

  try {
    setNestedValue(character, path, newValue);
    return res.status(200).send({ message: "Character updated successfully" });
  } catch (error) {
    console.error("Error updating character:", error.message);
    return res.status(400).send({ error: error.message });
  }
});

app.post("/skill-check", (req, res) => {
  const { roomId, characterName, probe, category, modifier, isAttack } = req.body;
  if (!roomId || !rooms[roomId]) {
    return res.status(404).send("Room not found");
  }
  const roomCharacters = rooms[roomId].characters;
  const character = getRoomCharacters(roomCharacters, [characterName], count)[0];

  if (!character) {
    return res.status(404).send("Character not found");
  }
  const skillCheckResult = skillCheck(character, probe, category, modifier, isAttack);

  const chatMessage = getSkillCheckMessage(
    characterName,
    probe,
    category,
    skillCheckResult.rolls,
    modifier,
    skillCheckResult.remainingValue,
    skillCheckResult.result,
    isAttack,
    skillCheckResult.cost,
  );

  rooms[roomId].chat.push(chatMessage);
  io.to(roomId).emit("receiveMessage", chatMessage);

  res.status(200).send({ message: "Skill-checked rolled" });
});

server.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});

const INACTIVITY_TIMEOUT = 5 * 60 * 1000; // 5 Minutes
const PING_INTERVAL = 30 * 1000; // 30 sec

// User ping check
setInterval(() => {
  const now = Date.now();

  Object.keys(rooms).forEach((roomId) => {
    const room = rooms[roomId];

    room.players.forEach((player) => {
      if (now - player.lastPing > INACTIVITY_TIMEOUT) {
        console.log(`Player ${player.playerId} in room ${roomId} is inactive.`);

        // only remove first play if everybody else is removed
        if (player === room.players[0] && room.players.length > 1) {
          return;
        }

        // remove player
        room.players = room.players.filter((p) => p !== player);
        console.log(`Player ${player.playerId} removed from room ${roomId}.`);
      }
    });

    // remove room
    if (room.players.length === 0) {
      delete rooms[roomId];
      console.log(`Room ${roomId} removed due to inactivity.`);
    }
  });
}, PING_INTERVAL);

io.on("connection", (socket) => {
  console.log("A user is connected: ", socket.id);

  // Player joins the room
  socket.on("joinRoom", (roomId, playerId) => {
    if (!rooms[roomId]) return;

    const room = rooms[roomId];
    const existingPlayer = rooms[roomId].players.find((p) => p.playerId === playerId);
    if (!existingPlayer) {
      room.players.push({ playerId, username: null, lastPing: Date.now() });

      if (room.players.length === 1) {
        room.characters.forEach((character) => {
          if (!character.accessList) {
            character.accessList = [];
          }
          if (!character.accessList.includes(playerId)) {
            character.accessList.push(playerId);
          }
        });
      }
    } else {
      existingPlayer.socketId = socket.id;
      existingPlayer.lastPing = Date.now();
    }

    socket.join(roomId);
    socket.emit("joinedRoom", { success: true, roomId });
    socket.emit("drawUpdate", rooms[roomId]?.drawings);
    socket.emit("chatHistory", rooms[roomId]?.chat);
  });

  socket.on("pong", () => {
    const player = Object.values(rooms)
      .flatMap((room) => room.players)
      .find((p) => p.socketId === socket.id);

    if (player) {
      player.lastPing = Date.now(); // refresh user
    }
  });

  socket.on("updatePlayerUsername", (roomId, playerId, username) => {
    if (!rooms[roomId]) return;

    const player = rooms[roomId].players.find((p) => p.playerId === playerId);
    if (player) {
      player.username = username;
    }
  });

  // Player sends drawing
  socket.on("drawUpdate", (data) => {
    const { roomId, drawing } = data;
    rooms[roomId].drawings.push(drawing);
    io.to(roomId).emit("drawUpdate", rooms[roomId].drawings);
  });

  socket.on("undoAction", (data) => {
    const room = rooms[data.roomId];
    if (room && room.drawings.length > 0) {
      room.drawings.pop(); // removes last entry (drawning, move, scale or something else)
      io.to(data.roomId).emit("drawUpdate", room.drawings);
    }
  });

  socket.on("deleteShape", (data) => {
    const { roomId, shapeId } = data;
    const room = rooms[roomId];
    if (room) {
      // Filter out the deleted shape by ID
      room.drawings = room.drawings.filter((drawing) => drawing.id !== shapeId);
      io.to(roomId).emit("drawUpdate", room.drawings); // Update all users
    }
  });

  socket.on("clearCanvas", (roomId) => {
    if (rooms[roomId]) {
      rooms[roomId].drawings = []; // rest every drawing
      io.to(roomId).emit("clearCanvas");
    }
  });

  socket.on("sendMessage", (data) => {
    const { roomId, playerId, message } = data;

    if (!rooms[roomId]) return;

    const player = rooms[roomId].players.find((p) => p.playerId === playerId);
    const username = player ? player.username : "Unknown";

    let chatMessage;

    const rollMatch = message.match(/\/(roll|r)(\d+)(d|w)(\d+)/);
    if (rollMatch) {
      chatMessage = rollDice(rollMatch, username);
    } else {
      chatMessage = createChatMessage(ChatCategory.Usertext, username, message);
    }

    // Store the message in the room's chat array
    rooms[roomId].chat.push(chatMessage);
    // Broadcast the message to all users in the room
    io.to(roomId).emit("receiveMessage", chatMessage);
  });

  // Server-Ping send
  setInterval(() => {
    io.emit("ping"); // Sende"ping" to all connected users
  }, PING_INTERVAL);

  // Player disconnects (not used)
  socket.on("disconnect", () => {
    console.log("A user disconnected: ", socket.id);
  });
});
