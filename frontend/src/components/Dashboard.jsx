// import React from 'react';
// import { Link } from 'react-router-dom';
// import * as XLSX from 'xlsx';
// import { useState } from 'react';

// const Dashboard = () => {

//   const [excelData, setExcelData] = useState([]);

//   const handleButtonClick = async () => {
//    // Create a link element
//    const link = document.createElement('a');
//    // Set the href attribute to the path of the Excel file
//    link.href = '/b1.xlsx';
//    // Set the download attribute to suggest a file name (optional)
//    link.download = 'b1.xlsx';
//    // Append the link to the body (necessary for Firefox)
//    document.body.appendChild(link);
//    // Programmatically click the link to trigger the download/open
//    link.click();
//    // Remove the link from the document
//    document.body.removeChild(link);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <h1 className="text-2xl font-bold text-center mb-8">Dashboard</h1>

//       <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">Pending Cases Details CHART:</h2>
//           <h2 className="text-md font-xs mb-4" >(Days in hand for completion of cases, Ref Case wise validation date for completion of enquiry,)</h2>
//         {/* First Table */}
//         <div className="overflow-x-auto mb-8">
//           <table className="min-w-full bg-white border rounded-lg">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2 border">Rly Act</th>
//                 <th className="px-4 py-2 border">RP UP</th>
//                 <th className="px-4 py-2 border">UTI/RCT</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="px-4 py-2 border">05</td>
//                 <td className="px-4 py-2 border">02</td>
//                 <td className="px-4 py-2 border">11</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* Second Table */}
//         <div className="overflow-x-auto mb-8">
//           <table className="min-w-full bg-white border rounded-lg">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2 border">CR No. & UTI/RCT</th>
//                 <th className="px-4 py-2 border">Regd Date</th>
//                 <th className="px-4 py-2 border">U/S & Act</th>
//                 <th className="px-4 py-2 border">DAYS ON HANDS</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="px-4 py-2 border">01/2024</td>
//                 <td className="px-4 py-2 border">07.05.2024</td>
//                 <td className="px-4 py-2 border">Sec 144 RA</td>
//                 <td className="px-4 py-2 border">05 (30)</td>
//               </tr>
//               <tr>
//                 <td className="px-4 py-2 border">05/2024</td>
//                 <td className="px-4 py-2 border">06.07.2024</td>
//                 <td className="px-4 py-2 border">Sec 3 RPUP</td>
//                 <td className="px-4 py-2 border">59 (60)</td>
//               </tr>
//               <tr>
//                 <td className="px-4 py-2 border">UTI-45</td>
//                 <td className="px-4 py-2 border">06.07.2024</td>
//                 <td className="px-4 py-2 border">R-6 RP (MIUI) Rules</td>
//                 <td className="px-4 py-2 border">59 (60)</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         <div className="mt-8">
//           <h2 className="text-2xl font-bold mb-4">Rules</h2>
//           <p className="text-gray-700">
//             Select a particular case and view details of Document Required List and PW Examination List.
//           </p>
//           {/* <div className="mt-4 flex flex-wrap gap-4">
//             <Link to="/document-required" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
//               Document Required List
//             </Link>
//             <Link to="/pw-examination" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
//               PW Examination List
//             </Link>
//           </div> */}
//            <button
//           onClick={handleButtonClick}
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
//         >
//           Open Excel File
//         </button>
      
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React from 'react';

