import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=40.58725980318928&lon=22.948223362612612&exclude=hourly,minutely&appid=11b0499bd13ab56063de7565a440eb97&units=metric`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [url]);

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.timezone}</p>
          </div>
          <div className="temp">
            <p>
              {" "}
              {data.current && data.current.temp}°C{" "}
              {/* {data.current.weather[0].icon && (
                <img
                  src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`}
                  alt="Weather Icon"
                />
              )} */}
            </p>
          </div>
          <div className="description">
            <h3> {data.current && data.current.weather[0].description}</h3>
          </div>
        </div>

        {data.current && (
          <div className="bottom">
            <div className="feels">
              <p>Feels Like: </p>
              <h2>{data.current.feels_like}°C</h2>
            </div>
            <div className="humidity">
              <p>Humidity: </p>
              <h2>{data.current.humidity}%</h2>
            </div>
            <div className="wind">
              <p>Wind Speed: </p>
              <h2>{data.current.wind_speed} m/s</h2>
            </div>
            <div className="pressure">
              <p>Pressure: </p>
              <h2>{data.current.pressure} hPa</h2>
            </div>
            <div className="wind-gust">
              <p>Wind Gust: </p>
              <h2>{data.current.wind_gust || "N/A"} m/s</h2>
            </div>
            <div className="wind-deg">
              <p>Wind Degree: </p>
              <h2>{data.current.wind_deg || "N/A"}°</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
