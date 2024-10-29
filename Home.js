import React from 'react';
import './Home.css';
import bannerImage from '../assets/illustrations/soon.png';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to ServiceHub</h1>
          <p className="hero-description">
            Discover top-notch services across Healthcare, Education, and Financial Services tailored to your needs.
          </p>
        </div>
        <div className="hero-image">
          <img src={bannerImage} alt="Banner Illustration" />
        </div>
      </section>
      <section className="services-section">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          <ServiceCard
            title="Healthcare"
            description="Explore a range of healthcare services from hospitals to telemedicine."
            icon="/assets/icons/healthcare.svg"
            link="/healthcare"
          />
          <ServiceCard
            title="Education"
            description="Find the best traditional and online education solutions for all ages."
            icon="/assets/icons/education.svg"
            link="/education"
          />
          <ServiceCard
            title="Financial Services"
            description="Get financial advice and services for banking, insurance, and investments."
            icon="/assets/icons/financial.svg"
            link="/financial-services"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
