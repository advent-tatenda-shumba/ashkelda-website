import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaSearchPlus } from 'react-icons/fa';
import OptimizedImage from '../components/OptimizedImage';

// Beautifully curated mix of your best uploads
const galleryImages = [
  { src: '/images/hero-1.jpg', category: 'Interior', caption: 'Welcome to Ashkelda' },
  { src: '/images/pres-1.jpg', category: 'Rooms', caption: 'Presidential Marble Suite' },
  { src: '/images/hero-3.jpg', category: 'Exterior', caption: 'Serene Gardens' },
  { src: '/images/pres-3.jpg', category: 'Amenities', caption: 'Luxury Fittings' },
  { src: '/images/family-1.jpg', category: 'Rooms', caption: 'Family Comfort' },
  { src: '/images/ext-1.jpg', category: 'Exterior', caption: 'Secure Entrance' },
  { src: '/images/detail-1.jpg', category: 'Interior', caption: 'Elegant Details' },
  { src: '/images/exec-1.jpg', category: 'Rooms', caption: 'Executive Gold Suite' },
  { src: '/images/family-3.jpg', category: 'Amenities', caption: 'Modern Mood Lighting' },
  { src: '/images/ext-2.jpg', category: 'Exterior', caption: 'Lodge Grounds' },
  { src: '/images/pres-4.jpg', category: 'Interior', caption: 'Marble Finishes' },
  { src: '/images/exec-2.jpg', category: 'Interior', caption: 'Executive Workstation' },
];

const categories = ['All', 'Rooms', 'Exterior', 'Amenities', 'Interior'];

function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="gallery-page" style={{ marginTop: '80px', minHeight: '100vh', background: 'var(--background)' }}>
      
      <motion.section 
        className="section"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', paddingBottom: '2rem' }}
      >
        <div className="container">
          <h1 className="section-title">Gallery</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-light)' }}>
            Discover the elegance, comfort, and tranquility that awaits you.
          </p>
          
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
                style={{ 
                  borderRadius: '50px', 
                  padding: '8px 24px', 
                  fontSize: '0.9rem',
                  border: filter === cat ? 'none' : '1px solid #ddd'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="section" style={{ padding: '0 20px 80px' }}>
        <div className="container">
          <motion.div layout className="gallery-grid">
            <AnimatePresence>
              {filteredImages.map((img) => (
                <motion.div
                  layout
                  key={img.src}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="gallery-item"
                  onClick={() => setSelectedImg(img)}
                >
                  <OptimizedImage src={img.src} alt={img.caption} />
                  <div className="gallery-overlay">
                    <FaSearchPlus size={24} />
                    <span style={{marginTop: '10px', fontWeight: '500'}}>{img.caption}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img 
              src={selectedImg.src} 
              alt={selectedImg.caption}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} 
            />
            <button className="lightbox-close" onClick={() => setSelectedImg(null)}>
              <FaTimes />
            </button>
            <div className="lightbox-caption">
              <h3>{selectedImg.caption}</h3>
              <span>{selectedImg.category}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;