// const Dashboard = () => {
//   const data = [
//     { index: 1, title: 'भाग ५ गुन्हांची नोंद', pending: 55, completed: 45, forwarded: 10 },
//     { index: 2, title: 'भाग ६ गुन्हांची नोंद', pending: '', completed: '', forwarded: '' },
//     { index: 3, title: 'दारूबंदी गुन्हांची नोंद', pending: '', completed: '', forwarded: '' },
//     { index: 4, title: 'कोर्टाकडून आलेल्या केसेसची नोंद', pending: '', completed: '', forwarded: '' },
//     { index: 5, title: 'अकस्मात मृत्यू नोंद', pending: '', completed: '', forwarded: '' },
//     { index: 6, title: 'मोटार अपघात नोंद', pending: '', completed: '', forwarded: '' },
//     { index: 7, title: 'वरिष्ट अर्ज नोंद', pending: '', completed: '', forwarded: '' },
//     { index: 8, title: 'स्थानिक अर्ज नोंद', pending: '', completed: '', forwarded: '' },
//     { index: 9, title: 'प्रति कार्य CrPC Sec 107', pending: '', completed: '', forwarded: '' },
//     { index: 10, title: 'प्रति कार्य CrPC Sec 109', pending: '', completed: '', forwarded: '' },
//     { index: 11, title: 'CrPC Sec 110', pending: '', completed: '', forwarded: '' },
//     { index: 12, title: 'प्रति कार्य BNSS', pending: '', completed: '', forwarded: '' },
//     { index: 13, title: 'हदपार नोंद', pending: '', completed: '', forwarded: '' },
//     { index: 14, title: 'अग्नि उपद्रव नोंद', pending: '', completed: '', forwarded: '' },
//     { index: 15, title: 'मिसिंग नोंद', pending: '', completed: '', forwarded: '' },
//     { index: 16, title: 'गहाळ मालाची नोंद', pending: '', completed: '', forwarded: '' },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold text-center mb-6">DASH BOARD</h1>
//       <h2 className="text-xl text-center mb-4">PENDING CASES DETAILS CHART:</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="py-2 px-4 border border-gray-300">विषय</th>
//               <th className="py-2 px-4 border border-gray-300">एकून तपासासाठी प्रलंबित गुन्हे</th>
//               <th className="py-2 px-4 border border-gray-300">तपास पूर्ण झालेले गुन्हे</th>
//               <th className="py-2 px-4 border border-gray-300">प्रलंबित परंतु गुन्हे शेरा</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item) => (
//               <tr key={item.index} className="text-center">
//                 <td className="py-2 px-4 border border-gray-300">{item.index}. {item.title}</td>
//                 <td className="py-2 px-4 border border-gray-300">{item.pending}</td>
//                 <td className="py-2 px-4 border border-gray-300">{item.completed}</td>
//                 <td className="py-2 px-4 border border-gray-300">{item.forwarded}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="text-center mt-4">
//         <p className="text-gray-700">The details of all cases will appear.</p>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Dashboard = () => {
//   const [data, setData] = useState({
//     part5Gunha: { pending: '', completed: '', forwarded: '' },
//     part6Gunha: { pending: '', completed: '', forwarded: '' },
//     darubandiGunha: { pending: '', completed: '', forwarded: '' },
//     courtCases: { pending: '', completed: '', forwarded: '' },
//     aksmatMrityu: { pending: '', completed: '', forwarded: '' },
//     motorAccident: { pending: '', completed: '', forwarded: '' },
//     varishtArj: { pending: '', completed: '', forwarded: '' },
//     sthanikArj: { pending: '', completed: '', forwarded: '' },
//     crpc107: { pending: '', completed: '', forwarded: '' },
//     crpc109: { pending: '', completed: '', forwarded: '' },
//     crpc110: { pending: '', completed: '', forwarded: '' },
//     hadpar: { pending: '', completed: '', forwarded: '' },
//     agniUpdrav: { pending: '', completed: '', forwarded: '' },
//     missing: { pending: '', completed: '', forwarded: '' },
//     gahalMal: { pending: '', completed: '', forwarded: '' },
//     itar: { pending: '', completed: '', forwarded: '' },
//   });

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/api/dashboardData'); // Replace with your actual API endpoint
//       setData(response.data); // Assuming the API returns an object with the above structure
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData(); // Fetch data when the component mounts
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold text-center mb-6">DASH BOARD</h1>
//       <h2 className="text-xl text-center mb-4">PENDING CASES DETAILS CHART:</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="py-2 px-4 border border-gray-300">विषय</th>
//               <th className="py-2 px-4 border border-gray-300">एकून तपासासाठी प्रलंबित गुन्हे</th>
//               <th className="py-2 px-4 border border-gray-300">तपास पूर्ण झालेले गुन्हे</th>
//               <th className="py-2 px-4 border border-gray-300">प्रलंबित परंतु गुन्हे शेरा</th>
//             </tr>
//           </thead>
//           <tbody className="text-center">
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">भाग ५ गुन्हांची नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.part5Gunha.pending}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.part5Gunha.completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.part5Gunha.forwarded}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">भाग ६ गुन्हांची नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.part6Gunha.pending}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.part6Gunha.completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.part6Gunha.forwarded}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">दारूबंदी गुन्हांची नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.darubandiGunha.pending}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.darubandiGunha.completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.darubandiGunha.forwarded}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">कोर्टाकडून आलेल्या केसेसची नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.courtCases.pending}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.courtCases.completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.courtCases.forwarded}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">अकस्मात मृत्यू नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.aksmatMrityu.pending}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.aksmatMrityu.completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.aksmatMrityu.forwarded}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">मोटार अपघात नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.motorAccident.pending}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.motorAccident.completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.motorAccident.forwarded}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">वरिष्ट अर्ज नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.varishtArj.pending}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.varishtArj.completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.varishtArj.forwarded}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">स्थानिक अर्ज नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.sthanikArj.pending}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.sthanikArj.completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.sthanikArj.forwarded}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">प्रति.कार्य.सी.आर.पी.सी. १०७</td>
//               <td className="py-2 px-4 border border-gray-300">{data.crpc107.pending}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.crpc107.completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.crpc107.forwarded}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">प्रति.कार्य.सी.आर.पी.सी. १०९</td>
//               <td className="py-2 px-4 border border-gray-300">{data.crpc109.pending}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.crpc109.completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.crpc109.forwarded}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">सी.आर.पी.सी. कलम ११०</td>
//               <td className="py-2 px-4 border border-gray-300">{data.crpc110.pending}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.crpc110.completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.crpc110.forwarded}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">हदपार नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.hadpar.pending}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.hadpar.completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.hadpar.forwarded}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">अग्नि उपद्रव नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.agniUpdrav.pending}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.agniUpdrav.completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.agniUpdrav.forwarded}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">मिसिंग नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.missing.pending}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.missing.completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.missing.forwarded}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">गहाळ मालाची नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.gahalMal.pending}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.gahalMal.completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.gahalMal.forwarded}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">इतर</td>
//               <td className="py-2 px-4 border border-gray-300">{data.itar.pending}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.itar.completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.itar.forwarded}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <div className="text-center mt-4">
//         <p className="text-gray-700">The details of all cases will appear.</p>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


