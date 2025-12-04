import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const RoomModal = ({ room, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!room) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % room.gallery.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? room.gallery.length - 1 : prev - 1));
  };

  return (
    <motion.div 
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="modal-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}><FaTimes /></button>
        
        <div className="modal-image-container">
          <img 
            src={room.gallery[currentIndex]} 
            alt={`${room.title} view ${currentIndex + 1}`} 
          />
          
          {room.gallery.length > 1 && (
            <>
              <button className="modal-nav prev" onClick={prevSlide}><FaChevronLeft /></button>
              <button className="modal-nav next" onClick={nextSlide}><FaChevronRight /></button>
            </>
          )}
        </div>

        <div className="modal-info">
          <h3>{room.title}</h3>
          <p>{room.price} <span style={{fontSize: '0.6em', color: '#666'}}>/night</span></p>
          
          <div className="modal-thumbnails">
            {room.gallery.map((img, idx) => (
              <img 
                key={idx} 
                src={img} 
                className={idx === currentIndex ? 'active' : ''}
                onClick={() => setCurrentIndex(idx)}
                alt="thumbnail"
              />
            ))}
          </div>

          <div style={{marginTop: '2rem'}}>
            <h4>Room Features</h4>
            <ul style={{listStyle: 'none', padding: 0, marginTop: '0.5rem'}}>
              {room.features.map((feature, idx) => (
                <li key={idx} style={{padding: '5px 0', borderBottom: '1px solid #eee'}}>
                  ✓ {feature}
                </li>
              ))}
            </ul>
          </div>

          <a 
            href={`https://wa.me/263773026050?text=I am interested in booking the ${room.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{marginTop: 'auto', width: '100%'}}
          >
            Book via WhatsApp
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RoomModal;