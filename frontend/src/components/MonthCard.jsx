import React, {useState} from "react";
import DayCard from "./DayCard";
import './css/MonthCard.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MonthCard({ nasaData }) {
  const [date, setDate] = useState(new Date())

  return (
    <div className="MonthCard">
      <Calendar onChange={setDate} value={date} />
      {Array.from(nasaData).map((data, i) => (
        <DayCard key={i} data={data} />
      ))}
    </div>
  );
}

export default MonthCard;
