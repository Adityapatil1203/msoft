// src/components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    mobile: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // http://localhost:5000/api/auth/login

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://msoft-3.onrender.com/api/auth/login', formData);
      console.log(res.data);
      toast.success('Login successful');
      // Save the token to local storage or context
      localStorage.setItem('token', res.data.token);
      // Navigate to the desired page after a short delay
      setTimeout(() => {
        navigate('/section');
      }, 2000);
    } catch (err) {
      console.error(err);
      toast.error('Invalid Credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Login</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700">Mobile</label>
          <input 
            type="text" 
            name="mobile" 
            value={formData.mobile} 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300 rounded mt-1" 
            required 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300 rounded mt-1" 
            required 
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 transition duration-300">
          Login
        </button>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/')}
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Register
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
