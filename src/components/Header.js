import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50 transition-all duration-300">
      <nav className="container flex justify-between items-center py-4"> {/* Note: This 'flex...' is now styled in CSS */}
        <div className="logo">Elite Realty</div>
        <ul className={`ul ${isMenuOpen ? 'open' : ''}`}>
          <li><button onClick={() => scrollToSection('hero')} className="nav-link">Home</button></li>
          <li><button onClick={() => scrollToSection('properties')} className="nav-link">Properties</button></li>
          <li><button onClick={() => scrollToSection('about')} className="nav-link">About</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
        </ul>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Header;