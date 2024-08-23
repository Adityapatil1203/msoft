// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { toast, ToastContainer } from 'react-toastify';

// // //gunhaNo	certificateDenareOfficer	certificate	socialMedia	remark	dateFrom	dateTo	

// // const Achievement = () => {
// //   const [formData, setFormData] = useState({
// //     gunhaNo: '',
// //     certificateDenareOfficer:'',
// //     certificate: '',
// //     socialMedia: '',
// //     remark: '',
// //     dateFrom:'',
// //     dateTo: '',
   
// //   });

// //   const [searchTerm, setSearchTerm] = useState('');

// //     const handleSearchChange = (e) => {
// //       setSearchTerm(e.target.value);
// //     };

// //   const [achievements, setAchievements] = useState([]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await axios.post('http://localhost:4000/api/addAchievementDetails', formData);
// //       console.log('Form Data Submitted:', response.data);

// //       setFormData({
// //         gunhaNo: '',
// //         certificateDenareOfficer:'',
// //         certificate: '',
// //         socialMedia: '',
// //         remark: '',
// //         dateFrom:'',
// //         dateTo: '',
// //       });

// //       toast.success('Form submitted successfully!');
// //     } catch (error) {
// //       console.error('Error submitting form:', error);
// //       toast.error('Failed to submit the form. Please try again.');
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-4xl w-full space-y-8">

// //   <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Best Achievement</h2>
// //            {/* Date Filters */}
// //             <div className="flex  mb-4">
// //             <div className="flex flex-col">
// //               <label className="text-gray-700">Date From</label>
// //               <input
// //                 type="date"
// //                 name="dateFrom"
// //                 value={formData.dateFrom}
// //                 onChange={handleChange}
// //                 className="p-2 border border-gray-300 rounded mt-1"
// //               />
// //             </div>
// //             <div className="flex flex-col">
// //               <label className="text-gray-700">Date To</label>
// //               <input
// //                 type="date"
// //                 name="dateTo"
// //                 value={formData.dateTo}
// //                 onChange={handleChange}
// //                 className="p-2 border border-gray-300 rounded mt-1"
// //               />
// //             </div>

// //             <div className="flex flex-col ml-4">
// //               <label className="text-gray-700">Search</label>
// //               <input
// //                 type="text"
// //                 value={searchTerm}
// //                 onChange={handleSearchChange}
// //                 className="p-2 border border-gray-300 rounded mt-1"
// //                 placeholder="Search..."
// //               />
// //             </div>
// //           </div>


// //   <div className="overflow-x-auto">
// //   <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
//     // <thead className="bg-gray-50">
//     //   <tr>
//     //     <th scope="col" colSpan="3" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
//     //       तपासात चांगली कामगिरी बद्दल प्रशिस्त पत्र
//     //     </th>
//     //     <th scope="col" colSpan="1" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
//     //       विशेष कामगिरी नोंद
//     //     </th>
//     //     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
//     //       Service Book
//     //     </th>
//     //   </tr>
//     //   <tr>
//     //     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 border border-gray-300">
//     //       गुन्हा क्रमांक
//     //     </th>
//     //     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 border border-gray-300">
//     //       प्रशिस्त पत्र/मेडल देणारे अधिकारी
//     //     </th>
//     //     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 border border-gray-300">
//     //       प्रशिस्त पत्र/मेडल
//     //     </th>
//     //     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 border border-gray-300">
//     //       सोशल मीडिया कवर
//     //     </th>
//     //     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 border border-gray-300">
//     //       वरिष्ठ अधिकारी शेरा
//     //     </th>
//     //     {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 border border-gray-300">
//     //        Placeholder for checkbox 
//     //     </th> */}
//     //   </tr>
//     // </thead>
//     // <tbody className="bg-white divide-y divide-gray-200">
//     //   {achievements?.map((ach, index) => (
//     //     <tr >
//     //       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
//     //         {ach.gunhaNo}
//     //       </td>
//     //       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
//     //         {/* {ach.certificateDenareOfficer} */}d,nc
//     //       </td>
//     //       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
//     //         {ach.certificate}
//     //       </td>
//     //       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
//     //         {ach.socialMedia}
//     //       </td>
//     //       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
//     //         {ach.remark}
//     //       </td>
//     //       {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
//     //         <input type="checkbox" disabled className="form-checkbox h-5 w-5 text-blue-600" />
//     //       </td> */}
//     //     </tr>
//     //    ))}
//     // </tbody>
// //   </table>
// // </div>





