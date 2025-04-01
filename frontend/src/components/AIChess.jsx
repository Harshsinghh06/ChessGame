import React, { useState } from "react";
import { Chess } from "chess.js";
import axios from "axios";
import ChessBoardUI from "./Chessboard";

const AIChess = () => {
  const [game, setGame] = useState(new Chess());
  const [apiKey, setApiKey] = useState("");
  const [model, setModel] = useState("gemini");

  const handleMove = (source, target) => {
    const newGame = new Chess(game.fen());
    const moveResult = newGame.move({
      from: source,
      to: target,
      promotion: "q", // Always promote to queen when reaching the last rank
    });
  
    if (moveResult) {
      setGame(newGame);
    } else {
      console.log("Invalid move:", source, target);
    }
  };
  

  const fetchAIMove = async (fen) => {
    try {
      const response = await axios.post("http://localhost:5000/api/chess/move", {
        fen,
        apiKey,
        model,
      });
      if (response.data.move) {
        const newGame = new Chess(game.fen());
        newGame.move(response.data.move);
        setGame(newGame);
      }
    } catch (error) {
      console.error("AI Move Failed", error);
    }
  };

  return (
    <div className="">
      <h2>AI Chess Game</h2>
      {/* <input
        type="text"
        placeholder="Enter API Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      /> */}
      <select onChange={(e) => setModel(e.target.value)}>
        <option value="gemini">Google Gemini</option>
        <option value="openai">OpenAI GPT</option>
      </select>
      <ChessBoardUI game={game} onMove={handleMove} />
    </div>
  );
};

export default AIChess;
