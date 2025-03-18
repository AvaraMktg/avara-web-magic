
import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

interface SmoothScrollContextType {
  lenis: Lenis | null;
  isReady: boolean;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  isReady: false
});

interface SmoothScrollProviderProps {
  children: React.ReactNode;
  options?: {
    lerp?: number;
    smooth?: boolean;
    direction?: 'vertical' | 'horizontal';
    gestureOrientation?: 'vertical' | 'horizontal';
    smoothWheel?: boolean;
    smoothTouch?: boolean;
    wheelMultiplier?: number;
    touchMultiplier?: number;
  };
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({
  children,
  options = {}
}) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const [isReady, setIsReady] = useState(false);
  const reqIdRef = useRef<number | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      lerp: 0.1,
      smooth: true,
      direction: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
      ...options
    });

    // Sync lenis with gsap
    function raf(time: number) {
      lenisInstance.raf(time);
      reqIdRef.current = requestAnimationFrame(raf);
    }

    reqIdRef.current = requestAnimationFrame(raf);
    setLenis(lenisInstance);
    
    lenisInstance.on('scroll', (e: any) => {
      // console.log('Scrolling', e);
    });

    // After lenis initializes, mark as ready
    setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => {
      if (reqIdRef.current) {
        cancelAnimationFrame(reqIdRef.current);
      }
      lenisInstance.destroy();
    };
  }, [options]);

  return (
    <SmoothScrollContext.Provider value={{ lenis, isReady }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export default SmoothScrollProvider;
