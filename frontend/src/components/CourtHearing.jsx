// import React,{useState } from 'react';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';

// const CourtHearing = () => {

//   const [formData, setFormData] = useState({
//     crNoACT: '',
//     usACT: '',
//     courtHearingDate: '',
//     attendingBefore: '',
//     daysOnHandsToAttend: '',
//     dateFrom: '',
//     dateTo: ''
// });



// const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await axios.post('http://localhost:4000/api/addCourtHearingDetails', formData);
//     console.log('Form Data Submitted:', response.data);

//     setFormData({
//       crNoACT: '',
//       usACT: '',
//       courtHearingDate: '',
//       attendingBefore: '',
//       daysOnHandsToAttend: '',
//       dateFrom: '',
//       dateTo: ''
//     });

//     toast.success('Form submitted successfully!');
//   } catch (error) {
//     console.error('Error submitting form:', error);
//     toast.error('Failed to submit the form. Please try again.');
//   }
// };

//   const handleButtonClick = async () => {
//     // Create a link element
//     const link = document.createElement('a');
//     // Set the href attribute to the path of the Excel file
//     link.href = '/b2.xlsx';
//     // Set the download attribute to suggest a file name (optional)
//     link.download = 'b2.xlsx';
//     // Append the link to the body (necessary for Firefox)
//     document.body.appendChild(link);
//     // Programmatically click the link to trigger the download/open
//     link.click();
//     // Remove the link from the document
//     document.body.removeChild(link);
//    };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center justify-center space-y-8">
//     {/* Court Hearing Information */}
//     <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-lg">
//       <h1 className="text-3xl font-bold text-center mb-8">Court Hearing</h1>
      
//       <h2 className="text-2xl font-bold mb-4">Court Hearing Cases with Due Date</h2>
//       <p className="mb-8 text-gray-700">
//         Update the data as per summons received & Online Data available in Govt Portal so that IO can plan and apps can remind him.
//       </p>
  
//       {/* Court Hearing Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border rounded-lg">
//           <thead>
//             <tr>
//               <th className="px-4 py-2 border">CR No. & UTI/RCT</th>
//               <th className="px-4 py-2 border">U/S & ACT</th>
//               <th className="px-4 py-2 border">Court Hearing Date</th>
//               <th className="px-4 py-2 border">Attending Before Hon'ble</th>
//               <th className="px-4 py-2 border">Days on Hands to Attend Court</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="px-4 py-2 border">01/2024</td>
//               <td className="px-4 py-2 border">Sec 144 RA</td>
//               <td className="px-4 py-2 border">09.07.2024</td>
//               <td className="px-4 py-2 border">JMFC/BSL</td>
//               <td className="px-4 py-2 border">05</td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2 border">05/2024</td>
//               <td className="px-4 py-2 border">Sec 3 RPUP</td>
//               <td className="px-4 py-2 border">09.07.2024</td>
//               <td className="px-4 py-2 border">JMFC/BSL</td>
//               <td className="px-4 py-2 border">10</td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2 border">UTI-45</td>
//               <td className="px-4 py-2 border">R-6 RP (MIUI)</td>
//               <td className="px-4 py-2 border">06.07.2024</td>
//               <td className="px-4 py-2 border">RCT/NGP</td>
//               <td className="px-4 py-2 border">15</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
  
//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">Rules</h2>
//         <p className="text-gray-700">
//           Select a particular case and view details of Document Required List and PW Examination List.
//         </p>
//       </div>
      
//       <button
//         onClick={handleButtonClick}
//         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
//       >
//         Open Excel File
//       </button>
//     </div>
  
//     {/* Court Hearing Form */}
//     <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Court Hearing Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Cr No & ACT</label>
//           <input
//             type="text"
//             name="crNoACT"
//             value={formData.crNoACT}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
  
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">U/S & ACT</label>
//           <input
//             type="text"
//             name="usACT"
//             value={formData.usACT}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
  
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Court Hearing Date</label>
//           <input
//             type="date"
//             name="courtHearingDate"
//             value={formData.courtHearingDate}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
  
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Attending Before Hon'ble Court</label>
//           <input
//             type="text"
//             name="attendingBefore"
//             value={formData.attendingBefore}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
  
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Days On Hands To Attend Hon'ble Court</label>
//           <input
//             type="text"
//             name="daysOnHandsToAttend"
//             value={formData.daysOnHandsToAttend}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
  
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Date From</label>
//           <input
//             type="date"
//             name="dateFrom"
//             value={formData.dateFrom}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
  
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Date To</label>
//           <input
//             type="date"
//             name="dateTo"
//             value={formData.dateTo}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
  
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   </div>
  
