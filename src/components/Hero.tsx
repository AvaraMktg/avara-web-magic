
import React, { useRef } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const heroTitleRef = useScrollAnimation({
    threshold: 0.2,
    animationClass: 'animate-fade-in',
    delay: 200
  });
  
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative pt-20 pb-10 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 
          className="uppercase text-white text-3xl md:text-4xl lg:text-6xl font-bold mb-12 leading-tight md:leading-tight lg:leading-tight opacity-0 animate-slide-down"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          Web Design Agency
        </h1>
        
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-slide-up"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          <a 
            href="#projects" 
            className="bg-white text-black font-medium py-3 px-8 rounded-full hover:bg-white/80 transition-all duration-300 transform hover:scale-105"
          >
            View Our Work
          </a>
          <a 
            href="#contact" 
            className="bg-transparent border border-white/20 text-white hover:bg-white/5 font-medium py-3 px-8 rounded-full transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 animate-fade-in"
        style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
