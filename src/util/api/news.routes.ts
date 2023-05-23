import { AxiosInstance } from "axios";
import { NewsParams } from "./types";

const newsRoutes = (axios: AxiosInstance) => ({
  fetchQueriedNews: async (params: NewsParams) => {
    try {
      const { query, country, max, lang } = params;
      const response = await axios.get(
        `/api/v1/news/search?q=${query}&country=${country}&max=${max}&lang=${lang}`
      );
      const data = await response.data;
      return data.articles;
    } catch (error) {
      console.log(error);
    }
  },
});

export default newsRoutes;
