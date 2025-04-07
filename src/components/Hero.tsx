
import React, { useState, useEffect } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const Hero: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkTheme(document.documentElement.classList.contains('dark-theme'));
    };
    
    // Check theme initially and when it changes
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative pt-20 pb-10 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <ScrollReveal 
          animation="fade-in" 
          delay={400}
          duration={2.5}
          className="mb-12"
        >
          <h1 className={`uppercase ${isDarkTheme ? 'text-white' : 'text-black'} text-4xl md:text-5xl lg:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight`}>
            Web Design Agency
          </h1>
        </ScrollReveal>
        
        <ScrollReveal 
          animation="slide-up" 
          delay={1000}
          duration={2.5}
          className="mt-8"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className={`${isDarkTheme ? 'bg-white text-black hover:bg-white/80' : 'bg-black text-white hover:bg-black/80'} font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105`}
            >
              View Our Work
            </a>
            <a 
              href="#contact" 
              className={`bg-transparent ${isDarkTheme ? 'border border-white/20 text-white hover:bg-white/5' : 'border border-black/20 text-black hover:bg-black/5'} font-medium py-3 px-8 rounded-full transition-all duration-300`}
            >
              Get In Touch
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
