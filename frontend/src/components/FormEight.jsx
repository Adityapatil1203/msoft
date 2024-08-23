import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

// dayariNo	date	tapasasMilalechiDate	takrarKarnaryacheNav	bepattaVyakticheNaav	bepattaVyakticheVarnan	jobBusiness	sathidarRelative	anyCashGold	smokingDrinkingHabit	tryForOther	remark

const FormEight = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    dayariNo: '',
    date:'',
    tapasasMilalechiDate: '',
    takrarKarnaryacheNav: '',
    bepattaVyakticheNaav: '',
    bepattaVyakticheVarnan:'',
    jobBusiness: '',
    sathidarRelative:'',
    anyCashGold:'',
    smokingDrinkingHabit:'',
    tryForOther:'',
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

    const data = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'attachment') {
        data.append(key, formData[key]);
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post('http://localhost:4000/api/addMissingDetails', data);
      console.log('Form Data Submitted:', response.data);

      setFormData({
          dayariNo: '',
          date:'',
          tapasasMilalechiDate: '',
          takrarKarnaryacheNav: '',
          bepattaVyakticheNaav: '',
          bepattaVyakticheVarnan:'',
          jobBusiness: '',
          sathidarRelative:'',
          anyCashGold:'',
          smokingDrinkingHabit:'',
          tryForOther:'',
          remark:'',
          status: '',
          attachment: null,
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
                <label className="block text-gray-700">स्टेशन डायरी नोंद क्रमांक</label>
                <input
                  type="text"
                  name="dayariNo"
                  value={formData.dayariNo}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">स्टेशन डायरी नोंद दिनांक</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">तपासास मिळालेली तारीख</label>
                <input
                  type="date"
                  name="tapasasMilalechiDate"
                  value={formData.tapasasMilalechiDate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">तक्रार करणाऱ्याचे नाव</label>
                <input
                  type="text"
                  name="takrarKarnaryacheNav"
                  value={formData.takrarKarnaryacheNav}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">बेपत्ता व्यक्तीचे नाव , उपनाव , आई वडिलांचे नाव , वय</label>
                <input
                  type="text"
                  name="bepattaVyakticheNaav"
                  value={formData.bepattaVyakticheNaav}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">बेपत्ता व्यक्तीचे संपूर्ण वर्णन</label>
                <input
                  type="text"
                  name="bepattaVyakticheVarnan"
                  value={formData.bepattaVyakticheVarnan}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
              <label className="block text-gray-700">घरगुती व्यावसायिक पार्शवभूमी / कोणत्या चिंतेत अडचणीत होती काय</label>
              <input
                type="text"
                name="jobBusiness"
                value={formData.jobBusiness}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">नातेवाईक , निकट मित्र यांची नावे , यापैकी कोणी बेपत्ता आहे काय</label>
              <input
                type="text"
                name="sathidarRelative"
                value={formData.sathidarRelative}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">बेपत्ता व्यक्तीकडे रोख रक्कम व मौल्यवान वस्तू होती का त्याची रक्कम</label>
              <input
                type="text"
                name="anyCashGold"
                value={formData.anyCashGold}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">बेपत्ता व्यक्तीला अमली पदार्थांची चटक असल्यास त्याचा उल्लेख</label>
              <input
                type="text"
                name="smokingDrinkingHabit"
                value={formData.smokingDrinkingHabit}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">बेपत्ता व्यक्तीला शोधण्यास केलेल्या प्रयत्नाचा वृत्तान्त</label>
              <input
                type="text"
                name="tryForOther"
                value={formData.tryForOther}
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

export default FormEight;
