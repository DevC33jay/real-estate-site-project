import React, { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
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
  <section id="about" className={`about-section ${isVisible ? 'about-slide-in visible' : 'about-slide-in'}`}>
    <div className="container">
      <div className="about-grid">
        <div className="about-text ${isVisible ? 'about-slide-from-left visible' : 'about-slide-from-left'}">
          <h2 className="text-4xl font-bold mb-6">About Elite Realty</h2>
          <p className="text-lg mb-4">With over 20 years in the industry, we specialize in luxury homes and investment properties. Our team is dedicated to finding the perfect match for your lifestyle.</p>
          <p className="text-lg">Explore our portfolio and let us guide you home.</p>
        </div>
        <img src="https://images.freeimages.com/variants/ndM52Ty42exdbF9CVd4n2LDb/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d?fmt=webp&w=500" alt="About Us" 
        className="about-image ${isVisible ? 'about-slide-from-right visible' : 'about-slide-from-right'}" />
      </div>
    </div>
  </section>
 );
};

export default About;