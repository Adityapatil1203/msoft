import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditFormOneDaru = ({selectedGunha, gunhaId, onClose }) => {
  const [gunhaNondNo, setGunhaNondNo] = useState('');
  const [kalam, setKalam] = useState('');
  const [firyadi, setFiryadi] = useState('');
  const [aropicheNav, setAropicheNav] = useState('');
  const [gunhaDakhalDateTime, setGunhaDakhalDateTime] = useState('');
  const [gunhaTapsasMilalelaDate, setGunhaTapsasMilalelaDate] = useState('');
  const [aropiAtakKelaAslyasDate, setAropiAtakKelaAslyasDate] = useState('');
  const [gelaMal, setGelaMal] = useState('');
  const [milalaMal, setMilalaMal] = useState('');
  const [pathvilelyaPrakaranDaindiniNo, setPathvilelyaPrakaranDaindiniNo] = useState('');
  const [akherTajvijDate, setAkherTajvijDate] = useState('');
  const [remark, setRemark] = useState('');
  const [status, setStatus] = useState('');
  const [attachment, setAttachment] = useState(null);

  useEffect(() => {
    const fetchGunhaData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/getGunhaById/${gunhaId}`,{
            params: { gunhaType: selectedGunha }
        });
        const gunhaData = response.data;

        setGunhaNondNo(gunhaData.gunhaNondNo || '');
        setKalam(gunhaData.kalam || '');
        setFiryadi(gunhaData.firyadi || '');
        setAropicheNav(gunhaData.aropicheNav || '');
        setGunhaDakhalDateTime(gunhaData.gunhaDakhalDateTime || '');
        setGunhaTapsasMilalelaDate(gunhaData.gunhaTapsasMilalelaDate || '');
        setAropiAtakKelaAslyasDate(gunhaData.aropiAtakKelaAslyasDate || '');
        setGelaMal(gunhaData.gelaMal || '');
        setMilalaMal(gunhaData.milalaMal || '');
        setPathvilelyaPrakaranDaindiniNo(gunhaData.pathvilelyaPrakaranDaindiniNo || '');
        setAkherTajvijDate(gunhaData.akherTajvijDate || '');
        setRemark(gunhaData.remark || '');
        setStatus(gunhaData.status || '');
      } catch (error) {
        console.error('Error fetching gunha data:', error);
        toast.error('Failed to fetch the data.');
      }
    };

    fetchGunhaData();
  }, [gunhaId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('gunhaNondNo', gunhaNondNo);
    formData.append('kalam', kalam);
    formData.append('firyadi', firyadi);
    formData.append('aropicheNav', aropicheNav);
    formData.append('gunhaDakhalDateTime', gunhaDakhalDateTime);
    formData.append('gunhaTapsasMilalelaDate', gunhaTapsasMilalelaDate);
    formData.append('aropiAtakKelaAslyasDate', aropiAtakKelaAslyasDate);
    formData.append('gelaMal', gelaMal);
    formData.append('milalaMal', milalaMal);
    formData.append('pathvilelyaPrakaranDaindiniNo', pathvilelyaPrakaranDaindiniNo);
    formData.append('akherTajvijDate', akherTajvijDate);
    formData.append('remark', remark);
    formData.append('status', status);

    if (attachment) {
      formData.append('attachment', attachment);
    }

    try {
      const response = await axios.post(`http://localhost:4000/api/updateGunha/${gunhaId}?gunhaType=${encodeURIComponent(selectedGunha)}`, formData);
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
      <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-8">Edit Gunha Nond</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid p-6 grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-gray-700">गुन्हा नोंद क्रमांक / मयत व अर्ज क्रमांक</label>
              <input
                type="text"
                value={gunhaNondNo}
                onChange={(e) => setGunhaNondNo(e.target.value)}
                className="mt-1 p-2 block border w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700">कलम</label>
              <input
                type="text"
                value={kalam}
                onChange={(e) => setKalam(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700">फिर्यादी / खबर देणार / अर्जदार</label>
              <input
                type="text"
                value={firyadi}
                onChange={(e) => setFiryadi(e.target.value)}
                className="mt-1 p-2 block border w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700">आरोपींचे / मृताचे नांव</label>
              <input
                type="text"
                value={aropicheNav}
                onChange={(e) => setAropicheNav(e.target.value)}
                className="mt-1 p-2 block border w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700">गुन्हा दाखल दिनांक व वेळ</label>
              <input
                type="datetime-local"
                value={gunhaDakhalDateTime}
                onChange={(e) => setGunhaDakhalDateTime(e.target.value)}
                className="mt-1 p-2 block border w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700">गुन्हा तपासास मिळालेला दिनांक</label>
              <input
                type="date"
                value={gunhaTapsasMilalelaDate}
                onChange={(e) => setGunhaTapsasMilalelaDate(e.target.value)}
                className="mt-1 p-2 block border w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700">आरोपी अटक केला असल्यास दिनांक</label>
              <input
                type="date"
                value={aropiAtakKelaAslyasDate}
                onChange={(e) => setAropiAtakKelaAslyasDate(e.target.value)}
                className="mt-1 p-2 block border w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700">गेला माल</label>
              <input
                type="text"
                value={gelaMal}
                onChange={(e) => setGelaMal(e.target.value)}
                className="mt-1 p-2 block border w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700">मिळाला माल</label>
              <input
                type="text"
                value={milalaMal}
                onChange={(e) => setMilalaMal(e.target.value)}
                className="mt-1 p-2 block border w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700">पाठविलेल्या प्रकरण देण्याचे क्रमांक</label>
              <input
                type="text"
                value={pathvilelyaPrakaranDaindiniNo}
                onChange={(e) => setPathvilelyaPrakaranDaindiniNo(e.target.value)}
                className="mt-1 p-2 block border w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700">अखेर तजवीज व दिनांक</label>
              <input
                type="date"
                value={akherTajvijDate}
                onChange={(e) => setAkherTajvijDate(e.target.value)}
                className="mt-1 p-2 block border w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700">शेरा अखेर कागदपत्र मिळालेली साठी</label>
              <input
                type="text"
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                className="mt-1 p-2 block border w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700">Status</label>
              <select
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select Status</option>
                <option value="under investigation">Under Investigation</option>
                <option value="enquiry completed">Enquiry Completed</option>
                <option value="under trial">Under Trial</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700">Attachment</label>
              <input
                type="file"
                name="attachment"
                onChange={(e) => setAttachment(e.target.files[0])}
                className="mt-1 p-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default EditFormOneDaru;
