// components/QuickStatisticsCard.js
import { FaTrophy, FaBullseye, FaChartBar } from 'react-icons/fa';

const QuickStatisticsCard = ({ data }) => {
  return (
    <div className="bg-white p-6 shadow rounded-lg flex items-center justify-around">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-blue-200 text-blue-600 rounded-full flex items-center justify-center">
          <FaTrophy className="text-2xl" />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-2xl font-semibold mb-1">{data.rank}</span>
          <span className="text-gray-500 text-sm">YOUR RANK</span>
        </div>
      </div>
      <div className="border-l-2 h-20 mx-4"></div> {/* Vertical line separation */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-green-200 text-green-600 rounded-full flex items-center justify-center">
          <FaBullseye className="text-2xl" />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-2xl font-semibold mb-1">{data.percentile}%</span>
          <span className="text-gray-500 text-sm">PERCENTILE</span>
        </div>
      </div>
      <div className="border-l-2 h-20 mx-4"></div> {/* Vertical line separation */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-purple-200 text-purple-600 rounded-full flex items-center justify-center">
          <FaChartBar className="text-2xl" />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-2xl font-semibold mb-1">{data.score}/15</span>
          <span className="text-gray-500 text-sm">CURRENT SCORE</span>
        </div>
      </div>
    </div>
  );
};

export default QuickStatisticsCard;
