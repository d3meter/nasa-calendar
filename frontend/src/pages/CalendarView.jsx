import React, { useEffect, useState } from "react";
import MonthBtn from "../components/MonthBtn";
import MonthCard from "../components/MonthCard";
import YearBtn from "../components/YearBtn";
import "./css/CalendarView.css";
import { getDaysInMonth, getISOLocalDate } from "@wojtekmaj/date-utils";

function CalendarView() {
  const [nasaData, setNasaData] = useState([]);
  const [yearSelect, setYearSelect] = useState(2023);
  const [monthSelect, setMonthSelect] = useState("02");

  //counting dates start
  //select month
  let dateSelect = yearSelect + "-" + monthSelect + "-1";
  let daysMonthOfDateSelect = getDaysInMonth(new Date(dateSelect));
  let dateSelectLastDay =
    yearSelect + "-" + monthSelect + "-" + daysMonthOfDateSelect;

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let iOfFirstDaySelect = new Date(dateSelect);
  let firstDayNameSelect = weekday[iOfFirstDaySelect.getDay()];

  let iOfLastDaySelect = new Date(dateSelectLastDay);
  let lastDayNameSelect = weekday[iOfLastDaySelect.getDay()];

  //last month
  let yearMonthLast =
    monthSelect !== "01" ? yearSelect : parseInt(yearSelect) - 1;
  let monthLast = monthSelect !== "01" ? parseInt(monthSelect) - 1 : 12;
  let dateLastBefore = yearMonthLast + "-" + monthLast + "-1";
  let daysMonthLast = parseInt(getDaysInMonth(new Date(dateLastBefore)));
  let dateLast = yearMonthLast + "-" + monthLast + "-" + daysMonthLast;
  let iOfLastDayLast = new Date(dateLast);
  let lastDayNameLast = weekday[iOfLastDayLast.getDay()];

  //next month
  let yearMonthNext =
    monthSelect !== "12" ? yearSelect : parseInt(yearSelect) + 1;
  let monthNext = monthSelect !== "12" ? parseInt(monthSelect) + 1 : 1;

  //dates for fetch
  let startDateRaw = yearSelect + "-" + monthSelect + "-1";
  if (firstDayNameSelect === "Tuesday") {
    startDateRaw = yearMonthLast + "-" + monthLast + "-" + daysMonthLast;
  }
  if (firstDayNameSelect === "Wednesday") {
    startDateRaw =
      yearMonthLast + "-" + monthLast + "-" + parseInt(daysMonthLast - 1);
  }
  if (firstDayNameSelect === "Thursday") {
    startDateRaw =
      yearMonthLast + "-" + monthLast + "-" + parseInt(daysMonthLast - 2);
  }
  if (firstDayNameSelect === "Friday") {
    startDateRaw =
      yearMonthLast + "-" + monthLast + "-" + parseInt(daysMonthLast - 3);
  }
  if (firstDayNameSelect === "Saturday") {
    startDateRaw =
      yearMonthLast + "-" + monthLast + "-" + parseInt(daysMonthLast - 4);
  }
  if (firstDayNameSelect === "Sunday") {
    startDateRaw =
      yearMonthLast + "-" + monthLast + "-" + parseInt(daysMonthLast - 5);
  }
  let startDate = getISOLocalDate(new Date(startDateRaw));

  let endDateRaw = yearSelect + "-" + monthSelect + "-" + daysMonthOfDateSelect;
  if (lastDayNameSelect === "Saturday") {
    endDateRaw = yearMonthNext + "-" + monthNext + "-1";
  }
  if (lastDayNameSelect === "Friday") {
    endDateRaw = yearSelect + "-" + monthNext + "-2";
  }
  if (lastDayNameSelect === "Thursday") {
    endDateRaw = yearSelect + "-" + monthNext + "-3";
  }
  if (lastDayNameSelect === "Wednesday") {
    endDateRaw = yearSelect + "-" + monthNext + "-4";
  }
  if (lastDayNameSelect === "Tuesday") {
    endDateRaw = yearSelect + "-" + monthNext + "-5";
  }
  if (lastDayNameSelect === "Monday") {
    endDateRaw = yearSelect + "-" + monthNext + "-6";
  }
  let endDate = getISOLocalDate(new Date(endDateRaw));

  //counting dates end

  /*  const fetchData = () => {
    const apiKey = "QYSDCrsuNdQpx6YY9Yg2eO9RBWDIVwpWkwhwYWi8";
    let fetchUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2022-01-01&end_date=${endDate}`;

    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        setNasaData(data);
      });
  }; */

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
      <div className="menu">
        <YearBtn changeYear={changeYear} yearSelect={yearSelect} />
        <MonthBtn changeMonth={changeMonth} monthSelect={monthSelect} />
      </div>
      <MonthCard startDate={startDate} endDate={endDate} />
    </div>
  );
}

export default CalendarView;
