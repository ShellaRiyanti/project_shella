import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './pages/Home/Home';
import NotFoundPage from './pages/404/404';
import CallCenter from './pages/CallCenter/CallCenter';
import Iklim from './pages/Iklim/Iklim';
import Kualitas from './pages/KualitasUdara/Kualitas';
import Profile from './pages/Profile/Profile';
import Cuaca from './pages/Cuaca/Cuaca';
import Header from './components/header';

const AppRouter = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  return (
    <>
    <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/callcenter" element={<CallCenter />} />
        <Route path="/iklim" element={<Iklim />} />
        <Route path="/kualitas" element={<Kualitas />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cuaca" element={<Cuaca />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
