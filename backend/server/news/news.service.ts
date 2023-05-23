import * as newsRepo from "./news.repo";

export const getNews = async () => {
  try {
    const news = await newsRepo.getAllNews();
    return news;
  } catch (error) {
    console.log({ error });
  }
};

export const getQueriedNews = async (
  q: string,
  lang: string,
  country: string,
  max: number
) => {
  try {
    const news = await newsRepo.getQueriedNews(q, lang, country, max);
    return news;
  } catch (error) {
    console.log({ error });
  }
};
