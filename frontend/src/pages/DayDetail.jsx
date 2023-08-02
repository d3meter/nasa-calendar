import React, { useEffect, useState } from "react";
import spinner from "../pub-imgs/spinner.gif";
import favoriteButton from "../pub-imgs/add_icon.png";
import { Tooltip } from "@mui/material";
import "./css/DayDetail.css";
import { addFavorite, removeFavorite } from "../database/dataManager";

function DayDetail({ nasaData, favorites = [] }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteId, setFavoriteId] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    for (const favorite of favorites) {
      if (favorite.date === nasaData.date) {
        setIsFavorite(true);
        setFavoriteId(favorite.id);
        break;
      }
    }
  }, [nasaData, favorites]);

  const onAddFavorite = () => {
    addFavorite(nasaData);
  };

  const onRemoveFavorite = () => {
    removeFavorite(favoriteId);
  };

  return (
    <div className="DayDetail">
      <div className="detail-header">
        <h1>{nasaData.title}</h1>
        <h1 className="header-date">{nasaData.date}</h1>
      </div>
      <div className="detail-container">
        <div className="detail-img">
          {!isFavorite ? (
            <button
              className="favorite-button"
              data-toggle="tooltip"
              data-placement="right"
              title="Mark as favorite"
              onClick={onAddFavorite}
            >
              <img src={favoriteButton} alt="+" />
            </button>
          ) : (
            <button
              className="remove-button"
              data-toggle="tooltip"
              data-placement="right"
              title="Remove from favorites"
              onClick={onRemoveFavorite}
            >
              <img src={favoriteButton} alt="+" />
            </button>
          )}
          {!isLoading ? (
            nasaData.media_type !== "image" ? (
              <iframe
                src={nasaData.url}
                title={nasaData.title}
                allowFullScreen
              ></iframe>
            ) : (
              <Tooltip title="Click to open in full HD!" followCursor>
                <a href={nasaData.hdurl} target="_blank" rel="noreferrer">
                  <img src={nasaData.url} alt="no" />
                </a>
              </Tooltip>
            )
          ) : (
            <img className="spinner" src={spinner} alt="spinner" />
          )}
        </div>
        <div className="detail-data">
          {nasaData.copyright ? <span>&copy; {nasaData.copyright}</span> : ""}
          <p>{nasaData.explanation}</p>
        </div>
      </div>
    </div>
  );
}

export default DayDetail;
