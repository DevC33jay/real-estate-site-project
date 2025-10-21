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
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className={`hero bg-cover bg-center min-h-screen flex items-center ${isVisible ? 'slide-in visible' : 'slide-in'}`}>
      <div className="container text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">Discover Your Dream Home</h1>
        <p className="text-xl mb-8">Premium real estate services tailored for you.</p>
        <button onClick={() => document.getElementById('properties').scrollIntoView({ behavior: 'smooth' })} className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg transition-colors">
          View Properties
        </button>
      </div>
      <style jsx>{`
        .hero {
          background-image: url('TODO: Insert hero background image URL here');
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        @media (max-width: 768px) {
          .hero h1 { font-size: 3rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;