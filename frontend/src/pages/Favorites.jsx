import React from "react";
import "./css/Favorites.css";
import Masonry from "react-masonry-css";
import FavoriteCard from "../components/FavoriteCard";

function Favorites({logState, favorites = []}) {

  return (
    <div className="Favorites">
      {logState === "logged in" ? (
        <Masonry
          breakpointCols={4}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {favorites.map((favorite, index) => (
            <FavoriteCard key={index} favorites={favorite}></FavoriteCard>
          ))}
        </Masonry>
      ) : (
        <div>Sorry...you need to login first.</div>
      )}
    </div>
  );
}

export default Favorites;