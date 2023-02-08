import React, { useEffect, useState } from "react";
import DayDetail from "./DayDetail";
import nasaData from "../data/nasa-data.json";
import { useParams } from "react-router-dom";

function DetailsPage() {
  const [nasaDataThatDay, setNasaDataThatDay] = useState([]);

  let {dateId} = useParams();

  console.log(dateId)
  useEffect(() => {
    for (let i = 0; i < nasaData.length; i++) {
      if (nasaData[i].date === dateId) {
        setNasaDataThatDay(nasaData[i]);
      }
    }
    console.log(nasaDataThatDay);
  }, []);

  return (
    <div className="DetailsPage">
      <DayDetail nasaData={nasaDataThatDay} />
    </div>
  );
}

export default DetailsPage;
