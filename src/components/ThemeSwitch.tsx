
import React, { useState, useEffect } from 'react';
import { Switch } from "@/components/ui/switch"
import { Sun, Moon } from "lucide-react";

interface ThemeSwitchProps {
  className?: string;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className }) => {
  // Initialize with system preference or stored preference
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply theme on mount and when changed
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
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
