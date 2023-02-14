import React, { useEffect, useState } from "react";
import "./App.css";
/* import { addDataNasa, getDataNasa } from "./admin/dataManager"; */
import "react-calendar/dist/Calendar.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CalendarView from "./pages/CalendarView";
import Favorites from "./pages/Favorites";
import Main from "./pages/Main";
import DetailsPage from "./pages/DetailsPage";
import nasaData from "./data/nasa-data.json";
import { getISOLocalDate } from "@wojtekmaj/date-utils";

function App() {
  const [nasaDataUpdate, setNasaDataUpdate] = useState([]);

  //start of update fetch
  const apiKey = "QYSDCrsuNdQpx6YY9Yg2eO9RBWDIVwpWkwhwYWi8";

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let dateTodayRaw = `${year}-${month}-${day}`;
  let endDate = getISOLocalDate(new Date(dateTodayRaw));

  let startDate = nasaData[nasaData.length - 1].date;

  useEffect(() => {
    if (startDate !== endDate) {
      let fetchUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`;
      fetch(fetchUrl)
        .then((res) => res.json())
        .then((data) => {
          setNasaDataUpdate(data);
        });
    }
  }, []);

  useEffect(() => {
    if (nasaDataUpdate.length === 2) {
      let dataParse = JSON.parse(nasaData);
      dataParse.push(nasaDataUpdate[1]);
    } else {
      
    }
  }, []);

  //end of update fetch

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="/:dateId" element={<DetailsPage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
