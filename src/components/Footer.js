import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container text-center">
        <p>&copy; 2025 Elite Realty. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          {/* TODO: Insert social links */}
          <a href="TODO: Insert Twitter link" className="hover:text-blue-400">Twitter</a>
          <a href="TODO: Insert Facebook link" className="hover:text-blue-400">Facebook</a>
          <a href="TODO: Insert Instagram link" className="hover:text-blue-400">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;