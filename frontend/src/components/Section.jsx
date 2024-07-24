import React from 'react';
import { Link } from 'react-router-dom';

const Section = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r   p-8">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {/* Buttons */}
          <Link to="/dashboard" className="flex items-center justify-center w-40 h-40 bg-blue-500 text-white rounded-full border-4 border-blue-700 shadow-md hover:bg-blue-600 transition duration-300">
            <span className="text-center text-xl font-bold">Dashboard</span>
          </Link>
          <Link to="/court-hearing" className="flex items-center justify-center w-40 h-40 bg-green-500 text-white rounded-full border-4 border-green-700 shadow-md hover:bg-green-600 transition duration-300">
            <span className="text-center text-xl font-bold">Court Hearing</span>
          </Link>
          <Link to="/case-data-entry" className="flex items-center justify-center w-40 h-40 bg-yellow-500 text-white rounded-full border-4 border-yellow-700 shadow-md hover:bg-yellow-600 transition duration-300">
            <span className="text-center text-xl font-bold">Case Data Entry</span>
          </Link>
          <Link to="/achievement" className="flex items-center justify-center w-40 h-40 bg-red-500 text-white rounded-full border-4 border-red-700 shadow-md hover:bg-red-600 transition duration-300">
            <span className="text-center text-xl font-bold">Achievement</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section;
