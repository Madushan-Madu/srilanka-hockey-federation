import React from 'react';
import { Link } from 'react-router-dom';
import FederationLogoCircle from '../assets/images/slhf-est-1975.png'; // Create this circular graphic

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Sri Lanka Hockey Federation</h1>
          <p>
            Promoting and developing hockey across Sri Lanka since 1975. Join us in our journey!
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
            <Link to="/join-us" className="btn btn-accent">
              Join Us
            </Link>
          </div>
        </div>
        <div className="hero-graphic">
          <img src={FederationLogoCircle} alt="SLHF Est. 1975" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;