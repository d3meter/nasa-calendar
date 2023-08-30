import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
import "./css/GalleryCard.css";
import spinner from "../pub-imgs/spinner.gif";

function GalleryCard({ data }) {
  const [isLoading, setIsLoading] = useState(false);

  const date = data.date;

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);


  return (
    <div className="GalleryCard">
      <h1 className="gc-header">{data.date}</h1>
      <div className="gc-container">
        <div className="gc-img">
          <Link className="details-button" to={"/" + date}>
            details
          </Link>
          {!isLoading ? (
            data.media_type !== "image" ? (
              <iframe
                src={data.url}
                title={data.title}
                allowFullScreen
              ></iframe>
            ) : (
              <Tooltip title="Click to open in full HD!" followCursor>
                <a href={data.hdurl} target="_blank" rel="noreferrer">
                  <img src={data.url} alt="no" />
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

export default GalleryCard;
