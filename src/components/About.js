import React, { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element.getBoundingClientRect().top < window.innerHeight) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className={`about-section ${isVisible ? 'slide-in visible' : 'slide-in'}`}>
      <div className="container">
        <div className="about-grid"> {/* Renamed for clarity; styles target .about-grid now */}
          <div>
            <h2 className="text-4xl font-bold mb-6">About Elite Realty</h2>
            <p className="text-lg mb-4">With over 20 years in the industry, we specialize in luxury homes and investment properties. Our team is dedicated to finding the perfect match for your lifestyle.</p>
            <p className="text-lg">Explore our portfolio and let us guide you home.</p>
          </div>
          <img src="TODO: Insert about image URL" alt="About Us" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;