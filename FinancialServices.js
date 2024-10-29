import React from 'react';
import './FinancialServices.css';
import Form from '../components/Form';

const FinancialServices = () => {
  const handleFinancialConsultationSubmit = (formData) => {
    console.log('Financial Services Consultation Requested:', formData);
    window.location.href = '/thank-you';
  };

  return (
    <div className="financial-services">
      <header className="financial-services-header">
        <h1>Financial Services</h1>
        <p>We provide a range of financial services including banking, insurance, and investment services.</p>
      </header>
      <section className="financial-services-content">
        <Form title="Request a Financial Consultation" onSubmit={handleFinancialConsultationSubmit} />
      </section>
    </div>
  );
};

export default FinancialServices;
