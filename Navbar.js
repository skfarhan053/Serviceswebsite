import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaHospital, FaChalkboardTeacher, FaMoneyBill } from 'react-icons/fa';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-logo">ServiceSphere India</h1>
        <button className="navbar-toggle" onClick={handleNavToggle}>
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
        </button>
        <ul className={`navbar-links ${isNavOpen ? 'active' : ''}`}>
          <li><Link to="/"><FaHome /> Home</Link></li>
          <li><Link to="/healthcare"><FaHospital /> Healthcare</Link></li>
          <li><Link to="/education"><FaChalkboardTeacher /> Education</Link></li>
          <li><Link to="/financial-services"><FaMoneyBill /> Financial Services</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
