import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
import favoriteButton from "../pub-imgs/add_icon.png";
import "./css/FavoriteCard.css";
import spinner from "../pub-imgs/spinner.gif";
import { removeFavorite } from "../database/dataManager";

function FavoriteCard({ favorites }) {
  const [isLoading, setIsLoading] = useState(false);

  const date = favorites.date;

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const onRemoveFavorite = () => {
    removeFavorite(favorites.id);
  };

  return (
    <div className="FavoriteCard">
      <h1 className="fc-header">{favorites.date}</h1>
      <div className="fc-container">
        <div className="fc-img">
          <button
            className="remove-button"
            data-toggle="tooltip"
            data-placement="right"
            title="Remove from favorites"
            onClick={onRemoveFavorite}
          >
            <img src={favoriteButton} alt="+" />
          </button>
          <Link className="details-button" to={"/" + date}>details</Link>
          {!isLoading ? (
            favorites.media_type !== "image" ? (
              <iframe
                src={favorites.url}
                title={favorites.title}
                allowFullScreen
              ></iframe>
            ) : (
              <Tooltip title="Click to open in full HD!" followCursor>
                <a href={favorites.hdurl} target="_blank" rel="noreferrer">
                  <img src={favorites.url} alt="no" />
                </a>
              </Tooltip>
            )
          ) : (
            <img className="spinner" src={spinner} alt="spinner" />
          )}
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;
