import { Link } from "react-router-dom";
import React from "react";
import "./css/DayCard.css";

function DayCard({ data }) {
  const date = data.date;

  return (
    <div className="DayCard">
      <Link to={"/" + date}>
        <div className="day-img">
          <img src={data.url} alt="no" />
        </div>
        <p>{data.title}</p>
        <p>{data.date}</p>
      </Link>
    </div>
  );
}

export default DayCard;