//.........................................................................

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Dashboard = () => {
//   const [data, setData] = useState({
//     part5Gunha: { total_entries: '', enquiry_completed: '', under_investigation: '',under_trial:'' },
//     part6Gunha: { total_entries: '', enquiry_completed: '', under_investigation: '',under_trial:'' },
//     darubandiGunha: { total_entries: '', enquiry_completed: '', under_investigation: '',under_trial:'' },
//     courtCases: { total_entries: '', enquiry_completed: '', under_investigation: '',under_trial:'' },
//     aksmatMrityu: { total_entries: '', enquiry_completed: '', under_investigation: '',under_trial:'' },
//     motorAccident: { total_entries: '', enquiry_completed: '', under_investigation: '',under_trial:'' },
//     varishtArj: { total_entries: '', enquiry_completed: '', under_investigation: '',under_trial:'' },
//     sthanikArj: { total_entries: '', enquiry_completed: '', under_investigation: '',under_trial:'' },
//     crpc107: { total_entries: '', enquiry_completed: '', under_investigation: '',under_trial:'' },
//     crpc109: { total_entries: '', enquiry_completed: '', under_investigation: '',under_trial:'' },
//     crpc110: { total_entries: '', enquiry_completed: '', under_investigation: '',under_trial:'' },
//     hadpar: { total_entries: '', enquiry_completed: '', under_investigation: '',under_trial:'' },
//     agniUpdrav: { total_entries: '', enquiry_completed: '', under_investigation: '',under_trial:'' },
//     missing: { total_entries: '', enquiry_completed: '', under_investigation: '',under_trial:'' },
//     gahalMal: { total_entries: '', enquiry_completed: '', under_investigation: '',under_trial:'' },
//     itar: { total_entries: '', enquiry_completed: '', under_investigation: '',under_trial:'' },
//   });

//   const [loading,setLoading] = useState(true)

//   const fetchData = async () => {
//     setLoading(true)
//     try {
//       const response = await axios.get('http://localhost:4000/api/getCaseStatusAndTotalCounts'); // Your actual API endpoint
//       const data = response.data;

//       setData({
//         part5Gunha: {
//           total_entries: data.form_gunha.total_entries,
//           enquiry_completed: data.form_gunha.enquiry_completed,
//           under_investigation: data.form_gunha.under_investigation,
//           under_trial:data.form_gunha.under_trial
//         },
//         part6Gunha: {
//           total_entries: data.form_gunha.total_entries,
//           enquiry_completed: data.form_gunha.enquiry_completed,
//           under_investigation: data.form_gunha.under_investigation,
//           under_trial: data.form_gunha.under_trial,
//         },
//         darubandiGunha: {
//           total_entries: data.form_gunha.total_entries,
//           enquiry_completed: data.form_gunha.enquiry_completed,
//           under_investigation: data.form_gunha.under_investigation,
//           under_trial: data.form_gunha.under_trial,
//         },
//         courtCases: {
//           total_entries: data.form_gunha.total_entries,
//           enquiry_completed: data.form_gunha.enquiry_completed,
//           under_investigation: data.form_gunha.under_investigation,
//           under_trial: data.form_gunha.under_trial,
//         },
//         aksmatMrityu: {
//           total_entries: data.form_aksmat_mrityu_nond.total_entries,
//           enquiry_completed: data.form_aksmat_mrityu_nond.enquiry_completed,
//           under_investigation: data.form_aksmat_mrityu_nond.under_investigation,
//           under_trial: data.form_aksmat_mrityu_nond.under_trial,
//         },
//         motorAccident: {
//           total_entries: data.form_motor_accident.total_entries,
//           enquiry_completed: data.form_motor_accident.enquiry_completed,
//           under_investigation: data.form_motor_accident.under_investigation,
//           under_trial: data.form_motor_accident.under_trial,
//         },
//         varishtArj: {
//           total_entries: data.form_vsn.total_entries,
//           enquiry_completed: data.form_vsn.enquiry_completed,
//           under_investigation: data.form_vsn.under_investigation,
//           under_trial: data.form_vsn.under_trial,
//         },
//         sthanikArj: {
//           total_entries: data.form_vsn.total_entries,
//           enquiry_completed: data.form_vsn.enquiry_completed,
//           under_investigation: data.form_vsn.under_investigation,
//           under_trial: data.form_vsn.under_trial,
//         },
//         crpc107: {
//           total_entries: data.form_bns.total_entries,
//           enquiry_completed: data.form_bns.enquiry_completed,
//           under_investigation: data.form_bns.under_investigation,
//           under_trial: data.form_bns.under_trial,
//         },
//         crpc109: {
//           total_entries: data.form_bns.total_entries,
//           enquiry_completed: data.form_bns.enquiry_completed,
//           under_investigation: data.form_bns.under_investigation,
//           under_trial: data.form_bns.under_trial,
//         },
//         crpc110: {
//           total_entries: data.form_bns.total_entries,
//           enquiry_completed: data.form_bns.enquiry_completed,
//           under_investigation: data.form_bns.under_investigation,
//           under_trial: data.form_bns.under_trial,
//         },
//         hadpar: {
//           total_entries: data.form_haddapar.total_entries,
//           enquiry_completed: data.form_haddapar.enquiry_completed,
//           under_investigation: data.form_haddapar.under_investigation,
//           under_trial: data.form_haddapar.under_trial,
//         },
//         agniUpdrav: {
//           total_entries: data.form_agni_updrav_nond.total_entries,
//           enquiry_completed: data.form_agni_updrav_nond.enquiry_completed,
//           under_investigation: data.form_agni_updrav_nond.under_investigation,
//           under_trial: data.form_agni_updrav_nond.under_trial,
//         },
//         missing: {
//           total_entries: data.form_missing.total_entries,
//           enquiry_completed: data.form_missing.enquiry_completed,
//           under_investigation: data.form_missing.under_investigation,
//           under_trial: data.form_missing.under_trial,
//         },
//         gahalMal: {
//           total_entries: data.form_gahal_malachi_nond.total_entries,
//           enquiry_completed: data.form_gahal_malachi_nond.enquiry_completed,
//           under_investigation: data.form_gahal_malachi_nond.under_investigation,
//           under_trial: data.form_gahal_malachi_nond.under_trial,
//         },
//         itar: {
//           total_entries: data.form_vsn.total_entries,
//           enquiry_completed: data.form_vsn.enquiry_completed,
//           under_investigation: data.form_vsn.under_investigation,
//           under_trial: data.form_vsn.under_trial,
//         },
//       });

//       setLoading(false)
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };


