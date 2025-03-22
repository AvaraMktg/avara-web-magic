
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        scrolled ? "bg-black/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex flex-col items-center">
        <div className={cn(
          "font-light mb-4 text-white",
          isMobile ? "text-xl tracking-[0.3rem]" : "text-2xl tracking-[0.5rem]"
        )}>
          A V A R A
        </div>
        
        <div className="hidden md:flex items-center justify-center space-x-8">
          {menuItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-white transition-colors duration-300 text-sm circle-link py-1"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-white text-black font-medium text-sm py-2 px-6 rounded-full hover:bg-white/80 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        <button 
          className="block md:hidden relative z-50 w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="absolute w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out"
            style={{
              top: menuOpen ? '50%' : 'calc(50% - 4px)',
              left: '50%',
              transform: `translate(-50%, -50%) ${menuOpen ? 'rotate(45deg)' : 'rotate(0)'}`,
            }}
          />
          <div className="absolute w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <div className="absolute w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out"
            style={{
              top: menuOpen ? '50%' : 'calc(50% + 4px)',
              left: '50%',
              transform: `translate(-50%, -50%) ${menuOpen ? 'rotate(-45deg)' : 'rotate(0)'}`,
            }}
          />
        </button>
      </div>

      <div className={cn(
        "fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out",
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className={cn(
          "font-light mb-8 text-white",
          isMobile ? "text-3xl tracking-[0.6rem]" : "text-4xl tracking-[1rem]"
        )}>
          A V A R A
        </div>
        {menuItems.map((item) => (
          <a 
            key={item.name}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-white hover:text-gray-400 transition-colors duration-300"
          >
            {item.name}
          </a>
        ))}
        <a 
          href="#contact" 
          onClick={() => setMenuOpen(false)}
          className="mt-4 bg-white text-black font-medium py-3 px-8 rounded-full hover:bg-white/80 transition-all duration-300"
        >
          Get In Touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
