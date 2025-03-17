
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { TooltipProvider } from '@/components/ui/tooltip';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const Index = () => {
  useEffect(() => {
    // Fix overflow issues
    document.body.style.overflowX = 'hidden';
    document.body.style.width = '100%';
    document.documentElement.style.overflowX = 'hidden';
    document.documentElement.style.width = '100%';
    
    // Import locomotive-scroll dynamically to prevent SSR issues
    import('locomotive-scroll').then((locomotiveModule) => {
      const LocomotiveScroll = locomotiveModule.default;
      const scroll = new LocomotiveScroll({
        el: document.querySelector('#main-content') as HTMLElement,
        smooth: true,
        smoothMobile: true,
        multiplier: 1,
        tablet: {
          smooth: true,
          breakpoint: 1024
        },
        smartphone: {
          smooth: true
        }
      });

      // Update locomotive scroll when content changes
      setTimeout(() => {
        scroll.update();
      }, 500);

      // Manage scroll to hash on page load
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const target = document.querySelector(hash);
          if (target) {
            scroll.scrollTo(target);
          }
        }, 600);
      }

      // Handle anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = this.getAttribute('href');
          if (target) {
            scroll.scrollTo(target);
          }
        });
      });

      return () => {
        if (scroll) scroll.destroy();
      };
    });
  }, []);

  return (
    <TooltipProvider>
      <div id="main-content" className="min-h-screen bg-avara-black text-white">
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Index;
