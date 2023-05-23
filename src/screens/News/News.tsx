import React, { CSSProperties } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../redux/features/favoritesSlice";
import { AppDispatch, RootState } from "../../redux/store";
import Button from "../../components/common/Button";
import SearchBar from "../../components/common/SearchBar";
import * as S from "./styled";
import { ClipLoader } from "react-spinners";
import { off } from "process";

type Article = {
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
};

type News = {
  articles: Article[];
};

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const News = () => {
  const news = useSelector((state: RootState) => state.news);
  const favorites = useSelector((state: RootState) => state.favorites);
  const [saved, setSaved] = React.useState(false);
  const [color] = React.useState("red");

  console.log({ news });

  const dispatch = useDispatch<AppDispatch>();

  const checkIfSaved = (title: string) => {
    if (favorites.favorites[0]?.title === title) {
      console.log("is in the system");
      return true;
    }
    console.log("not in the system");

    return saved;
  };

  const saveToFavorites = (title: string, description: string, uri: string) => {
    checkIfSaved(title);
    dispatch(addFavorite({ title, description, uri }));
  };
  return (
    <>
      <SearchBar />
      {!news.articles?.length && news.articles !== null && (
        <ClipLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={200}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      <S.NewsContainer>
        {news.articles?.map((article) => {
          return (
            <>
              <div
                style={{
                  margin: "10px",

                  backgroundColor: "white",
                  boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
                }}
              >
                <div>
                  <S.NewsTitle>{article.title}</S.NewsTitle>
                </div>
                <S.NewsImage src={article.image} alt="article" />
                <S.NewsDescription>{article.description}</S.NewsDescription>

                <Button
                  style={{
                    borderRadius: "5px",
                    marginBottom: "10px",
                    height: "30px",
                    backgroundColor: "blue",
                    color: "white",
                  }}
                  title="Save"
                  onClick={() =>
                    saveToFavorites(
                      article.title,
                      article.description,
                      article.url
                    )
                  }
                />
              </div>
            </>
          );
        })}
      </S.NewsContainer>
    </>
  );
};

export default News;
