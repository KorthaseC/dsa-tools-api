const path = require("node:path");
const express = require("express");
const cors = require("cors");
const { generateNames } = require("./name-generator/names");
const { generateBooks } = require("./book-generator/books");
const { createAtlasEditorRouter } = require("./atlas-editor/router");

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(
  cors({
    origin: ["https://dsa-tools.de", "https://www.dsa-tools.de"],
  }),
);

// Shared change log of the Kartenpaket dataset editor (dev.dsa-tools.de only, see atlas-editor/router.js).
// Off unless the secret is set. Mounted before the global JSON parser: the router sets its own size limits.
if (process.env.ATLAS_EDITOR_SECRET) {
  const dataDir = process.env.ATLAS_EDITOR_DATA || path.join(__dirname, "data", "atlas-editor");
  app.use("/atlas-editor", createAtlasEditorRouter({ secret: process.env.ATLAS_EDITOR_SECRET, dataDir }));
  console.log(`Atlas editor log in ${dataDir}`);
}

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
