// src/components/AshkeldaLogo.js
import React from 'react';

const AshkeldaLogo = ({ style }) => {
  return (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      aria-label="Ashkelda Guest Lodge Logo"
    >
      {/* Circular Border */}
      <circle 
        cx="250" 
        cy="250" 
        r="220" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="20" 
      />

      {/* House Icon */}
      <g transform="translate(0, -20)" fill="currentColor">
        {/* Roof */}
        <path d="M150,200 L250,120 L350,200 L320,200 L320,280 L180,280 L180,200 Z" />
        {/* Chimney */}
        <rect x="300" y="140" width="25" height="50" />
        {/* Window (Knockout) */}
        <rect x="230" y="210" width="40" height="40" fill="var(--background, #fff)" />
        {/* Window Panes */}
        <rect x="248" y="210" width="4" height="40" fill="currentColor" />
        <rect x="230" y="228" width="40" height="4" fill="currentColor" />
      </g>

      {/* Swooshes under house */}
      <path 
        d="M160,280 Q250,230 340,280 T420,310 L160,310 Z" 
        fill="currentColor" 
      />

      {/* Text: ASHKELDA */}
      <text
        x="250"
        y="370"
        textAnchor="middle"
        fontFamily="sans-serif" 
        fontWeight="900"
        fontSize="55"
        letterSpacing="2"
        fill="currentColor"
      >
        ASHKELDA
      </text>

      {/* Text: GUEST LODGE */}
      <text
        x="250"
        y="410"
        textAnchor="middle"
        fontFamily="sans-serif" 
        fontWeight="bold"
        fontSize="20"
        letterSpacing="8"
        fill="currentColor"
      >
        GUEST LODGE
      </text>
    </svg>
  );
};

export default AshkeldaLogo;