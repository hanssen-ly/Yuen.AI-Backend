import express from "express";
import { auth } from "../middleware/auth";
import { createMood, getTodayMood } from "../controllers/moodController";

const router = express.Router();

router.use(auth);

router.post("/", createMood);
router.get("/today", getTodayMood);

export default router;
