const express = require("express");
const cors = require("cors");
const { generateNames } = require("./name-generator/names");

const app = express();
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

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
