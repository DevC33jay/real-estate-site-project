import React, { useEffect, useState } from 'react';

const Properties = () => {
  const [properties] = useState([
    { id: 1, title: 'Luxury Villa', price: '$1,200,000', img: 'https://images.freeimages.com/images/large-previews/013/casapueblo-uruguay-2-1523911.jpg?fmt=webp&w=500' },
    { id: 2, title: 'Modern Apartment', price: '$750,000', img: 'https://images.freeimages.com/images/large-previews/8bb/modern-swedish-architecture-5-1056775.jpg?fmt=webp&w=500' },
    { id: 3, title: 'Cozy Cottage', price: '$350,000', img: 'https://media.istockphoto.com/id/2181328272/photo/country-kitchen-interior.webp?b=1&s=612x612&w=0&k=20&c=RJ8YmsYMWhQTKCe3yP0JJe1eZTsfqJDbosr7OileDXo=' },
    { id: 4, title: 'Beachfront Home', price: '$2,500,000', img: 'https://media.istockphoto.com/id/2205315214/photo/beachfront-condominium-with-ocean-backdrop.webp?b=1&s=612x612&w=0&k=20&c=0X_a9D7iMsk8GU8YEwngjA9SGvy57E3HPsxQhNRvUN8=' },
  ]);
  
  const [visibleProperties, setVisibleProperties] = useState([]); // Changed to track individual visibility

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('properties');
      if (element.getBoundingClientRect().top < window.innerHeight) {
        // Stagger reveal with JS for more control (optional; CSS nth-child works too)
        properties.forEach((_, index) => {
          setTimeout(() => {
            setVisibleProperties(prev => [...prev, index]);
          }, index * 200); // 200ms delay per card
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [properties]);

  return (
    <section id="properties" className="properties-section">
      <div className="container">
        <h2>Featured Properties</h2>
        <div className="properties-grid">
          {properties.map((prop, index) => (
            <div key={prop.id} className={`property-card hover-scale card-border ${visibleProperties.includes(index) ? 'slide-in visible' : 'slide-in'}`}>
              <img src={prop.img} alt={prop.title} className="property-image" />
              <div className="card-content">
                <h3>{prop.title}</h3>
                <p className="price">{prop.price}</p>
                <button>
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