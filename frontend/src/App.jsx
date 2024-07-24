import { useState } from 'react'
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
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/section" element={<Section />} />
          <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/court-hearing" element={<CourtHearing />} />
        <Route path="/case-data-entry" element={<CaseDataEntry />} />
        <Route path="/achievement" element={<Achievement />} />
          {/* Add other routes here */}
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  )
}

export default App
