import React from 'react';

const CaseDataEntry = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Case Data Entry</h1>

        {/* Summary of Data */}
        <div className="mb-8">
        
          <h2 className="text-2xl font-bold mb-4  ">Summary of Data</h2>

        <div className="flex flex-wrap gap-4 mb-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg border border-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300">
            DATE FROM
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg border border-green-600 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300">
            DATE TO
          </button>
        </div>
          
          <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
  <thead>
    <tr>
      <th className="px-4 py-2 border">ACT</th>
      <th colSpan="3" className="px-4 py-2 border text-center">PENDING MORE THAN</th>
      <th className="px-4 py-2 border">PARTIALLY ENQUIRY COMPLETED</th>
      <th className="px-4 py-2 border">ENQUIRY COMPLETED</th>
    </tr>
    <tr>
      <th className="px-4 py-2 border"></th>
      <th className="px-4 py-2 border">15</th>
      <th className="px-4 py-2 border">30</th>
      <th className="px-4 py-2 border">45</th>
      <th className="px-4 py-2 border"></th>
      <th className="px-4 py-2 border"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="px-4 py-2 border">Rly ACT</td>
      <td className="px-4 py-2 border"></td>
      <td className="px-4 py-2 border"></td>
      <td className="px-4 py-2 border"></td>
      <td className="px-4 py-2 border"></td>
      <td className="px-4 py-2 border"></td>
    </tr>
    <tr>
      <td className="px-4 py-2 border">RP UP</td>
      <td className="px-4 py-2 border"></td>
      <td className="px-4 py-2 border"></td>
      <td className="px-4 py-2 border"></td>
      <td className="px-4 py-2 border"></td>
      <td className="px-4 py-2 border"></td>
    </tr>
    <tr>
      <td className="px-4 py-2 border">UTI/RCT</td>
      <td className="px-4 py-2 border"></td>
      <td className="px-4 py-2 border"></td>
      <td className="px-4 py-2 border"></td>
      <td className="px-4 py-2 border"></td>
      <td className="px-4 py-2 border"></td>
    </tr>
  </tbody>
</table>

          </div>
        </div>

        {/* Case Data */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Case Data</h2>
          <p className="mb-4 text-gray-700">
            Facility will be available as per registration agency like Police Personnel & RPF Personnel etc.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">A) FOR RPF:</h3>
            <p className="mb-4 text-gray-700">
              (Auto select case)
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Rly ACT (The necessary Form for data entry will be available)</li>
              <li>RP UP Act</li>
              <li>UTI/RCT</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">B) FOR POLICE:</h3>
            <p className="text-gray-700">
              (Index will appear)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDataEntry;
