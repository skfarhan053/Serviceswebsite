import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Healthcare from './pages/Healthcare';
import Education from './pages/Education';
import FinancialServices from './pages/FinancialServices';
import ThankYou from './pages/ThankYou';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/education" element={<Education />} />
        <Route path="/financial-services" element={<FinancialServices />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
