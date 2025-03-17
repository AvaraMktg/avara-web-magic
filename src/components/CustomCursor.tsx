
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Initial delay to make sure cursor appears
    setTimeout(() => {
      setVisible(true);
    }, 100);
    
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    // Handle cursor visibility when mouse enters/leaves the window
    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);
    
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Add cursor:none to body
    document.body.style.cursor = 'none';
    
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.style.cursor = 'auto';
    };
  }, []);
  
  return (
    <>
      <div 
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`,
          opacity: visible ? 1 : 0
        }}
      />
      <div 
        className="cursor-aura"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 1.2 : 1})`,
          opacity: visible ? 1 : 0
        }}
      />
      
      {/* SVG filter for grainy effect */}
      <svg width="0" height="0">
        <filter id="grainy-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          <feDisplacementMap in="SourceGraphic" scale="10" />
        </filter>
      </svg>
    </>
  );
};

export default CustomCursor;