//   );
// };

// export default CourtHearing;

//...............................................................................
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';

// const CourtHearing = () => {
//   const [formData, setFormData] = useState({
//     crNoACT: '',
//     usACT: '',
//     courtHearingDate: '',
//     attendingBefore: '',
//     daysOnHandsToAttend: '',
//     dateFrom: '',
//     dateTo: ''
//   });

//   const [courtHearings, setCourtHearings] = useState([]); // State to store fetched data
//   const [loading, setLoading] = useState(true); // State to manage loading state

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:4000/api/addCourtHearingDetails', formData);
//       console.log('Form Data Submitted:', response.data);

//       setFormData({
//         crNoACT: '',
//         usACT: '',
//         courtHearingDate: '',
//         attendingBefore: '',
//         daysOnHandsToAttend: '',
//         dateFrom: '',
//         dateTo: ''
//       });

//       toast.success('Form submitted successfully!');
//       fetchCourtHearings(); // Refresh data after form submission
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       toast.error('Failed to submit the form. Please try again.');
//     }
//   };

//   // Fetch court hearing details from the API
//   const fetchCourtHearings = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:4000/api/getCourtHearingDetails');
//       setCourtHearings(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching court hearing data:', error);
//       toast.error('Failed to load data. Please try again.');
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCourtHearings(); // Fetch data on component mount
//   }, []);

//   const handleButtonClick = () => {
//     const link = document.createElement('a');
//     link.href = '/b2.xlsx';
//     link.download = 'b2.xlsx';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center justify-center space-y-8">
//       {/* Court Hearing Information */}
//       <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold text-center mb-8">Court Hearing</h1>
        
//         <h2 className="text-2xl font-bold mb-4">Court Hearing Cases with Due Date</h2>
//         <p className="mb-8 text-gray-700">
//           Update the data as per summons received & Online Data available in Govt Portal so that IO can plan and apps can remind him.
//         </p>
    
//         {/* Court Hearing Table */}
//         <div className="overflow-x-auto">
//           {loading ? (
//             <div className="flex justify-center items-center">
//               <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
//             </div>
//           ) : (
//             <table className="min-w-full bg-white border rounded-lg">
//               <thead>
//                 <tr>
//                   <th className="px-4 py-2 border">CR No. & UTI/RCT</th>
//                   <th className="px-4 py-2 border">U/S & ACT</th>
//                   <th className="px-4 py-2 border">Court Hearing Date</th>
//                   <th className="px-4 py-2 border">Attending Before Hon'ble</th>
//                   <th className="px-4 py-2 border">Days on Hands to Attend Court</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {courtHearings.map((hearing, index) => (
//                   <tr key={index}>
//                     <td className="px-4 py-2 border">{hearing.crNoACT}</td>
//                     <td className="px-4 py-2 border">{hearing.usACT}</td>
//                     <td className="px-4 py-2 border">{hearing.courtHearingDate}</td>
//                     <td className="px-4 py-2 border">{hearing.attendingBefore}</td>
//                     <td className="px-4 py-2 border">{hearing.daysOnHandsToAttend}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
    
//         <div className="mt-8">
//           <h2 className="text-2xl font-bold mb-4">Rules</h2>
//           <p className="text-gray-700">
//             Select a particular case and view details of Document Required List and PW Examination List.
//           </p>
//         </div>
        
//         <button
//           onClick={handleButtonClick}
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
//         >
//           Open Excel File
//         </button>
//       </div>
    
//       {/* Court Hearing Form */}
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Court Hearing Form</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2">Cr No & ACT</label>
//             <input
//               type="text"
//               name="crNoACT"
//               value={formData.crNoACT}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
    
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2">U/S & ACT</label>
//             <input
//               type="text"
//               name="usACT"
//               value={formData.usACT}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
    
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2">Court Hearing Date</label>
//             <input
//               type="date"
//               name="courtHearingDate"
//               value={formData.courtHearingDate}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
    
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2">Attending Before Hon'ble Court</label>
//             <input
//               type="text"
//               name="attendingBefore"
//               value={formData.attendingBefore}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
    
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2">Days On Hands To Attend Hon'ble Court</label>
//             <input
//               type="text"
//               name="daysOnHandsToAttend"
//               value={formData.daysOnHandsToAttend}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
    
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2">Date From</label>
//             <input
//               type="date"
//               name="dateFrom"
//               value={formData.dateFrom}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
    
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2">Date To</label>
//             <input
//               type="date"
//               name="dateTo"
//               value={formData.dateTo}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
    
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default CourtHearing;

