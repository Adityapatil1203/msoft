
import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

// konakadunAale	aalelyaArjachaNo date	arjdaracheNavAniPatta	gairArjdaracheNavAniPatta	arjatilThodkyatHakikat	pudhilKaryavahisathiNav	arjachiNirgati	remark

const FormFourSthanic = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    konakadunAale: '', 
    aalelyaArjachaNo: '', 
    date:'',
    arjdaracheNavAniPatta: '',
    gairArjdaracheNavAniPatta: '',
    arjatilThodkyatHakikat:'',
    pudhilKaryavahisathiNav: '', 
    arjachiNirgati: '', 
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

  // Construct formData object
  // const data = {
  //   konakadunAale:formData.konakadunAale,
  //   aalelyaArjachaNo: formData.aalelyaArjachaNo ,
  //   date:formData.date,
  //   arjdaracheNavAniPatta : formData.arjdaracheNavAniPatta ,
  //   gairArjdaracheNavAniPatta : formData.gairArjdaracheNavAniPatta,
  //   arjatilThodkyatHakikat : formData.arjatilThodkyatHakikat ,
  //   pudhilKaryavahisathiNav: formData.pudhilKaryavahisathiNav ,
  //   arjachiNirgati: formData. arjachiNirgati,
  //   remark : formData. remark ,

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
    const response = await axios.post('http://localhost:4000/api/addVSNSthanicDetails', data);
    console.log('Form Data Submitted:', response.data);

    // Reset state variables after successful submission
    setFormData({
      konakadunAale: '', 
    aalelyaArjachaNo: '', 
    date:'',
    arjdaracheNavAniPatta: '',
    gairArjdaracheNavAniPatta: '',
    arjatilThodkyatHakikat:'',
    pudhilKaryavahisathiNav: '', 
    arjachiNirgati: '', 
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
          {/* <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          वरिष्ट अर्ज नोंद 
          </h2> */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">कोणाकडून आले</label>
                <input
                  type="text"
                  name="konakadunAale"
                  value={formData.konakadunAale}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">आलेल्या अर्जाचा क्रमांक</label>
                <input
                  type="text"
                  name="aalelyaArjachaNo"
                  value={formData.aalelyaArjachaNo}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">आलेल्या अर्जाचा  दिनांक</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">अर्जदाराचे नाव व राहण्याचे ठिकाण</label>
                <input
                  type="text"
                  name="arjdaracheNavAniPatta"
                  value={formData.arjdaracheNavAniPatta}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">गैर अर्जदाराचे नाव व राहण्याचे ठिकाण</label>
                <input
                  type="text"
                  name="gairArjdaracheNavAniPatta"
                  value={formData.gairArjdaracheNavAniPatta}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">अर्जातील थोडक्यात हकीकत</label>
                <input
                  type="text"
                  name="arjatilThodkyatHakikat"
                  value={formData.arjatilThodkyatHakikat}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

             
              <div className="mb-4">
                <label className="block text-gray-700">पुढील कार्यवाहीसाठी कोणास दिले त्याचे नाव</label>
                <input
                  type="text"
                  name="pudhilKaryavahisathiNav"
                  value={formData.pudhilKaryavahisathiNav}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>


             
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="mb-4">
                <label className="block text-gray-700">अर्जाची निर्गती</label>
                <input
                  type="text"
                  name="arjachiNirgati"
                  value={formData.arjachiNirgati}
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

 export default FormFourSthanic;

