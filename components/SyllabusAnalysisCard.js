// components/SyllabusAnalysisCard.js
const SyllabusAnalysisCard = () => {
  return (
    <div className="bg-white p-4 shadow rounded-lg" style={{ height: '440px' }}> {/* Adjusted card height */}
      <h2 className="text-xl font-bold mb-4">Syllabus Wise Analysis</h2>
      <div className="space-y-10"> {/* Adjusted spacing between content */}
        <div className="mb-2">
          <p className="mb-2">HTML Tools, Forms, History</p>
          <div className="flex items-center">
            <div className="h-4 bg-gray-200 rounded-full w-full relative">
              <div className="absolute top-0 left-0 h-full bg-blue-600 rounded-full" style={{ width: 'calc(80% - 2rem)' }}> {/* Adjusted width to fit */}
              </div>
              <span className="absolute right-0 text-blue-600" style={{ marginLeft: '1cm' }}>80%</span> {/* Positioned percentage to stay within the card */}
            </div>
          </div>
        </div>
        <div className="mb-2">
          <p className="mb-2">Tags & Refrences in HTML</p>
          <div className="flex items-center">
            <div className="h-4 bg-gray-200 rounded-full w-full relative">
              <div className="absolute top-0 left-0 h-full bg-green-600 rounded-full" style={{ width: 'calc(70% - 2rem)' }}> {/* Adjusted width to fit */}
              </div>
              <span className="absolute right-0 text-green-600" style={{ marginLeft: '1cm' }}>70%</span> {/* Positioned percentage to stay within the card */}
            </div>
          </div>
        </div>
        <div className="mb-2">
          <p className="mb-2">Tables & Refrences in HTML</p>
          <div className="flex items-center">
            <div className="h-4 bg-gray-200 rounded-full w-full relative">
              <div className="absolute top-0 left-0 h-full bg-yellow-600 rounded-full" style={{ width: 'calc(60% - 2rem)' }}> {/* Adjusted width to fit */}
              </div>
              <span className="absolute right-0 text-yellow-600" style={{ marginLeft: '1cm' }}>60%</span> {/* Positioned percentage to stay within the card */}
            </div>
          </div>
        </div>
        <div className="mb-2">
          <p className="mb-2">Tables & CSS Basics</p>
          <div className="flex items-center">
            <div className="h-4 bg-gray-200 rounded-full w-full relative">
              <div className="absolute top-0 left-0 h-full bg-red-600 rounded-full" style={{ width: 'calc(75% - 2rem)' }}> {/* Adjusted width to fit */}
              </div>
              <span className="absolute right-0 text-red-600" style={{ marginLeft: '1cm' }}>75%</span> {/* Positioned percentage to stay within the card */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyllabusAnalysisCard;
