import React, { useEffect, useState } from "react";
import DayDetail from "./DayDetail";
import nasaData from "../data/nasa-data.json";

function Main() {
  const [nasaDataToday, setNasaDataToday] = useState([]);

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let dateToday = `${year}-${month}-${day}`;

/*   const apiKey = "QYSDCrsuNdQpx6YY9Yg2eO9RBWDIVwpWkwhwYWi8";
  let fetchUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateToday}`;

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        setNasaData(data);
        console.log(data);
      });
  }, []); */

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
