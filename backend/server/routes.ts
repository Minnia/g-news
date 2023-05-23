import express from "express";
import newsRouter from "../server/news/news.routes";
import favoritesRouter from "../server/favorites/favorites.routes";

const router = express.Router();

router.get("/ping", (req, res) => res.send("ding"));

router.use("/news", newsRouter);

router.use("/favorites", favoritesRouter);

export default router;
