import React, { useState, useEffect } from "react";
import "./css/Favorites.css";
import Masonry from "react-masonry-css";
import FavoriteCard from "../components/FavoriteCard";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFavorites } from "../database/dataManager";

function Favorites() {
  const [logState, setLogState] = useState("logged out");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogState(`logged in`);
      } else {
        setLogState(`logged out`);
      }
    });
  }, []);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const fetchedData = await getFavorites();
        setFavorites(fetchedData);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    if (logState === "logged in") {
      fetchFavorites();
    }
  }, [logState]);

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
