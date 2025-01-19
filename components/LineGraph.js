// components/LineGraph.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { FaChartLine } from 'react-icons/fa';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, annotationPlugin);

const LineGraph = (props) => {
  const { data } = props;
  const { percentile, labels, values, numStudents } = data || {};

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Total Students',
        data: values,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointHoverRadius: 5
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        ticks: { display: true }
      },
      y: {
        display: false,
        grid: { display: false },
        ticks: { display: false }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) => `Current: ${tooltipItem.raw}% - Students: ${numStudents[tooltipItem.dataIndex]}`
        }
      },
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            xMin: values.findIndex(val => val >= percentile),
            xMax: values.findIndex(val => val >= percentile),
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            label: {
              content: `Your Percentile`,
              enabled: true,
              position: 'center',
              backgroundColor: 'rgba(255, 99, 132, 1)',
              color: '#fff',
            }
          }
        }
      }
    },
    elements: {
      line: {
        tension: 0.4
      }
    }
  };

  const cardHeight = '420px'; // Adjust as needed

  return (
    <div className="bg-white p-4 shadow rounded-lg relative" style={{ height: cardHeight }}>
      <FaChartLine className="absolute top-4 right-4 text-gray-400" size={24} />
      <h3 className="text-lg font-bold mb-2">Comparison Graph 📉</h3>
      <p className="mt-2">
        <span className="font-bold">You scored {percentile}% percentile</span> which is lower than the average percentile of 72% of all engineers who took this assessment.
      </p>
      <div className="relative" style={{ height: 'calc(100% - 2cm)' }}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default LineGraph;
