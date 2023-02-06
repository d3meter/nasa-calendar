import { Link } from "@mui/material";
import React from "react";
import "./css/DayCard.css";

function DayCard({ data }) {
  const date = data.date

  return (
    <Link className="DayCard" to={"/" + date}>
      <div className="day-img">
        <img src={data.url} alt="no" />
      </div>
      <p>{data.title}</p>
      <p>{data.date}</p>
    </Link>
  );
}

export default DayCard;
