import React from "react";
import DayCard from "./DayCard";
import "./css/MonthCard.css";

function MonthCard({ monthSelect, filterData }) {
  return (
    <div className="MonthCard">
      {Array.from(filterData).map((data, i) => (
        <DayCard key={i} data={data} monthSelect={monthSelect} />
      ))}
    </div>
  );
}

export default MonthCard;
