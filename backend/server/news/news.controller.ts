import * as newsService from "./news.service";

export const getNews = async (req, res, next) => {
  console.log("in the controller");
  try {
    console.log("in the controller try catch");
    const news = await newsService.getNews();
    res.send(news);
  } catch (error) {
    next(error);
  }
};

export const getQueriedNews = async (req, res, next) => {
  const { q, lang, max, country } = req.query;
  try {
    const news = await newsService.getQueriedNews(q, lang, max, country);
    res.send(news);
  } catch (error) {
    next(error);
  }
};
