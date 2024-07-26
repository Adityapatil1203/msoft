import React from 'react';

const CourtHearing = () => {

  const handleButtonClick = async () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the href attribute to the path of the Excel file
    link.href = '/b2.xlsx';
    // Set the download attribute to suggest a file name (optional)
    link.download = 'b2.xlsx';
    // Append the link to the body (necessary for Firefox)
    document.body.appendChild(link);
    // Programmatically click the link to trigger the download/open
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
   };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Court Hearing</h1>

        <h2 className="text-2xl font-bold mb-4">Court Hearing Cases with Due Date</h2>
        <p className="mb-8 text-gray-700">
          Update the data as per summons received & Online Data available in Govt Portal so that IO can plan and apps can remind him.
        </p>

        {/* Court Hearing Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 border">CR No. & UTI/RCT</th>
                <th className="px-4 py-2 border">U/S & ACT</th>
                <th className="px-4 py-2 border">Court Hearing Date</th>
                <th className="px-4 py-2 border">Attending Before Hon'ble</th>
                <th className="px-4 py-2 border">Days on Hands to Attend Court</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">01/2024</td>
                <td className="px-4 py-2 border">Sec 144 RA</td>
                <td className="px-4 py-2 border">09.07.2024</td>
                <td className="px-4 py-2 border">JMFC/BSL</td>
                <td className="px-4 py-2 border">05</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">05/2024 </td>
                <td className="px-4 py-2 border">Sec 3 RPUP</td>
                <td className="px-4 py-2 border">09.07.2024</td>
                <td className="px-4 py-2 border">JMFC/BSL</td>
                <td className="px-4 py-2 border">10</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">UTI-45</td>
                <td className="px-4 py-2 border">R-6 RP (MIUI)</td>              
                <td className="px-4 py-2 border">06.07.2024</td>
                <td className="px-4 py-2 border">RCT/NGP</td>
                <td className="px-4 py-2 border">15</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Rules</h2>
          <p className="text-gray-700">
            Select a particular case and view details of Document Required List and PW Examination List.
          </p>
        </div>
        <button
          onClick={handleButtonClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Open Excel File
        </button>
      </div>
    </div>
  );
};

export default CourtHearing;
