
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && cursorInnerRef.current) {
        // Update the cursor position with a slight delay for outer cursor (trailing effect)
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        
        // Inner cursor follows more precisely
        cursorInnerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    // Check if mouse is over clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.classList.contains('clickable') ||
        target.closest('a') || 
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);
    };

    // Clean up function
    const cleanup = () => {
      document.body.style.cursor = 'auto';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cleanup();
    };
  }, []);

  return (
    <>
      {/* Outer glowing cursor */}
      <motion.div
        ref={cursorRef}
        className={`fixed w-12 h-12 rounded-full pointer-events-none z-50 mix-blend-screen ${
          isPointer ? 'scale-150' : 'scale-100'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(142, 255, 190, 0.8) 0%, rgba(126, 255, 175, 0.4) 40%, rgba(111, 255, 158, 0) 70%)',
          filter: 'blur(2px)',
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.1s ease, width 0.2s ease, height 0.2s ease',
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Inner cursor dot */}
      <div
        ref={cursorInnerRef}
        className={`fixed w-3 h-3 bg-green-400 rounded-full pointer-events-none z-50 ${
          isPointer ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          boxShadow: '0 0 10px rgba(142, 255, 190, 0.8)',
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.1s ease, opacity 0.2s ease',
        }}
      />
    </>
  );
};

export default CustomCursor;
