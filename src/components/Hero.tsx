
import React, { useEffect, useRef } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const heroTitleRef = useScrollAnimation({
    threshold: 0.2,
    animationClass: 'animate-fade-in',
    delay: 200
  });
  
  useEffect(() => {
    if (titleRef.current) {
      const titleElement = titleRef.current;
      const text = titleElement.innerText;
      
      titleElement.innerHTML = '';
      
      // Wrap each character in a span with proper spacing
      for (let i = 0; i < text.length; i++) {
        const charSpan = document.createElement('span');
        charSpan.className = 'char';
        charSpan.style.setProperty('--char-index', i.toString());
        charSpan.textContent = text[i];
        titleElement.appendChild(charSpan);
      }
    }

    if (subtitleRef.current) {
      const subtitleElement = subtitleRef.current;
      
      // Create a split text effect
      setTimeout(() => {
        subtitleElement.classList.add('animate-fade-in');
      }, 500);
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative pt-20 pb-10 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 
          className="uppercase text-white text-sm md:text-base font-medium tracking-wider mb-4 opacity-0 animate-slide-down"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          Web Design Agency
        </h2>
        
        <h1 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight md:leading-tight lg:leading-tight whitespace-normal md:whitespace-nowrap text-white"
        >
          We Create Digital Experiences
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-0"
        >
          Your go-to web agency for stunning personal websites and eye-catching ads, 
          all tailored to fit your unique style and needs.
        </p>
        
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
      
      {/* Removed the white blur effects from top-right and bottom-left */}
    </section>
  );
};

export default Hero;
