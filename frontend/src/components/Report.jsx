// import React, { useState } from 'react';

// const ReportComponent = () => {
//   const [selectedIndexes, setSelectedIndexes] = useState([]);
//   const [status, setStatus] = useState('');
//   const [district, setDistrict] = useState('');
//   const [taluka, setTaluka] = useState('');

//   const indexes = [
//     "भाग ५ गुन्हांची नोंद", "भाग ६ गुन्हांची नोंद", "दारूबंदी गुन्हांची नोंद",
//     "कोर्टाकडून आलेल्या केसेसची नोंद", "अकस्मात मृत्यू नोंद", "मोटार अपघात नोंद",
//     "वरिष्ट अर्ज नोंद", "स्थानिक अर्ज नोंद", "प्रति.कार्य.सी.आर.पी.सी. १०७",
//     "प्रति.कार्य.सी.आर.पी.सी. १०९", "सी.आर.पी.सी. कलम ११०", "प्रति कार्य सी.आर.पी.सी.",
//     "हदपार नोंद", "अग्नि उपद्रव नोंद", "मिसिंग नोंद", "गहाळ मालाची नोंद", "इतर"
//   ];



//   const handleCheckboxChange = (value) => {
//     if (selectedIndexes.includes(value)) {
//       setSelectedIndexes(selectedIndexes.filter(item => item !== value));
//     } else {
//       setSelectedIndexes([...selectedIndexes, value]);
//     }
//   };
  

//   // const handleIndexChange = (event) => {
//   //   const options = event.target.options;
//   //   const values = [];
//   //   for (let i = 0; i < options.length; i++) {
//   //     if (options[i].selected) {
//   //       values.push(options[i].value);
//   //     }
//   //   }
//   //   setSelectedIndexes(values);
//   // };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Selected Indexes:', selectedIndexes);
//     console.log('Status:', status);
//     console.log('District:', district);
//     console.log('Taluka:', taluka);
//     // Implement your data fetching/filtering logic here
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
  
//         <fieldset>
//               <legend className="text-base font-medium text-gray-900">Select Indexes</legend>
//               <div className="mt-4 space-y-4 overflow-y-auto h-10 p-2 border border-gray-300 rounded-md">
//                 {indexes.map((index) => (
//                   <div key={index} className="flex items-center">
//                     <input
//                       id={index}
//                       name="indexes"
//                       type="checkbox"
//                       value={index}
//                       checked={selectedIndexes.includes(index)}
//                       onChange={() => handleCheckboxChange(index)}
//                       className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
//                     />
//                     <label htmlFor={index} className="ml-3 block text-sm font-medium text-gray-700">
//                       {index}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </fieldset>

            
//         <div className="md:col-span-1">
//           <label htmlFor="statusSelect" className="block text-gray-700 text-sm font-bold mb-2">Status</label>
//           <select id="statusSelect" className="form-select border p-2 block w-full mt-1" onChange={e => setStatus(e.target.value)}>
//             <option value="under investigation">Under Investigation</option>
//             <option value="enquiry completed">Enquiry Completed</option>
//             <option value="under trial">Under Trial</option>
//           </select>
//         </div>

//         <div className="md:col-span-1">
//           <label htmlFor="districtInput" className="block text-gray-700 text-sm font-bold mb-2">District</label>
//           <input type="text" id="districtInput" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={district} onChange={e => setDistrict(e.target.value)} />
//         </div>

//         <div className="md:col-span-1">
//           <label htmlFor="talukaInput" className="block text-gray-700 text-sm font-bold mb-2">Taluka</label>
//           <input type="text" id="talukaInput" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={taluka} onChange={e => setTaluka(e.target.value)} />
//         </div>

//         <div className="md:col-span-4 text-right mt-4">
//           <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ReportComponent;


//...................................................................

// import React, { useState } from 'react';

// const ReportComponent = () => {
//   const [selectedIndexes, setSelectedIndexes] = useState([]);
//   const [status, setStatus] = useState('');
  // const [district, setDistrict] = useState('');
  // const [taluka, setTaluka] = useState('');
  // const [dateFrom, setDateFrom] = useState('');
  // const [dateTo, setDateTo] = useState('');