// //         <div className="bg-white p-6 rounded shadow-md">

  
// //            {/* <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
// //            Achievement
// //           </h2>  */}
//           // <form onSubmit={handleSubmit} className="space-y-6">
//           //   <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//           //     <div className="mb-4">
//           //       <label className="block text-gray-700">गुन्हा क्रमांक</label>
//           //       <input
//           //         type="text"
//           //         name="gunhaNo"
//           //         value={formData.gunhaNo}
//           //         onChange={handleChange}
//           //         className="w-full p-2 border border-gray-300 rounded mt-1"
//           //       />
//           //     </div>

//           //     <div className="mb-4">
//           //       <label className="block text-gray-700">प्रशिस्त पत्र/मेडल देणारे अधिकारी</label>
//           //       <input
//           //         type="text"
//           //         name="certificateDenareOfficer"
//           //         value={formData.certificateDenareOfficer}
//           //         onChange={handleChange}
//           //         className="w-full p-2 border border-gray-300 rounded mt-1"
//           //       />
//           //     </div>

//           //     <div className="mb-4">
//           //       <label className="block text-gray-700">प्रशिस्त पत्र/मेडल</label>
//           //       <input
//           //         type="text"
//           //         name="certificate"
//           //         value={formData.certificate}
//           //         onChange={handleChange}
//           //         className="w-full p-2 border border-gray-300 rounded mt-1"
//           //       />
//           //     </div>
//           //   </div>

//           //   <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//           //     <div className="mb-4">
//           //       <label className="block text-gray-700">सोशल मीडिया कवर</label>
//           //       <input
//           //         type="text"
//           //         name="socialMedia"
//           //         value={formData.socialMedia}
//           //         onChange={handleChange}
//           //         className="w-full p-2 border border-gray-300 rounded mt-1"
//           //       />
//           //     </div>
//           //     <div className="mb-4">
//           //       <label className="block text-gray-700">वरिष्ठ अधिकारी शेरा </label>
//           //       <input
//           //         type="text"
//           //         name="remark"
//           //         value={formData.remark}
//           //         onChange={handleChange}
//           //         className="w-full p-2 border border-gray-300 rounded mt-1"
//           //       />
//           //     </div>

//           //     <div className="mb-4">
//           //       <label className="block text-gray-700">Date From</label>
//           //       <input
//           //         type="date"
//           //         name="dateFrom"
//           //         value={formData.dateFrom}
//           //         onChange={handleChange}
//           //         className="w-full p-2 border border-gray-300 rounded mt-1"
//           //       />
//           //     </div>

//           //     <div className="mb-4">
//           //     <label className="block text-gray-700">Date To</label>
//           //     <input
//           //       type="date"
//           //       name="dateTo"
//           //       value={formData.dateTo}
//           //       onChange={handleChange}
//           //       className="w-full p-2 border border-gray-300 rounded mt-1"
//           //     />
//           //   </div>           

//           //   </div>

//           //   <div className="text-center">
//           //     <button
//           //       type="submit"
//           //       className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//           //     >
//           //       Submit
//           //     </button>
//           //   </div>
//           // </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Achievement;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Achievement = () => {
//   const [formData, setFormData] = useState({
//     gunhaNo: '',
//     certificateDenareOfficer: '',
//     certificate: '',
//     socialMedia: '',
//     remark: '',
//     dateFrom: '',
//     dateTo: '',
//   });

