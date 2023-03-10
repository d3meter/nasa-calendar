import React, { useEffect, useState } from "react";
import DayDetail from "./DayDetail";
import nasaData from "../data/nasa-data.json";

function Main() {
  const [nasaDataToday, setNasaDataToday] = useState([]);

  useEffect(() => {
    setNasaDataToday(nasaData[nasaData.length-1])
  },[])

  return (
    <div className="Main">
        <DayDetail nasaData={nasaDataToday} />
    </div>
  );
}

export default Main;
