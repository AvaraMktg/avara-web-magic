
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale-in' | 'blur-in';
  delay?: number;
  threshold?: number;
  once?: boolean;
  duration?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  once = true,
  duration = 2.0, // Increased default duration for even slower animations
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    // Set initial styles with longer duration and smoother easing
    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`;
    
    // Apply initial transform based on animation type with larger offsets for more visibility
    if (animation === 'slide-up') {
      element.style.transform = 'translateY(60px)'; // Increased from 40px
    } else if (animation === 'slide-down') {
      element.style.transform = 'translateY(-60px)'; // Increased from 40px
    } else if (animation === 'slide-left') {
      element.style.transform = 'translateX(60px)'; // Increased from 40px
    } else if (animation === 'slide-right') {
      element.style.transform = 'translateX(-60px)'; // Increased from 40px
    } else if (animation === 'scale-in') {
      element.style.transform = 'scale(0.9)';
    } else if (animation === 'blur-in') {
      element.style.filter = 'blur(10px)';
      element.style.transition = `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1), filter ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`;
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (element) {
                element.style.opacity = '1';
                element.style.transform = 'none';
                
                if (animation === 'blur-in') {
                  element.style.filter = 'blur(0)';
                }
              }
            }, delay);
            
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            if (element) {
              element.style.opacity = '0';
              
              if (animation === 'slide-up') {
                element.style.transform = 'translateY(60px)'; // Increased from 40px
              } else if (animation === 'slide-down') {
                element.style.transform = 'translateY(-60px)'; // Increased from 40px
              } else if (animation === 'slide-left') {
                element.style.transform = 'translateX(60px)'; // Increased from 40px
              } else if (animation === 'slide-right') {
                element.style.transform = 'translateX(-60px)'; // Increased from 40px
              } else if (animation === 'scale-in') {
                element.style.transform = 'scale(0.9)';
              } else if (animation === 'blur-in') {
                element.style.filter = 'blur(10px)';
              }
            }
          }
        });
      },
      { threshold }
    );
    
    observer.observe(element);
    
    return () => {
      observer.unobserve(element);
    };
  }, [animation, delay, once, threshold, duration]);
  
  return (
    <div 
      ref={ref} 
      className={cn(className)} 
      style={{ 
        willChange: 'opacity, transform' 
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
