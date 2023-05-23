import * as favoritesRepo from "./favorites.repo";

export const getFavorites = async () => {
  try {
    const favorites = await favoritesRepo.getAllFavorites();
    console.log({ favorites });
    return favorites;
  } catch (error) {
    console.log({ error });
    throw error;
  }
};

export const addFavorite = (
  title: string,
  description: string,
  uri: string
) => {
  return favoritesRepo.addFavorite(title, description, uri);
};

export const deleteFromFavorites = async (id: string) => {
  try {
    const favorite = await favoritesRepo.deleteFromFavorites(id);
    return favorite;
  } catch (error) {
    console.log({ error });
  }
};

export const deleteAllFavorites = async () => {
  try {
    const favorites = await favoritesRepo.deleteAllFavorites();
    return favorites;
  } catch (error) {
    console.log({ error });
  }
};
