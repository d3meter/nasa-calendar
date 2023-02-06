import React, { useEffect, useState } from "react";
import "./App.css";
/* import { addDataNasa, getDataNasa } from "./admin/dataManager"; */
import "react-calendar/dist/Calendar.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CalendarView from "./pages/CalendarView";
import Main from "./pages/Main";
import DayDetail from "./pages/DayDetail";

function App() {
  const [date, setDate] = useState(new Date());
  /*   const [nasaDataDay, setNasaDataDay] = useState([]);

  const apiKey = "QYSDCrsuNdQpx6YY9Yg2eO9RBWDIVwpWkwhwYWi8";
  let fetchUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2022-01-01&end_date=2022-02-01`;

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        setNasaDataDay(data);
        console.log(data);
      });
  }, []); */

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/calendar" element={<CalendarView />} />
            <Route
            path="/:date"
            element={<DayDetail />}
          />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
