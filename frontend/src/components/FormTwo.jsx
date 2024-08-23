// import React, { useState } from 'react';

// const FormTwo = () => {
//   const [formData, setFormData] = useState({
//     srNo: '',
//     gunhaNo: '',
//     gunhaNondDinaank: '',
//     firyadiNav: '',
//     aropiNav: '',
//     gunhaShirshak: '',
//     gunhaGhatnachaThikaan: '',
//     gunhaGhatnachaKalawadhi: '',
//     gunhaShikayatichiMahiti: '',
//     gunhaNondNivada: '',
//     tapsilNav: '',
//     tapsilPata: '',
//     tapsilZilla: '',
//     tapsilTaluka: '',
//     tapsilRajya: '',
//     tapsilPinCode: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data Submitted:', formData);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl w-full space-y-8">
//         <div className="bg-white p-6 rounded shadow-md">
//           <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
//             Gunha Nond Form
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//               <div className="mb-4">
//                 <label className="block text-gray-700">
//                 मयत दाखवल करणरा अमलदार</label>
//                 <input
//                   type="text"
//                   name="srNo"
//                   value={formData.srNo}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded mt-1"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">मयत झाल्याचा दिनांक व वेळ</label>
//                 <input
//                   type="text"
//                   name="gunhaNo"
//                   value={formData.gunhaNo}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded mt-1"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//               <div className="mb-4">
//                 <label className="block text-gray-700">मयत दाखल दिनांक व वेळ</label>
//                 <input
//                   type="text"
//                   name="gunhaNondDinaank"
//                   value={formData.gunhaNondDinaank}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded mt-1"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">मयत झाल्याचे ठिकाण, दिशा, आणि पोलिस ठाण्यापासूनचे अंतर</label>
//                 <input
//                   type="text"
//                   name="firyadiNav"
//                   value={formData.firyadiNav}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded mt-1"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//               <div className="mb-4">
//                 <label className="block text-gray-700">मयताचे खबर देणाऱ्याचे संपूर्ण नाव व राहण्याचे ठिकाण</label>
//                 <input
//                   type="text"
//                   name="aropiNav"
//                   value={formData.aropiNav}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded mt-1"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">मयताचे इसमाचे संपूर्ण नाव, वय, व राहण्याचे ठिकाण</label>
//                 <input
//                   type="text"
//                   name="gunhaShirshak"
//                   value={formData.gunhaShirshak}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded mt-1"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//               <div className="mb-4">
//                 <label className="block text-gray-700">मयताचे लिंग</label>
//                 <input
//                   type="text"
//                   name="gunhaGhatnachaThikaan"
//                   value={formData.gunhaGhatnachaThikaan}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded mt-1"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">स्त्री मयत असल्यास ती विवाहित की अविवाहित</label>
//                 <input
//                   type="text"
//                   name="gunhaGhatnachaKalawadhi"
//                   value={formData.gunhaGhatnachaKalawadhi}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded mt-1"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//               <div className="mb-4">
//                 <label className="block text-gray-700">पोस्टमॉर्टम झाले / नाही</label>
//                 <input
//                   type="text"
//                   name="gunhaShikayatichiMahiti"
//                   value={formData.gunhaShikayatichiMahiti}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded mt-1"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">मूठमातीस परवानगी</label>
//                 <input
//                   type="text"
//                   name="gunhaNondNivada"
//                   value={formData.gunhaNondNivada}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded mt-1"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//               <div className="mb-4">
//                 <label className="block text-gray-700">मयताचे कारण</label>
//                 <input
//                   type="text"
//                   name="tapsilNav"
//                   value={formData.tapsilNav}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded mt-1"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">मयत कोणास तपसास दिले</label>
//                 <input
//                   type="text"
//                   name="tapsilPata"
//                   value={formData.tapsilPata}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded mt-1"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//               <div className="mb-4">
//                 <label className="block text-gray-700">अखेर रिपोर्ट पाठविल्याची दिनांक</label>
//                 <input
//                   type="text"
//                   name="tapsilZilla"
//                   value={formData.tapsilZilla}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded mt-1"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">शेरा</label>
//                 <input
//                   type="text"
//                   name="tapsilTaluka"
//                   value={formData.tapsilTaluka}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded mt-1"
//                 />
//               </div>
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
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormTwo;


