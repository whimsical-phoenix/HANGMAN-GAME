// src/App.js
import React from "react";
import "./App.css";
import Game from "./components/Game";
import BackgroundCanvas from "./components/BackgroundCanvas";

function App() {
  return (
    <div className="App">
      <BackgroundCanvas />
      <Game />
    </div>
  );
}

export default App;
