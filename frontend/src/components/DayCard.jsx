import React from 'react'

function DayCard({ data }) {

  return (
   <div className="DayCard">
    <div className='dayImg'>
     <img src={data.url} alt="no" />
    </div>
    <p>{data.title}</p>
    <p>{data.date}</p>
 </div>
  )
}

export default DayCard