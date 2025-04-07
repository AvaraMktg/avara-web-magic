
import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };
    
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    
    const onMouseLeave = () => setHidden(true);
    
    const onLinkHoverStart = () => setLinkHovered(true);
    const onLinkHoverEnd = () => setLinkHovered(false);
    
    const checkTheme = () => {
      setIsDarkTheme(document.documentElement.classList.contains('dark-theme'));
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true });
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    
    const links = document.querySelectorAll('a, button');
    links.forEach((link) => {
      link.addEventListener('mouseenter', onLinkHoverStart);
      link.addEventListener('mouseleave', onLinkHoverEnd);
    });
    
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      observer.disconnect();
      
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onLinkHoverStart);
        link.removeEventListener('mouseleave', onLinkHoverEnd);
      });
    };
  }, []);
  
  // In light theme, use black cursor instead of white
  const cursorColor = isDarkTheme ? 'bg-white' : 'bg-black';
  const cursorBorder = isDarkTheme ? 'border-white' : 'border-black';
  
  return (
    <>
      <div 
        className={`fixed pointer-events-none z-50 mix-blend-difference h-4 w-4 rounded-full ${cursorColor} transition-transform duration-300 ease-out ${clicked ? 'scale-75' : ''} ${hidden ? 'opacity-0' : 'opacity-100'} ${linkHovered ? 'scale-[4]' : ''}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.75 : linkHovered ? 4 : 1})`,
        }}
      />
      <div 
        className={`fixed pointer-events-none z-40 mix-blend-difference h-8 w-8 rounded-full border ${cursorBorder} transition-all duration-500 ease-out ${hidden ? 'opacity-0' : 'opacity-60'} ${linkHovered ? 'opacity-0' : ''}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default CustomCursor;