//   useEffect(() => {
//     fetchData(); // Fetch data when the component mounts
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold text-center mb-6">DASH BOARD</h1>
//       <h2 className="text-xl text-center mb-4">PENDING CASES DETAILS CHART:</h2>
//       {loading ? (
//      <div className="flex justify-center items-center">
//        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
//      </div>
     
//       ) : (
//       <>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="py-2 px-4 border border-gray-300">विषय</th>
//               <th className="py-2 px-4 border border-gray-300">एकून तपासासाठी आदेशित गुन्हे</th>
//               <th className="py-2 px-4 border border-gray-300">तपास पूर्ण झालेले गुन्हे</th>
//               <th className="py-2 px-4 border border-gray-300">प्रलंबित गुन्हे </th>
//               <th className="py-2 px-4 border border-gray-300">गुन्हे चाचणीत </th>
//             </tr>
//           </thead>
//           <tbody className="text-center">
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">भाग ५ गुन्हांची नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.part5Gunha.total_entries}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.part5Gunha.enquiry_completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.part5Gunha.under_investigation}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.part5Gunha.under_trial}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">भाग ६ गुन्हांची नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.part6Gunha.total_entries}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.part6Gunha.enquiry_completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.part6Gunha.under_investigation}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.part6Gunha.under_trial}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">दारूबंदी गुन्हांची नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.darubandiGunha.total_entries}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.darubandiGunha.enquiry_completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.darubandiGunha.under_investigation}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.darubandiGunha.under_trial}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">कोर्टाकडून आलेल्या केसेसची नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.courtCases.total_entries}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.courtCases.enquiry_completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.courtCases.under_investigation}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.courtCases.under_trial}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">अकस्मात मृत्यू नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.aksmatMrityu.total_entries}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.aksmatMrityu.enquiry_completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.aksmatMrityu.under_investigation}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.aksmatMrityu.under_trial}</td>
            
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">मोटार अपघात नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.motorAccident.total_entries}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.motorAccident.enquiry_completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.motorAccident.under_investigation}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.motorAccident.under_trial}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">वरिष्ट अर्ज नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.varishtArj.total_entries}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.varishtArj.enquiry_completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.varishtArj.under_investigation}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.varishtArj.under_trial}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">स्थानिक अर्ज नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.sthanikArj.total_entries}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.sthanikArj.enquiry_completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.sthanikArj.under_investigation}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.sthanikArj.under_trial}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">प्रति.कार्य.सी.आर.पी.सी. १०७</td>
//               <td className="py-2 px-4 border border-gray-300">{data.crpc107.total_entries}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.crpc107.enquiry_completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.crpc107.under_investigation}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.crpc107.under_trial}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">प्रति.कार्य.सी.आर.पी.सी. १०९</td>
//               <td className="py-2 px-4 border border-gray-300">{data.crpc109.total_entries}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.crpc109.enquiry_completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.crpc109.under_investigation}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.crpc109.under_trial}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">सी.आर.पी.सी. कलम ११०</td>
//               <td className="py-2 px-4 border border-gray-300">{data.crpc110.total_entries}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.crpc110.enquiry_completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.crpc110.under_investigation}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.crpc110.under_trial}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">हदपार नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.hadpar.total_entries}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.hadpar.enquiry_completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.hadpar.under_investigation}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.hadpar.under_trial}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">अग्नि उपद्रव नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.agniUpdrav.total_entries}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.agniUpdrav.enquiry_completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.agniUpdrav.under_investigation}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.agniUpdrav.under_trial}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">मिसिंग नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.missing.total_entries}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.missing.enquiry_completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.missing.under_investigation}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.missing.under_trial}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">गहाळ मालाची नोंद</td>
//               <td className="py-2 px-4 border border-gray-300">{data.gahalMal.total_entries}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.gahalMal.enquiry_completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.gahalMal.under_investigation}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.gahalMal.under_trial}</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border border-gray-300">इतर</td>
//               <td className="py-2 px-4 border border-gray-300">{data.itar.total_entries}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.itar.enquiry_completed}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.itar.under_investigation}</td>
//               <td className="py-2 px-4 border border-gray-300">{data.itar.under_trial}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       </>
//       )}
//       <div className="text-center mt-4">
//         <p className="text-gray-700">The details of all cases will appear.</p>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