//   const indexes = [
//     "भाग ५ गुन्हांची नोंद", "भाग ६ गुन्हांची नोंद", "दारूबंदी गुन्हांची नोंद",
//     "कोर्टाकडून आलेल्या केसेसची नोंद", "अकस्मात मृत्यू नोंद", "मोटार अपघात नोंद",
//     "वरिष्ट अर्ज नोंद", "स्थानिक अर्ज नोंद", "प्रति.कार्य.सी.आर.पी.सी. १०७",
//     "प्रति.कार्य.सी.आर.पी.सी. १०९", "सी.आर.पी.सी. कलम ११०", "प्रति कार्य सी.आर.पी.सी.",
//     "हदपार नोंद", "अग्नि उपद्रव नोंद", "मिसिंग नोंद", "गहाळ मालाची नोंद", "इतर"
//   ];

//   const handleCheckboxChange = (value) => {
//     if (selectedIndexes.includes(value)) {
//       setSelectedIndexes(selectedIndexes.filter(item => item !== value));
//     } else {
//       setSelectedIndexes([...selectedIndexes, value]);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Selected Indexes:', selectedIndexes);
//     console.log('Status:', status);
//     console.log('District:', district);
//     console.log('Taluka:', taluka);
//     console.log('Date From:', dateFrom);
//     console.log('Date To:', dateTo);
//     // Implement your data fetching/filtering logic here, making API call with these parameters
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
       
//         <div className="md:col-span-1">
//           <label htmlFor="dateFrom" className="block text-gray-700 text-sm font-bold mb-2">Date From</label>
//           <input
//             type="date"
//             id="dateFrom"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={dateFrom}
//             onChange={e => setDateFrom(e.target.value)}
//           />
//         </div>
//         <div className="md:col-span-1">
//           <label htmlFor="dateTo" className="block text-gray-700 text-sm font-bold mb-2">Date To</label>
//           <input
//             type="date"
//             id="dateTo"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={dateTo}
//             onChange={e => setDateTo(e.target.value)}
//           />
//         </div>
        

        
//         <fieldset className="md:col-span-1">
//           <legend className="text-base font-medium text-gray-900">Select Indexes</legend>
//           <div className="mt-4 space-y-4 overflow-y-auto h-10 p-2 border border-gray-300 rounded-md">
//             {indexes.map((index) => (
//               <div key={index} className="flex items-center">
//                 <input
//                   id={index}
//                   name="indexes"
//                   type="checkbox"
//                   value={index}
//                   checked={selectedIndexes.includes(index)}
//                   onChange={() => handleCheckboxChange(index)}
//                   className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
//                 />
//                 <label htmlFor={index} className="ml-3 block text-sm font-medium text-gray-700">
//                   {index}
//                 </label>
//               </div>
//             ))}
//           </div>
//         </fieldset>

//         <div className="md:col-span-1">
//           <label htmlFor="statusSelect" className="block text-gray-700 text-sm font-bold mb-2">Status</label>
//           <select
//             id="statusSelect"
//             className="form-select border p-2 block w-full mt-1"
//             onChange={e => setStatus(e.target.value)}
//           >
//             <option value="under investigation">Under Investigation</option>
//             <option value="enquiry completed">Enquiry Completed</option>
//             <option value="under trial">Under Trial</option>
//           </select>
//         </div>

//         <div className="md:col-span-1">
//           <label htmlFor="districtInput" className="block text-gray-700 text-sm font-bold mb-2">District</label>
//           <input
//             type="text"
//             id="districtInput"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={district}
//             onChange={e => setDistrict(e.target.value)}
//           />
//         </div>

//         <div className="md:col-span-1">
//           <label htmlFor="talukaInput" className="block text-gray-700 text-sm font-bold mb-2">Taluka</label>
//           <input
//             type="text"
//             id="talukaInput"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={taluka}
//             onChange={e => setTaluka(e.target.value)}
//           />
//         </div>
        
//         <div className="md:col-span-4 text-right mt-4">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ReportComponent;

//....................................................................................

// import React, { useState } from 'react';
// import axios from 'axios';

