import React from "react";
import DayCard from "./DayCard";
import "./css/MonthCard.css";
import nasaData from "../database/data/nasa-data.json";

function MonthCard({ monthSelect, startDate, endDate }) {
  let filterData = [];
  let indexData = nasaData.length;

  let indexOfFirst = 0;
  for (let i = 0; i < nasaData.length; i++) {
    if (nasaData[i].date === startDate) {
      indexOfFirst = nasaData.indexOf(nasaData[i]);
    }
  }

  let indexOfLast = indexData;
  for (let i = 0; i < nasaData.length; i++) {
    if (nasaData[i].date === endDate) {
      indexOfLast = nasaData.indexOf(nasaData[i]) + 1;
    }
  }

  for (let i = indexOfFirst; i < indexOfLast; i++) {
    filterData.push(nasaData[i]);
  }

  return (
    <div className="MonthCard">
      {filterData.length < 44 ? (
        Array.from(filterData).map((data, i) => <DayCard key={i} data={data} monthSelect={monthSelect}/>)
      ) : (
        <h2 className="error">! invalid date !</h2>
      )}
    </div>
  );
}

export default MonthCard;
