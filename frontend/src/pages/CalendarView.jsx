import React, { useState } from "react";
import MonthBtn from "../components/MonthBtn";
import MonthCard from "../components/MonthCard";
import YearBtn from "../components/YearBtn";
import "./css/CalendarView.css";
import { getDaysInMonth, getISOLocalDate, getISOLocalMonth, getYear } from "@wojtekmaj/date-utils";

function CalendarView() {
/* First auto fetch must be implemented !!!
  const yearMonthTodaySplited = getISOLocalMonth(new Date()).split("-")

  const [yearSelect, setYearSelect] = useState(getYear(new Date()));
  const [monthSelect, setMonthSelect] = useState(yearMonthTodaySplited[1]); */

  const [yearSelect, setYearSelect] = useState(getYear('2023'));
  const [monthSelect, setMonthSelect] = useState('03');

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
    endDateRaw = yearMonthNext + "-" + monthNext + "-2";
  }
  if (lastDayNameSelect === "Thursday") {
    endDateRaw = yearMonthNext + "-" + monthNext + "-3";
  }
  if (lastDayNameSelect === "Wednesday") {
    endDateRaw = yearMonthNext + "-" + monthNext + "-4";
  }
  if (lastDayNameSelect === "Tuesday") {
    endDateRaw = yearMonthNext + "-" + monthNext + "-5";
  }
  if (lastDayNameSelect === "Monday") {
    endDateRaw = yearMonthNext + "-" + monthNext + "-6";
  }
  let endDate = getISOLocalDate(new Date(endDateRaw));

  console.log(yearMonthNext, startDate, endDate);
  //counting dates end

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
      <div className="days">
        <h1>Mon</h1>
        <h1>Tue</h1>
        <h1>Wed</h1>
        <h1>Thu</h1>
        <h1>Fri</h1>
        <h1 className="weekend">Sat</h1>
        <h1 className="weekend">Sun</h1>
      </div>
      <MonthCard monthSelect={monthSelect} startDate={startDate} endDate={endDate} />
    </div>
  );
}

export default CalendarView;
