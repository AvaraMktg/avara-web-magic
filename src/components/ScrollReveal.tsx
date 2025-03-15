
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale-in' | 'blur-in';
  delay?: number;
  threshold?: number;
  once?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (ref.current) {
                ref.current.classList.add(`animate-${animation}`);
                if (once) {
                  observer.unobserve(entry.target);
                }
              }
            }, delay);
          } else if (!once) {
            if (ref.current) {
              ref.current.classList.remove(`animate-${animation}`);
            }
          }
        });
      },
      { threshold }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animation, delay, once, threshold]);
  
  return (
    <div 
      ref={ref} 
      className={cn("opacity-0", className)} 
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
