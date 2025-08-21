import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HyperTextCard from '../components/HyperTextCard';
import QuickStatisticsCard from '../components/QuickStatisticsCard';
import SyllabusAnalysisCard from '../components/SyllabusAnalysisCard';
import LineGraph from '../components/LineGraph';
import DoughnutChart from '../components/DoughnutChart';
import { useState } from 'react';

const Dashboard = () => {
  const [modalData, setModalData] = useState({
    rank: 1,
    percentile: 60,
    score: 10
  });

  const graphData = {
    labels: ['0', '25', '50', '75', '100'],
    values: [12, 22, 35, 45, 55],
    numStudents: [20, 20, 30, 40, 50],
    percentile: modalData.percentile
  };

  const updateModalData = (newData) => {
    setModalData(prevData => ({ ...prevData, ...newData }));
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <Navbar />
      <div className="flex flex-1 flex-col mt-4 lg:mt-0">
        <div className="flex mt-4">
          <Sidebar />
          <div className="flex-1 ml-4 mt-12 p-4">
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-3 lg:col-span-4 text-gray-500 mb-4">
                <h3 className="text-2xl font-medium mt-9">Skill Test</h3>
              </div>
              <div className="col-span-3 lg:col-span-4 space-y-4 mt-12">
                <HyperTextCard updateModalData={updateModalData} modalData={modalData} />
                <QuickStatisticsCard data={{ rank: modalData.rank, percentile: modalData.percentile, score: modalData.score }} />
                <LineGraph data={graphData} /> {/* Pass the graphData object */}
              </div>
              <div className="col-span-3 lg:col-span-2 space-y-4 mt-12">
                <SyllabusAnalysisCard />
                <DoughnutChart score={modalData.score} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
