
import React, { useState } from 'react';
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

  const projects: Project[] = [
    {
      title: "Burak Kus",
      type: "Personal Portfolio",
      image: "https://cdn.discordapp.com/attachments/1349542699157553186/1350591608516509706/Screenshot_2025-03-15_at_6.08.10_PM.png",
      link: "https://burakkus.com/",
      description: "A modern, interactive portfolio website showcasing the client's work and expertise."
    },
    {
      title: "Anastasia Florida Realtor",
      type: "Real Estate Website",
      image: "https://cdn.discordapp.com/attachments/1349542699157553186/1350591830143664198/Screenshot_2025-03-15_at_6.09.24_PM.png",
      link: "https://anastasiafloridarealtor.com",
      description: "A professional real estate website designed to showcase properties and generate leads."
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="uppercase text-avara-accent text-sm md:text-base font-medium tracking-wider mb-3 opacity-0 animate-slide-down" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Our Portfolio
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>Recent Projects</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Explore our latest work and see how we've helped clients achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={cn(
                "group cursor-pointer relative overflow-hidden rounded-2xl animated-border-card opacity-0 animate-scale-in",
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
              
              <div className="absolute inset-0 bg-gradient-to-t from-avara-black via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div>
                  <span className="text-avara-accent text-sm font-medium bg-avara-black/50 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                  <h4 className="text-xl md:text-2xl font-bold mt-3 group-hover:text-avara-accent transition-colors">
                    {project.title}
                  </h4>
                  
                  <div className={cn(
                    "max-h-0 overflow-hidden transition-all duration-500",
                    activeIndex === index && "max-h-[100px] mt-4"
                  )}>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-4 inline-flex items-center text-sm font-medium text-avara-accent opacity-0 transform translate-y-4 transition-all duration-500",
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
          className="inline-flex items-center justify-center px-8 py-3 border border-white/20 hover:border-avara-accent text-base font-medium rounded-full text-white hover:text-avara-accent transition-all duration-300"
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
