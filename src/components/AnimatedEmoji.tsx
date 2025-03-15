
import React, { useEffect, useState } from 'react';

interface AnimatedEmojiProps {
  emoji: string;
}

const AnimatedEmoji: React.FC<AnimatedEmojiProps> = ({ emoji }) => {
  const [position, setPosition] = useState({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 360,
    scale: 0.5 + Math.random() * 1.5,
    delay: Math.random() * 5,
    duration: 15 + Math.random() * 20,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 360,
        scale: 0.5 + Math.random() * 1.5,
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 20,
      });
    }, position.duration * 1000);

    return () => clearInterval(interval);
  }, [position.duration]);

  return (
    <div
      className="fixed pointer-events-none select-none z-10"
      style={{
        left: position.x,
        top: position.y,
        transform: `rotate(${position.rotation}deg) scale(${position.scale})`,
        transition: `all ${position.duration}s cubic-bezier(0.16, 1, 0.3, 1)`,
        animationDelay: `${position.delay}s`,
        fontSize: '2rem',
      }}
    >
      {emoji}
    </div>
  );
};

export default AnimatedEmoji;
