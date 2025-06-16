import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'; // You'll need to install react-icons
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-contact">
          <h3 className="footer-heading">Get In Touch</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> 123 Hockey Lane, Colombo, Sri Lanka
          </p>
          <p>
            <i className="fas fa-phone"></i> +94 11 234 5678
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@slhf.lk
          </p>
        </div>
        <div className="footer-links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul>
            <li><Link to="/news">National Team News</Link></li>
            <li><Link to="/tournaments">Tournaments</Link></li>
            <li><Link to="/associations">Associations</Link></li>
            <li><Link to="/equipment">Equipments</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            {/* Add more links like Privacy Policy, Terms, etc. */}
          </ul>
        </div>
        <div className="footer-social">
          <h3 className="footer-heading">Connect With Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
          {/* Optional Contact Form Placeholder */}
          {/* <form className="footer-contact-form">
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit" className="btn-accent">Send Message</button>
          </form> */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sri Lanka Hockey Federation. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;