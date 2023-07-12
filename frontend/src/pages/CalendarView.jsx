import React, { useEffect, useState } from "react";
import MonthBtn from "../components/MonthBtn";
import MonthCard from "../components/MonthCard";
import YearBtn from "../components/YearBtn";
import "./css/CalendarView.css";
import CalendarUtils from "../utils/CalendarUtils";
import loader from "../pub-imgs/loader.gif";

function CalendarView() {
  const {
    yearSelect,
    monthSelect,
    onChangeMonth,
    onChangeYear,
    filterDaysForMonthCard,
  } = CalendarUtils();

  const [isLoading, setIsLoading] = useState(true);
  const [filterData, setFilterData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  useEffect(() => {
    const dataToDisplay = filterDaysForMonthCard();
    setFilterData(dataToDisplay);
  }, [yearSelect, monthSelect]);

  const changeMonth = (event) => {
    onChangeMonth(event.target.value);
  };

  const changeYear = (event) => {
    onChangeYear(event.target.value);
  };

  return (
    <div className="CalendarView">
      {isLoading ? (
        <div className="loader-container">
          <img className="loader" src={loader} alt="loading..." />
        </div>
      ) : (
        <>
          <div className="menu">
            <div className="menu-container">
              <YearBtn changeYear={changeYear} yearSelect={yearSelect} />
              <MonthBtn
                changeMonth={changeMonth}
                monthSelect={monthSelect}
                yearSelect={yearSelect}
              />
            </div>
          </div>
          {filterData?.length < 44 ? (
            <>
              <div className="days">
                <h1>Mon</h1>
                <h1>Tue</h1>
                <h1>Wed</h1>
                <h1>Thu</h1>
                <h1>Fri</h1>
                <h1 className="weekend">Sat</h1>
                <h1 className="weekend">Sun</h1>
              </div>
              <MonthCard monthSelect={monthSelect} filterData={filterData} />
            </>
          ) : (
              <h2 className="error-message">! invalid date !</h2>

          )}
        </>
      )}
    </div>
  );
}

export default CalendarView;