// const ReportComponent = () => {
//   const [selectedIndexes, setSelectedIndexes] = useState([]);
//   const [status, setStatus] = useState('');
//   const [results, setResults] = useState({});
//   const [district, setDistrict] = useState('');
//   const [taluka, setTaluka] = useState('');
//   const [dateFrom, setDateFrom] = useState('');
//   const [dateTo, setDateTo] = useState('');

//   const indexes = [
//     "भाग ५ गुन्हांची नोंद", "भाग ६ गुन्हांची नोंद", "दारूबंदी गुन्हांची नोंद",
//     "कोर्टाकडून आलेल्या केसेसची नोंद", "अकस्मात मृत्यू नोंद", "मोटार अपघात नोंद",
//     "वरिष्ट अर्ज नोंद", "स्थानिक अर्ज नोंद", "प्रति.कार्य.सी.आर.पी.सी. १०७",
//     "प्रति.कार्य.सी.आर.पी.सी. १०९", "सी.आर.पी.सी. कलम ११०", "प्रति कार्य सी.आर.पी.सी.",
//     "हदपार नोंद", "अग्नि उपद्रव नोंद", "मिसिंग नोंद", "गहाळ मालाची नोंद", "इतर"
//   ];

//   const handleCheckboxChange = (value) => {
//     if (selectedIndexes.includes(value)) {
//       setSelectedIndexes(selectedIndexes.filter(item => item !== value));
//     } else {
//       setSelectedIndexes([...selectedIndexes, value]);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.get('http://localhost:4000/api/searchGunha', {
//         params: {
//           selectedIndexes,
//           status
//         }
//       });
//       setResults(response.data);
//     } catch (error) {
//       console.error('Error fetching gunha data:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
       
//         <div className="md:col-span-1">
//           <label htmlFor="dateFrom" className="block text-gray-700 text-sm font-bold mb-2">Date From</label>
//           <input
//             type="date"
//             id="dateFrom"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={dateFrom}
//             onChange={e => setDateFrom(e.target.value)}
//           />
//         </div>
//         <div className="md:col-span-1">
//           <label htmlFor="dateTo" className="block text-gray-700 text-sm font-bold mb-2">Date To</label>
//           <input
//             type="date"
//             id="dateTo"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={dateTo}
//             onChange={e => setDateTo(e.target.value)}
//           />
//         </div>
        

        
//         <fieldset className="md:col-span-1">
//           <legend className="text-base font-medium text-gray-900">Select Indexes</legend>
//           <div className="mt-4 space-y-4 overflow-y-auto h-10 p-2 border border-gray-300 rounded-md">
//             {indexes.map((index) => (
//               <div key={index} className="flex items-center">
//                 <input
//                   id={index}
//                   name="indexes"
//                   type="checkbox"
//                   value={index}
//                   checked={selectedIndexes.includes(index)}
//                   onChange={() => handleCheckboxChange(index)}
//                   className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
//                 />
//                 <label htmlFor={index} className="ml-3 block text-sm font-medium text-gray-700">
//                   {index}
//                 </label>
//               </div>
//             ))}
//           </div>
//         </fieldset>

//         <div className="md:col-span-1">
//           <label htmlFor="statusSelect" className="block text-gray-700 text-sm font-bold mb-2">Status</label>
//           <select
//             id="statusSelect"
//             className="form-select border p-2 block w-full mt-1"
//             onChange={e => setStatus(e.target.value)}
//           >
//             <option value="under investigation">Under Investigation</option>
//             <option value="enquiry completed">Enquiry Completed</option>
//             <option value="under trial">Under Trial</option>
//           </select>
//         </div>

//         <div className="md:col-span-1">
//           <label htmlFor="districtInput" className="block text-gray-700 text-sm font-bold mb-2">District</label>
//           <input
//             type="text"
//             id="districtInput"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={district}
//             onChange={e => setDistrict(e.target.value)}
//           />
//         </div>

//         <div className="md:col-span-1">
//           <label htmlFor="talukaInput" className="block text-gray-700 text-sm font-bold mb-2">Taluka</label>
//           <input
//             type="text"
//             id="talukaInput"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={taluka}
//             onChange={e => setTaluka(e.target.value)}
//           />
//         </div>
        
