import React from 'react';
import HeroSection from '../components/HeroSection';
// You'll create these components later
import AboutUs from '../components/AboutUs';
import RecentUpdates from '../components/RecentUpdates';
import RegisteredAssociations from '../components/RegisteredAssociations';
import TournamentsSection from '../components/TournamentsSection';
import CurrentOfficials from '../components/CurrentOfficials';
import ExecutiveCommittee from '../components/ExecutiveCommittee';

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <section className="about-us-section">
        <div className="container">
          {/* About Us Section */}
          <AboutUs />
        </div>
      </section>

      <section className="recent-updates-section">
        <div className="container">
          {/* Recent Updates Section */}
          <RecentUpdates />
        </div>
      </section>

      <section className="registered-associations-section">
        <div className="container">
          {/* Registered Associations Section */}
          <RegisteredAssociations />
        </div>
      </section>

      <section className="tournaments-section">
        <div className="container">
          {/* Tournaments Section */}
          <TournamentsSection />
        </div>
      </section>

      <section className="officials-section">
        <div className="container">
          {/* Current Officials Section */}
          <CurrentOfficials />
        </div>
      </section>

      <section className="executive-committee-section">
        <div className="container">
          {/* Executive Committee Section */}
          <ExecutiveCommittee />
        </div>
      </section>

      {/* Potentially a "Photo & Video Gallery" teaser or link */}
      {/* <section className="gallery-teaser-section">
        <div className="container">
          <h2 className="text-center">Our Moments in Action</h2>
          <p className="text-center">Explore our Photo & Video Gallery for exciting moments.</p>
          <div className="text-center" style={{ marginTop: 'var(--spacing-medium)' }}>
            <Link to="/gallery" className="btn btn-primary">View Gallery</Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default HomePage;