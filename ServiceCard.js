// src/components/ServiceCard.js
import React from 'react';
import { FaHospital, FaChalkboardTeacher, FaMoneyBill } from 'react-icons/fa';

const icons = {
  Hospitals: <FaHospital size={40} color="#004d40" />,
  Clinics: <FaHospital size={40} color="#004d40" />,
  Telemedicine: <FaHospital size={40} color="#004d40" />,
  MedicalTourism: <FaHospital size={40} color="#004d40" />,
  TraditionalSchools: <FaChalkboardTeacher size={40} color="#004d40" />,
  OnlineEducation: <FaChalkboardTeacher size={40} color="#004d40" />,
  Banking: <FaMoneyBill size={40} color="#004d40" />,
  Insurance: <FaMoneyBill size={40} color="#004d40" />,
  InvestmentServices: <FaMoneyBill size={40} color="#004d40" />
};

const ServiceCard = ({ title, description }) => (
  <div className="service-card">
    {icons[title]}
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default ServiceCard;
