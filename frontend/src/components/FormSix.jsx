import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

// haddaparPrastavNo	dateTime	haddaprPrastavTayarKarnaryacheNav	kalam	pathavleliDate pathavleliNo	haddaparAgainstPersonName	dakhalGunhe	aadesh	

const FormSix = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    haddaparPrastavNo: '',
    dateTime:'',
    haddaprPrastavTayarKarnaryacheNav: '',
    kalam: '',
    pathavleliDate: '',
    pathavleliNo:'',
    haddaparAgainstPersonName: '',
    dakhalGunhe:'',
    aadesh:'',
    status:'',
    attachment:null
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
      const response = await axios.post('http://localhost:4000/api/addHaddaparDetails', data);
      console.log('Form Data Submitted:', response.data);

      setFormData({
     haddaparPrastavNo: '',
    dateTime:'',
    haddaprPrastavTayarKarnaryacheNav: '',
    kalam: '',
    pathavleliDate: '',
    pathavleliNo:'',
    haddaparAgainstPersonName: '',
    dakhalGunhe:'',
    aadesh:'',
    status:'',
      attachment:null
      });

      toast.success('Form submitted successfully!');
      onSubmit()
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit the form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
            Haddpar Prastav Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">हद्दपार प्रस्ताव क्रमांक</label>
                <input
                  type="text"
                  name="haddaparPrastavNo"
                  value={formData.haddaparPrastavNo}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">हद्दपार प्रस्ताव दिनांक</label>
                <input
                  type="date"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">हद्दपार प्रस्ताव तयार करण्याचे नाव व हुद्दा</label>
                <input
                  type="text"
                  name="haddaprPrastavTayarKarnaryacheNav"
                  value={formData.haddaprPrastavTayarKarnaryacheNav}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">कोणत्या कलमान्वये</label>
                <input
                  type="text"
                  name="kalam"
                  value={formData.kalam}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">पाठवलेली तारीख </label>
                <input
                  type="date"
                  name="pathavleliDate"
                  value={formData.pathavleliDate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">पाठवलेली जाडक क्रमांक</label>
                <input
                  type="text"
                  name="pathavleliNo"
                  value={formData.pathavleliNo}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
              <label className="block text-gray-700">कोणाविरुद्ध हद्दपार प्रस्ताव पाठविले त्याचे नाव व पत्ता</label>
              <input
                type="text"
                name="haddaparAgainstPersonName"
                value={formData.haddaparAgainstPersonName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">दाखल गुन्हे</label>
              <input
                type="text"
                name="dakhalGunhe"
                value={formData.dakhalGunhe}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">कोणत्या आदेशान्वये हद्दपार करण्यात आला</label>
              <input
                type="text"
                name="aadesh"
                value={formData.aadesh}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            </div>

            <div className='mb-4'>
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

export default FormSix;
