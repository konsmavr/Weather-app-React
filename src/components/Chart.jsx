import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ chartData }) => {
  return (
    <div className="chart">
      <h2>Max Temperature Line Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default Chart;