//   const [showForm, setShowForm] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [achievements, setAchievements] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4000/api/addAchievementDetails', formData);
//       console.log('Form Data Submitted:', response.data);
//       setFormData({
//         gunhaNo: '',
//         certificateDenareOfficer: '',
//         certificate: '',
//         socialMedia: '',
//         remark: '',
//         dateFrom: '',
//         dateTo: '',
//       });
//       setShowForm(false)
//       toast.success('Form submitted successfully!');
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       toast.error('Failed to submit the form. Please try again.');
//     }
//   };

//   const toggleForm = () => {
//     setShowForm(!showForm);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl w-full space-y-8">
//         <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Best Achievement</h2>
        // <button onClick={toggleForm} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-4">
        //   {showForm ? 'Hide Form' : 'Add Achievement'}
        // </button>

        // {showForm && (
        //   <div className="bg-white p-6 rounded shadow-md">
        //              <form onSubmit={handleSubmit} className="space-y-6">
        //     <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

        //       <div className="mb-4">
        //         <label className="block text-gray-700">गुन्हा क्रमांक</label>
        //         <input
        //           type="text"
        //           name="gunhaNo"
        //           value={formData.gunhaNo}
        //           onChange={handleChange}
        //           className="w-full p-2 border border-gray-300 rounded mt-1"
        //         />
        //       </div>

        //       <div className="mb-4">
        //         <label className="block text-gray-700">प्रशिस्त पत्र/मेडल देणारे अधिकारी</label>
        //         <input
        //           type="text"
        //           name="certificateDenareOfficer"
        //           value={formData.certificateDenareOfficer}
        //           onChange={handleChange}
        //           className="w-full p-2 border border-gray-300 rounded mt-1"
        //         />
        //       </div>

        //       <div className="mb-4">
        //         <label className="block text-gray-700">प्रशिस्त पत्र/मेडल</label>
        //         <input
        //           type="text"
        //           name="certificate"
        //           value={formData.certificate}
        //           onChange={handleChange}
        //           className="w-full p-2 border border-gray-300 rounded mt-1"
        //         />
        //       </div>
        //     </div>

        //     <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        //       <div className="mb-4">
        //         <label className="block text-gray-700">सोशल मीडिया कवर</label>
        //         <input
        //           type="text"
        //           name="socialMedia"
        //           value={formData.socialMedia}
        //           onChange={handleChange}
        //           className="w-full p-2 border border-gray-300 rounded mt-1"
        //         />
        //       </div>
        //       <div className="mb-4">
        //         <label className="block text-gray-700">वरिष्ठ अधिकारी शेरा </label>
        //         <input
        //           type="text"
        //           name="remark"
        //           value={formData.remark}
        //           onChange={handleChange}
        //           className="w-full p-2 border border-gray-300 rounded mt-1"
        //         />
        //       </div>

        //       <div className="mb-4">
        //         <label className="block text-gray-700">Date From</label>
        //         <input
        //           type="date"
        //           name="dateFrom"
        //           value={formData.dateFrom}
        //           onChange={handleChange}
        //           className="w-full p-2 border border-gray-300 rounded mt-1"
        //         />
        //       </div>

        //       <div className="mb-4">
        //       <label className="block text-gray-700">Date To</label>
        //       <input
        //         type="date"
        //         name="dateTo"
        //         value={formData.dateTo}
        //         onChange={handleChange}
        //         className="w-full p-2 border border-gray-300 rounded mt-1"
        //       />
        //     </div>           

        //     </div>

        //     <div className="text-center">
        //       <button
        //         type="submit"
        //         className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        //       >
        //         Submit
        //       </button>
        //     </div>
        //   </form>
        //   </div>
        // )}

//         <div className="flex flex-col mb-4">