//         <div className="md:col-span-4 text-right mt-4">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Submit
//           </button>
//         </div>
//       </form>

//       {/* Display Results */}
//       <div className="mt-8">
//         {Object.keys(results).map((gunhaType) => (
//           <div key={gunhaType} className="mb-8">
//             <h3 className="text-xl font-bold mb-4">{gunhaType}</h3>
//             <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
//               <thead className="bg-gray-50">
//                 <tr>
//                   {Object.keys(results[gunhaType][0]).map((colName, idx) => (
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
//                 {results[gunhaType].map((row, idx) => (
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
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReportComponent;

// import React, { useState } from 'react';
// import axios from 'axios';

// const ReportComponent = () => {
//   const [selectedIndexes, setSelectedIndexes] = useState([]);
//   const [status, setStatus] = useState('');
//   const [results, setResults] = useState({});
//   const [district, setDistrict] = useState('');
//   const [taluka, setTaluka] = useState('');
//   const [dateFrom, setDateFrom] = useState('');
//   const [dateTo, setDateTo] = useState('');

//   const indexes = [
//     "भाग ५ गुन्हांची नोंद", "भाग ६ गुन्हांची नोंद", "दारूबंदी गुन्हांची नोंद",
//     "कोर्टाकडून आलेल्या केसेसची नोंद", "अकस्मात मृत्यू नोंद", "मोटार अपघात नोंद",
//     "वरिष्ट अर्ज नोंद", "स्थानिक अर्ज नोंद", "प्रति.कार्य.सी.आर.पी.सी. १०७",
//     "प्रति.कार्य.सी.आर.पी.सी. १०९", "सी.आर.पी.सी. कलम ११०", "प्रति कार्य सी.आर.पी.सी.",
//     "हदपार नोंद", "अग्नि उपद्रव नोंद", "मिसिंग नोंद", "गहाळ मालाची नोंद", "इतर"
//   ];

//   const handleCheckboxChange = (value) => {
//     if (selectedIndexes.includes(value)) {
//       setSelectedIndexes(selectedIndexes.filter(item => item !== value));
//     } else {
//       setSelectedIndexes([...selectedIndexes, value]);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.get('http://localhost:4000/api/searchGunha', {
//         params: {
//           selectedIndexes,
//           status
//         }
//       });
//       setResults(response.data);
//     } catch (error) {
//       console.error('Error fetching gunha data:', error);
//     }
//   };

//   const renderCellValue = (value) => {
//     if (typeof value === 'object') {
//       return JSON.stringify(value);
//     }
//     return value;
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
//         <div className="md:col-span-1">
//           <label htmlFor="dateFrom" className="block text-gray-700 text-sm font-bold mb-2">Date From</label>
//           <input
//             type="date"
//             id="dateFrom"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={dateFrom}
//             onChange={e => setDateFrom(e.target.value)}
//           />
//         </div>
//         <div className="md:col-span-1">
//           <label htmlFor="dateTo" className="block text-gray-700 text-sm font-bold mb-2">Date To</label>
//           <input
//             type="date"
//             id="dateTo"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={dateTo}
//             onChange={e => setDateTo(e.target.value)}
//           />
//         </div>

//         <fieldset className="md:col-span-1">
//           <legend className="text-base font-medium text-gray-900">Select Indexes</legend>
//           <div className="mt-4 space-y-4 overflow-y-auto h-10 p-2 border border-gray-300 rounded-md">
//             {indexes.map((index) => (
//               <div key={index} className="flex items-center">
//                 <input
//                   id={index}
//                   name="indexes"
//                   type="checkbox"
//                   value={index}
//                   checked={selectedIndexes.includes(index)}
//                   onChange={() => handleCheckboxChange(index)}
//                   className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
//                 />
//                 <label htmlFor={index} className="ml-3 block text-sm font-medium text-gray-700">
//                   {index}
//                 </label>
//               </div>
//             ))}
//           </div>
//         </fieldset>

