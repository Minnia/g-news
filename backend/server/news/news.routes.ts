import express from "express";
import * as newsController from "./news.controller";
const newsRouter = express.Router();

newsRouter.get("/", newsController.getNews);
newsRouter.get("/search", newsController.getQueriedNews);

export default newsRouter;
