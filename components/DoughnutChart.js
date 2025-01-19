// components/DoughnutChart.js
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'; // Removed Legend

ChartJS.register(ArcElement, Tooltip);

const DoughnutChart = ({ score }) => {
  const chartData = {
    labels: ['Score', 'Remaining'], // Labels can stay if needed for tooltips
    datasets: [
      {
        data: [score, 15 - score],
        backgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false, // Set display to false to remove the legend
      },
    },
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h3 className="text-lg font-bold mb-2">Question Analysis</h3>
      <p className="mt-2">
        <span className="font-medium">You scored {score} out of 15.</span>{' '}
        {score < 12
          ? ' However, it still needs some improvements.'
          : ' which is a good score.'}
      </p>
      <div className="relative d-chart">
        <Doughnut data={chartData} options={chartOptions} />
        <div className="center-icon">🎯</div> {/* Centered icon */}
      </div>
    </div>
  );
};

export default DoughnutChart;
