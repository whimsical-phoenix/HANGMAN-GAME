// routes/game.js

// const express = require("express");
// const router = express.Router();
// const Game = require("../models/Game");

// router.get("/random", async (req, res) => {
//   try {
//     const randomWord = await Game.findOne().skip(
//       Math.floor(Math.random() * (await Game.countDocuments()))
//     );
//     res.json(randomWord);
//   } catch (error) {
//     console.error("Error fetching random word:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// module.exports = router;

// routes/game.js

const express = require("express");
const router = express.Router();
const Game = require("../models/Game");

// Route for the root path ("/")
router.get("/", (req, res) => {
  res.send("Hello, this is the root path!");
});

// Route for getting a random word ("/random")
router.get("/random", async (req, res) => {
  try {
    const randomWord = await Game.findOne().skip(
      Math.floor(Math.random() * (await Game.countDocuments()))
    );
    res.json(randomWord);
  } catch (error) {
    console.error("Error fetching random word:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
