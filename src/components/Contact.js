import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contact');
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
    <section id="contact" className={`contact-section ${isVisible ? 'contact-slide-in visible' : 'contact-slide-in'}`}>
      <div className="container text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-xl mb-8">Ready to start your journey? Contact us today.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded text-black stagger-0" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded text-black stagger-1" />
          <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded text-black stagger-2"></textarea>
          <button type="submit" className="w-full bg-white text-blue-600 py-3 rounded font-bold hover:bg-gray-100 transition-colors stagger-3">
            Send Message
          </button>
        </form>
        {/* TODO: Add form submission logic with JS if needed */}
      </div>
    </section>
  );
};

export default Contact;