
import React, { useState, useEffect } from 'react';
import { Switch } from "@/components/ui/switch"
import { Sun, Moon } from "lucide-react";

interface ThemeSwitchProps {
  className?: string;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className }) => {
  // Initialize with a default theme (dark) for server-side rendering
  const [isDark, setIsDark] = useState(true);

  // Apply theme on mount and when changed - only in browser environment
  useEffect(() => {
    // Initialize with system preference or stored preference
    const checkInitialTheme = () => {
      if (typeof localStorage !== 'undefined') {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
          setIsDark(savedTheme === 'dark');
          return;
        }
      }
      
      // Check system preference if localStorage isn't available or no saved preference
      if (typeof window !== 'undefined') {
        setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
    };

    checkInitialTheme();

    // Only run DOM operations in browser environment
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      if (isDark) {
        root.classList.add('dark-theme');
        root.classList.remove('light-theme');
        // Use optional chaining to avoid errors if localStorage is undefined
        typeof localStorage !== 'undefined' && localStorage.setItem('theme', 'dark');
      } else {
        root.classList.add('light-theme');
        root.classList.remove('dark-theme');
        typeof localStorage !== 'undefined' && localStorage.setItem('theme', 'light');
      }
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Sun className="h-[1.2rem] w-[1.2rem] text-muted-foreground" />
      <Switch 
        checked={isDark} 
        onCheckedChange={toggleTheme} 
        aria-label="Toggle theme"
      />
      <Moon className="h-[1.2rem] w-[1.2rem] text-muted-foreground" />
    </div>
  );
};

export default ThemeSwitch;
