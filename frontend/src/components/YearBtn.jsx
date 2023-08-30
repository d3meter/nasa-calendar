import React, { useState, useEffect } from "react";
import nasaData from "../database/data/nasa-data.json";

function YearBtn({ changeYear, yearSelect }) {
  const [yearsPresent, setYearsPresent] = useState([]);

  useEffect(() => {
    const years = [];
    nasaData.map((data) => {
      years.push(parseInt(data.date.substring(0, 4)));
    });
    const uniqueYears = [...new Set(years)];
    setYearsPresent(uniqueYears);
  }, []);

  return (
    <select
      className="form-select form-select-lg"
      value={yearSelect}
      label="year"
      onChange={changeYear}
    >
      {yearsPresent?.map((year, i) => (
        <option key={i} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
}

export default YearBtn;
