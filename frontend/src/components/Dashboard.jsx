import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-8">Dashboard</h1>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Pending Cases Details CHART:</h2>
          <h2 className="text-md font-xs mb-4" >(Days in hand for completion of cases, Ref Case wise validation date for completion of enquiry,)</h2>
        {/* First Table */}
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Rly Act</th>
                <th className="px-4 py-2 border">RP UP</th>
                <th className="px-4 py-2 border">UTI/RCT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">05</td>
                <td className="px-4 py-2 border">02</td>
                <td className="px-4 py-2 border">11</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Second Table */}
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 border">CR No. & UTI/RCT</th>
                <th className="px-4 py-2 border">Regd Date</th>
                <th className="px-4 py-2 border">U/S & Act</th>
                <th className="px-4 py-2 border">DAYS ON HANDS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">01/2024</td>
                <td className="px-4 py-2 border">07.05.2024</td>
                <td className="px-4 py-2 border">Sec 144 RA</td>
                <td className="px-4 py-2 border">05 (30)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">05/2024</td>
                <td className="px-4 py-2 border">06.07.2024</td>
                <td className="px-4 py-2 border">Sec 3 RPUP</td>
                <td className="px-4 py-2 border">59 (60)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">UTI-45</td>
                <td className="px-4 py-2 border">06.07.2024</td>
                <td className="px-4 py-2 border">R-6 RP (MIUI) Rules</td>
                <td className="px-4 py-2 border">59 (60)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Rules</h2>
          <p className="text-gray-700">
            Select a particular case and view details of Document Required List and PW Examination List.
          </p>
          {/* <div className="mt-4 flex flex-wrap gap-4">
            <Link to="/document-required" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
              Document Required List
            </Link>
            <Link to="/pw-examination" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
              PW Examination List
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
