import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Section = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    // Fetch user from local storage
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, []);

  const handleLogout =()=>{
    const confirmLogout = window.confirm('Are you sure you want to logout?');

  // If the user confirms, proceed with logout
  if (confirmLogout) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  } else {
    // Optionally, you can add logic here if needed when the user cancels the logout
    return
  }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r bg-blue-100 p-8">
      <div className=" p-8 rounded-xl shadow-lg w-full max-w-4xl">
      <button
          onClick={handleLogout}
          className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
        {user && (
          <div className="mb-8 p-4  rounded-lg shadow-sm">
            {/* <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Your Information</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex justify-evenly">
                <span className="font-semibold">NAME:</span>
                <span>{user?.name.toUpperCase()}</span>
              </div>
              {/* <div className="flex justify-evenly">
                <span className="font-semibold">Department:</span>
                <span>{user?.department}</span>
              </div> */}
              <div className="flex justify-evenly">
                <span className="font-semibold">DESIGNATION:</span>
                <span>{user?.designation.toUpperCase()}</span>
              </div>
              {/* {user?.department === 'RPF' && (
                <>
                  <div className="flex justify-evenly">
                    <span className="font-semibold">Division:</span>
                    <span>{user.division}</span>
                  </div>
                  <div className="flex justify-evenly">
                    <span className="font-semibold">Zone:</span>
                    <span>{user.zone}</span>
                  </div>
                </>
              )}
               {user?.department === 'police' && (
                <>
                  <div className="flex justify-between">
                    <span className="font-semibold">State:</span>
                    <span>{user?.state}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">District:</span>
                    <span>{user?.district}</span>
                  </div>
                </>
              )} */}
              <div className="flex justify-evenly">
                <span className="font-semibold">POSTING PLACE:</span>
                <span>{user?.postingPlace.toUpperCase()}</span>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {/* Buttons */}
          <div className='flex flex-col md:flex-row gap-3'>
          <Link to="/dashboard" className="flex items-center justify-center w-40 h-40 bg-white text-white rounded-full border-4 border-black shadow-md hover:bg-yellow-200 transition duration-300">
            <span className="text-center text-black text-xl font-bold">DASHBOARD</span>
          </Link>
          <Link to="/report" className="flex items-center justify-center w-40 h-40 bg-white text-white rounded-full border-4 border-black shadow-md hover:bg-yellow-200 transition duration-300">
            <span className="text-center text-black text-xl font-bold">REPORTS</span>
          </Link>
        
          <Link to="/case-data-entry" className="flex items-center justify-center w-40 h-40 bg-white text-white rounded-full border-4 border-black shadow-md hover:bg-yellow-200 transition duration-300">
            <span className="text-center text-black text-xl font-bold">CASE DATA ENTRY</span>
          </Link>
          </div>
          <div className='flex flex-col md:flex-row gap-3'>
          <Link to="/achievement" className="flex items-center justify-center w-40 h-40 bg-white text-white rounded-full border-4 border-black shadow-md hover:bg-yellow-200 transition duration-300">
            <span className="text-center text-black text-xl font-bold">ACHIVEMENT</span>
          </Link>
          <Link to="/court-hearing" className="flex items-center justify-center w-40 h-40 bg-white text-white rounded-full border-4 border-black shadow-md hover:bg-yellow-200 transition duration-300">
            <span className="text-center text-black text-xl font-bold">COURT HEARING</span>
          </Link>
          <Link to="/myprofile" className="flex items-center justify-center w-40 h-40 bg-white text-white rounded-full border-4 border-black shadow-md hover:bg-yellow-200 transition duration-300">
            <span className="text-center text-black text-xl font-bold">MY PROFILE</span>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
