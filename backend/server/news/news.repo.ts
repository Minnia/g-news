// https://gnews.io/api/v4/search?q=Elon&lang=en&country=us&max=10&apikey=17f37e3281b42e13158486fbc8abaf6a
import axios from "axios";

export async function getAllNews() {
  try {
    const response = await axios.get("https://gnews.io/api/v4/search", {
      params: {
        q: "Verstappen",
        lang: "en",
        country: "us",
        max: 10,
        apikey: "17f37e3281b42e13158486fbc8abaf6a",
      },
    });
    console.log({ response });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getQueriedNews(
  q: string,
  lang: string,
  country: string,
  max: number
) {
  try {
    const response = await axios.get("https://gnews.io/api/v4/search", {
      params: {
        q: q,
        lang: lang,
        country: country,
        max: max,
        apikey: "17f37e3281b42e13158486fbc8abaf6a",
      },
    });
    console.log({ response });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
