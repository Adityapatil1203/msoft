import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditFormTwo = ({selectedGunha, gunhaId, onClose }) => {
  const [formData, setFormData] = useState({
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
    status: '',
    attachment: null,
  });

  useEffect(() => {
    const fetchGunhaData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/getGunhaById/${gunhaId}`,{
            params: { gunhaType: selectedGunha }
        });
        const gunhaData = response.data;

        setFormData({
          mayatDakhalKarnaraAmaldar: gunhaData.mayatDakhalKarnaraAmaldar || '', 
          mayatDakhalZalyachaDateTime: gunhaData.mayatDakhalZalyachaDateTime || '', 
          mayatDakhalKelyachaDateTime: gunhaData.mayatDakhalKelyachaDateTime || '',
          mayatGhadlyacheThikanDishaAniPoliceThanepasunAntar: gunhaData.mayatGhadlyacheThikanDishaAniPoliceThanepasunAntar || '',
          mayatachekhabarinfo: gunhaData.mayatachekhabarinfo || '',
          mayatIsmacheSampurnNavAniRahnyacheThikan: gunhaData.mayatIsmacheSampurnNavAniRahnyacheThikan || '', 
          gender: gunhaData.gender || '', 
          MaritalStatus: gunhaData.MaritalStatus || '', 
          postmortem: gunhaData.postmortem || '', 
          muthmatisParvangi: gunhaData.muthmatisParvangi || '', 
          maytacheKaran: gunhaData.maytacheKaran || '', 
          mayatKonasTapasasDile: gunhaData.mayatKonasTapasasDile || '', 
          akherReportSendKelyacheDateTime: gunhaData.akherReportSendKelyacheDateTime || '', 
          report: gunhaData.report || '', 
          status: gunhaData.status || '',
          attachment: null,
        });
      } catch (error) {
        console.error('Error fetching gunha data:', error);
        toast.error('Failed to fetch the data.');
      }
    };

    fetchGunhaData();
  }, [gunhaId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'attachment') {
      setFormData({
        ...formData,
        [name]: e.target.files[0],
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
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post(`http://localhost:4000/api/updateGunha/${gunhaId}?gunhaType=${encodeURIComponent(selectedGunha)}`, data);
      console.log('Form Data Updated:', response.data);
      toast.success('Form updated successfully!');
      onClose();
    } catch (error) {
      console.error('Error updating form:', error);
      toast.error('Failed to update the form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
            Edit Gunha Nond Form
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
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            <div className="text-center">
               <button
                 type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
               >
                Update
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full mt-2 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default EditFormTwo;
