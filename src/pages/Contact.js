import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaTiktok, FaClock } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
    guests: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const whatsappMessage = `
*New Booking Inquiry from Website*

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Room Type: ${formData.roomType}
Number of Guests: ${formData.guests}

Message:
${formData.message}
    `.trim();

    // Open WhatsApp with pre-filled message
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/263773026050?text=${encodedMessage}`, '_blank');
    
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        roomType: '',
        guests: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      info: '0773026050',
      link: 'tel:0773026050'
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      info: '0773026050',
      link: 'https://wa.me/263773026050'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      info: 'ashkeldalodge@gmail.com',
      link: 'mailto:ashkeldalodge@gmail.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      info: '20 Central Street, Kwekwe',
      link: 'https://maps.app.goo.gl/jPJEDwQVFBkuVzCf9'
    }
  ];

  return (
    <div className="contact-page" style={{ marginTop: '80px' }}>
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
          <h1 style={{ color: 'white' }}>Contact Us</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', maxWidth: '700px', margin: '1rem auto 0' }}>
            We're here to help! Reach out for bookings, inquiries, or any questions.
          </p>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <section className="section" style={{ background: 'var(--background)' }}>
        <div className="container">
          <div className="grid grid-4">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{ 
                  padding: '2rem',
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <div style={{ 
                  fontSize: '2.5rem', 
                  color: 'var(--accent)', 
                  marginBottom: '1rem' 
                }}>
                  {item.icon}
                </div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--primary)', fontWeight: '500' }}>{item.info}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form & Map */}
      <section className="section">
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth > 968 ? '1fr 1fr' : '1fr',
            gap: '3rem'
          }}>
            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: '1.5rem' }}>Send Us a Message</h2>
              <p style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>
                Fill out the form below and we'll send your inquiry directly to WhatsApp for quick response.
              </p>

              {submitted && (
                <div style={{
                  background: '#d4edda',
                  border: '1px solid #c3e6cb',
                  color: '#155724',
                  padding: '1rem',
                  borderRadius: '8px',
                  marginBottom: '1.5rem'
                }}>
                  ✓ Message sent! We'll contact you shortly via WhatsApp.
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontFamily: 'inherit'
                    }}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={{
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    padding: '0.75rem',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'inherit'
                  }}
                />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    style={{
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontFamily: 'inherit',
                      background: 'white'
                    }}
                  >
                    <option value="">Select Room Type</option>
                    <option value="Standard">Standard Room - $50/night</option>
                    <option value="Family">Family Room - $70/night</option>
                    <option value="Executive">Executive Room - $60/night</option>
                    <option value="Presidential">Presidential Suite - $150/night</option>
                  </select>

                  <input
                    type="number"
                    name="guests"
                    placeholder="Number of Guests"
                    value={formData.guests}
                    onChange={handleChange}
                    min="1"
                    style={{
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Additional requests or questions..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  style={{
                    padding: '0.75rem',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                />

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send via WhatsApp
                </button>
              </form>

              <div style={{ 
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'var(--accent-light)',
                borderRadius: '8px',
                fontSize: '0.9rem'
              }}>
                <FaClock style={{ marginRight: '0.5rem', color: 'var(--primary)' }} />
                We typically respond within 30 minutes during business hours.
              </div>
            </motion.div>

            {/* Map & Social */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: '1.5rem' }}>Find Us</h2>
              
              <div style={{ 
                width: '100%', 
                height: '350px', 
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                marginBottom: '2rem'
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

              <div style={{ 
                background: 'var(--white)',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <h3 style={{ marginBottom: '1rem' }}>Operating Hours</h3>
                <p style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>
                  Reception: 24/7<br/>
                  Check-in: Flexible (Call ahead)<br/>
                  Check-out: 10:00 AM (Negotiable)
                </p>

                <h3 style={{ marginBottom: '1rem' }}>Follow Us</h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a 
                    href="https://www.facebook.com/p/Ashkelda-Guest-House-100092867954773/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '2rem',
                      color: 'var(--primary)',
                      transition: 'color 0.3s'
                    }}
                    onMouseOver={(e) => e.target.style.color = 'var(--accent)'}
                    onMouseOut={(e) => e.target.style.color = 'var(--primary)'}
                  >
                    <FaFacebook />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@ashkelda"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '2rem',
                      color: 'var(--primary)',
                      transition: 'color 0.3s'
                    }}
                    onMouseOver={(e) => e.target.style.color = 'var(--accent)'}
                    onMouseOut={(e) => e.target.style.color = 'var(--primary)'}
                  >
                    <FaTiktok />
                  </a>
                  <a 
                    href="https://wa.me/263773026050"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '2rem',
                      color: 'var(--primary)',
                      transition: 'color 0.3s'
                    }}
                    onMouseOver={(e) => e.target.style.color = 'var(--accent)'}
                    onMouseOut={(e) => e.target.style.color = 'var(--primary)'}
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;