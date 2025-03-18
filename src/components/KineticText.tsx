
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import useGsapScrollTrigger from '@/hooks/useGsapScrollTrigger';

interface KineticTextProps {
  text: string;
  className?: string;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  animationType?: 'scale' | 'wave' | 'rotate' | 'slide' | 'fade';
  staggerAmount?: number;
  animateOnScroll?: boolean;
  threshold?: number;
  duration?: number;
  delay?: number;
}

const KineticText: React.FC<KineticTextProps> = ({
  text,
  className,
  element = 'h1',
  animationType = 'wave',
  staggerAmount = 0.02,
  animateOnScroll = true,
  threshold = 0.1,
  duration = 0.8,
  delay = 0
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { gsap, createScrollTrigger } = useGsapScrollTrigger();
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const chars = container.querySelectorAll('.char');
    
    let animation;
    
    if (animationType === 'wave') {
      animation = gsap.to(chars, {
        y: -15,
        stagger: {
          each: staggerAmount,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        },
        duration: duration / 2,
        delay: delay,
        paused: animateOnScroll, // Only auto-play if not scroll-triggered
      });
    } else if (animationType === 'scale') {
      animation = gsap.to(chars, {
        scale: 1.2,
        opacity: 1,
        stagger: staggerAmount,
        duration: duration,
        ease: "power2.out",
        delay: delay,
        paused: animateOnScroll,
      });
    } else if (animationType === 'rotate') {
      animation = gsap.to(chars, {
        rotation: 10,
        stagger: staggerAmount,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: delay,
        paused: animateOnScroll,
      });
    } else if (animationType === 'slide') {
      animation = gsap.fromTo(chars,
        { x: 20, opacity: 0 },
        {
          x: 0, 
          opacity: 1,
          stagger: staggerAmount,
          duration: duration,
          ease: "power2.out",
          delay: delay,
          paused: animateOnScroll,
        }
      );
    } else if (animationType === 'fade') {
      animation = gsap.fromTo(chars,
        { opacity: 0 },
        {
          opacity: 1,
          stagger: staggerAmount,
          duration: duration,
          ease: "power2.out",
          delay: delay,
          paused: animateOnScroll,
        }
      );
    }
    
    if (animateOnScroll && animation) {
      createScrollTrigger(container, animation, {
        trigger: container,
        start: `top ${(1 - threshold) * 100}%`,
        toggleActions: "play none none none"
      });
    } else if (animation) {
      animation.play();
    }
    
    return () => {
      if (animation) animation.kill();
    };
  }, [text, animationType, animateOnScroll, staggerAmount, threshold, duration, delay, gsap, createScrollTrigger]);
  
  // Split text into individual characters wrapped in spans
  const renderChars = () => {
    return text.split('').map((char, index) => (
      <span key={index} className="char inline-block" style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };
  
  const Element = element as React.ElementType;
  
  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)} style={{ perspective: '1000px' }}>
      <Element className="inline-block">
        {renderChars()}
      </Element>
    </div>
  );
};

export default KineticText;
