import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWifi, FaTv, FaSnowflake, FaBed, FaUtensils, FaUserFriends, FaCrown } from 'react-icons/fa';
import RoomModal from '../components/RoomModal';
import OptimizedImage from '../components/OptimizedImage';

function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const roomsData = [
    {
      id: 1,
      title: 'Standard Room',
      price: '$50',
      description: 'Elegant simplicity with modern comforts. Features a queen-sized bed, kitchenette station, and en-suite bathroom.',
      cover: '/images/std-1.jpg',
      gallery: ['/images/std-1.jpg', '/images/std-2.jpg', '/images/std-3.jpg'],
      features: ['Queen Bed', 'DSTV', 'Microwave', 'Work Station']
    },
    {
      id: 2,
      title: 'The Family Room',
      price: '$70',
      description: 'Spacious accommodation perfect for groups. Includes two double beds, a full kitchenette area, and garden access.',
      cover: '/images/family-1.jpg',
      gallery: ['/images/family-1.jpg', '/images/family-2.jpg', '/images/family-3.jpg'],
      features: ['2 Double Beds', 'Blue Mood Lighting', 'Garden Access', 'Kitchenette']
    },
    {
      id: 3,
      title: 'Executive Room',
      price: '$60',
      description: 'Our premium offering for business travelers. Features gold accents, a dedicated executive desk, and luxury fittings.',
      cover: '/images/exec-1.jpg',
      gallery: ['/images/exec-1.jpg', '/images/exec-2.jpg', '/images/exec-3.jpg'],
      features: ['King Bed', 'Executive Desk', 'Luxury Wardrobe', 'Air Conditioning']
    },
    {
      id: 4,
      title: 'Presidential Suite',
      price: '$150',
      description: 'The ultimate luxury experience. Marble feature walls, gold accents, and exclusive amenities for the discerning traveler.',
      cover: '/images/pres-1.jpg',
      gallery: ['/images/pres-1.jpg', '/images/pres-2.jpg', '/images/pres-3.jpg', '/images/pres-4.jpg'],
      features: ['Marble Interiors', 'Luxury Bath', 'Gold Accents', 'VIP Service']
    }
  ];

  return (
    <div className="rooms-page" style={{ marginTop: '80px', paddingBottom: '4rem' }}>
      <div className="container">
        <h1 className="section-title">Our Accommodation</h1>
        <p style={{textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem'}}>
          Click on any room to view the full photo gallery.
        </p>
        
        <div className="grid grid-2">
          {roomsData.map((room) => (
            <motion.div 
              key={room.id}
              className="card room-card"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={room.id === 4 ? {border: '2px solid var(--accent)'} : {}}
            >
              <div className="room-image-wrapper" onClick={() => setSelectedRoom(room)} style={{cursor: 'pointer'}}>
                <OptimizedImage src={room.cover} alt={room.title} />
                <div className="room-price-tag">{room.price}</div>
                {room.id === 4 && <div className="room-badge">Premium</div>}
              </div>
              <div className="room-content" style={{ padding: '1.5rem' }}>
                <h2 style={{display:'flex', alignItems:'center', gap:'10px'}}>
                  {room.title}
                  {room.id === 4 && <FaCrown style={{color: 'var(--accent)'}} />}
                </h2>
                <p>{room.description}</p>
                <div className="room-features" style={{ display: 'flex', gap: '15px', color: 'var(--primary)', margin: '1rem 0', fontSize: '1.2rem' }}>
                  <FaBed title="Bedding" /> 
                  <FaWifi title="Free WiFi" /> 
                  <FaTv title="DSTV" /> 
                  {room.id === 2 ? <FaUserFriends /> : <FaSnowflake />}
                </div>
                <button 
                  className="btn btn-outline" 
                  style={{ width: '100%' }}
                  onClick={() => setSelectedRoom(room)}
                >
                  View Gallery
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedRoom && (
          <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Rooms;