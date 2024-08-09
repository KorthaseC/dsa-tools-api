const express = require("express");
const cors = require("cors");
const { generateNames } = require("./name-generator/names");
const { generateBooks } = require("./book-generator/books");

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

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
