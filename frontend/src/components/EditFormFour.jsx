import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditFormFour = ({selectedGunha, gunhaId, onClose }) => {
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

  useEffect(() => {
    const fetchGunhaData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/getGunhaById/${gunhaId}`,{
            params: { gunhaType: selectedGunha }
        });
        const gunhaData = response.data;

        setFormData({
          konakadunAale: gunhaData.konakadunAale || '', 
          aalelyaArjachaNo: gunhaData.aalelyaArjachaNo || '', 
          date: gunhaData.date || '',
          arjdaracheNavAniPatta: gunhaData.arjdaracheNavAniPatta || '',
          gairArjdaracheNavAniPatta: gunhaData.gairArjdaracheNavAniPatta || '',
          arjatilThodkyatHakikat: gunhaData.arjatilThodkyatHakikat || '',
          pudhilKaryavahisathiNav: gunhaData.pudhilKaryavahisathiNav || '', 
          arjachiNirgati: gunhaData.arjachiNirgati || '', 
          remark: gunhaData.remark || '', 
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
            Edit वरिष्ट अर्ज नोंद
          </h2>
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

export default EditFormFour;
