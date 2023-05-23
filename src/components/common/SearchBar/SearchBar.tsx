import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchQueriedNews } from "../../../redux/features/newsSlice";
import { AppDispatch, RootState } from "../../../redux/store";
import Button from "../Button";
import Checkbox from "../Checkbox";
import * as S from "./styled";

const SearchBar = () => {
  const [search, setSearch] = React.useState("");
  const news = useSelector((state: RootState) => state.news);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleChange = (search: {
    target: { value: string };
    preventDefault: () => void;
  }) => {
    search.preventDefault();
    setSearch(search.target.value);
  };

  return (
    <>
      <S.SearchBarContainer>
        <S.InnerContainer>
          <S.StyledInput
            type="text"
            placeholder="Search here"
            onChange={handleChange}
            value={search}
          />

          <Button
            title="Search"
            onClick={() =>
              dispatch(
                fetchQueriedNews({
                  query: search,
                  lang: "en",
                  country: "us",
                  max: 5,
                })
              )
            }
            style={{
              borderRadius: "5px",
              marginTop: "8px",
              height: "30px",
              backgroundColor: "blue",
              color: "white",
            }}
          />
          <Button
            title="See saved"
            onClick={() => navigate("/favorites")}
            style={{
              borderRadius: "5px",
              marginTop: "8px",
              height: "30px",
              backgroundColor: "blue",
              color: "white",
            }}
          />
        </S.InnerContainer>

        <S.CheckboxContainer>
          <Checkbox title="lang" optionOne="en" optionTwo="se" />
          <Checkbox title="country" optionOne="en" optionTwo="se" />
        </S.CheckboxContainer>
      </S.SearchBarContainer>
      {news.articles === null && <h1>No search results for {search}</h1>}
    </>
  );
};

export default SearchBar;
