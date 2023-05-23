import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Favorite {
  title: string;
  description: string;
  uri: string;
}

export interface FavoritesState {
  favorites: Favorite[];
}

const initialState: FavoritesState = {
  favorites: [],
};

export const addFavorite = createAsyncThunk(
  "add favorites",
  async (favorite: Favorite) => {
    const { title, description, uri } = favorite;
    const response = await axios.post(`/api/v1/favorites`, {
      title,
      description,
      uri,
    });
    const data = await response.data;
    console.log({ data });
    return data;
  }
);

export const fetchFavorites = createAsyncThunk("fetch favorites", async () => {
  const response = await axios.get(`/api/v1/favorites`);

  const data = await response.data;
  console.log({ yo: data });
  return data;
});

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addFavorite.pending, (state) => {
      state.favorites = [];
    });
    builder.addCase(addFavorite.fulfilled, (state, action) => {
      state.favorites = action.payload;
    });
    builder.addCase(addFavorite.rejected, (state) => {
      state.favorites = [];
    });
    builder.addCase(fetchFavorites.pending, (state) => {
      state.favorites = [];
    });
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.favorites = action.payload.map((favorite: Favorite) => {
        return favorite;
      });
    });
    builder.addCase(fetchFavorites.rejected, (state) => {
      state.favorites = [];
    });
  },
});

export default favoritesSlice.reducer;
