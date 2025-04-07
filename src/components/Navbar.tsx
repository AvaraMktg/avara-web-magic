
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import ThemeSwitch from './ThemeSwitch';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const checkTheme = () => {
      setIsDarkTheme(document.documentElement.classList.contains('dark-theme'));
    };

    // Check theme initially and when it changes
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out p-4 md:px-8 lg:px-12 xl:px-24 w-full",
        scrolled 
          ? isDarkTheme 
            ? "bg-black/80 backdrop-blur-md py-4 shadow-sm" 
            : "bg-white/80 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className={cn(
          "font-light",
          isMobile ? "text-lg tracking-[0.25rem]" : "text-2xl tracking-[0.5rem]",
          isDarkTheme ? "text-white" : "text-black"
        )}>
          A V A R A
        </div>
        
        <div className="hidden md:flex items-center justify-center space-x-8">
          {menuItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className={cn(
                "hover:transition-colors duration-300 text-sm rounded-full py-1 hover:bg-white/10 px-4",
                isDarkTheme ? "text-muted-foreground hover:text-white" : "text-gray-600 hover:text-black hover:bg-black/5"
              )}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className={cn(
              "font-medium text-sm py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105",
              isDarkTheme 
                ? "bg-white text-black hover:bg-white/80" 
                : "bg-black text-white hover:bg-black/80"
            )}
          >
            Get In Touch
          </a>
        </div>

        <div className="hidden md:block">
          <ThemeSwitch />
        </div>

        <button 
          className="block md:hidden relative z-50 w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={cn(
            "absolute w-5 h-0.5 transform transition-all duration-300 ease-in-out",
            isDarkTheme ? "bg-white" : "bg-black"
          )}
            style={{
              top: menuOpen ? '50%' : 'calc(50% - 4px)',
              left: '50%',
              transform: `translate(-50%, -50%) ${menuOpen ? 'rotate(45deg)' : 'rotate(0)'}`,
            }}
          />
          <div className={cn(
            "absolute w-5 h-0.5 transform transition-all duration-300 ease-in-out",
            isDarkTheme ? "bg-white" : "bg-black"
          )}
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <div className={cn(
            "absolute w-5 h-0.5 transform transition-all duration-300 ease-in-out",
            isDarkTheme ? "bg-white" : "bg-black"
          )}
            style={{
              top: menuOpen ? '50%' : 'calc(50% + 4px)',
              left: '50%',
              transform: `translate(-50%, -50%) ${menuOpen ? 'rotate(-45deg)' : 'rotate(0)'}`,
            }}
          />
        </button>
      </div>

      <div className={cn(
        "fixed inset-0 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out",
        isDarkTheme ? "bg-black/95" : "bg-white/95",
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className={cn(
          "font-light mb-8",
          isMobile ? "text-2xl tracking-[0.4rem]" : "text-4xl tracking-[1rem]",
          isDarkTheme ? "text-white" : "text-black"
        )}>
          A V A R A
        </div>
        {menuItems.map((item) => (
          <a 
            key={item.name}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className={cn(
              "text-2xl transition-colors duration-300 rounded-full hover:bg-white/10 px-6 py-2",
              isDarkTheme ? "text-white hover:text-gray-400" : "text-black hover:text-gray-600"
            )}
          >
            {item.name}
          </a>
        ))}
        <a 
          href="#contact" 
          onClick={() => setMenuOpen(false)}
          className={cn(
            "mt-4 font-medium py-3 px-8 rounded-full transition-all duration-300",
            isDarkTheme 
              ? "bg-white text-black hover:bg-white/80" 
              : "bg-black text-white hover:bg-black/80"
          )}
        >
          Get In Touch
        </a>
        
        <div className="mt-8">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
