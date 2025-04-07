
import React from 'react';
import { cn } from '@/lib/utils';
import { Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="uppercase text-black dark-theme:text-white text-sm md:text-base font-medium tracking-wider mb-3 opacity-0 animate-slide-down" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-black dark-theme:text-white opacity-0 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>Let's Create Something Amazing Together</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Ready to elevate your online presence? Connect with us today and let's discuss your project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="glass-panel rounded-2xl p-10 max-w-3xl mx-auto w-full opacity-0 animate-scale-in shadow-lg border border-white/20" 
               style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold mb-4 text-black dark-theme:text-white">Connect With Us</h4>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Avara Marketing is your go-to web agency for stunning personal websites and eye-catching ads, 
                all tailored to fit your unique style and needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-black dark-theme:text-white">Why Choose Avara Marketing?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We're all about making you look amazing online—whether you're building your brand, 
                  growing your business, or just want a sleek, professional site that stands out.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4 text-black dark-theme:text-white">Our Approach</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Our team blends creativity with smart strategy to bring your vision to life,
                  making sure your website isn't just beautiful but also works like a charm.
                </p>
              </div>
            </div>
            
            <div className="mt-10">
              <div className="flex flex-col space-y-6 items-center">
                <a href="mailto:avaramarketing@yahoo.com" 
                   className="flex items-center text-xl hover:text-white transition-colors group w-full justify-center md:justify-start max-w-md">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-muted-foreground group-hover:text-white">avaramarketing@yahoo.com</span>
                </a>
                
                <a href="tel:+17863008532" 
                   className="flex items-center text-xl hover:text-white transition-colors group w-full justify-center md:justify-start max-w-md">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-muted-foreground group-hover:text-white">+1 (786) 300-8532</span>
                </a>
                
                <div className="flex items-center text-xl group w-full justify-center md:justify-start max-w-md">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-muted-foreground">Miami, FL, USA</span>
                </div>
                
                <a href="https://www.instagram.com/avara.marketing/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="flex items-center text-xl hover:text-white transition-colors group w-full justify-center md:justify-start max-w-md">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-white">@avara.marketing</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Contact;
