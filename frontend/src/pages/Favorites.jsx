import React, { useEffect, useState } from "react";
import "./css/Favorites.css";
import Masonry from "react-masonry-css";
import FavoriteCard from "../components/FavoriteCard";
import { getFavorites, removeFavorite } from "../database/dataManager";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

function Favorites({ logState }) {
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const windowSize = useWindowSize();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1300);
  }, []);

  useEffect(() => {
    if (logState === "logged in") {
      fetchFavorites();
    }
  }, [logState]);

  const fetchFavorites = async () => {
    try {
      const fetchedData = await getFavorites();
      setFavorites(fetchedData);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  const onRemoveFavorite = async (favoriteId) => {
    try {
      await removeFavorite(favoriteId);
      fetchFavorites();
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };

  let breakpointCols = 4;
  if (windowSize.width <= 1200 || favorites.length === 3) {
    breakpointCols = 3;
  }
  if (windowSize.width <= 900 || favorites.length === 2) {
    breakpointCols = 2;
  }
  if (windowSize.width <= 700 || favorites.length === 1) {
    breakpointCols = 1;
  }

  return (
    <div className="Favorites">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : logState === "logged in" ? (
        favorites.length !== 0 ? (
          <Masonry
            breakpointCols={breakpointCols}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {favorites.map((favorite, index) => (
              <FavoriteCard
                key={index}
                favorites={favorite}
                removeFavorite={onRemoveFavorite}
              ></FavoriteCard>
            ))}
          </Masonry>
        ) : (
          <h1>No saved favorite yet.</h1>
        )
      ) : (
        <h1>Sorry...you need to login first.</h1>
      )}
    </div>
  );
}

export default Favorites;
