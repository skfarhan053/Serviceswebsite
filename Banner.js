// src/components/Banner.js
import React from 'react';
import illustration from '../assets/illustrations/soon.png'; // Example path, ensure you add your illustration file

const Banner = () => (
  <div className="banner">
    <img src={illustration} alt="Banner" />
    <h1>Your One-Stop Solution for Services</h1>
  </div>
);

export default Banner;