//         <div className="md:col-span-1">
//           <label htmlFor="statusSelect" className="block text-gray-700 text-sm font-bold mb-2">Status</label>
//           <select
//             id="statusSelect"
//             className="form-select border p-2 block w-full mt-1"
//             onChange={e => setStatus(e.target.value)}
//           >
//             <option value="">Select Status</option>
//             <option value="under investigation">Under Investigation</option>
//             <option value="enquiry completed">Enquiry Completed</option>
//             <option value="under trial">Under Trial</option>
//           </select>
//         </div>

//         <div className="md:col-span-1">
//           <label htmlFor="districtInput" className="block text-gray-700 text-sm font-bold mb-2">District</label>
//           <input
//             type="text"
//             id="districtInput"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={district}
//             onChange={e => setDistrict(e.target.value)}
//           />
//         </div>

//         <div className="md:col-span-1">
//           <label htmlFor="talukaInput" className="block text-gray-700 text-sm font-bold mb-2">Taluka</label>
//           <input
//             type="text"
//             id="talukaInput"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={taluka}
//             onChange={e => setTaluka(e.target.value)}
//           />
//         </div>
        
//         <div className="md:col-span-4 text-right mt-4">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Submit
//           </button>
//         </div>
//       </form>

//       {/* Display Results */}
//       <div className="mt-8">
//         {Object.keys(results).map((gunhaType) => (
//           <div key={gunhaType} className="mb-8">
//             <h3 className="text-xl font-bold mb-4">{gunhaType}</h3>
//             {results[gunhaType].length > 0 ? (
//               <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     {Object.keys(results[gunhaType][0]).map((colName, idx) => (
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
//                   {results[gunhaType].map((row, idx) => (
//                     <tr key={idx}>
//                       {Object.values(row).map((value, idx) => (
//                         <td
//                           key={idx}
//                           className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300"
//                         >
//                           {renderCellValue(value)}
//                         </td>
//                       ))}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             ) : (
//               <p>No data available for {gunhaType}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReportComponent;

//...............................................................................

// import React, { useState } from 'react';
// import axios from 'axios';

// const ReportComponent = () => {
//   const [selectedIndexes, setSelectedIndexes] = useState([]);
//   const [status, setStatus] = useState('');
//   const [results, setResults] = useState({});
//   const [district, setDistrict] = useState('');
//   const [taluka, setTaluka] = useState('');
//   const [dateFrom, setDateFrom] = useState('');
//   const [dateTo, setDateTo] = useState('');
//   const [loading, setLoading] = useState(false);  // Add loading state

//   const indexes = [
//     "भाग ५ गुन्हांची नोंद", "भाग ६ गुन्हांची नोंद", "दारूबंदी गुन्हांची नोंद",
//     "कोर्टाकडून आलेल्या केसेसची नोंद", "अकस्मात मृत्यू नोंद", "मोटार अपघात नोंद",
//     "वरिष्ट अर्ज नोंद", "स्थानिक अर्ज नोंद", "प्रति.कार्य.सी.आर.पी.सी. १०७",
//     "प्रति.कार्य.सी.आर.पी.सी. १०९", "सी.आर.पी.सी. कलम ११०", "प्रति कार्य सी.आर.पी.सी.",
//     "हदपार नोंद", "अग्नि उपद्रव नोंद", "मिसिंग नोंद", "गहाळ मालाची नोंद", "इतर"
//   ];

//   const handleCheckboxChange = (value) => {
//     if (selectedIndexes.includes(value)) {
//       setSelectedIndexes(selectedIndexes.filter(item => item !== value));
//     } else {
//       setSelectedIndexes([...selectedIndexes, value]);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);  // Start loading

//     try {
//       const response = await axios.get('http://localhost:4000/api/searchGunha', {
//         params: {
//           selectedIndexes,
//           status
//         }
//       });
//       setResults(response.data);
//     } catch (error) {
//       console.error('Error fetching gunha data:', error);
//     } finally {
//       setLoading(false);  // Stop loading after data is fetched
//     }
//   };

