
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedEmoji from '@/components/AnimatedEmoji';

const Index = () => {
  return (
    <div className="min-h-screen bg-avara-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      
      {/* Animated emojis */}
      <AnimatedEmoji emoji="🚀" />
      <AnimatedEmoji emoji="✨" />
      <AnimatedEmoji emoji="💻" />
    </div>
  );
};

export default Index;