//           <div className='flex flex-row'>
//           <div className="flex flex-col">
//             <label className="text-gray-700">Date From</label>
//             <input
//               type="date"
//               name="dateFrom"
//               value={formData.dateFrom}
//               onChange={handleChange}
//               className="p-2 border border-gray-300 rounded mt-1"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-gray-700">Date To</label>
//             <input
//               type="date"
//               name="dateTo"
//               value={formData.dateTo}
//               onChange={handleChange}
//               className="p-2 border border-gray-300 rounded mt-1"
//             />
//           </div>
//           </div>
//           <div className="flex flex-col ml-4">
//             <label className="text-gray-700">Search</label>
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleSearchChange}
//               className="p-2 border w-full border-gray-300 rounded mt-1 max-w-xs"
//               placeholder="Search..."
//             />
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
//           <thead className="bg-gray-50">
//       <tr>
//         <th scope="col" colSpan="3" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
//           तपासात चांगली कामगिरी बद्दल प्रशिस्त पत्र
//         </th>
//         <th scope="col" colSpan="1" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
//           विशेष कामगिरी नोंद
//         </th>
//         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
//           Service Book
//         </th>
//       </tr>
//       <tr>
//         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 border border-gray-300">
//           गुन्हा क्रमांक
//         </th>
//         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 border border-gray-300">
//           प्रशिस्त पत्र/मेडल देणारे अधिकारी
//         </th>
//         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 border border-gray-300">
//           प्रशिस्त पत्र/मेडल
//         </th>
//         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 border border-gray-300">
//           सोशल मीडिया कवर
//         </th>
//         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 border border-gray-300">
//           वरिष्ठ अधिकारी शेरा
//         </th>
        
//       </tr>
//     </thead>
//     <tbody className="bg-white divide-y divide-gray-200">
//       {achievements?.map((ach, index) => (
//         <tr >
//           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
//             {ach.gunhaNo}
//           </td>
//           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
//             {ach.certificateDenareOfficer}
//           </td>
//           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
//             {ach.certificate}
//           </td>
//           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
//             {ach.socialMedia}
//           </td>
//           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
//             {ach.remark}
//           </td>
         
//         </tr>
//        ))}
//     </tbody>
//           </table>
//         </div>

//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default Achievement;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Achievement = () => {
//   const [formData, setFormData] = useState({
//     gunhaNo: '',
//     certificateDenareOfficer: '',
//     certificate: '',
//     socialMedia: '',
//     remark: '',
//     dateFrom: '',
//     dateTo: '',
//   });

