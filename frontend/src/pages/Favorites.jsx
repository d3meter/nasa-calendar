import React, { useEffect, useState } from "react";
import "./css/Favorites.css";
import Masonry from "react-masonry-css";
import FavoriteCard from "../components/FavoriteCard";

function Favorites({ logState, favorites = [] }) {
  const [isLoading, setIsLoading] = useState(true);
  const [numberContent, setNumberContent] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1300);
  }, []);

  useEffect(() => {
    if (favorites.length < 4) {
      const counter = favorites.length;
      setNumberContent(counter);
    } else {
      setNumberContent(4);
    }
  }, [favorites]);

  return (
    <div className="Favorites">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : favorites.length !== 0 ? (
        logState === "logged in" ? (
          <Masonry
            breakpointCols={numberContent}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {favorites.map((favorite, index) => (
              <FavoriteCard key={index} favorites={favorite}></FavoriteCard>
            ))}
          </Masonry>
        ) : (
          <h1>Sorry...you need to login first.</h1>
        )
      ) : (
        <h1>No saved favorite yet.</h1>
      )}
    </div>
  );
}

export default Favorites;