//   const renderCellValue = (value) => {
//     if (typeof value === 'object') {
//       return JSON.stringify(value);
//     }
//     return value;
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
//         <div className="md:col-span-1">
//           <label htmlFor="dateFrom" className="block text-gray-700 text-sm font-bold mb-2">Date From</label>
//           <input
//             type="date"
//             id="dateFrom"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={dateFrom}
//             onChange={e => setDateFrom(e.target.value)}
//           />
//         </div>
//         <div className="md:col-span-1">
//           <label htmlFor="dateTo" className="block text-gray-700 text-sm font-bold mb-2">Date To</label>
//           <input
//             type="date"
//             id="dateTo"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={dateTo}
//             onChange={e => setDateTo(e.target.value)}
//           />
//         </div>

//         <fieldset className="md:col-span-1">
//           <legend className="text-base font-medium text-gray-900">Select Indexes</legend>
//           <div className="mt-4 space-y-4 overflow-y-auto h-60 p-2 border border-gray-300 rounded-md">
//             {indexes.map((index) => (
//               <div key={index} className="flex items-center">
//                 <input
//                   id={index}
//                   name="indexes"
//                   type="checkbox"
//                   value={index}
//                   checked={selectedIndexes.includes(index)}
//                   onChange={() => handleCheckboxChange(index)}
//                   className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
//                 />
//                 <label htmlFor={index} className="ml-3 block text-sm font-medium text-gray-700">
//                   {index}
//                 </label>
//               </div>
//             ))}
//           </div>
//         </fieldset>

//         <div className="md:col-span-1">
//           <label htmlFor="statusSelect" className="block text-gray-700 text-sm font-bold mb-2">Status</label>
//           <select
//             id="statusSelect"
//             className="form-select border p-2 block w-full mt-1"
//             onChange={e => setStatus(e.target.value)}
//           >
//             <option value="">Select Status</option>
//             <option value="under investigation">Under Investigation</option>
//             <option value="enquiry completed">Enquiry Completed</option>
//             <option value="under trial">Under Trial</option>
//           </select>
//         </div>

//         <div className="md:col-span-1">
//           <label htmlFor="districtInput" className="block text-gray-700 text-sm font-bold mb-2">District</label>
//           <input
//             type="text"
//             id="districtInput"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={district}
//             onChange={e => setDistrict(e.target.value)}
//           />
//         </div>

//         <div className="md:col-span-1">
//           <label htmlFor="talukaInput" className="block text-gray-700 text-sm font-bold mb-2">Taluka</label>
//           <input
//             type="text"
//             id="talukaInput"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={taluka}
//             onChange={e => setTaluka(e.target.value)}
//           />
//         </div>
        
//         <div className="md:col-span-4 text-right mt-4">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Submit
//           </button>
//         </div>
//       </form>

