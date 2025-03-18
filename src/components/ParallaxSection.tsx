
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import useGsapScrollTrigger from '@/hooks/useGsapScrollTrigger';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  threshold?: number;
  container?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className,
  speed = 0.1, // Reduced default speed for better performance
  direction = 'up',
  threshold = 0.2, // Increased threshold for fewer calculations
  container = true,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { createParallaxEffect } = useGsapScrollTrigger();
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    let directionMultiplier = 1;
    
    if (direction === 'up') {
      directionMultiplier = -1;
    } else if (direction === 'down') {
      directionMultiplier = 1;
    } else if (direction === 'left') {
      directionMultiplier = -1;
    } else if (direction === 'right') {
      directionMultiplier = 1;
    }
    
    // Create the parallax effect with optimized settings
    const parallaxEffect = createParallaxEffect(sectionRef.current, speed * directionMultiplier, {
      start: `top ${(1 - threshold) * 100}%`,
      end: `bottom ${threshold * 100}%`,
      scrub: 1, // Add a small delay to improve performance
    });
    
    return () => {
      parallaxEffect.kill();
    };
  }, [speed, direction, threshold, createParallaxEffect]);
  
  return (
    <div 
      ref={sectionRef}
      className={cn(
        container ? 'max-w-7xl mx-auto px-4' : '',
        className
      )}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
