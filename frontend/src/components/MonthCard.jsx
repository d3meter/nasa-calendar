import React from "react";
import DayCard from "./DayCard";
import "./css/MonthCard.css";

function MonthCard({ monthSelect, filterData }) {
  
  return (
    <div className="MonthCard">
      {filterData?.length < 44 ? (
        Array.from(filterData).map((data, i) => <DayCard key={i} data={data} monthSelect={monthSelect}/>)
      ) : (
        <h2 className="error">! invalid date !</h2>
      )}
    </div>
  );
}

export default MonthCard;