//   const [searchTerm, setSearchTerm] = useState('');
//   const [achievements, setAchievements] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showForm, setShowForm] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const toggleForm = ()=>{
//     setShowForm(prev=>!prev)
//   }
//   const fetchAchievements = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:4000/api/getAchievementDetails', {
//         params: {
//           searchTerm,
//           dateFrom: formData.dateFrom,
//           dateTo: formData.dateTo,
//         },
//       });
//       setAchievements(response.data);
//       setLoading(false);
//       setShowForm(false)
//     } catch (error) {
//       console.error('Error fetching achievements:', error);
//       toast.error('Failed to fetch achievements. Please try again.');
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAchievements();
//   }, [searchTerm, formData.dateFrom, formData.dateTo]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4000/api/addAchievementDetails', formData);
//       console.log('Form Data Submitted:', response.data);
//       setFormData({
//         gunhaNo: '',
//         certificateDenareOfficer: '',
//         certificate: '',
//         socialMedia: '',
//         remark: '',
//         dateFrom: '',
//         dateTo: '',
//       });
//       fetchAchievements();
//       toast.success('Form submitted successfully!');
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       toast.error('Failed to submit the form. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl w-full space-y-8">
//         <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Best Achievement</h2>
//         <button onClick={toggleForm} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-4">
//           {showForm ? 'Hide Form' : 'Add Achievement'}
//         </button>

//         {showForm && (
//           <div className="bg-white p-6 rounded shadow-md">
//                      <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

//               <div className="mb-4">
//                 <label className="block text-gray-700">गुन्हा क्रमांक</label>
//                 <input
//                   type="text"
//                   name="gunhaNo"
//                   value={formData.gunhaNo}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded mt-1"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-gray-700">प्रशिस्त पत्र/मेडल देणारे अधिकारी</label>
//                 <input
//                   type="text"
//                   name="certificateDenareOfficer"
//                   value={formData.certificateDenareOfficer}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded mt-1"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-gray-700">प्रशिस्त पत्र/मेडल</label>
//                 <input
//                   type="text"
//                   name="certificate"
//                   value={formData.certificate}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded mt-1"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//               <div className="mb-4">
//                 <label className="block text-gray-700">सोशल मीडिया कवर</label>
//                 <input
//                   type="text"
//                   name="socialMedia"
//                   value={formData.socialMedia}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded mt-1"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">वरिष्ठ अधिकारी शेरा </label>
//                 <input
//                   type="text"
//                   name="remark"
//                   value={formData.remark}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded mt-1"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-gray-700">Date From</label>
//                 <input
//                   type="date"
//                   name="dateFrom"
//                   value={formData.dateFrom}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded mt-1"
//                 />
//               </div>

//               <div className="mb-4">
//               <label className="block text-gray-700">Date To</label>
//               <input
//                 type="date"
//                 name="dateTo"
//                 value={formData.dateTo}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded mt-1"
//               />
//             </div>           

//             </div>

//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//           </div>
//         )}
//         <div className="flex flex-col mb-4">
//           <div className='flex flex-row'>
//             <div className="flex flex-col">
//               <label className="text-gray-700">Date From</label>
//               <input
//                 type="date"
//                 name="dateFrom"
//                 value={formData.dateFrom}
//                 onChange={handleChange}
//                 className="p-2 border border-gray-300 rounded mt-1"
//               />
//             </div>
//             <div className="flex flex-col">
//               <label className="text-gray-700">Date To</label>
//               <input
//                 type="date"
//                 name="dateTo"
//                 value={formData.dateTo}
//                 onChange={handleChange}
//                 className="p-2 border border-gray-300 rounded mt-1"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col ml-4">
//             <label className="text-gray-700">Search</label>
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleSearchChange}
//               className="p-2 border w-full border-gray-300 rounded mt-1 max-w-xs"
//               placeholder="Search..."
//             />
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th colSpan="3" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
//                   तपासात चांगली कामगिरी बद्दल प्रशिस्त पत्र
//                 </th>
//                 <th colSpan="1" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
//                   विशेष कामगिरी नोंद
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
//                   Service Book
//                 </th>
//               </tr>
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 border border-gray-300">
//                   गुन्हा क्रमांक
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 border border-gray-300">
//                   प्रशिस्त पत्र/मेडल देणारे अधिकारी
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 border border-gray-300">
//                   प्रशिस्त पत्र/मेडल
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 border border-gray-300">
//                   सोशल मीडिया कवर
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 border border-gray-300">
//                   वरिष्ठ अधिकारी शेरा
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {loading ? (
//                 <tr>
//                   <td colSpan="5" className="text-center py-4">
//                     <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mx-auto"></div>
//                   </td>
//                 </tr>
//               ) : (
//                 achievements.map((ach, index) => (
//                   <tr key={index}>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
//                       {ach.gunhaNo}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
//                       {ach.certificateDenareOfficer}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
//                       {ach.certificate}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
//                       {ach.socialMedia}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
//                       {ach.remark}
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default Achievement;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Achievement = () => {
  const [formData, setFormData] = useState({
    gunhaNo: '',
    certificateDenareOfficer: '',
    certificate: '',
    socialMedia: '',
    remark: '',
    dateFrom: '',
    dateTo: '',
    attachment:null
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [searchDateFrom, setSearchDateFrom] = useState('');
  const [searchDateTo, setSearchDateTo] = useState('');

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const fetchAchievements = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:4000/api/getAchievementDetails', {
        params: {
          searchTerm,
          dateFrom: searchDateFrom,
          dateTo: searchDateTo,
        },
      });
      setAchievements(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching achievements:', error);
      toast.error('Failed to fetch achievements. Please try again.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAchievements();
  }, [searchTerm, searchDateFrom, searchDateTo]);

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
      const response = await axios.post('http://localhost:4000/api/addAchievementDetails', data);
      console.log('Form Data Submitted:', response.data);
      setFormData({
        gunhaNo: '',
        certificateDenareOfficer: '',
        certificate: '',
        socialMedia: '',
        remark: '',
        dateFrom: '',
        dateTo: '',
        attachment:null
      });
      setShowForm(false)
      toast.success('Form submitted successfully!');
      fetchAchievements(); // Re-fetch the data after form submission
    } catch (error) {
      setShowForm(false)
      console.error('Error submitting form:', error);
      toast.error('Failed to submit the form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Best Achievement</h2>
        <button onClick={toggleForm} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-4">
          {showForm ? 'Hide Form' : 'Add Achievement'}
        </button>

        {showForm && (
          <div className="bg-white p-6 rounded shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="mb-4">
                  <label className="block text-gray-700">गुन्हा क्रमांक</label>
                  <input
                    type="text"
                    name="gunhaNo"
                    value={formData.gunhaNo}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">प्रशिस्त पत्र/मेडल देणारे अधिकारी</label>
                  <input
                    type="text"
                    name="certificateDenareOfficer"
                    value={formData.certificateDenareOfficer}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">प्रशिस्त पत्र/मेडल</label>
                  <input
                    type="text"
                    name="certificate"
                    value={formData.certificate}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="mb-4">
                  <label className="block text-gray-700">सोशल मीडिया कवर</label>
                  <input
                    type="text"
                    name="socialMedia"
                    value={formData.socialMedia}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">वरिष्ठ अधिकारी शेरा </label>
                  <input
                    type="text"
                    name="remark"
                    value={formData.remark}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Date From</label>
                  <input
                    type="date"
                    name="dateFrom"
                    value={formData.dateFrom}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Date To</label>
                  <input
                    type="date"
                    name="dateTo"
                    value={formData.dateTo}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </div>
                <div className='mb-4'>
                <label className="block text-gray-700">Attachment</label>
                  <input
                    type="file"
                    name="attachment"
                    // value={formData.report}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="flex flex-col mb-4">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <label className="text-gray-700">Search Date From</label>
              <input
                type="date"
                name="searchDateFrom"
                value={searchDateFrom}
                onChange={(e) => setSearchDateFrom(e.target.value)}
                className="p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700">Search Date To</label>
              <input
                type="date"
                name="searchDateTo"
                value={searchDateTo}
                onChange={(e) => setSearchDateTo(e.target.value)}
                className="p-2 border border-gray-300 rounded mt-1"
              />
            </div>
          </div>
          <div className="flex flex-col ml-4">
            <label className="text-gray-700">Search</label>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              className="p-2 border w-full border-gray-300 rounded mt-1 max-w-xs"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th colSpan="3" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                  तपासात चांगली कामगिरी बद्दल प्रशिस्त पत्र
                </th>
                <th colSpan="1" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                  विशेष कामगिरी नोंद
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                  Service Book
                </th>
              </tr>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 border border-gray-300">
                  गुन्हा क्रमांक
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 border border-gray-300">
                  प्रशिस्त पत्र/मेडल देणारे अधिकारी
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 border border-gray-300">
                  प्रशिस्त पत्र/मेडल
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 border border-gray-300">
                  सोशल मीडिया कवर
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 border border-gray-300">
                  वरिष्ठ अधिकारी शेरा
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mx-auto"></div>
                  </td>
                </tr>
              ) : (
                achievements.map((ach, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                      {ach.gunhaNo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                      {ach.certificateDenareOfficer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                      {ach.certificate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                      {ach.socialMedia}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                      {ach.remark}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Achievement;


