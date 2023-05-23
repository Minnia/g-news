import express from "express";
import * as favoritesController from "./favorites.controller";

const favoritesRouter = express.Router();

favoritesRouter.get("/", favoritesController.getFavorites);
favoritesRouter.post("/", favoritesController.addFavorite);
favoritesRouter.delete("/", favoritesController.deleteAllFavorites);

favoritesRouter.delete("/:id", favoritesController.deleteFromFavorites);

export default favoritesRouter;
