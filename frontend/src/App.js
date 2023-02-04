import React, { useEffect, useState } from "react";
import "./App.css";
/* import { addDataNasa, getDataNasa } from "./admin/dataManager"; */
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarView from "./pages/CalendarView";

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
    <div className="App">
      <Calendar onChange={setDate} value={date} />
      <CalendarView />
    </div>
  );
}

export default App;
