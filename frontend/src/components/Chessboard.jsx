import React from "react";
import { Chessboard } from "react-chessboard";

const ChessBoardUI = ({ game, onMove }) => {
  return <Chessboard position={game.fen()} onPieceDrop={onMove} />;
};

export default ChessBoardUI;
