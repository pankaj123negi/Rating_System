import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Registering the necessary components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  // Data for the line chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // X-axis labels
    datasets: [
      {
        label: 'Monthly Sales', // The label for the line
        data: [65, 59, 80, 81, 56, 55, 40], // Y-axis data
        borderColor: '#4bc0c0', // Line color
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Background color (shaded area under the line)
        fill: true, // Fill the area under the line
        tension: 0.4 // Line tension (smoothness of the curve)
      }
    ]
  };

  // Options for the chart (optional)
  const options = {
    responsive: true, // Make chart responsive to window resizing
    plugins: {
      legend: {
        position: 'top', // Position of the legend
      },
      tooltip: {
        mode: 'index',
        intersect: false, // Whether tooltips show on mouseover of intersecting points
      },
    },
    scales: {
      x: {
        beginAtZero: true, // Ensure the X-axis starts from zero
      },
      y: {
        beginAtZero: true, // Ensure the Y-axis starts from zero
      }
    }
  };

  return (
    <div>
      {/* <h2>Monthly Sales Line Chart</h2> */}
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
