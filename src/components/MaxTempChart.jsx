import { Line } from "react-chartjs-2";
import React from "react";

function MaxTempChart({ weatherData }) {
  const labels = Array.from({ length: 7 }, (_, i) => `${i + 1} day(s)`);
  const maxTemperatures = weatherData.daily
    .slice(0, 7)
    .map((day) => day.temp.max);
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Max Temperature",
        data: maxTemperatures,
        fill: false,
        borderColor: "rgb(75,  192,  192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <Line data={chartData} />
    </div>
  );
}

export default MaxTempChart;
