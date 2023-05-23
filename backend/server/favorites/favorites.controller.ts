import * as favoritesService from "./favorites.service";

export const getFavorites = async (req, res, next) => {
  try {
    const favorites = await favoritesService.getFavorites();
    console.log(favorites);
    res.send(favorites);
  } catch (error) {
    next(error);
  }
};

export const addFavorite = async (req, res, next) => {
  const { title, description, uri } = req.body;
  try {
    const favorites = await favoritesService.addFavorite(
      title,
      description,
      uri
    );
    res.send(favorites);
  } catch (error) {
    next(error);
  }
};

export const deleteFromFavorites = async (req, res, next) => {
  const { id } = req.params;
  try {
    const favorites = await favoritesService.deleteFromFavorites(id);
    res.send(favorites);
  } catch (error) {
    next(error);
  }
};

export const deleteAllFavorites = async (req, res, next) => {
  try {
    const favorites = await favoritesService.deleteAllFavorites();
    res.send(favorites);
  } catch (error) {
    next(error);
  }
};
