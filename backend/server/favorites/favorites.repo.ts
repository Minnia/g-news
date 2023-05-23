//localhost:3002/favorites
import axios from "axios";
import favorite from "./favorites.schema";

export async function getAllFavorites() {
  try {
    const favorites = await favorite.find();
    console.log({ favorites });

    return await favorites;
  } catch (error) {
    console.error(error);
  }
}

export async function addFavorite(
  title: string,
  description: string,
  uri: string
) {
  try {
    const newFavorite = new favorite({ title, description, uri });

    return await newFavorite.save();
  } catch (error) {
    console.error("error in repo", error);
  }
}

export async function deleteFromFavorites(id: string) {
  try {
    return await favorite.findByIdAndDelete(id);
  } catch (error) {
    console.error(error);
  }
}
export async function deleteAllFavorites() {
  try {
    return await favorite.deleteMany();
  } catch (error) {
    console.error(error);
  }
}
