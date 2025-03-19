
import React, { useEffect, useRef } from 'react';
import useGsapScrollTrigger from '@/hooks/useGsapScrollTrigger';
import ParallaxSection from '@/components/ParallaxSection';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { gsap, createTimeline } = useGsapScrollTrigger();
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Create a simpler, more performant timeline for initial animations
    const heroTl = createTimeline({
      trigger: sectionRef.current,
      start: "top 90%",
      end: "center center",
      scrub: false
    });
    
    // Add animations to the timeline - simplified for better performance
    heroTl
      .from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4")
      .from(ctaRef.current, {
        y: 15,
        opacity: 0,
        duration: 0.5
      }, "-=0.3")
      .from(arrowRef.current, {
        y: -10,
        opacity: 0,
        duration: 0.3
      }, "-=0.1");
    
    return () => {
      // Clean up animations
      heroTl.kill();
    };
  }, [createTimeline, gsap]);

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center relative pt-20 pb-10 px-4 overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>
      
      <ParallaxSection speed={0.05} direction="up" className="z-10 max-w-5xl mx-auto text-center">
        <h2 className="uppercase text-white text-sm md:text-base font-medium tracking-wider mb-4">
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
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          Your go-to web agency for stunning personal websites and eye-catching ads, 
          all tailored to fit your unique style and needs.
        </p>
        
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center"
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
      </ParallaxSection>
      
      <div 
        ref={arrowRef}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
