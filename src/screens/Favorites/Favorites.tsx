import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GridContainer from "../../components/common/GridContainer";
import { fetchFavorites } from "../../redux/features/favoritesSlice";
import { AppDispatch } from "../../redux/store";
import { ArrowBack } from "@mui/icons-material";

import { Favorite } from "./types";

const Favorites: React.FC = ({}) => {
  const [favorites, setFavorites] = React.useState<Favorite[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavoritesData = async () => {
      try {
        const res = await dispatch(fetchFavorites());
        const data = res.payload;
        setFavorites(data);
      } catch (error) {
        throw error;
      }
    };

    fetchFavoritesData();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: "10px",
        }}
      >
        <ArrowBack onClick={() => navigate(-1)} />
      </div>

      <h1>Favorites</h1>

      <GridContainer children={favorites} />
    </>
  );
};

export default Favorites;