//...............................................................................

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState({
    part5Gunha: { total_entries: '', enquiry_completed: '', under_investigation: '', under_trial: '' },
    part6Gunha: { total_entries: '', enquiry_completed: '', under_investigation: '', under_trial: '' },
    darubandiGunha: { total_entries: '', enquiry_completed: '', under_investigation: '', under_trial: '' },
    courtCases: { total_entries: '', enquiry_completed: '', under_investigation: '', under_trial: '' },
    aksmatMrityu: { total_entries: '', enquiry_completed: '', under_investigation: '', under_trial: '' },
    motorAccident: { total_entries: '', enquiry_completed: '', under_investigation: '', under_trial: '' },
    varishtArj: { total_entries: '', enquiry_completed: '', under_investigation: '', under_trial: '' },
    sthanikArj: { total_entries: '', enquiry_completed: '', under_investigation: '', under_trial: '' },
    bns126: { total_entries: '', enquiry_completed: '', under_investigation: '', under_trial: '' },
    bns128: { total_entries: '', enquiry_completed: '', under_investigation: '', under_trial: '' },
    bns129: { total_entries: '', enquiry_completed: '', under_investigation: '', under_trial: '' },
    bnss: { total_entries: '', enquiry_completed: '', under_investigation: '', under_trial: '' },
    hadpar: { total_entries: '', enquiry_completed: '', under_investigation: '', under_trial: '' },
    agniUpdrav: { total_entries: '', enquiry_completed: '', under_investigation: '', under_trial: '' },
    missing: { total_entries: '', enquiry_completed: '', under_investigation: '', under_trial: '' },
    gahalMal: { total_entries: '', enquiry_completed: '', under_investigation: '', under_trial: '' },
    itar: { total_entries: '', enquiry_completed: '', under_investigation: '', under_trial: '' },
  });

  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:4000/api/getCaseStatusAndTotalCounts'); // Your actual API endpoint
      const data = response.data;

      setData({
        part5Gunha: {
          total_entries: data.form_gunha.total_entries,
          enquiry_completed: data.form_gunha.enquiry_completed,
          under_investigation: data.form_gunha.under_investigation,
          under_trial: data.form_gunha.under_trial,
        },
        part6Gunha: {
          total_entries: data.bhag_6.total_entries,
          enquiry_completed: data.bhag_6.enquiry_completed,
          under_investigation: data.bhag_6.under_investigation,
          under_trial: data.bhag_6.under_trial,
        },
        darubandiGunha: {
          total_entries: data.darubandi.total_entries,
          enquiry_completed: data.darubandi.enquiry_completed,
          under_investigation: data.darubandi.under_investigation,
          under_trial: data.darubandi.under_trial,
        },
        courtCases: {
          total_entries: data.courtakadun_aalele_case.total_entries,
          enquiry_completed: data.courtakadun_aalele_case.enquiry_completed,
          under_investigation: data.courtakadun_aalele_case.under_investigation,
          under_trial: data.courtakadun_aalele_case.under_trial,
        },
        aksmatMrityu: {
          total_entries: data.form_aksmat_mrityu_nond.total_entries,
          enquiry_completed: data.form_aksmat_mrityu_nond.enquiry_completed,
          under_investigation: data.form_aksmat_mrityu_nond.under_investigation,
          under_trial: data.form_aksmat_mrityu_nond.under_trial,
        },
        motorAccident: {
          total_entries: data.form_motor_accident.total_entries,
          enquiry_completed: data.form_motor_accident.enquiry_completed,
          under_investigation: data.form_motor_accident.under_investigation,
          under_trial: data.form_motor_accident.under_trial,
        },
        varishtArj: {
          total_entries: data.form_vsn.total_entries,
          enquiry_completed: data.form_vsn.enquiry_completed,
          under_investigation: data.form_vsn.under_investigation,
          under_trial: data.form_vsn.under_trial,
        },
        sthanikArj: {
          total_entries: data.sthanik_arj.total_entries,
          enquiry_completed: data.sthanik_arj.enquiry_completed,
          under_investigation: data.sthanik_arj.under_investigation,
          under_trial: data.sthanik_arj.under_trial,
        },
        bns126: {
          total_entries: data.form_bns.total_entries,
          enquiry_completed: data.form_bns.enquiry_completed,
          under_investigation: data.form_bns.under_investigation,
          under_trial: data.form_bns.under_trial,
        },
        bns128: {
          total_entries: data.bnss_128.total_entries,
          enquiry_completed: data.bnss_128.enquiry_completed,
          under_investigation: data.bnss_128.under_investigation,
          under_trial: data.bnss_128.under_trial,
        },
        bns129: {
          total_entries: data.bnss_129.total_entries,
          enquiry_completed: data.bnss_129.enquiry_completed,
          under_investigation: data.bnss_129.under_investigation,
          under_trial: data.bnss_129.under_trial,
        },
        bnss: {
          total_entries: data.bnss.total_entries,
          enquiry_completed: data.bnss.enquiry_completed,
          under_investigation: data.bnss.under_investigation,
          under_trial: data.bnss.under_trial,
        },
        hadpar: {
          total_entries: data.form_haddapar.total_entries,
          enquiry_completed: data.form_haddapar.enquiry_completed,
          under_investigation: data.form_haddapar.under_investigation,
          under_trial: data.form_haddapar.under_trial,
        },
        agniUpdrav: {
          total_entries: data.form_agni_updrav_nond.total_entries,
          enquiry_completed: data.form_agni_updrav_nond.enquiry_completed,
          under_investigation: data.form_agni_updrav_nond.under_investigation,
          under_trial: data.form_agni_updrav_nond.under_trial,
        },
        missing: {
          total_entries: data.form_missing.total_entries,
          enquiry_completed: data.form_missing.enquiry_completed,
          under_investigation: data.form_missing.under_investigation,
          under_trial: data.form_missing.under_trial,
        },
        gahalMal: {
          total_entries: data.form_gahal_malachi_nond.total_entries,
          enquiry_completed: data.form_gahal_malachi_nond.enquiry_completed,
          under_investigation: data.form_gahal_malachi_nond.under_investigation,
          under_trial: data.form_gahal_malachi_nond.under_trial,
        },
        itar: {
          total_entries: data.form_vsn.total_entries,
          enquiry_completed: data.form_vsn.enquiry_completed,
          under_investigation: data.form_vsn.under_investigation,
          under_trial: data.form_vsn.under_trial,
        },
      });

      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">DASH BOARD</h1>
      <h2 className="text-xl text-center mb-4">PENDING CASES DETAILS CHART:</h2>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border border-gray-300">विषय</th>
                  <th className="py-2 px-4 border border-gray-300">एकून तपासासाठी आदेशित गुन्हे</th>
                  <th className="py-2 px-4 border border-gray-300">तपास पूर्ण झालेले गुन्हे</th>
                  <th className="py-2 px-4 border border-gray-300">प्रलंबित गुन्हे</th>
                  <th className="py-2 px-4 border border-gray-300">गुन्हे चाचणीत</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td className="py-2 px-4 border border-gray-300">भाग ५ गुन्हांची नोंद</td>
                  <td className="py-2 px-4 border border-gray-300">{data.part5Gunha.total_entries}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.part5Gunha.enquiry_completed}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.part5Gunha.under_investigation}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.part5Gunha.under_trial}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300">भाग ६ गुन्हांची नोंद</td>
                  <td className="py-2 px-4 border border-gray-300">{data.part6Gunha.total_entries}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.part6Gunha.enquiry_completed}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.part6Gunha.under_investigation}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.part6Gunha.under_trial}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300">दारूबंदी गुन्हांची नोंद</td>
                  <td className="py-2 px-4 border border-gray-300">{data.darubandiGunha.total_entries}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.darubandiGunha.enquiry_completed}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.darubandiGunha.under_investigation}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.darubandiGunha.under_trial}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300">कोर्टाकडून आलेल्या केसेसची नोंद</td>
                  <td className="py-2 px-4 border border-gray-300">{data.courtCases.total_entries}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.courtCases.enquiry_completed}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.courtCases.under_investigation}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.courtCases.under_trial}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300">अकस्मात मृत्यू नोंद</td>
                  <td className="py-2 px-4 border border-gray-300">{data.aksmatMrityu.total_entries}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.aksmatMrityu.enquiry_completed}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.aksmatMrityu.under_investigation}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.aksmatMrityu.under_trial}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300">मोटार अपघात नोंद</td>
                  <td className="py-2 px-4 border border-gray-300">{data.motorAccident.total_entries}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.motorAccident.enquiry_completed}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.motorAccident.under_investigation}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.motorAccident.under_trial}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300">वरिष्ट अर्ज नोंद</td>
                  <td className="py-2 px-4 border border-gray-300">{data.varishtArj.total_entries}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.varishtArj.enquiry_completed}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.varishtArj.under_investigation}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.varishtArj.under_trial}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300">स्थानिक अर्ज नोंद</td>
                  <td className="py-2 px-4 border border-gray-300">{data.sthanikArj.total_entries}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.sthanikArj.enquiry_completed}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.sthanikArj.under_investigation}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.sthanikArj.under_trial}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300">प्रति.कार्य.बी.एन.एस.एस १२६</td>
                  <td className="py-2 px-4 border border-gray-300">{data.bns126.total_entries}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.bns126.enquiry_completed}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.bns126.under_investigation}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.bns126.under_trial}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300">प्रति.कार्य.बी.एन.एस.एस १२८</td>
                  <td className="py-2 px-4 border border-gray-300">{data.bns128.total_entries}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.bns128.enquiry_completed}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.bns128.under_investigation}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.bns128.under_trial}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300">प्रति.कार्य.बी.एन.एस.एस १२९</td>
                  <td className="py-2 px-4 border border-gray-300">{data.bns129.total_entries}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.bns129.enquiry_completed}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.bns129.under_investigation}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.bns129.under_trial}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300">प्रति कार्य बी.एन.एस.एस</td>
                  <td className="py-2 px-4 border border-gray-300">{data.bnss.total_entries}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.bnss.enquiry_completed}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.bnss.under_investigation}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.bnss.under_trial}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300">हदपार नोंद</td>
                  <td className="py-2 px-4 border border-gray-300">{data.hadpar.total_entries}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.hadpar.enquiry_completed}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.hadpar.under_investigation}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.hadpar.under_trial}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300">अग्नि उपद्रव नोंद</td>
                  <td className="py-2 px-4 border border-gray-300">{data.agniUpdrav.total_entries}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.agniUpdrav.enquiry_completed}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.agniUpdrav.under_investigation}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.agniUpdrav.under_trial}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300">मिसिंग नोंद</td>
                  <td className="py-2 px-4 border border-gray-300">{data.missing.total_entries}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.missing.enquiry_completed}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.missing.under_investigation}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.missing.under_trial}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300">गहाळ मालाची नोंद</td>
                  <td className="py-2 px-4 border border-gray-300">{data.gahalMal.total_entries}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.gahalMal.enquiry_completed}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.gahalMal.under_investigation}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.gahalMal.under_trial}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300">इतर</td>
                  <td className="py-2 px-4 border border-gray-300">{data.itar.total_entries}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.itar.enquiry_completed}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.itar.under_investigation}</td>
                  <td className="py-2 px-4 border border-gray-300">{data.itar.under_trial}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
      <div className="text-center mt-4">
        <p className="text-gray-700">The details of all cases will appear.</p>
      </div>
    </div>
  );
};

export default Dashboard;



