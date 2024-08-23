import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditFormFiveOneTen = ({selectedGunha, gunhaId, onClose }) => {
  const [formData, setFormData] = useState({
    prastavNo: '',
    dateTime: '',
    firyadicheNavAniHudda: '',
    samnewalaYancheNavAniPatta: '',
    kaydyacheKalam: '',
    khatlaAadesh: '',
    khatlaDate: '',
    gunhyachiThodkyatHakikat: '',
    courtacheNaav: '',
    date: '',
    courtResult: '',
    ResultDate: '',
    remark: '',
    status: '',
    attachment: null,
  });

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/getGunhaById/${gunhaId}`,{
            params: { gunhaType: selectedGunha }
        });
        const formDetails = response.data;

        setFormData({
          prastavNo: formDetails.prastavNo || '',
          dateTime: formDetails.dateTime || '',
          firyadicheNavAniHudda: formDetails.firyadicheNavAniHudda || '',
          samnewalaYancheNavAniPatta: formDetails.samnewalaYancheNavAniPatta || '',
          kaydyacheKalam: formDetails.kaydyacheKalam || '',
          khatlaAadesh: formDetails.khatlaAadesh || '',
          khatlaDate: formDetails.khatlaDate || '',
          gunhyachiThodkyatHakikat: formDetails.gunhyachiThodkyatHakikat || '',
          courtacheNaav: formDetails.courtacheNaav || '',
          date: formDetails.date || '',
          courtResult: formDetails.courtResult || '',
          ResultDate: formDetails.ResultDate || '',
          remark: formDetails.remark || '',
          status: formDetails.status || '',
          attachment: null,
        });
      } catch (error) {
        console.error('Error fetching form data:', error);
        toast.error('Failed to fetch form data.');
      }
    };

    fetchFormData();
  }, [formId]);

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
      const response = await axios.put(`http://localhost:4000/api/updateGunha/${gunhaId}?gunhaType=${encodeURIComponent(selectedGunha)}`, data);
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">प्रस्ताव क्रमांक</label>
                <input
                  type="text"
                  name="prastavNo"
                  value={formData.prastavNo}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">प्रस्ताव दिनांक</label>
                <input
                  type="date"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">फिर्यादीचे नाव व हुद्दा</label>
                <input
                  type="text"
                  name="firyadicheNavAniHudda"
                  value={formData.firyadicheNavAniHudda}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">सामनेवाला याची नाव व पत्ता</label>
                <input
                  type="text"
                  name="samnewalaYancheNavAniPatta"
                  value={formData.samnewalaYancheNavAniPatta}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">कायद्याचे कलम</label>
                <input
                  type="text"
                  name="kaydyacheKalam"
                  value={formData.kaydyacheKalam}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">खटला पाठविणे संबंधी उप अधिकारी यांचे आदेश</label>
                <input
                  type="text"
                  name="khatlaAadesh"
                  value={formData.khatlaAadesh}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">खटला पाठविणे संबंधी उप अधिकारी यांचे दिनांक</label>
                <input
                  type="date"
                  name="khatlaDate"
                  value={formData.khatlaDate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">गुन्हाची थोडक्यात हकीकत</label>
                <input
                  type="text"
                  name="gunhyachiThodkyatHakikat"
                  value={formData.gunhyachiThodkyatHakikat}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">प्रकरण कोणत्या कोर्टात पाठविले त्याचे नाव , प्रकरण पाठविल्याचे गुन्हे क्रमांक</label>
                <input
                  type="text"
                  name="courtacheNaav"
                  value={formData.courtacheNaav}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">प्रकरण पाठविल्याचे दिनांक</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">कोर्टात निकाल</label>
                <input
                  type="text"
                  name="courtResult"
                  value={formData.courtResult}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">कोर्टात निकाल दिनांक</label>
                <input
                  type="date"
                  name="ResultDate"
                  value={formData.ResultDate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

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

            <div className="mb-4">
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
            </div>

            <div className="mb-4">
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
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditFormFiveOneTen;
