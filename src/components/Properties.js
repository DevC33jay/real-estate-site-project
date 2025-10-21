import React, { useEffect, useState } from 'react';

const Properties = () => {
  const [properties] = useState([
    { id: 1, title: 'Luxury Villa', price: '$1,200,000', img: 'TODO: Insert property 1 image URL' },
    { id: 2, title: 'Modern Apartment', price: '$750,000', img: 'TODO: Insert property 2 image URL' },
    { id: 3, title: 'Cozy Cottage', price: '$450,000', img: 'TODO: Insert property 3 image URL' },
    { id: 4, title: 'Beachfront Home', price: '$2,500,000', img: 'TODO: Insert property 4 image URL' },
  ]);

  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('properties');
      if (element.getBoundingClientRect().top < window.innerHeight) {
        setVisibleCount(properties.length);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [properties.length]);

  return (
    <section id="properties" className="properties-section">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Properties</h2>
        <div className="properties-grid">
          {properties.slice(0, visibleCount).map((prop) => (
            <div key={prop.id} className="property-card hover-scale">
              <img src={prop.img} alt={prop.title} className="w-full h-48 object-cover" />
              <div className="card-content">
                <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
                <p className="price text-lg">{prop.price}</p>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors">
                  {/* TODO: Insert link to details page */}
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;