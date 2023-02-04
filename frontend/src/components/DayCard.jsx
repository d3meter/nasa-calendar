import React from 'react'
import './css/DayCard.css'

function DayCard({ data }) {

  return (
   <div className="DayCard">
    <div className='day-img'>
     <img src={data.url} alt="no" />
    </div>
    <p>{data.title}</p>
    <p>{data.date}</p>
 </div>
  )
}

export default DayCard