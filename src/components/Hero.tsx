
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative pt-20 pb-10 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <ScrollReveal 
          animation="fade-in" 
          delay={400}
          duration={2.5}
          className="mb-12"
        >
          <h1 className="uppercase text-white text-4xl md:text-5xl lg:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight">
            Web Design Agency
          </h1>
        </ScrollReveal>
        
        <ScrollReveal 
          animation="slide-up" 
          delay={1000}
          duration={2.5}
          className="mt-8" // Added margin-top to move buttons down slightly
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
      
      {/* Down arrow removed */}
    </section>
  );
};

export default Hero;
