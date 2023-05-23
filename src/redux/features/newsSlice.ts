import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Article {
  content: string;
  description: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
  title: string;
  url: string;
}

export interface NewsState {
  articles: Article[];
}

interface NewsParams {
  query: string;
  country: string;
  max: number;
  lang: string;
}

const initialState: NewsState = {
  articles: [],
};

export const fetchQueriedNews = createAsyncThunk(
  "/api/v1/news/search",
  async (params: NewsParams) => {
    const { query, country, max, lang } = params;
    const response = await axios.get(
      `/api/v1/news/search?q=${query}&country=${country}&max=${max}&lang=${lang}`
    );
    const data = await response.data;
    if (data.totalArticles === 0) {
      console.log("no articles found");
      return null;
    }
    console.log({ data, params });
    return data.articles;
  }
);

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQueriedNews.pending, (state) => {
      state.articles = [];
    });
    builder.addCase(fetchQueriedNews.fulfilled, (state, action) => {
      state.articles = action.payload;
    });
    builder.addCase(fetchQueriedNews.rejected, (state) => {
      state.articles = [];
    });
  },
});

export default newsSlice.reducer;
