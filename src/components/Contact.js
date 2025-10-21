import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-blue-600 text-white">
      <div className="container text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-xl mb-8">Ready to start your journey? Contact us today.</p>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded text-black" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded text-black" />
          <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded text-black"></textarea>
          <button type="submit" className="w-full bg-white text-blue-600 py-3 rounded font-bold hover:bg-gray-100 transition-colors">
            Send Message
          </button>
        </form>
        {/* TODO: Add form submission logic with JS if needed */}
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          form { max-width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Contact;