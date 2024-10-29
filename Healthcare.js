// src/pages/Healthcare.js
import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Healthcare = () => (
  <div>
    <h1>Healthcare Services</h1>
    <ServiceCard title="Hospitals" description="Find the best hospitals in your area." />
    <ServiceCard title="Clinics" description="Access quality clinics for various health issues." />
    <ServiceCard title="Telemedicine" description="Consult with doctors online from the comfort of your home." />
    <ServiceCard title="Medical Tourism" description="Explore medical tourism options in India." />
  </div>
);

export default Healthcare;
