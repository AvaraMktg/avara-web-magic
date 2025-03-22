
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setShowContent(false);
              setTimeout(() => {
                onComplete();
              }, 800);
            }, 500);
            return 100;
          }
          return prev + (Math.random() * 10);
        });
      }, 150);

      return () => clearInterval(interval);
    }, 300);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={cn(
        "fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-8 overflow-hidden transition-opacity duration-800",
        !showContent && "opacity-0 pointer-events-none"
      )}
    >
      <div className={cn(
        "tracking-[1.5rem] font-light mb-8 text-white",
        isMobile ? "text-3xl tracking-[0.8rem]" : "text-5xl tracking-[1.5rem]"
      )}>
        A V A R A
      </div>
      
      <div className="w-64 bg-gray-800 rounded-full h-1 overflow-hidden">
        <div 
          className="h-full bg-white rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="text-sm font-light text-muted-foreground tracking-widest">
        MARKETING
      </div>
    </div>
  );
};

export default LoadingScreen;
