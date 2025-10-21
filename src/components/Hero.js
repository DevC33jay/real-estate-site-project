import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('hero');
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className={`hero min-h-screen flex items-center ${isVisible ? 'slide-in visible' : 'slide-in'}`}>
      <div className="container text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">Discover Your Dream Home</h1> {/* Sizes handled in CSS */}
        <p className="text-xl mb-8">Premium real estate services tailored for you.</p>
        <button onClick={() => document.getElementById('properties').scrollIntoView({ behavior: 'smooth' })} className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg transition-colors"> {/* Classes now in CSS */}
          View Properties
        </button>
      </div>
    </section>
  );
};

export default Hero;