
import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  delay?: number;
  once?: boolean;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.2,
    rootMargin = '0px',
    animationClass = 'animate-fade-in',
    delay = 0,
    once = true
  } = options;
  
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (ref.current) {
                ref.current.classList.add(animationClass);
                ref.current.style.opacity = '1';
                ref.current.style.transform = 'none';
              }
            }, delay);
            
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            if (ref.current) {
              ref.current.classList.remove(animationClass);
              ref.current.style.opacity = '0';
            }
          }
        });
      },
      { 
        threshold,
        rootMargin
      }
    );
    
    if (ref.current) {
      // Set initial styles
      ref.current.style.opacity = '0';
      ref.current.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      
      // Apply initial transform based on animation type
      if (animationClass.includes('slide-up')) {
        ref.current.style.transform = 'translateY(40px)';
      } else if (animationClass.includes('slide-down')) {
        ref.current.style.transform = 'translateY(-40px)';
      } else if (animationClass.includes('slide-left')) {
        ref.current.style.transform = 'translateX(40px)';
      } else if (animationClass.includes('slide-right')) {
        ref.current.style.transform = 'translateX(-40px)';
      } else if (animationClass.includes('scale')) {
        ref.current.style.transform = 'scale(0.9)';
      }
      
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animationClass, delay, once, rootMargin, threshold]);
  
  return ref;
};

export default useScrollAnimation;
