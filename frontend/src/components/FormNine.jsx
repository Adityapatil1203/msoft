
import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

// [9:25 am, 14/08/2024] Aditya Patil: दिनांक
// [9:26 am, 14/08/2024] Aditya Patil: पोलिस ठाणे दैनंदिनी नोंद क्रमांक
// [9:26 am, 14/08/2024] Aditya Patil: वेळ
// [9:27 am, 14/08/2024] Aditya Patil: वर्दी देणाऱ्या इसमाचे नाव व पत्ता
// [9:27 am, 14/08/2024] Aditya Patil: ज्या ठिकाणी माल गहाळ झाला ते ठिकाण
// [9:28 am, 14/08/2024] Aditya Patil: गहाळ झालेल्या मालाचे संक्षिप्त वर्णन
// [9:28 am, 14/08/2024] Aditya Patil: किंमत
// [9:29 am, 14/08/2024] Aditya Patil: गहाळ झालेल्या माल ओळखणाऱ्या इसामाचे नाव
// [9:29 am, 14/08/2024] Aditya Patil: सदर मालाचा तपास पुढे कोणास दिला त्याचे नाव व हुद्दा
// [9:30 am, 14/08/2024] Aditya Patil: अखेर परिणाम
// [9:30 am, 14/08/2024] Aditya Patil: शेरा

// date	policeThaneDayariNond	time	vardiDenaryaIsmacheNaavAniPatta	malGahalThikan	malacheVarnan	kimmat	gahalMalOlkhnareNaav	pudhilTapasAdhikariNav	result	remark

const FormNine = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    date: '', 
    policeThaneDayariNond: '', 
    time: '',
    vardiDenaryaIsmacheNaavAniPatta: '',
    malGahalThikan:'',
    malacheVarnan: '', 
    kimmat: '', 
    gahalMalOlkhnareNaav: '', 
    pudhilTapasAdhikariNav: '', 
    result: '', 
    remark: '', 
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
    const response = await axios.post('http://localhost:4000/api/addGahalMalachiNondDetails', data);
    console.log('Form Data Submitted:', response.data);

    // Reset state variables after successful submission
    setFormData({
      date: '', 
    policeThaneDayariNond: '', 
    time: '',
    vardiDenaryaIsmacheNaavAniPatta: '',
    malGahalThikan:'',
    malacheVarnan: '', 
    kimmat: '', 
    gahalMalOlkhnareNaav: '', 
    pudhilTapasAdhikariNav: '', 
    result: '', 
    remark: '', 
    status: '',
    attachment: null,
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
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">दिनांक</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">पोलिस ठाणे दैनंदिनी नोंद क्रमांक</label>
                <input
                  type="text"
                  name="policeThaneDayariNond"
                  value={formData.policeThaneDayariNond}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">वेळ</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">वर्दी देणाऱ्या इसमाचे नाव व पत्ता</label>
                <input
                  type="text"
                  name="vardiDenaryaIsmacheNaavAniPatta"
                  value={formData.vardiDenaryaIsmacheNaavAniPatta}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">ज्या ठिकाणी माल गहाळ झाला ते ठिकाण</label>
                <input
                  type="text"
                  name="malGahalThikan"
                  value={formData.malGahalThikan}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

             
              <div className="mb-4">
                <label className="block text-gray-700">गहाळ झालेल्या मालाचे संक्षिप्त वर्णन</label>
                <input
                  type="text"
                  name="malacheVarnan"
                  value={formData.malacheVarnan}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>


             
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="mb-4">
                <label className="block text-gray-700">किंमत</label>
                <input
                  type="text"
                  name="kimmat"
                  value={formData.kimmat}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">गहाळ झालेल्या माल ओळखणाऱ्या इसामाचे नाव</label>
                <input
                  type="text"
                  name="gahalMalOlkhnareNaav"
                  value={formData.gahalMalOlkhnareNaav}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
             
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="mb-4">
                <label className="block text-gray-700">सदर मालाचा तपास पुढे कोणास दिला त्याचे नाव व हुद्दा</label>
                <input
                  type="text"
                  name="pudhilTapasAdhikariNav"
                  value={formData.pudhilTapasAdhikariNav}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">अखेर परिणाम</label>
                <input
                  type="text"
                  name="result"
                  value={formData.result}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
             
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="mb-4">
                <label className="block text-gray-700">शेरा</label>
                <input
                  type="text"
                  name="remark"
                  value={formData.remark}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>           
            </div>

            <div className='mb-4'>
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

 export default FormNine;

