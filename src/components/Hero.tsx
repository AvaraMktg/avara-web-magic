
import React, { useEffect, useRef } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import useGsapScrollTrigger from '@/hooks/useGsapScrollTrigger';
import KineticText from '@/components/KineticText';
import ParallaxSection from '@/components/ParallaxSection';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { 
    gsap, 
    createPerspectiveShift, 
    createRevealAnimation, 
    createScrollTrigger,
    createKineticTypography,
    createPinAnimation,
    createTimeline
  } = useGsapScrollTrigger();
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Split text characters for the main title
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
      
      // Add kinetic typography animation to the title
      createKineticTypography(titleRef.current, {
        scale: 1.1,
        rotation: 5,
        y: -10,
        staggerChildren: 0.02,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 0.5
        }
      });
    }

    // Create a timeline for sequential animations
    const heroTl = createTimeline({
      trigger: sectionRef.current,
      start: "top 90%",
      end: "center center",
      scrub: false
    });
    
    // Add animations to the timeline
    heroTl
      .from(titleRef.current?.querySelectorAll('.char') || [], {
        y: 100,
        opacity: 0,
        stagger: 0.02,
        ease: "power3.out",
        duration: 0.8
      })
      .from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4")
      .from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.5
      }, "-=0.3")
      .from(arrowRef.current, {
        y: -10,
        opacity: 0,
        duration: 0.3
      }, "-=0.1");
    
    // Create a perspective shift effect on scroll
    createPerspectiveShift(sectionRef.current, {
      rotationX: 5,
      rotationY: 2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
    
    // Pin the section for a moment as user scrolls
    const pinAnimation = createPinAnimation(sectionRef.current, 0.5, {
      start: "top top",
      end: "+=50%"
    });
    
    return () => {
      // Clean up animations
      heroTl.kill();
      pinAnimation.kill();
    };
  }, [createKineticTypography, createPerspectiveShift, createPinAnimation, createRevealAnimation, createScrollTrigger, createTimeline, gsap]);

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center relative pt-20 pb-10 px-4 overflow-hidden bg-black section-3d"
    >
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>
      
      <ParallaxSection speed={0.1} direction="up" className="z-10 max-w-5xl mx-auto text-center">
        <h2 
          className="uppercase text-white text-sm md:text-base font-medium tracking-wider mb-4 reveal-text"
        >
          <KineticText 
            text="Web Design Agency" 
            element="span"
            animationType="slide"
            staggerAmount={0.03}
          />
        </h2>
        
        <h1 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight md:leading-tight lg:leading-tight whitespace-normal md:whitespace-nowrap text-white"
        >
          We Create Digital Experiences
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 split-word-container"
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
            className="bg-white text-black font-medium py-3 px-8 rounded-full hover:bg-white/80 transition-all duration-300 transform hover:scale-105 distortion-effect"
          >
            View Our Work
          </a>
          <a 
            href="#contact" 
            className="bg-transparent border border-white/20 text-white hover:bg-white/5 font-medium py-3 px-8 rounded-full transition-all duration-300 distortion-effect"
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
      
      {/* Removed the white blur effects from top-right and bottom-left */}
    </section>
  );
};

export default Hero;
