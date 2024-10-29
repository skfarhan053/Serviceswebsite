// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>&copy; 2024 ServiceHub. All rights reserved.</p>
      <ul className="footer-links">
        <li><a href="/">Home</a></li>
        <li><a href="/healthcare">Healthcare</a></li>
        <li><a href="/education">Education</a></li>
        <li><a href="/financial-services">Financial Services</a></li>
      </ul>
    </div>
  </footer>
);

export default Footer;
