import React from "react";
import DayCard from "./DayCard";
import './css/MonthCard.css'

function MonthCard({ nasaData }) {

  return (
    <div className="MonthCard">
      {Array.from(nasaData).map((data, i) => (
        <DayCard key={i} data={data} />
      ))}
    </div>
  );
}

export default MonthCard;
