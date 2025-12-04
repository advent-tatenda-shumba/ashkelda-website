import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTiktok, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h3>Ashkelda Guest House</h3>
          <p>Your home away from home in Kwekwe. Experience comfort, warmth, and exceptional hospitality.</p>
          <div className="social-links">
            <a 
              href="https://www.facebook.com/p/Ashkelda-Guest-House-100092867954773/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              title="Facebook"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://www.tiktok.com/@ashkelda" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              title="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/rooms">Our Rooms</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaPhone /> 0773026050
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaEnvelope /> ashkeldalodge@gmail.com
          </p>
          <p style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <FaMapMarkerAlt style={{ marginTop: '3px' }} /> 
            <span>20 Central Street, Kwekwe, Zimbabwe</span>
          </p>
        </div>

        {/* Operating Hours */}
        <div className="footer-section">
          <h3>Reception Hours</h3>
          <p>Monday - Sunday</p>
          <p>24/7 Check-in Available</p>
          <p style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
            <strong>Standard Rooms:</strong> $50/night<br/>
            <strong>Family Rooms:</strong> $70/night<br/>
            <strong>Executive Rooms:</strong> $60/night<br/>
            <strong>Presidential Suite:</strong> $150/night
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Ashkelda Guest House. All rights reserved. | Designed with ❤️ in Zimbabwe</p>
      </div>
    </footer>
  );
}

export default Footer;