import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./css/DayCard.css";
import spinner from "../pub-imgs/spinner.gif";

function DayCard({ monthSelect, data }) {
  const [loading, setLoading] = useState(false);

  const date = data.date;
  const dateSplit = date.split("-");
  const day = dateSplit[2];
  const month = dateSplit[1];

  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let iOfDay = new Date(date);
  let dayNameSelect = weekday[iOfDay.getDay()];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return monthSelect === month ? (
    <Link className="DayCard" to={"/" + date}>
      <div className="day-tag">
        <p>{day} </p>
        <p className="day-name">{dayNameSelect}</p>
      </div>
      <div className="day-img">
        {!loading ? (
          data.media_type !== "image" ? (
            <iframe src={data.url} title={data.title}></iframe>
          ) : (
            <img src={data.url} alt="no" />
          )
        ) : (
          <img src={spinner} alt="spinner" />
        )}
      </div>
      <p className="title">{data.title}</p>
    </Link>
  ) : (
    <div className="DayCard">
      <p className="day-tag inactive">{day}</p>
    </div>
  );
}

export default DayCard;
