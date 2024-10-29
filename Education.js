import React from 'react';
import './Education.css';
import Form from '../components/Form';

const Education = () => {
  const handleEnquirySubmit = (formData) => {
    console.log('Education Enquiry Submitted:', formData);
    window.location.href = '/thank-you';
  };

  return (
    <div className="education">
      <header className="education-header">
        <h1>Education Services</h1>
        <p>Explore traditional schools, colleges, online education platforms, and edtech startups.</p>
      </header>
      <section className="education-content">
        <Form title="Request More Information" onSubmit={handleEnquirySubmit} />
      </section>
    </div>
  );
};

export default Education;
