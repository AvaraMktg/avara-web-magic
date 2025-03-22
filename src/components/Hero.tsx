
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative pt-20 pb-10 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <ScrollReveal 
          animation="fade-in" 
          delay={300}
          duration={1.5}
          className="mb-12"
        >
          <h1 className="uppercase text-white text-4xl md:text-5xl lg:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight">
            Web Design Agency
          </h1>
        </ScrollReveal>
        
        <ScrollReveal 
          animation="slide-up" 
          delay={800}
          duration={1.5}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </ScrollReveal>
      </div>
      
      <ScrollReveal 
        animation="fade-in" 
        delay={1500}
        duration={2}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </ScrollReveal>
    </section>
  );
};

export default Hero;
