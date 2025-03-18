
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
  speed = 0.2,
  direction = 'up',
  threshold = 0.1,
  container = true,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { createParallaxEffect } = useGsapScrollTrigger();
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    let directionMultiplier = 1;
    let property = 'y';
    
    if (direction === 'up') {
      directionMultiplier = -1;
      property = 'y';
    } else if (direction === 'down') {
      directionMultiplier = 1;
      property = 'y';
    } else if (direction === 'left') {
      directionMultiplier = -1;
      property = 'x';
    } else if (direction === 'right') {
      directionMultiplier = 1;
      property = 'x';
    }
    
    const parallaxEffect = createParallaxEffect(sectionRef.current, speed * directionMultiplier, {
      start: `top ${(1 - threshold) * 100}%`,
      end: `bottom ${threshold * 100}%`,
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