import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const FormTwo = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    mayatDakhalKarnaraAmaldar: '', 
    mayatDakhalZalyachaDateTime: '', 
    mayatDakhalKelyachaDateTime: '',
    mayatGhadlyacheThikanDishaAniPoliceThanepasunAntar: '',
    mayatachekhabarinfo:'',
    mayatIsmacheSampurnNavAniRahnyacheThikan: '', 
    gender: '', 
    MaritalStatus: '', 
    postmortem: '', 
    muthmatisParvangi: '', 
    maytacheKaran: '', 
    mayatKonasTapasasDile: '', 
    akherReportSendKelyacheDateTime: '', 
    report: '', 
    status: '',
    attachment: null,
  });

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setFormData({
    //   ...formData,
    //   [name]: value,
    // });
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

  // Construct formData object
  // const data = {
  //   mayatDakhalKarnaraAmaldar:formData.mayatDakhalKarnaraAmaldar,
  //   mayatDakhalZalyachaDateTime: formData.mayatDakhalZalyachaDateTime ,
  //   mayatDakhalKelyachaDateTime : formData.mayatDakhalKelyachaDateTime ,
  //   mayatGhadlyacheThikanDishaAniPoliceThanepasunAntar : formData.mayatGhadlyacheThikanDishaAniPoliceThanepasunAntar ,
  //   mayatachekhabarinfo : formData.mayatachekhabarinfo ,
  //   mayatIsmacheSampurnNavAniRahnyacheThikan: formData.mayatIsmacheSampurnNavAniRahnyacheThikan ,
  //   gender: formData.gender ,
  //   MaritalStatus : formData.MaritalStatus ,
  //   postmortem : formData.postmortem ,
  //   muthmatisParvangi: formData.muthmatisParvangi ,
  //   maytacheKaran: formData.maytacheKaran ,
  //   mayatKonasTapasasDile: formData.mayatKonasTapasasDile ,
  //   akherReportSendKelyacheDateTime: formData.akherReportSendKelyacheDateTime ,
  //   report: formData.report,
  //   status: formData.status,
  //   attachment: formData.attachment,
  // };

  const data = new FormData();
  Object.keys(formData).forEach(key => {
    if (key === 'attachment') {
      data.append(key, formData[key]);
    } else {
      data.append(key, formData[key]);
    }
  });

  try {
    // Make the POST request
    const response = await axios.post('http://localhost:4000/api/addAksmat', data);
    console.log('Form Data Submitted:', response.data);

    // Reset state variables after successful submission
    setFormData({
      mayatDakhalKarnaraAmaldar: '', 
      mayatDakhalZalyachaDateTime: '', 
      mayatDakhalKelyachaDateTime: '',
      mayatGhadlyacheThikanDishaAniPoliceThanepasunAntar: '',
      mayatachekhabarinfo: '',
      mayatIsmacheSampurnNavAniRahnyacheThikan: '', 
      gender: '', 
      MaritalStatus: '', 
      postmortem: '', 
      muthmatisParvangi: '', 
      maytacheKaran: '', 
      mayatKonasTapasasDile: '', 
      akherReportSendKelyacheDateTime: '', 
      report: '', 
      status:'',
      attachment:null
    });

    // Show success notification
    toast.success('Form submitted successfully!');
    onSubmit()
    
  } catch (error) {
    console.error('Error submitting form:', error);
    
    // Show error notification
    toast.error('Failed to submit the form. Please try again.');
  }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
            Gunha Nond Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">मयत दाखवल करणरा अमलदार</label>
                <input
                  type="text"
                  name="mayatDakhalKarnaraAmaldar"
                  value={formData.mayatDakhalKarnaraAmaldar}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">मयत झाल्याचा दिनांक व वेळ</label>
                <input
                  type="datetime-local"
                  name="mayatDakhalZalyachaDateTime"
                  value={formData.mayatDakhalZalyachaDateTime}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">मयत दाखल दिनांक व वेळ</label>
                <input
                  type="datetime-local"
                  name="mayatDakhalKelyachaDateTime"
                  value={formData.mayatDakhalKelyachaDateTime}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">मयत झाल्याचे ठिकाण, दिशा, आणि पोलिस ठाण्यापासूनचे अंतर</label>
                <input
                  type="text"
                  name="mayatGhadlyacheThikanDishaAniPoliceThanepasunAntar"
                  value={formData.mayatGhadlyacheThikanDishaAniPoliceThanepasunAntar}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">मयताचे खबर देणाऱ्याचे संपूर्ण नाव व राहण्याचे ठिकाण</label>
                <input
                  type="text"
                  name="mayatachekhabarinfo"
                  value={formData.mayatachekhabarinfo}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

             
              <div className="mb-4">
                <label className="block text-gray-700">मयताचे इसमाचे संपूर्ण नाव, वय, व राहण्याचे ठिकाण</label>
                <input
                  type="text"
                  name="mayatIsmacheSampurnNavAniRahnyacheThikan"
                  value={formData.mayatIsmacheSampurnNavAniRahnyacheThikan}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>


             
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="mb-4">
                <label className="block text-gray-700">मयताचे लिंग</label>
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">स्त्री मयत असल्यास ती विवाहित की अविवाहित</label>
                <input
                  type="text"
                  name="MaritalStatus"
                  value={formData.MaritalStatus}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
             
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="mb-4">
                <label className="block text-gray-700">पोस्टमॉर्टम झाले / नाही</label>
                <input
                  type="text"
                  name="postmortem"
                  value={formData.postmortem}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">मूठमातीस परवानगी</label>
                <input
                  type="text"
                  name="muthmatisParvangi"
                  value={formData.muthmatisParvangi}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
             
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="mb-4">
                <label className="block text-gray-700">मयताचे कारण</label>
                <input
                  type="text"
                  name="maytacheKaran"
                  value={formData.maytacheKaran}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">मयत कोणास तपसास दिले</label>
                <input
                  type="text"
                  name="mayatKonasTapasasDile"
                  value={formData.mayatKonasTapasasDile}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              
            </div>

            <div className="mb-4">
            <div className="mb-4">
                <label className="block text-gray-700">अखेर रिपोर्ट पाठविल्याची दिनांक</label>
                <input
                  type="date"
                  name="akherReportSendKelyacheDateTime"
                  value={formData.akherReportSendKelyacheDateTime}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <label className="block text-gray-700">शेरा</label>
              <input
                type="text"
                name="report"
                value={formData.report}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />

            <label className="block text-gray-700">Status</label>
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
              </select>

          <label className="block text-gray-700">Attachment</label>
              <input
                type="file"
                name="attachment"
                // value={formData.report}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
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
       </div>
     </div>
   );
 };

 export default FormTwo;

