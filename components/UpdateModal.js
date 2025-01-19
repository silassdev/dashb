// components/UpdateModal.js
import React, { useState } from 'react';

const UpdateModal = ({ showModal, setShowModal, updateModalData, modalData }) => {
  const [rank, setRank] = useState(modalData.rank);
  const [percentile, setPercentile] = useState(modalData.percentile);
  const [score, setScore] = useState(modalData.score);

  const handleSave = (e) => {
    e.preventDefault();
    updateModalData({ rank, percentile, score });
    setShowModal(false);
  };

  return (
    <div className={`fixed inset-0 bg-gray-600 bg-opacity-50 ${showModal ? 'flex' : 'hidden'} justify-center items-center`}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Update Scores</h2>
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label className="block text-gray-700">Update your Rank</label>
            <input type="number" value={rank} onChange={(e) => setRank(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Update your Percentile (up to 100 only)</label>
            <input type="number" value={percentile} onChange={(e) => setPercentile(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Update your Current Score (out of 15)</label>
            <input type="number" value={score} onChange={(e) => setScore(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={() => setShowModal(false)} className="mr-2 px-4 py-2 bg-red-500 text-white rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Save ➡️</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
