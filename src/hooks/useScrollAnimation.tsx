
import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  delay?: number;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.2,
    rootMargin = '0px',
    animationClass = 'animate-fade-in',
    delay = 0
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
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold,
        rootMargin
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animationClass, delay, rootMargin, threshold]);
  
  return ref;
};

export default useScrollAnimation;
