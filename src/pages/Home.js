import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWifi, FaTv, FaSnowflake, FaMugHot, FaBed, FaStar } from 'react-icons/fa';
import HeroBackground from '../components/HeroBackground'; // Import the slideshow!

function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Using your REAL images for the preview
  const rooms = [
    {
      title: 'Standard Room',
      price: '$50',
      image: '/images/std-1.jpg', 
      features: ['Queen Bed', 'DSTV', 'Microwave']
    },
    {
      title: 'Family Room',
      price: '$70',
      image: '/images/family-1.jpg',
      features: ['2 Double Beds', 'Garden Access', 'Kitchenette']
    },
    {
      title: 'Executive Room',
      price: '$60',
      image: '/images/exec-1.jpg',
      features: ['King Bed', 'Executive Desk', 'Luxury Wardrobe']
    },
    {
      title: 'Presidential Suite',
      price: '$150',
      image: '/images/pres-1.jpg',
      features: ['Marble Interiors', 'VIP Service', 'Gold Accents']
    }
  ];

  const amenities = [
    { icon: <FaWifi />, name: 'Free WiFi' },
    { icon: <FaTv />, name: 'DSTV' },
    { icon: <FaSnowflake />, name: 'Air Conditioning' },
    { icon: <FaMugHot />, name: 'Tea/Coffee' },
    { icon: <FaBed />, name: 'Premium Bedding' },
    { icon: <FaStar />, name: 'Top Rated' }
  ];

  const reviews = [
    {
      name: 'Tendai M.',
      rating: 5,
      text: 'Wonderful stay! Clean rooms, friendly staff, and great location in Kwekwe.'
    },
    {
      name: 'John K.',
      rating: 5,
      text: 'Best value for money. The rooms are spacious and well-maintained.'
    },
    {
      name: 'Grace P.',
      rating: 5,
      text: 'Felt like home! Will definitely be back on my next visit to Kwekwe.'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section with B-Roll Effect */}
      <motion.section 
        className="hero"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <HeroBackground /> {/* This replaces the static <img> tag */}
        
        <div className="hero-content">
          <h1>Welcome to Ashkelda Guest House</h1>
          <p>Your home away from home in the heart of Kwekwe</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/rooms" className="btn btn-accent">
              View Our Rooms
            </Link>
            <a href="tel:0773026050" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
              Call Us Now
            </a>
          </div>
        </div>
      </motion.section>

      {/* Welcome Section */}
      <motion.section 
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title">Experience Comfort & Warmth</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              At Ashkelda Guest House, we pride ourselves on providing a warm, welcoming atmosphere 
              combined with modern amenities. Whether you're visiting for business or leisure, 
              our comfortable rooms and exceptional service ensure a memorable stay.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Rooms Preview */}
      <section className="section" style={{ background: 'var(--background)' }}>
        <div className="container">
          <h2 className="section-title">Our Rooms</h2>
          <div className="grid grid-4">
            {rooms.map((room, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div style={{position: 'relative', height: '200px'}}>
                  <img 
                    src={room.image} 
                    alt={room.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {/* Price Tag for Home Page Cards */}
                  <div className="room-price-tag" style={{fontSize: '1rem', padding: '5px 12px'}}>
                    {room.price}
                  </div>
                </div>
                
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{fontSize: '1.2rem'}}>{room.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1rem', marginTop: '0.5rem' }}>
                    {room.features.map((feature, i) => (
                      <li key={i} style={{ padding: '0.25rem 0', color: 'var(--text-light)', fontSize: '0.9rem' }}>
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/rooms" className="btn btn-primary" style={{ width: '100%' }}>
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <motion.section 
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container">
          <h2 className="section-title">Room Amenities</h2>
          <div className="grid grid-3" style={{ textAlign: 'center' }}>
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                style={{ padding: '2rem' }}
              >
                <div style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '1rem' }}>
                  {amenity.icon}
                </div>
                <h3>{amenity.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Guest Reviews */}
      <section className="section" style={{ background: 'var(--background)' }}>
        <div className="container">
          <h2 className="section-title">What Our Guests Say</h2>
          <div className="grid grid-3">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ padding: '2rem' }}
              >
                <div style={{ color: 'var(--accent)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  {'★'.repeat(review.rating)}
                </div>
                <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                  "{review.text}"
                </p>
                <p style={{ fontWeight: '600', color: 'var(--text-dark)' }}>
                  - {review.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        style={{ 
          background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
          color: 'white',
          textAlign: 'center',
          padding: '4rem 20px'
        }}
      >
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Ready to Book Your Stay?</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Experience the warmth and comfort of Ashkelda Guest House. Book now for the festive season!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-accent">
              Contact Us
            </Link>
            <a 
              href="https://wa.me/263773026050?text=Hello!%20I%20would%20like%20to%20book%20a%20room" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ color: 'white', borderColor: 'white' }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;