//..........................................................................

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CourtHearing = () => {
  const [formData, setFormData] = useState({
    crNoACT: '',
    usACT: '',
    courtHearingDate: '',
    attendingBefore: '',
    daysOnHandsToAttend: '',
    dateFrom: '',
    dateTo: '',
    attachment:null
  });

  const [courtHearings, setCourtHearings] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  const handleChange = (e) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    const { name, value } = e.target;
    if (name === 'attachment') {
      setFormData({
        ...formData,
        [name]: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'attachment') {
        data.append(key, formData[key]);
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post('http://localhost:4000/api/addCourtHearingDetails', data);
      console.log('Form Data Submitted:', response.data);

      setFormData({
        crNoACT: '',
        usACT: '',
        courtHearingDate: '',
        attendingBefore: '',
        daysOnHandsToAttend: '',
        dateFrom: '',
        dateTo: '',
        attachment:null
      });

      toast.success('Form submitted successfully!');
      setShowForm(false); // Hide the form after submission
      fetchCourtHearings(); // Refresh data after form submission
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit the form. Please try again.');
    }
  };

  const fetchCourtHearings = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:4000/api/getCourtHearingDetails');
      setCourtHearings(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching court hearing data:', error);
      toast.error('Failed to load data. Please try again.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourtHearings(); // Fetch data on component mount
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center justify-center space-y-8">
      {/* Court Hearing Information */}
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Court Hearing</h1>
        
        <h2 className="text-2xl font-bold mb-4">Court Hearing Cases with Due Date</h2>
        <p className="mb-8 text-gray-700">
          Update the data as per summons received & Online Data available in Govt Portal so that IO can plan and apps can remind him.
        </p>
    
        {/* Court Hearing Table */}
        <div className="overflow-x-auto">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
            </div>
          ) : (
            <table className="min-w-full bg-white border rounded-lg">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">CR No.</th>
                  <th className="px-4 py-2 border">U/S & ACT</th>
                  <th className="px-4 py-2 border">Court Hearing Date</th>
                  <th className="px-4 py-2 border">Attending Before Hon'ble</th>
                  {/* <th className="px-4 py-2 border">Days on Hands to Attend Court</th> */}
                </tr>
              </thead>
              <tbody>
                {courtHearings.map((hearing, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border">{hearing.crNoACT}</td>
                    <td className="px-4 py-2 border">{hearing.usACT}</td>
                    <td className="px-4 py-2 border">{hearing.courtHearingDate}</td>
                    <td className="px-4 py-2 border">{hearing.attendingBefore}</td>
                    {/* <td className="px-4 py-2 border">{hearing.daysOnHandsToAttend}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
    
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Rules</h2>
          <p className="text-gray-700">
            Select a particular case and view details of Document Required List and PW Examination List.
          </p>
        </div>
        
        {/* <button
          onClick={handleButtonClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Open Excel File
        </button> */}

        <button
          onClick={toggleForm}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
        >
          {showForm ? 'Hide Form' : 'Add Court Hearing'}
        </button>
      </div>
    
      {/* Inline Form */}
      {showForm && (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mt-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Court Hearing Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Cr No & ACT</label>
              <input
                type="text"
                name="crNoACT"
                value={formData.crNoACT}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
    
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">U/S & ACT</label>
              <input
                type="text"
                name="usACT"
                value={formData.usACT}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
    
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Court Hearing Date</label>
              <input
                type="date"
                name="courtHearingDate"
                value={formData.courtHearingDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
    
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Attending Before Hon'ble Court</label>
              <input
                type="text"
                name="attendingBefore"
                value={formData.attendingBefore}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
    
            {/* <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Days On Hands To Attend Hon'ble Court</label>
              <input
                type="text"
                name="daysOnHandsToAttend"
                value={formData.daysOnHandsToAttend}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div> */}
    
            {/* <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Date From</label>
              <input
                type="date"
                name="dateFrom"
                value={formData.dateFrom}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
    
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Date To</label>
              <input
                type="date"
                name="dateTo"
                value={formData.dateTo}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div> */}

            <div className='mb-4'>
              {/* <label className="block text-gray-700">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select Status</option>
                <option value="under investigation">Under Investigation</option>
                <option value="enquiry completed">Enquiry Completed</option>
                <option value="under trial">Under Trial</option>
              </select> */}

          <label className="block text-gray-700">Attachment</label>
              <input
                type="file"
                name="attachment"
                // value={formData.report}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />

              </div>
    
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default CourtHearing;
