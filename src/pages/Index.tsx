
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { TooltipProvider } from '@/components/ui/tooltip';
import useGsapScrollTrigger from '@/hooks/useGsapScrollTrigger';
import { useSmoothScroll } from '@/providers/SmoothScrollProvider';

// Import framer-motion for animations
import { AnimatePresence } from 'framer-motion';

const Index = () => {
  const { lenis, isReady } = useSmoothScroll();
  const { ScrollTrigger } = useGsapScrollTrigger();

  useEffect(() => {
    // Fix overflow issues
    document.body.style.overflowX = 'hidden';
    document.body.style.width = '100%';
    document.documentElement.style.overflowX = 'hidden';
    document.documentElement.style.width = '100%';
    
    // Only update ScrollTrigger on scroll end to improve performance
    if (lenis) {
      let timeout: number;
      
      lenis.on('scroll', () => {
        // Clear previous timeout
        clearTimeout(timeout);
        
        // Set a new timeout - only update ScrollTrigger after scrolling stops
        timeout = setTimeout(() => {
          // Update ScrollTrigger with no arguments instead of default 1 argument
          ScrollTrigger.update(true, false);
        }, 100) as unknown as number;
      });
      
      // Handle scroll to hash on page load with reduced timeout
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const target = document.querySelector(hash);
          if (target instanceof HTMLElement) {
            lenis.scrollTo(target, { 
              duration: 0.8, // Faster scrolling
              easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Fixed easing function with type annotation
            });
          }
        }, 300);
      }

      // Handle anchor links with optimized scrolling
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetSelector = this.getAttribute('href');
          if (targetSelector) {
            const targetElement = document.querySelector(targetSelector);
            if (targetElement instanceof HTMLElement) {
              lenis.scrollTo(targetElement, { 
                duration: 0.8, // Faster scrolling
                easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Fixed easing function with type annotation
              });
            }
          }
        });
      });
    }

    return () => {
      if (lenis) {
        lenis.off('scroll');
      }
    };
  }, [lenis, isReady, ScrollTrigger]);

  return (
    <AnimatePresence mode="wait">
      <TooltipProvider>
        <div id="main-content" className="min-h-screen bg-black text-white">
          <Navbar />
          <Hero />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </TooltipProvider>
    </AnimatePresence>
  );
};

export default Index;
