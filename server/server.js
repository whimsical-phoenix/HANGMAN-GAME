//src/server/server.js

require("dotenv").config(); // Load environment variables from .env file

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const gameRouter = require("./routes/game");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000; // Update to match Render configuration

const pathToBuild = path.join(__dirname, "../hangman-frontend/build");
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 5000, // optional: reduce the connection timeout
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successful");
});

app.use(express.static(pathToBuild));
app.use("/api/game", gameRouter);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
