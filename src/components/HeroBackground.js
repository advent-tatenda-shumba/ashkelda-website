import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  "/images/hero-1.jpg", // Reception
  "/images/hero-2.jpg", // Presidential
  "/images/hero-3.jpg"  // Garden
];

const HeroBackground = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-bg-container">
      <div className="hero-overlay" />
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={heroImages[index]}
          alt="Ashkelda Ambience"
          className="hero-bg-image"
          // Ken Burns Effect: Slow zoom + Fade
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.2, opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
};

export default HeroBackground;