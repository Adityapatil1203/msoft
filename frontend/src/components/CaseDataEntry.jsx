import React, { useState } from 'react';
import CaseEntry from './CaseEntry';
import CaseView from './CaseView';

const CaseDataEntry = () => {
  const [view, setView] = useState('');

  const renderComponent = () => {
    switch (view) {
      case 'add':
        return <CaseEntry />;
      case 'view':
        return <CaseView />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 p-4 flex flex-col items-center justify-center">
      <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Case Data Management</h1>
        <div className="flex justify-center mb-6">
          <button
            className={`px-6 py-2 mx-2 rounded-lg text-white font-semibold ${view === 'add' ? 'bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'} transition duration-300`}
            onClick={() => setView('add')}
          >
            Add Data
          </button>
          <button
            className={`px-6 py-2 mx-2 rounded-lg text-white font-semibold ${view === 'view' ? 'bg-green-600' : 'bg-green-500 hover:bg-green-600'} transition duration-300`}
            onClick={() => setView('view')}
          >
            View Data
          </button>
        </div>
      </div>

      <div className="w-full mt-6">
        {renderComponent()}
      </div>
    </div>
  );
};

export default CaseDataEntry;
