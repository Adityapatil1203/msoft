import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

// jalitDdakhalKarnaryacheNav	jalitZalyachaDateTime	jalitDakhalKelyachaDateTime	jalitGhadlyachaeThikanDishaPoliceStation	khabarDenaryacheSampurnNavAniPatta	hakikat	jalitatZaleleNuksan	jalitamadheHaniZaliAaslyas	gunhyachaPrakar	tapasKonakade	mamledarReport	reportPathvilela	remark	report	attachment	status

const FormSeven = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    jalitDdakhalKarnaryacheNav: '',
    jalitZalyachaDateTime:'',
    jalitDakhalKelyachaDateTime: '',
    jalitGhadlyachaeThikanDishaPoliceStation: '',
    khabarDenaryacheSampurnNavAniPatta: '',
    hakikat:'',
    jalitatZaleleNuksan: '',
    jalitamadheHaniZaliAaslyas:'',
    gunhyachaPrakar:'',
    tapasKonakade:'',
    mamledarReport:'',
    date:'',
    reportPathvilela:'',
    remark:'',
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
      const response = await axios.post('http://localhost:4000/api/addAgniUpdravNondDetails', data);
      console.log('Form Data Submitted:', response.data);

      setFormData({
        jalitDdakhalKarnaryacheNav: '',
        jalitZalyachaDateTime:'',
        jalitDakhalKelyachaDateTime: '',
        jalitGhadlyachaeThikanDishaPoliceStation: '',
        khabarDenaryacheSampurnNavAniPatta: '',
        hakikat:'',
        jalitatZaleleNuksan: '',
        jalitamadheHaniZaliAaslyas:'',
        gunhyachaPrakar:'',
        tapasKonakade:'',
        mamledarReport:'',
        date:'',
        reportPathvilela:'',
        remark:'',
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
          {/* <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
            Haddpar Prastav Form
          </h2> */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">जळीत दाखल करण्याचे नाव व हुद्दा</label>
                <input
                  type="text"
                  name="jalitDdakhalKarnaryacheNav"
                  value={formData.jalitDdakhalKarnaryacheNav}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">जळीत झाल्याचा दिनांक व वेळ</label>
                <input
                  type="datetime-local"
                  name="jalitZalyachaDateTime"
                  value={formData.jalitZalyachaDateTime}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">जळीत दाखल केल्याचा दिनांक व वेळ</label>
                <input
                  type="datetime-local"
                  name="jalitDakhalKelyachaDateTime"
                  value={formData.jalitDakhalKelyachaDateTime}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">जळीत घडल्याचे ठिकाण , दिशा , ठान्यापासुंचे अंतर</label>
                <input
                  type="text"
                  name="jalitGhadlyachaeThikanDishaPoliceStation"
                  value={formData.jalitGhadlyachaeThikanDishaPoliceStation}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">खबर देणाऱ्याचे नाव व पत्ता</label>
                <input
                  type="text"
                  name="khabarDenaryacheSampurnNavAniPatta"
                  value={formData.khabarDenaryacheSampurnNavAniPatta}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">हकीकत</label>
                <input
                  type="text"
                  name="hakikat"
                  value={formData.hakikat}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
              <label className="block text-gray-700">जळीतात झालेले नुकसान</label>
              <input
                type="text"
                name="jalitatZaleleNuksan"
                value={formData.jalitatZaleleNuksan}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">जळीतात प्राणहानी झाली असल्यास त्याचे नाव व वय</label>
              <input
                type="text"
                name="jalitamadheHaniZaliAaslyas"
                value={formData.jalitamadheHaniZaliAaslyas}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">गुन्ह्याचा प्रकार</label>
              <input
                type="text"
                name="gunhyachaPrakar"
                value={formData.gunhyachaPrakar}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">तपास कोणाकडे दिला</label>
              <input
                type="text"
                name="tapasKonakade"
                value={formData.tapasKonakade}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">मामलेदार यांच्याकडे अखेर रिपोर्ट पाठविल्याचा जावक क्रमांक</label>
              <input
                type="text"
                name="mamledarReport"
                value={formData.mamledarReport}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">मामलेदार यांच्याकडे अखेर रिपोर्ट पाठविल्याचा दिनांक</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">रिपोर्ट पाठवल्याबद्दल पोलिस ठाणे अधिकारी यांची सही</label>
              <input
                type="text"
                name="reportPathvilela"
                value={formData.reportPathvilela}
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

export default FormSeven;
