
import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 border-t border-black/10 relative bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <div className="text-4xl tracking-[1.5rem] font-light mb-8 text-black">A V A R A</div>
          
          <div className="mb-6">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-10">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-black transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-black transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-black transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-black transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="flex gap-4">
            <a href="https://www.instagram.com/avara.marketing/" 
               target="_blank"
               rel="noopener noreferrer"
               className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 11.3701C16.1234 12.2023 15.9813 13.0523 15.5938 13.7991C15.2063 14.5459 14.5932 15.1515 13.8416 15.5297C13.0901 15.908 12.2385 16.0397 11.4078 15.906C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1903 8.22774 13.4229 8.09408 12.5923C7.96042 11.7616 8.09208 10.91 8.47034 10.1584C8.8486 9.40691 9.4542 8.7938 10.201 8.4063C10.9478 8.0188 11.7978 7.87665 12.63 8.00006C13.4789 8.12594 14.2649 8.52152 14.8717 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-black/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {year} Avara. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-muted-foreground hover:text-black transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-black transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-black transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
