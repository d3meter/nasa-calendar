import React, { useEffect, useState } from "react";
import DayDetail from "./DayDetail";
import nasaData from "../database/data/nasa-data.json";

function Main({favorites = []}) {
  const [nasaDataToday, setNasaDataToday] = useState([]);

  useEffect(() => {
    setNasaDataToday(nasaData[nasaData.length-1])
  },[])

  return (
    <div className="Main">
        <DayDetail nasaData={nasaDataToday} favorites={favorites}/>
    </div>
  );
}

export default Main;
