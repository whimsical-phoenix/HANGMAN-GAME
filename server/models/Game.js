// models/Game.js
const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
