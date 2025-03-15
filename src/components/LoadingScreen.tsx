
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
      <div className="relative flex items-center justify-center">
        <img 
          src="/lovable-uploads/f345cc1a-f62e-49c5-a505-1f3675cb578f.png" 
          alt="Avara Marketing Logo" 
          className="w-32 h-32 object-contain animate-pulse-soft"
        />
        <div className="absolute inset-0 animate-rotate-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="48" stroke="url(#gradient)" strokeWidth="1" fill="none" strokeDasharray="0.5 3" />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00FFB8" />
                <stop offset="100%" stopColor="#00668F" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      <div className="w-64 bg-secondary rounded-full h-1 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-avara-accent to-blue-400 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="text-sm font-light text-muted-foreground tracking-widest">
        AVARA MARKETING
      </div>
    </div>
  );
};

export default LoadingScreen;