//       {/* Display Results */}
//       <div className="mt-8">
//         {loading ? (
//           <div className="flex justify-center items-center">
//             <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
//           </div>
//         ) : (
//           Object.keys(results).map((gunhaType) => (
//             <div key={gunhaType} className="mb-8">
//               <h3 className="text-xl font-bold mb-4">{gunhaType}</h3>
//               {results[gunhaType].length > 0 ? (
//                 <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       {Object.keys(results[gunhaType][0]).filter(colName => colName !== 'attachment').map((colName, idx) => (
//                         <th
//                           key={idx}
//                           className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300"
//                         >
//                           {colName}
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {results[gunhaType].map((row, idx) => (
//                       <tr key={idx}>
//                         {Object.entries(row).filter(([key]) => key !== 'attachment').map(([key, value], idx) => (
//                           <td
//                             key={idx}
//                             className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300"
//                           >
//                             {renderCellValue(value)}
//                           </td>
//                         ))}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               ) : (
//                 <p>No data available for {gunhaType}</p>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReportComponent;

//.......................................................................

import React, { useState } from 'react';
import axios from 'axios';

const ReportComponent = () => {
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [status, setStatus] = useState('');
  const [results, setResults] = useState({});
  const [district, setDistrict] = useState('');
  const [taluka, setTaluka] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [loading, setLoading] = useState(false);

  const indexes = [
    "भाग ५ गुन्हांची नोंद", "भाग ६ गुन्हांची नोंद", "दारूबंदी गुन्हांची नोंद",
    "कोर्टाकडून आलेल्या केसेसची नोंद", "अकस्मात मृत्यू नोंद", "मोटार अपघात नोंद",
    "वरिष्ट अर्ज नोंद", "स्थानिक अर्ज नोंद", "प्रति.कार्य.बी.एन.एस.एस १२६",
    "प्रति.कार्य.बी.एन.एस.एस १२८", "प्रति.कार्य.बी.एन.एस.एस १२९", "प्रति कार्य बी.एन.एस.एस",
    "हदपार नोंद", "अग्नि उपद्रव नोंद", "मिसिंग नोंद", "गहाळ मालाची नोंद", "इतर"
  ];

  const handleCheckboxChange = (value) => {
    if (selectedIndexes.includes(value)) {
      setSelectedIndexes(selectedIndexes.filter(item => item !== value));
    } else {
      setSelectedIndexes([...selectedIndexes, value]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get('http://localhost:4000/api/searchGunha', {
        params: {
          selectedIndexes,
          status,
          district,
          taluka,
          dateFrom,
          dateTo
        }
      });
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching gunha data:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderCellValue = (value) => {
    if (typeof value === 'object') {
      return JSON.stringify(value);
    }
    return value;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        {/* Left Part: Form */}
        <div className="w-full md:w-1/3 md:pr-4 mb-8 md:mb-0">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 items-end">
            <div>
              <label htmlFor="dateFrom" className="block text-gray-700 text-sm font-bold mb-2">Date From</label>
              <input
                type="date"
                id="dateFrom"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={dateFrom}
                onChange={e => setDateFrom(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="dateTo" className="block text-gray-700 text-sm font-bold mb-2">Date To</label>
              <input
                type="date"
                id="dateTo"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={dateTo}
                onChange={e => setDateTo(e.target.value)}
              />
            </div>

            <fieldset>
              <legend className="text-base font-medium text-gray-900">Select Indexes</legend>
              <div className="mt-4 space-y-4 overflow-y-auto h-60 p-2 border border-gray-300 rounded-md">
                {indexes.map((index) => (
                  <div key={index} className="flex items-center">
                    <input
                      id={index}
                      name="indexes"
                      type="checkbox"
                      value={index}
                      checked={selectedIndexes.includes(index)}
                      onChange={() => handleCheckboxChange(index)}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor={index} className="ml-3 block text-sm font-medium text-gray-700">
                      {index}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="statusSelect" className="block text-gray-700 text-sm font-bold mb-2">Status</label>
              <select
                id="statusSelect"
                className="form-select border p-2 block w-full mt-1"
                onChange={e => setStatus(e.target.value)}
              >
                <option value="">Select Status</option>
                <option value="under investigation">Under Investigation</option>
                <option value="enquiry completed">Enquiry Completed</option>
                <option value="under trial">Under Trial</option>
              </select>
            </div>

            <div>
              <label htmlFor="districtInput" className="block text-gray-700 text-sm font-bold mb-2">District</label>
              <input
                type="text"
                id="districtInput"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={district}
                onChange={e => setDistrict(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="talukaInput" className="block text-gray-700 text-sm font-bold mb-2">Taluka</label>
              <input
                type="text"
                id="talukaInput"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={taluka}
                onChange={e => setTaluka(e.target.value)}
              />
            </div>
            
            <div className="text-right mt-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Right Part: Results */}
        <div className="w-full md:w-2/3">
          {/* Display Results */}
          <div className="mt-8 md:mt-0">
            {loading ? (
              <div className="flex justify-center items-center">
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
              </div>
            ) : (
              Object.keys(results).map((gunhaType) => (
                <div key={gunhaType} className="mb-8">
                  <h3 className="text-xl font-bold mb-4">{gunhaType}</h3>
                  {results[gunhaType].length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
                        <thead className="bg-gray-50">
                          <tr>
                            {Object.keys(results[gunhaType][0]).filter(colName => colName !== 'attachment').map((colName, idx) => (
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
                          {results[gunhaType].map((row, idx) => (
                            <tr key={idx}>
                              {Object.entries(row).filter(([key]) => key !== 'attachment').map(([key, value], idx) => (
                                <td
                                  key={idx}
                                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300"
                                >
                                  {renderCellValue(value)}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p>No data available for {gunhaType}</p>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportComponent;
