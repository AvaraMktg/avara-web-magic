
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <div 
      className="glass-panel p-8 rounded-2xl opacity-0 animate-scale-in group hover:border-avara-accent/30 transition-all duration-500 hover:translate-y-[-10px]"
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
    >
      <div className="w-14 h-14 rounded-xl bg-avara-accent/10 flex items-center justify-center text-avara-accent mb-6 group-hover:bg-avara-accent group-hover:text-avara-black transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Web Design",
      description: "We create stunning, responsive websites that reflect your unique style and business objectives.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 8L12 4L21 8L12 12L3 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 12L12 16L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 16L12 20L21 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      delay: 0.1
    },
    {
      title: "Personal Sites",
      description: "Build your online presence with a custom portfolio or personal website that showcases your identity.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 20V19C4 16.7909 5.79086 15 8 15H16C18.2091 15 20 16.7909 20 19V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      delay: 0.3
    },
    {
      title: "Digital Marketing",
      description: "Eye-catching ads and campaigns designed to elevate your brand and maximize conversions.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      delay: 0.5
    },
    {
      title: "UI/UX Design",
      description: "Intuitive interfaces and seamless user experiences that engage and delight your audience.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.4 15C19.1277 15.8031 19.2583 16.6835 19.7601 17.3841C20.2619 18.0848 21.0812 18.4935 21.9 18.49C22 18.49 22 18.6 22 18.7V19.5C22 20.0304 21.7893 20.5391 21.4142 20.9142C21.0391 21.2893 20.5304 21.5 20 21.5H4C3.46957 21.5 2.96086 21.2893 2.58579 20.9142C2.21071 20.5391 2 20.0304 2 19.5V18.7C2 18.6 2 18.49 2.1 18.49C2.91882 18.4935 3.73806 18.0848 4.23988 17.3841C4.7417 16.6835 4.87231 15.8031 4.6 15C4.32795 14.206 3.7405 13.5626 3 13.23C2.92857 13.199 2.86482 13.1539 2.81237 13.0978C2.75992 13.0416 2.71971 12.9755 2.69364 12.9032C2.66756 12.8309 2.65613 12.7539 2.6601 12.6772C2.66407 12.6004 2.68334 12.5258 2.717 12.46C2.75067 12.3942 2.79783 12.3363 2.85533 12.2902C2.91283 12.2441 2.97941 12.211 3.05088 12.1931C3.12235 12.1752 3.19715 12.1729 3.26978 12.1864C3.34241 12.1998 3.41143 12.2287 3.47 12.271C4.5 12.771 5.67 12.99 7 12.99C7.88 12.99 8.4 12.73 9 12.35C9.6 11.97 10.197 11.5 12 11.5C13.803 11.5 14.4 11.97 15 12.35C15.6 12.73 16.12 12.99 17 12.99C18.33 12.99 19.5 12.771 20.53 12.271C20.5886 12.2287 20.6576 12.1998 20.7302 12.1864C20.8028 12.1729 20.8776 12.1752 20.9491 12.1931C21.0206 12.211 21.0872 12.2441 21.1447 12.2902C21.2022 12.3363 21.2493 12.3942 21.283 12.46C21.3167 12.5258 21.3359 12.6004 21.3399 12.6772C21.3439 12.7539 21.3324 12.8309 21.3064 12.9032C21.2803 12.9755 21.2401 13.0416 21.1876 13.0978C21.1352 13.1539 21.0714 13.199 21 13.23C20.2595 13.5626 19.672 14.206 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      delay: 0.7
    },
    {
      title: "E-commerce",
      description: "Custom online shopping experiences with seamless checkout processes and product showcases.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H5.6L8 13M8 13H17.4L20 6H6M8 13L6 17H19M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM18 20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20C16 19.4477 16.4477 19 17 19C17.5523 19 18 19.4477 18 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      delay: 0.9
    },
    {
      title: "Branding",
      description: "Cohesive brand identity development that communicates your values and resonates with your audience.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.188 10.9343C20.5762 11.4056 20.7843 12.0156 20.7843 12.645C20.7843 13.2744 20.5762 13.8844 20.188 14.3556L18.3847 16.7142C17.6334 17.6816 16.4999 18.3023 15.262 18.43L14.4589 18.5158C14.1553 18.539 13.877 18.6848 13.6736 18.9218L13.2991 19.3617C13.1064 19.5887 12.8638 19.7709 12.5906 19.8942C12.3173 20.0175 12.0196 20.0789 11.7187 20.0745C11.4179 20.0701 11.1221 19.9999 10.8528 19.8687C10.5834 19.7374 10.3462 19.5479 10.1604 19.3152L9.67691 18.7159C9.44937 18.4423 9.13622 18.2682 8.79325 18.2285L7.88822 18.1265C6.69533 17.9742 5.59931 17.3736 4.84135 16.4565L3.0381 14.09C2.65185 13.6149 2.44547 13.0029 2.44547 12.3725C2.44547 11.742 2.65185 11.13 3.0381 10.6549L3.81197 9.62967C4.19822 9.15464 4.4046 8.54267 4.4046 7.91222C4.4046 7.28178 4.19822 6.66981 3.81197 6.19478L3.0381 5.16951C2.65185 4.69448 2.44547 4.08251 2.44547 3.45207C2.44547 2.82162 2.65185 2.20965 3.0381 1.73462L3.81197 0.709351L10.1604 8.64C10.346 8.87111 10.583 9.05509 10.8525 9.18024C11.122 9.30539 11.4182 9.36903 11.7195 9.36627C12.0209 9.36351 12.3157 9.29443 12.5829 9.16437C12.8501 9.03431 13.0839 8.84605 13.2652 8.6117L13.6397 8.17183C13.8431 7.93479 14.1215 7.78908 14.425 7.76583L15.2281 7.67996C16.466 7.55232 17.5995 6.93166 18.3508 5.96423L20.154 3.60564C20.5422 3.13438 20.7503 2.52442 20.7503 1.895C20.7503 1.26559 20.5422 0.655629 20.154 0.184364L20.154 0.184364C20.9421 0.760332 21.582 1.53938 22.0093 2.44029C22.4366 3.3412 22.6372 4.33723 22.5921 5.33652C22.547 6.33582 22.2578 7.30977 21.7518 8.16921C21.2458 9.02865 20.5392 9.74626 19.6921 10.2516L19.6921 10.2516C19.8563 10.4363 19.9958 10.6429 20.1073 10.8656" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      delay: 1.1
    },
  ];

  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="uppercase text-avara-accent text-sm md:text-base font-medium tracking-wider mb-3 opacity-0 animate-slide-down" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Our Services
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>What We Do Best</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            We craft digital experiences that elevate your brand, engage your audience, and drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-avara-accent/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Services;
