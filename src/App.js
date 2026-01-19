import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import PatientDashboard from './components/pages/PatientDashboard';
import DoctorDashboard from './components/pages/DoctorDasboard';
import Booking from './components/pages/Booking';
import Doctors from './components/pages/Doctors';
import ChatBot from './components/pages/ChatBot';
import ReportAnalyzer from './components/pages/ReportAnalyzer';
import Profile from './components/pages/Profile';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/report-analyzer" element={<ReportAnalyzer />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
