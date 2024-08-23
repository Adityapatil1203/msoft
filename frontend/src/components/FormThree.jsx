import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const FormThree = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    motorApghatDakhalNo:''	,
    dateTime:'',
    apghatGhadleliDateTime:''	,
    apghatacheThikanPoliceStationDistance:''	,
    vahnachaPrakarAniNondaniNo:'',
     khabarDenaryacheSampurnnavAniPatta:'',
     jakhamiIsmacheNavAniPatta:'',
     apghatacheKaran:'',
      tapasikAniDakhalKarnarya :'',
      apghatachePrakar:'',
      apghatDakhalpatrKaAdalhalpatr:'',
      apghatacheVargikaran:'',
      apghatacheVargikarandate:'',
      dyspNo:'',
      dyspDate:'',
      remark:'',
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
  //   motorApghatDakhalNo:formData.motorApghatDakhalNo,
  //   dateTime: formData.dateTime ,
  //   apghatGhadleliDateTime : formData.apghatGhadleliDateTime ,
  //   apghatacheThikanPoliceStationDistance : formData.apghatacheThikanPoliceStationDistance ,
  //   vahnachaPrakarAniNondaniNo : formData.vahnachaPrakarAniNondaniNo ,
  //   khabarDenaryacheSampurnnavAniPatta: formData.khabarDenaryacheSampurnnavAniPatta ,
  //   jakhamiIsmacheNavAniPatta: formData.jakhamiIsmacheNavAniPatta ,
  //   apghatacheKaran : formData.apghatacheKaran ,
  //   tapasikAniDakhalKarnarya : formData.tapasikAniDakhalKarnarya ,
  //   apghatachePrakar: formData.apghatachePrakar ,
  //   apghatDakhalpatrKaAdalhalpatr: formData.apghatDakhalpatrKaAdalhalpatr ,
  //   apghatacheVargikaran: formData.apghatacheVargikaran ,
  //   apghatacheVargikarandate: formData.apghatacheVargikarandate ,
  //   dyspNo: formData.dyspNo,
  //   dyspDate:formData.dyspDate,
  //   remark:formData.remark
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
    const response = await axios.post('http://localhost:4000/api/addMotorAccident', data);
    console.log('Form Data Submitted:', response.data);

    // Reset state variables after successful submission
    setFormData({
      motorApghatDakhalNo:'',
      dateTime:'',
      apghatGhadleliDateTime: '', 
      apghatacheThikanPoliceStationDistance: '', 
      vahnachaPrakarAniNondaniNo: '',
      khabarDenaryacheSampurnnavAniPatta: '',
      jakhamiIsmacheNavAniPatta: '',
      apghatacheKaran: '', 
      tapasikAniDakhalKarnarya: '', 
      apghatachePrakar: '', 
      apghatDakhalpatrKaAdalhalpatr: '', 
      apghatacheVargikaran: '', 
      apghatacheVargikarandate: '', 
      dyspNo: '', 
      dyspDate: '', 
      remark: '', 
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
             Motor Apghat Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">मोटार अपघात दाखल नं</label>
                <input
                  type="text"
                  name="motorApghatDakhalNo"
                  value={formData.motorApghatDakhalNo}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">दिनांक व वेळ</label>
                <input
                  type="datetime-local"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">अपघात घडलेली दिनांक व वेळ</label>
                <input
                  type="datetime-local"
                  name="apghatGhadleliDateTime"
                  value={formData.apghatGhadleliDateTimee}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">अपघाताचे ठिकाण</label>
                <input
                  type="text"
                  name="apghatacheThikanPoliceStationDistance"
                  value={formData.apghatacheThikanPoliceStationDistance}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">वाहनाचा प्रकार व नोंदणी क्रमांक</label>
                <input
                  type="text"
                  name="vahnachaPrakarAniNondaniNo"
                  value={formData.vahnachaPrakarAniNondaniNo}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">खबर देणाऱ्याचे संपूर्ण नाव व राहण्याचे ठिकाण</label>
                <input
                  type="text"
                  name="khabarDenaryacheSampurnnavAniPatta"
                  value={formData.khabarDenaryacheSampurnnavAniPatta}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

             
              <div className="mb-4">
                <label className="block text-gray-700">जखमी इसमाचे संपूर्ण नाव व पत्ता</label>
                <input
                  type="text"
                  name="jakhamiIsmacheNavAniPatta"
                  value={formData.jakhamiIsmacheNavAniPatta}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>


             
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="mb-4">
                <label className="block text-gray-700">अपघाताचे कारण संक्षिप्त हकीकत</label>
                <input
                  type="text"
                  name="apghatacheKaran"
                  value={formData.apghatacheKaran}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">तपासिक व दाखल करणाऱ्या अंमलदार चे नाव</label>
                <input
                  type="text"
                  name="tapasikAniDakhalKarnarya"
                  value={formData.tapasikAniDakhalKarnarya}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
             
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="mb-4">
                <label className="block text-gray-700">अपघाताचा प्रकार</label>
                <input
                  type="text"
                  name="apghatachePrakar"
                  value={formData.apghatachePrakar}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">दखलपत्र व अदखलपत्र गुन्हा नोंद क्रमांक व कलम </label>
                <input
                  type="text"
                  name="apghatDakhalpatrKaAdalhalpatr"
                  value={formData.apghatDakhalpatrKaAdalhalpatr}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
             
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="mb-4">
                <label className="block text-gray-700">पोलिस अधिकारी यांना रिपोर्ट केल्याचा क्रमांक</label>
                <input
                  type="text"
                  name="apghatacheVargikaran"
                  value={formData.apghatacheVargikaran}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">पोलिस अधिकारी यांना रिपोर्ट केल्याचा तारीख</label>
                <input
                  type="text"
                  name="apghatacheVargikarandate"
                  value={formData.apghatacheVargikarandate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              
            </div>

            <div className="mb-4">
            <div className="mb-4">
                <label className="block text-gray-700">कोणता अपघात मंजूर झाला याचा क्रमांक</label>
                <input
                  type="text"
                  name="dyspNo"
                  value={formData.dyspNo}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">कोणता अपघात मंजूर झाला तारीख</label>
                <input
                  type="date"
                  name="dyspDate"
                  value={formData.dyspDate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <label className="block text-gray-700">शेरा</label>
              <input
                type="text"
                name="remark"
                value={formData.remark}
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

 export default FormThree;

