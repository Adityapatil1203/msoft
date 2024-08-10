import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { baseUrl } from '../const';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    designation: '',
    state: '',
    district: '',
    taluka: '',
    pincode: '',
    postingPlace: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    photo: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const res = await axios.post(`${baseUrl}/api/auth/register`, data);
      console.log(res.data);
      toast.success('User registered successfully');
      setFormData({
        name: '',
        dob: '',
        designation: '',
        state: '',
        district: '',
        taluka: '',
        pincode: '',
        postingPlace: '',
        mobile: '',
        password: '',
        confirmPassword: '',
        photo: null,
      });
      // Navigate to login page
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      toast.error('Failed to create user');
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6" encType="multipart/form-data">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Date of Birth</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">Designation</label>
                <input type="text" name="designation" value={formData.designation} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">State</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">District</label>
                <input type="text" name="district" value={formData.district} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Taluka</label>
                <input type="text" name="taluka" value={formData.taluka} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">Pin Code</label>
                <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Posting Place</label>
                <input type="text" name="postingPlace" value={formData.postingPlace} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">Mobile</label>
                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700">Confirm Password</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Photo</label>
                <input type="file" name="photo" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
              </div>
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 transition duration-300">
            Register
          </button>
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => navigate('/login')}
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default RegisterForm;
