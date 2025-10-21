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
      <nav className="container flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-blue-600">Elite Realty</div>
        <ul className={`md:flex space-x-6 ${isMenuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-white shadow-md' : 'hidden md:flex'}`}>
          <li><button onClick={() => scrollToSection('hero')} className="nav-link hover:underline transition-all duration-300">Home</button></li>
          <li><button onClick={() => scrollToSection('properties')} className="nav-link hover:underline transition-all duration-300">Properties</button></li>
          <li><button onClick={() => scrollToSection('about')} className="nav-link hover:underline transition-all duration-300">About</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="nav-link hover:underline transition-all duration-300">Contact</button></li>
        </ul>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </nav>
      <style jsx>{`
        header.scrolled {
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
        }
        .nav-link {
          padding: 0.5rem 1rem;
        }
      `}</style>
    </header>
  );
};

export default Header;