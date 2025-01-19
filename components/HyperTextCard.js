// components/HyperTextCard.js
import React, { useState } from 'react';
import UpdateModal from './UpdateModal';

const HyperTextCard = ({ updateModalData, modalData }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mb-6 relative z-10"> {/* Added relative class and z-index */}
      <div className="bg-white p-4 shadow rounded-lg flex items-center">
        <img
          src="/html.png" 
          alt="Logo"
          className="w-12 h-12 mr-4 object-contain"
        />
        
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Hyper Text Markup Language</h2>
            <button
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
              onClick={() => setShowModal(true)}
            >
              Update
            </button>
          </div>
          <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
        </div>
      </div>

      {showModal && (
        <UpdateModal
          showModal={showModal}
          setShowModal={setShowModal}
          updateModalData={updateModalData}
          modalData={modalData}
        />
      )}
    </div>
  );
};

export default HyperTextCard;
