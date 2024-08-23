// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CaseView = ({ selectedGunha }) => {
//   const [gunhaData, setGunhaData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchGunhaData = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/api/getGunhaData', {
//           params: { gunhaType: selectedGunha }
//         });
//         setGunhaData(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching gunha data:', error);
//         setLoading(false);
//       }
//     };

//     if (selectedGunha) {
//       fetchGunhaData();
//     }
//   }, [selectedGunha]);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {loading ? (
//         <div className="flex justify-center items-center">
//           <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
//         </div>
//       ) : (
//         <>
//           <h3 className="text-xl font-bold mb-4">Data for {selectedGunha}</h3>
//           {gunhaData.length > 0 ? (
//             <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
//               <thead className="bg-gray-50">
//                 <tr>
//                   {Object.keys(gunhaData[0]).map((colName, idx) => (
//                     <th
//                       key={idx}
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300"
//                     >
//                       {colName}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {gunhaData.map((row, idx) => (
//                   <tr key={idx}>
//                     {Object.values(row).map((value, idx) => (
//                       <td
//                         key={idx}
//                         className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300"
//                       >
//                         {value}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p>No data available for {selectedGunha}</p>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default CaseView;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CaseView = () => {
//   const [selectedGunha, setSelectedGunha] = useState('');
//   const [gunhaData, setGunhaData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const gunhaOptions = [
//     "भाग ५ गुन्हांची नोंद", "भाग ६ गुन्हांची नोंद", "दारूबंदी गुन्हांची नोंद",
//     "कोर्टाकडून आलेल्या केसेसची नोंद", "अकस्मात मृत्यू नोंद", "मोटार अपघात नोंद",
//     "वरिष्ट अर्ज नोंद", "स्थानिक अर्ज नोंद", "प्रति.कार्य.सी.आर.पी.सी. १०७",
//     "प्रति.कार्य.सी.आर.पी.सी. १०९", "सी.आर.पी.सी. कलम ११०", "प्रति कार्य सी.आर.पी.सी.",
//     "हदपार नोंद", "अग्नि उपद्रव नोंद", "मिसिंग नोंद", "गहाळ मालाची नोंद", "इतर"
//   ];

//   useEffect(() => {
//     const fetchGunhaData = async () => {
//       if (selectedGunha) {
//         setLoading(true);
//         try {
//           const response = await axios.get('http://localhost:4000/api/getGunhaData', {
//             params: { gunhaType: selectedGunha }
//           });

//           // Remove the 'attachment' field from the data
//           const filteredData = response.data.map((item) => {
//             const { attachment, ...rest } = item;
//             return rest;
//           });

//           setGunhaData(filteredData);
//         } catch (error) {
//           console.error('Error fetching gunha data:', error);
//         } finally {
//           setLoading(false);
//         }
//       }
//     };

//     fetchGunhaData();
//   }, [selectedGunha]);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="mb-4">
//         <label htmlFor="gunha-select" className="block text-lg font-medium text-gray-700 mb-2">
//           Select a Gunha Type:
//         </label>
//         <select
//           id="gunha-select"
//           className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//           value={selectedGunha}
//           onChange={(e) => setSelectedGunha(e.target.value)}
//         >
//           <option value="">Select an option</option>
//           {gunhaOptions.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       </div>

