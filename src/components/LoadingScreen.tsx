
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(true);

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
        "fixed inset-0 bg-avara-black z-50 flex flex-col items-center justify-center gap-8 overflow-hidden transition-opacity duration-800",
        !showContent && "opacity-0 pointer-events-none"
      )}
    >
      <div className="text-5xl tracking-[1.5rem] font-light mb-8">A V A R A</div>
      
      <div className="w-64 bg-secondary rounded-full h-1 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-avara-accent to-blue-400 rounded-full transition-all duration-300"
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
