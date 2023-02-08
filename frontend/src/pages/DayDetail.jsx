import React, { useEffect, useState } from "react";
import spinner from "../pub-imgs/spinner.gif";
import "./css/DayDetail.css";

function DayDetail() {
  const [nasaData, setNasaData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let dateToday = `${year}-${month}-${day}`;

  const apiKey = "QYSDCrsuNdQpx6YY9Yg2eO9RBWDIVwpWkwhwYWi8";
  let fetchUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateToday}`;

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        setNasaData(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="DayDetail">
      <div className="detail-header">
        <h1>{nasaData.title}</h1>
        <h1>{nasaData.date}</h1>
      </div>
      <div className="detail-container">
        <div className="detail-img">
          {!loading ? (
            nasaData.media_type !== "image" ? (
              <iframe src={nasaData.url} title={nasaData.title}></iframe>
            ) : (
              <img src={nasaData.url} alt="no" />
            )
          ) : (
            <img src={spinner} alt="spinner" />
          )}
        </div>
        <div className="detail-data">
          <span>&copy; {nasaData.copyright}</span>
          <p>{nasaData.explanation}</p>
        </div>
      </div>
    </div>
  );
}

export default DayDetail;
