import { useState , useEffect } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Section from './components/Section';
import CourtHearing from './components/CourtHearing';
import CaseDataEntry from './components/CaseDataEntry';
import Achievement from './components/Achievement';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user from local storage
    const fetchUserData = () => {
      const userData = JSON.parse(localStorage.getItem('user'));
      setUser(userData);
    };

    // Initial fetch
    fetchUserData();

    // Listen for storage changes
    const handleStorageChange = () => {
      fetchUserData();
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <Router>
      <div className='bg-blue-100' >
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={user ? <Dashboard />:<LoginForm />} />
          <Route path="/section" element={user ? <Section />:<LoginForm />} />
          <Route path="/dashboard" element={user ? <Dashboard />: <LoginForm />} />
        <Route path="/court-hearing" element={user ? <CourtHearing />:<LoginForm />} />
        <Route path="/case-data-entry" element={user ?<CaseDataEntry />:<LoginForm />} />
        <Route path="/achievement" element={user ? <Achievement />:<LoginForm />} />
          {/* Add other routes here */}
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  )
}

export default App
