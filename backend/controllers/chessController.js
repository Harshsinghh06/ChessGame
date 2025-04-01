import axios from "axios";
import { Chess } from "chess.js";

export const getAIMove = async (req, res) => {
  const { fen, apiKey, model } = req.body;

  if (!fen || !apiKey || !model) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  const chess = new Chess(fen);
  if (chess.game_over()) {
    return res.json({ move: null, message: "Game Over" });
  }

  const prompt = `Given the chess board position: ${fen}, suggest the best legal move in algebraic notation.`;
  let apiUrl, data;

  if (model === "gemini") {
    apiUrl = `https://generativelanguage.googleapis.com/v1beta2/models/gemini-pro:generateText?key=${apiKey}`;
    data = { prompt };
  } else if (model === "openai") {
    apiUrl = "https://api.openai.com/v1/completions";
    data = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    };
  }

  try {
    const response = await axios.post(apiUrl, data, {
      headers: { "Authorization": `Bearer ${apiKey}` },
    });

    const suggestedMove = response.data.choices?.[0]?.text?.trim();
    if (chess.move(suggestedMove)) {
      return res.json({ move: suggestedMove });
    } else {
      return res.json({ move: chess.moves()[0] });
    }
  } catch (error) {
    return res.status(500).json({ error: "LLM API failed" });
  }
};
