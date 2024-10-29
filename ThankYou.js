// src/pages/ThankYou.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';

const ThankYou = () => (
  <div className="thank-you">
    <h1>Thank You!</h1>
    <p>Your request has been submitted. We will get back to you soon.</p>
    <Link to="/">Back to Home</Link>
  </div>
);

export default ThankYou;
