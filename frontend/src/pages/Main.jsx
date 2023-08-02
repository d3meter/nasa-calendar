import React, { useEffect, useState } from "react";
import DayDetail from "./DayDetail";
import nasaData from "../database/data/nasa-data.json";
import { getFavorites } from "../database/dataManager";

function Main({ logState }) {
  const [nasaDataToday, setNasaDataToday] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (logState === "logged in") {
      fetchFavorites();
    }
  }, [logState]);

  const fetchFavorites = async () => {
    try {
      const fetchedData = await getFavorites();
      setFavorites(fetchedData);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  useEffect(() => {
    setNasaDataToday(nasaData[nasaData.length - 1]);
  }, []);

  return (
    <div className="Main">
      <DayDetail
        nasaData={nasaDataToday}
        favorites={favorites}
        logState={logState}
      />
    </div>
  );
}

export default Main;
