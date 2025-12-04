import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaHome, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import OptimizedImage from '../components/OptimizedImage';

function About() {
  const values = [
    {
      icon: <FaHeart />,
      title: 'Warm Hospitality',
      description: 'We treat every guest like family, ensuring you feel at home from the moment you arrive.'
    },
    {
      icon: <FaHome />,
      title: 'Comfort First',
      description: 'Our rooms are designed with your comfort in mind, featuring modern amenities and cozy atmospheres.'
    },
    {
      icon: <FaStar />,
      title: 'Quality Service',
      description: 'We pride ourselves on maintaining high standards of cleanliness, service, and attention to detail.'
    }
  ];

  return (
    <div className="about-page" style={{ marginTop: '80px' }}>
      {/* Page Header */}
      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ 
          background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
          color: 'white',
          textAlign: 'center',
          padding: '4rem 20px'
        }}
      >
        <div className="container">
          <h1 style={{ color: 'white' }}>About Ashkelda Guest House</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', maxWidth: '700px', margin: '1rem auto 0' }}>
            Your home away from home in the heart of Kwekwe
          </p>
        </div>
      </motion.section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* PLACEHOLDER: Replace with actual lodge image */}
              <OptimizedImage  
                src="/images/about.jpg" 
                alt="Ashkelda Guest House"
                style={{ 
                  width: '100%', 
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-lg)'
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: '1.5rem' }}>Our Story</h2>
              <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
                Ashkelda Guest House has been a cornerstone of hospitality in Kwekwe, providing 
                comfortable accommodation and warm service to travelers, business people, and families.
              </p>
              <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
                Located in the heart of Kwekwe on Central Street, we offer easy access to the city's 
                amenities while providing a peaceful retreat for our guests.
              </p>
              <p style={{ lineHeight: '1.8' }}>
                Our commitment is simple: to make every guest feel welcome, comfortable, and cared for. 
                Whether you're here for business or leisure, Ashkelda is your home away from home.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section" style={{ background: 'var(--background)' }}>
        <div className="container">
          <h2 className="section-title">What We Stand For</h2>
          <div className="grid grid-3">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
                style={{ padding: '2rem', textAlign: 'center' }}
              >
                <div style={{ 
                  fontSize: '3rem', 
                  color: 'var(--accent)', 
                  marginBottom: '1rem' 
                }}>
                  {value.icon}
                </div>
                <h3 style={{ marginBottom: '1rem' }}>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Services */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Facilities & Services</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
            gap: '2rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>In-Room Amenities</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ DSTV (Satellite TV)</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ Free WiFi</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ Air Conditioning</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ Refrigerator</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ Microwave</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ Study Area</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Self-Catering (Executive Rooms)</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Guest Services</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ 24/7 Check-in</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ Restaurant Services</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ Secure Parking</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ Garden Area</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ Laundry Service (On Request)</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ Room Service</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Friendly Staff</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section" style={{ background: 'var(--background)' }}>
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '1rem',
                marginBottom: '1.5rem',
                padding: '1.5rem',
                background: 'var(--white)',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <FaMapMarkerAlt style={{ color: 'var(--accent)', fontSize: '2rem', marginTop: '0.25rem' }} />
                <div>
                  <h3 style={{ marginBottom: '0.5rem' }}>Address</h3>
                  <p>20 Central Street, Kwekwe, Zimbabwe</p>
                </div>
              </div>
              <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
                Conveniently located in the heart of Kwekwe, Ashkelda Guest House offers 
                easy access to local businesses, shops, and amenities.
              </p>
              <a 
                href="https://maps.app.goo.gl/jPJEDwQVFBkuVzCf9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Get Directions
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{ 
                width: '100%', 
                height: '400px', 
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)'
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.123456789!2d29.817!3d-18.933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU1JzU4LjgiUyAyOcKwNDknMDEuMiJF!5e0!3m2!1sen!2szw!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ashkelda Guest House Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ 
          background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Experience Ashkelda Guest House</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            We look forward to welcoming you and making your stay in Kwekwe memorable.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://wa.me/263773026050?text=Hello!%20I%20would%20like%20to%20book%20a%20room" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              Book Now
            </a>
            <a href="tel:0773026050" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
              Call Us
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default About;