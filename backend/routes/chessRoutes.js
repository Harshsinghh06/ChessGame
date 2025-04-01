import express from "express";
import { getAIMove } from "../controllers/chessController.js";

const router = express.Router();

router.post("/move", getAIMove);

export default router;
