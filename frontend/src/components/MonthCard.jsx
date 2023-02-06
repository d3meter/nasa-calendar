import React, {useState} from "react";
import DayCard from "./DayCard";
import './css/MonthCard.css';
import nasaData from '../data/nasa-data.json';


function MonthCard({startDate, endDate}) {

  let filterData = [];
  
  let indexOfFirst = 0;
  for (let i=0; i<nasaData.length; i++) {
    if(nasaData[i].date === (startDate)) {
     indexOfFirst = nasaData.indexOf(nasaData[i]); 
    }
  }
  
  let indexOfLast= 0;
  for (let i=0; i<nasaData.length; i++) {
    if(nasaData[i].date === (endDate)) {
     indexOfLast = nasaData.indexOf(nasaData[i]) + 1; 
    }
  }

  for (let i=indexOfFirst; i<indexOfLast; i++) {
    filterData.push(nasaData[i])
  }

  return (
    <div className="MonthCard">
      {Array.from(filterData).map((data, i) => (
        <DayCard key={i} data={data} />
      ))}
    </div>
  );
}

export default MonthCard;
