import React, { useState, useEffect } from "react";
import axios from "axios";
// import Chart from './Chart';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [chartData, setChartData] = useState({});
  const [data, setData] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=	40.63666412&lon=22.942162898&exclude=hourly,minutely&appid=11b0499bd13ab56063de7565a440eb97&units=metric`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        const labels = ["Today"];
        const temperatures = [response.data.current.temp];
        for (let i = 1; i <= 6; i++) {
          const date = new Date(response.data.daily[i].dt * 1000);
          labels.push(date.toLocaleDateString("en-US", { weekday: "short" }));
          temperatures.push(response.data.daily[i].temp.max);
        }
        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Max Temperature",
              data: temperatures,
              fill: false,
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 2,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [url]);

  //40.63666412 22.942162898

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
        {/* {chartData && <Chart chartData={chartData} />}  */}
      </div>
    </div>
  );
}

export default App;
