
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Project {
  title: string;
  type: string;
  image: string;
  link: string;
  description: string;
}

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkTheme(document.documentElement.classList.contains('dark-theme'));
    };
    
    // Check theme initially and when it changes
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      title: "ADA Realty LLC",
      type: "Real Estate Website",
      image: "/lovable-uploads/45d6cb21-dbd9-435a-80f3-8f643ba984fc.png",
      link: "https://adarealtyllc.com/",
      description: "A professional real estate website designed to showcase properties and provide comprehensive real estate services."
    },
    {
      title: "Burak Kus",
      type: "Personal Portfolio",
      image: "/lovable-uploads/cb525470-ac23-42e9-a785-282bc2731627.png",
      link: "https://burakkus.com/",
      description: "A modern, interactive portfolio website showcasing the client's work and expertise."
    },
    {
      title: "Anastasia Florida Realtor",
      type: "Real Estate Website",
      image: "/lovable-uploads/2193696a-30e9-4b2e-9a34-8c5f1aa37b7d.png",
      link: "https://anastasiafloridarealtor.com",
      description: "A professional real estate website designed to showcase properties and generate leads."
    },
    {
      title: "Elif Seda Miami",
      type: "Real Estate Portfolio",
      image: "/lovable-uploads/fb99bdb9-72e0-4d91-afa4-93041b564081.png",
      link: "https://elifsedamiami.com/",
      description: "Real Estate Portfolio"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`uppercase ${isDarkTheme ? 'text-white' : 'text-black'} text-sm md:text-base font-medium tracking-wider mb-3 opacity-0 animate-slide-down`} style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Our Portfolio
          </h2>
          <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkTheme ? 'text-white' : 'text-black'} opacity-0 animate-slide-up`} style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>Recent Projects</h3>
          <p className={`${isDarkTheme ? 'text-muted-foreground' : 'text-gray-600'} max-w-2xl mx-auto opacity-0 animate-fade-in`} style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Explore our latest work and see how we've helped clients achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={cn(
                "group cursor-pointer relative overflow-hidden rounded-2xl animated-border-card opacity-0 animate-scale-in shadow-lg",
              )}
              style={{ animationDelay: `${0.2 + index * 0.2}s`, animationFillMode: 'forwards' }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div>
                  <span className="text-white text-sm font-medium bg-black/80 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                  <h4 className="text-xl md:text-2xl font-bold mt-3 text-white group-hover:text-white transition-colors">
                    {project.title}
                  </h4>
                  
                  <div className={cn(
                    "max-h-0 overflow-hidden transition-all duration-500",
                    activeIndex === index && "max-h-[100px] mt-4"
                  )}>
                    <p className="text-white/80 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-4 inline-flex items-center text-sm font-medium text-white opacity-0 transform translate-y-4 transition-all duration-500",
                    activeIndex === index && "opacity-100 translate-y-0"
                  )}
                >
                  View Project
                  <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
        <a 
          href="#contact" 
          className={`inline-flex items-center justify-center px-8 py-3 border ${isDarkTheme ? 'border-white/20 hover:border-white text-white hover:text-white' : 'border-black/20 hover:border-black text-black hover:text-black'} text-base font-medium rounded-full transition-all duration-300`}
        >
          Start Your Project
          <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Projects;
