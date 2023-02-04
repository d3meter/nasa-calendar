import React, { useEffect, useState } from "react";
import MonthBtn from "../components/MonthBtn";
import MonthCard from "../components/MonthCard";
import YearBtn from "../components/YearBtn";

function CalendarView() {
  const [nasaData, setNasaData] = useState([]);
  const [yearSelect, setYearSelect] = useState('');
  const [monthSelect, setMonthSelect] = useState('');

  const fetchData = () => {
    const apiKey = "QYSDCrsuNdQpx6YY9Yg2eO9RBWDIVwpWkwhwYWi8";
    let fetchUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2022-01-01&end_date=2022-02-01`;

    fetch(fetchUrl)
    .then((res) => res.json())
    .then((data) => {
      setNasaData(data);
    });
  }
/*   useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        setNasaData(data);
        console.log(data);
      });
  }, []); */

  const changeMonth = (event) => {
    setMonthSelect(event.target.value);
  };

  const changeYear = (event) => {
    setYearSelect(event.target.value);
  };


  return (
    <div className="CalendarView">
      <p>This {yearSelect}-{monthSelect}</p>
      <YearBtn changeYear={changeYear} yearSelect={yearSelect} />
      <MonthBtn changeMonth={changeMonth} monthSelect={monthSelect}/>
      <MonthCard nasaData={nasaData} />
    </div>
  );
}

export default CalendarView;