//       {loading ? (
//         <div className="flex justify-center items-center">
//           <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
//         </div>
//       ) : (
//         <>
//           {selectedGunha && <h3 className="text-xl font-bold mb-4">Data for {selectedGunha}</h3>}
//           {gunhaData.length > 0 ? (
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     {Object.keys(gunhaData[0]).map((colName, idx) => (
//                       <th
//                         key={idx}
//                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300"
//                       >
//                         {colName}
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {gunhaData.map((row, idx) => (
//                     <tr key={idx}>
//                       {Object.values(row).map((value, idx) => (
//                         <td
//                           key={idx}
//                           className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300"
//                         >
//                           {typeof value === 'object' ? JSON.stringify(value) : value}
//                         </td>
//                       ))}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             selectedGunha && <p className="text-gray-600">No data available for {selectedGunha}</p>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default CaseView;

//..............................................................................


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CaseView = () => {
//   const [selectedGunha, setSelectedGunha] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [gunhaData, setGunhaData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const gunhaOptions = [
//     "भाग ५ गुन्हांची नोंद", "भाग ६ गुन्हांची नोंद", "दारूबंदी गुन्हांची नोंद",
//     "कोर्टाकडून आलेल्या केसेसची नोंद", "अकस्मात मृत्यू नोंद", "मोटार अपघात नोंद",
//     "वरिष्ट अर्ज नोंद", "स्थानिक अर्ज नोंद", "प्रति.कार्य.सी.आर.पी.सी. १०७",
//     "प्रति.कार्य.सी.आर.पी.सी. १०९", "सी.आर.पी.सी. कलम ११०", "प्रति कार्य सी.आर.पी.सी.",
//     "हदपार नोंद", "अग्नि उपद्रव नोंद", "मिसिंग नोंद", "गहाळ मालाची नोंद", "इतर"
//   ];

//   useEffect(() => {
//     const fetchGunhaData = async () => {
//       if (selectedGunha) {
//         setLoading(true);
//         try {
//           const response = await axios.get('http://localhost:4000/api/searchInGunha', {
//             params: { gunhaType: selectedGunha, searchTerm }
//           });

//           const filteredData = response.data.map((item) => {
//             const { attachment, ...rest } = item;
//             return rest;
//           });

//           setGunhaData(filteredData);
//         } catch (error) {
//           console.error('Error fetching gunha data:', error);
//         } finally {
//           setLoading(false);
//         }
//       }
//     };

//     fetchGunhaData();
//   }, [selectedGunha, searchTerm]);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="mb-4">
//         <label htmlFor="gunha-select" className="block text-lg font-medium text-gray-700 mb-2">
//           Select a Gunha Type:
//         </label>
//         <select
//           id="gunha-select"
//           className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//           value={selectedGunha}
//           onChange={(e) => setSelectedGunha(e.target.value)}
//         >
//           <option value="">Select an option</option>
//           {gunhaOptions.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       </div>

//       {selectedGunha && (
//         <div className="mb-4">
//           <label htmlFor="search-term" className="block text-lg font-medium text-gray-700 mb-2">
//             Search:
//           </label>
//           <input
//             type="text"
//             id="search-term"
//             className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             placeholder="Search within the selected gunha..."
//           />
//         </div>
//       )}

//       {loading ? (
//         <div className="flex justify-center items-center">
//           <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
//         </div>
//       ) : (
//         <>
//           {selectedGunha && <h3 className="text-xl font-bold mb-4">Data for {selectedGunha}</h3>}
//           {gunhaData.length > 0 ? (
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     {Object.keys(gunhaData[0]).map((colName, idx) => (
//                       <th
//                         key={idx}
//                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300"
//                       >
//                         {colName}
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {gunhaData.map((row, idx) => (
//                     <tr key={idx}>
//                       {Object.values(row).map((value, idx) => (
//                         <td
//                           key={idx}
//                           className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300"
//                         >
//                           {typeof value === 'object' ? JSON.stringify(value) : value}
//                         </td>
//                       ))}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             selectedGunha && <p className="text-gray-600">No data available for {selectedGunha}</p>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default CaseView;


//...................................................................................

import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import EditFormOne from './EditFormOne'; // Import your edit forms here
// import EditFormTwo from './EditFormTwo'; // Replace these with your actual edit form imports
import EditFormEight from './EditFormEight';
import EditFormFive from './EditFormFive';
import EditFormFiveCRPC from './EditFormFIveCRPC';
import EditFormFiveOneNine from './EditFormFiveOneNine';
import EditFormFiveOneTen from './EditFormFiveOneTen';
import EditFormFour from './EditFormFour';
import EditFormFourSthanic from './EditFormFourSthanic';
import EditFormNine from './EditFormNine';
import EditFormOne from './EditFormOne';
import EditFormOneCase from './EditFormOneCase';
import EditFormOneDaru from './EditFormOneDaru';
import EditFormOneSix from './EditFormOneSix';
import EditFormSeven from './EditFormSeven';
import EditFormSix from './EditFormSix';
import EditFormThree from './EditFormThree';
import EditFormTwo from './EditFormTwo';
import FormOne from './FormOne';

const CaseView = () => {
  const [selectedGunha, setSelectedGunha] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [gunhaData, setGunhaData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const gunhaOptions = [
    "भाग ५ गुन्हांची नोंद", "भाग ६ गुन्हांची नोंद", "दारूबंदी गुन्हांची नोंद",
    "कोर्टाकडून आलेल्या केसेसची नोंद", "अकस्मात मृत्यू नोंद", "मोटार अपघात नोंद",
    "वरिष्ट अर्ज नोंद", "स्थानिक अर्ज नोंद", "प्रति.कार्य.बी.एन.एस.एस १२६",
    "प्रति.कार्य.बी.एन.एस.एस १२८", "प्रति.कार्य.बी.एन.एस.एस १२९", "प्रति कार्य बी.एन.एस.एस",
    "हदपार नोंद", "अग्नि उपद्रव नोंद", "मिसिंग नोंद", "गहाळ मालाची नोंद", "इतर"
  ];

  const fetchGunhaData = async () => {
    if (selectedGunha) {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:4000/api/searchInGunha', {
          params: { gunhaType: selectedGunha, searchTerm }
        });

        const filteredData = response.data.map((item) => {
          const { attachment, ...rest } = item;
          return rest;
        });

        setGunhaData(filteredData);
      } catch (error) {
        console.error('Error fetching gunha data:', error);
      } finally {
        setLoading(false);
      }
    }
  };


  useEffect(() => {
    fetchGunhaData();
  }, [selectedGunha, searchTerm]);

  const handleEntryClick = (entry) => {
    setSelectedEntry(entry);
  };

  const closeEditForm = () => {
    setSelectedEntry(null);
    fetchGunhaData()
  };

  const renderEditForm = () => {
    if (!selectedEntry) return null;
  
    switch (selectedGunha) {
      case "भाग ५ गुन्हांची नोंद":
        return <EditFormOne selectedGunha={selectedGunha} gunhaId={selectedEntry.id} onClose={closeEditForm} />;
      case "भाग ६ गुन्हांची नोंद":
        return <EditFormOneSix selectedGunha={selectedGunha} gunhaId={selectedEntry.id} onClose={closeEditForm} />;
      case "दारूबंदी गुन्हांची नोंद":
        return <EditFormOneDaru selectedGunha={selectedGunha} gunhaId={selectedEntry.id} onClose={closeEditForm} />;
      case "कोर्टाकडून आलेल्या केसेसची नोंद":
        return <EditFormOneCase selectedGunha={selectedGunha} gunhaId={selectedEntry.id} onClose={closeEditForm} />;
  
      case "अकस्मात मृत्यू नोंद":
        return <EditFormTwo selectedGunha={selectedGunha} gunhaId={selectedEntry.id} onClose={closeEditForm} />;
  
      case "मोटार अपघात नोंद":
        return <EditFormThree selectedGunha={selectedGunha} gunhaId={selectedEntry.id} onClose={closeEditForm} />;
  
      case "वरिष्ट अर्ज नोंद":
            return <EditFormFour selectedGunha={selectedGunha} gunhaId={selectedEntry.id} onClose={closeEditForm} />;
      case "स्थानिक अर्ज नोंद":
        return <EditFormFourSthanic selectedGunha={selectedGunha} gunhaId={selectedEntry.id} onClose={closeEditForm} />;
  
      case "प्रति.कार्य.बी.एन.एस.एस १२६":
        return <EditFormFive selectedGunha={selectedGunha} gunhaId={selectedEntry.id} onClose={closeEditForm} />;
      case "प्रति.कार्य.बी.एन.एस.एस १२८":
        return <EditFormFiveOneNine selectedGunha={selectedGunha} gunhaId={selectedEntry.id} onClose={closeEditForm} />;
      case "प्रति.कार्य.बी.एन.एस.एस १२९":
        return <EditFormFiveOneTen selectedGunha={selectedGunha} gunhaId={selectedEntry.id} onClose={closeEditForm} />;
      case "प्रति कार्य बी.एन.एस.एस":
        return <EditFormFiveCRPC selectedGunha={selectedGunha} gunhaId={selectedEntry.id} onClose={closeEditForm} />;
  
      case "हदपार नोंद":
        return <EditFormSix selectedGunha={selectedGunha} gunhaId={selectedEntry.id} onClose={closeEditForm} />;
  
      case "अग्नि उपद्रव नोंद":
        return <EditFormSeven selectedGunha={selectedGunha} gunhaId={selectedEntry.id} onClose={closeEditForm} />;
  
      case "मिसिंग नोंद":
        return <EditFormEight selectedGunha={selectedGunha} gunhaId={selectedEntry.id} onClose={closeEditForm} />;
  
      case "गहाळ मालाची नोंद":
        return <EditFormNine selectedGunha={selectedGunha} gunhaId={selectedEntry.id} onClose={closeEditForm} />;
  
      default:
        return <p>No edit form available for this gunha type.</p>;
    }
  };
  

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <label htmlFor="gunha-select" className="block text-lg font-medium text-gray-700 mb-2">
          Select a Gunha Type:
        </label>
        <select
          id="gunha-select"
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={selectedGunha}
          onChange={(e) => setSelectedGunha(e.target.value)}
        >
          <option value="">Select an option</option>
          {gunhaOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {selectedGunha && (
        <div className="mb-4">
          <label htmlFor="search-term" className="block text-lg font-medium text-gray-700 mb-2">
            Search:
          </label>
          <input
            type="text"
            id="search-term"
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search within the selected gunha..."
          />
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
      ) : (
        <>
          {selectedGunha && <h3 className="text-xl font-bold mb-4">Data for {selectedGunha}</h3>}
          {gunhaData.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    {Object.keys(gunhaData[0]).map((colName, idx) => (
                      <th
                        key={idx}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300"
                      >
                        {colName}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {gunhaData.map((row, idx) => (
                    <tr key={idx} onClick={() => handleEntryClick(row)}>
                      {Object.values(row).map((value, idx) => (
                        <td
                          key={idx}
                          className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300"
                        >
                          {typeof value === 'object' ? JSON.stringify(value) : value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            selectedGunha && <p className="text-gray-600">No data available for {selectedGunha}</p>
          )}
        </>
      )}

      {renderEditForm()}
    </div>
  );
};

export default CaseView;


