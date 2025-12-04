// src/components/OptimizedImage.js
import React, { useState } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  style, 
  className,
  loading = "lazy" // Enable lazy loading by default
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div style={{ position: 'relative', ...style }} className={className}>
      {/* Placeholder while loading */}
      {!isLoaded && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite'
          }}
        />
      )}
      
      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      />
      
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

export default OptimizedImage;

// USAGE EXAMPLE:
// Instead of: <img src="/images/hero-1.jpg" alt="Hero" />
// Use: <OptimizedImage src="/images/hero-1.jpg" alt="Hero" />