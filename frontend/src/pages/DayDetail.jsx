import React, { useEffect, useState } from "react";
import spinner from "../pub-imgs/spinner.gif";
import "./css/DayDetail.css";

function DayDetail({nasaData}) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
            <img className="spinner" src={spinner} alt="spinner" />
          )}
        </div>
        <div className="detail-data">
          {nasaData.copyright ? ( 
          <span>&copy; {nasaData.copyright}</span>) : ("")
          }
          <p>{nasaData.explanation}</p>
        </div>
      </div>
    </div>
  );
}

export default DayDetail;
