import { useEffect, useState } from "react";
import nasaData from "../database/data/nasa-data.json";
import { getDaysInMonth, getISOLocalDate } from "@wojtekmaj/date-utils";

function CalendarUtils() {
  const [yearSelect, setYearSelect] = useState(null);
  const [monthSelect, setMonthSelect] = useState(null);

  useEffect(() => {
    if (yearSelect === null) {
      const yearDefault = getYearDefault();
      setYearSelect(yearDefault);
    }
  }, [yearSelect]);

  useEffect(() => {
    if (monthSelect === null) {
      const monthDefault = getMonthDefault();
      setMonthSelect(monthDefault);
    }
  }, [monthSelect]);

  const onChangeMonth = (inputValue) => {
    setMonthSelect(inputValue);
  };

  const onChangeYear = (inputValue) => {
    setYearSelect(inputValue);
  };

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

  const getLastDataDateInArray = () => {
    let lastDateInString = nasaData[nasaData.length - 1].date;
    return lastDateInString.split("-");
  };

  const getYearDefault = () => {
    let dateInArray = getLastDataDateInArray();
    return parseInt(dateInArray[0]);
  };

  const getMonthDefault = () => {
    let dateInArray = getLastDataDateInArray();
    return dateInArray[1];
  };

  const defineMonthNext = () => {
    let monthNext = monthSelect !== "12" ? parseInt(monthSelect) + 1 : 1;
    return monthNext;
  };

  const defineMonthLast = () => {
    let monthLast = monthSelect !== "01" ? parseInt(monthSelect) - 1 : 12;
    return monthLast;
  };

  const defineYearMonthNext = () => {
    let yearMonthNext =
      monthSelect !== "12" ? yearSelect : parseInt(yearSelect) + 1;
    return yearMonthNext;
  };

  const defineYearMonthLast = () => {
    let yearMonthLast =
      monthSelect !== "01" ? yearSelect : parseInt(yearSelect) - 1;
    return yearMonthLast;
  };

  const calcStartDate = () => {
    let yearMonthLast = defineYearMonthLast();
    let monthLast = defineMonthLast();

    let dateLastBefore = yearMonthLast + "-" + monthLast + "-1";
    let daysMonthLast = parseInt(getDaysInMonth(new Date(dateLastBefore)));

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
    return getISOLocalDate(new Date(startDateRaw));
  };

  const calcEndDate = () => {
    let monthNext = defineMonthNext();
    let yearMonthNext = defineYearMonthNext();

    let endDateRaw =
      yearSelect + "-" + monthSelect + "-" + daysMonthOfDateSelect;
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
    return getISOLocalDate(new Date(endDateRaw));
  };

  const filterDaysForMonthCard = () => {
    let startDate = calcStartDate();
    let endDate = calcEndDate();
    let filterData = [];
    let indexData = nasaData.length;

    let indexOfFirst = 0;
    for (let i = 0; i < nasaData.length; i++) {
      if (nasaData[i].date === startDate) {
        indexOfFirst = nasaData.indexOf(nasaData[i]);
      }
    }

    let indexOfLast = indexData;
    for (let i = 0; i < nasaData.length; i++) {
      if (nasaData[i].date === endDate) {
        indexOfLast = nasaData.indexOf(nasaData[i]) + 1;
      }
    }

    for (let i = indexOfFirst; i < indexOfLast; i++) {
      filterData.push(nasaData[i]);
    }

    return filterData;
  };

  return {
    yearSelect,
    monthSelect,
    onChangeMonth,
    onChangeYear,
    filterDaysForMonthCard,
  };
}

export default CalendarUtils;
