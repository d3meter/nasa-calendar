import React, { useEffect, useState } from "react";
import MonthBtn from "../components/MonthBtn";
import MonthCard from "../components/MonthCard";
import YearBtn from "../components/YearBtn";
import * as dateUtils from "@wojtekmaj/date-utils";
import { getDaysInMonth, getCenturyStart } from "@wojtekmaj/date-utils";

function CalendarView() {
  const [nasaData, setNasaData] = useState([]);
  const [yearSelect, setYearSelect] = useState("");
  const [monthSelect, setMonthSelect] = useState("");

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
  let yearMonthLast = monthSelect !== "1" ? yearSelect : parseInt(yearSelect) - 1;
  let monthLast = monthSelect !== "1" ? parseInt(monthSelect) - 1 : 12;
  let dateLastBefore = yearMonthLast + "-" + monthLast + "-1";
  let daysMonthLast = getDaysInMonth(new Date(dateLastBefore));
  let dateLast = yearMonthLast + "-" + monthLast + "-" + daysMonthLast;
  let iOfLastDayLast = new Date(dateLast);
  let lastDayNameLast = weekday[iOfLastDayLast.getDay()];

  //next month
  let yearMonthNext = monthSelect !== "12" ? yearSelect : parseInt(yearSelect) + 1;
  let monthNext = monthSelect !== "12" ? parseInt(monthSelect) + 1 : 1;

  //dates for fetch
  let endDate = yearSelect + "-" + monthSelect + "-" + daysMonthOfDateSelect;
  if (lastDayNameSelect === "Saturday") {
    endDate = yearMonthNext + "-" + monthNext + "-1";
  }
  if (lastDayNameSelect === "Friday") {
    endDate = yearSelect + "-" + monthNext + "-2";
  }
  if (lastDayNameSelect === "Thursday") {
    endDate = yearSelect + "-" + monthNext + "-3";
  }
  if (lastDayNameSelect === "Wednesday") {
    endDate = yearSelect + "-" + monthNext + "-4";
  }
  if (lastDayNameSelect === "Tuesday") {
    endDate = yearSelect + "-" + monthNext + "-5";
  }
  if (lastDayNameSelect === "Monday") {
    endDate = yearSelect + "-" + monthNext + "-6";
  }

  //counting dates end

  const fetchData = () => {
    const apiKey = "QYSDCrsuNdQpx6YY9Yg2eO9RBWDIVwpWkwhwYWi8";
    let fetchUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2022-01-01&end_date=2022-02-01`;

    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        setNasaData(data);
      });
  };
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
      <p>
        Year select: {dateSelect}, year one month before: {yearMonthLast}
      </p>
      <p>days of month: {daysMonthOfDateSelect}</p>
      <p>
        weekday of first day: {firstDayNameSelect}, weekday of last day:{" "}
        {lastDayNameSelect}
      </p>
      <p>
        {dateLast}, {lastDayNameLast}
      </p>
      <p>end date: {endDate}</p>
      <YearBtn changeYear={changeYear} yearSelect={yearSelect} />
      <MonthBtn changeMonth={changeMonth} monthSelect={monthSelect} />
      <MonthCard nasaData={nasaData} />
    </div>
  );
}

export default CalendarView;
