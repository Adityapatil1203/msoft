import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { baseUrl } from '../const';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    const data = localStorage.getItem('user');
    if (data) {
      const parsedData = JSON.parse(data);
      setUserData(parsedData);
      setFormValues(parsedData); // Initialize form values
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const saveChanges = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/auth/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });
      if (response.ok) {
        const updatedUser = await response.json();
        console.log(updatedUser);
        setUserData(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser)); // Update local storage
        toggleEditMode();
        toast.success('Profile update successfully');
      } else {
        toast.error('Failed to update profile');
        throw new Error('Failed to update user data');
      }
    } catch (error) {
        toast.error('Failed to update profile');
      console.error('Error updating user:', error);
    }
  };

  if (!userData) {
    return <div className="flex justify-center items-center min-h-screen">Loading user data...</div>;
  }

  // Fields to exclude from display
  const excludeFields = ['id', 'jurisdiction', 'fromDate', 'toDate', 'password', 'confirmPassword','photo'];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 md:p-10 w-full max-w-4xl">
      <h2 className="text-center text-2xl font-bold text-gray-900 mb-4">My Profile</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg">
          {/* <div className="sm:col-span-1 flex justify-center items-center p-4">
            <img className="rounded-full shadow-lg max-w-full h-auto" src={require(`../path/to/uploads/${userData.photo}`)} alt="Profile" />
          </div> */}

          <div className="sm:col-span-2 grid grid-cols-2 gap-x-5 gap-y-2">
            {Object.entries(formValues).map(([key, value]) => (
              !excludeFields.includes(key) && (
                <React.Fragment key={key}>
                  <p className="text-right font-semibold">{key.replace(/([A-Z])/g, ' $1').trim().toUpperCase()}:</p>
                  {editMode ? (
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleInputChange}
                      className="text-left p-2 border rounded w-full"
                    />
                  ) : (
                    <p className="text-left">{value?.toString().toUpperCase()}</p>
                  )}
                </React.Fragment>
              )
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button onClick={toggleEditMode} className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
            {editMode ? 'Cancel' : 'Edit'}
          </button>
          {editMode && (
            <button onClick={saveChanges} className="ml-4 py-2 px-4 bg-green-500 hover:bg-green-700 text-white font-bold rounded">
              Save Changes
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
