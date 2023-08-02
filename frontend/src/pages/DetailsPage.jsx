import React, { useEffect, useState } from "react";
import DayDetail from "./DayDetail";
import nasaData from "../database/data/nasa-data.json";
import { useParams } from "react-router-dom";

function DetailsPage({ logState }) {
  const [nasaDataThatDay, setNasaDataThatDay] = useState([]);

  let {dateId} = useParams();

  useEffect(() => {
    for (let i = 0; i < nasaData.length; i++) {
      if (nasaData[i].date === dateId) {
        setNasaDataThatDay(nasaData[i]);
      }
    }
  }, []);

  return (
    <div className="DetailsPage">
      <DayDetail nasaData={nasaDataThatDay} logState={logState} />
    </div>
  );
}

export default DetailsPage;
