import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./css/DayCard.css";
import spinner from "../pub-imgs/spinner.gif";

function DayCard({ data }) {
  const [loading, setLoading] = useState(false);

  const date = data.date;
  const dateSplit = date.split("-");
  const day = dateSplit[2];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Link className="DayCard" to={"/" + date}>
      <p className="day-tag">{day}</p>
      <div className="day-img">
        {!loading ? (
          data.media_type !== "image" ? (
            <iframe src={data.url} title={data.title} frameborder="0"></iframe>
          ) : (
            <img src={data.url} alt="no" />
          )
        ) : (
          <img src={spinner} alt="spinner" />
        )}
      </div>
      <p className="title">{data.title}</p>
    </Link>
  );
}

export default DayCard;
