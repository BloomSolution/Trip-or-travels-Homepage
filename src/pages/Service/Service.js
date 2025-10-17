
import React, { useState, useEffect } from 'react';
import './Services.css';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.observe');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      icon: '✈️',
      title: 'Flight Booking',
      description: 'Find and book the best flight deals worldwide with our advanced search technology and exclusive partnerships.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=250&fit=crop',
      features: ['24/7 Support', 'Best Price Guarantee', 'Flexible Booking'],
      color: '#2196F3'
    },
    {
      id: 2,
      icon: '🏨',
      title: 'Hotel Reservations',
      description: 'Book from millions of hotels worldwide, from luxury resorts to cozy bed & breakfasts.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop',
      features: ['Instant Confirmation', 'No Hidden Fees', 'Free Cancellation'],
      color: '#FF5722'
    },
    {
      id: 3,
      icon: '📅',
      title: 'Tour Packages',
      description: 'Carefully curated tour packages for every type of traveler, from adventure seekers to culture enthusiasts.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop',
      features: ['Expert Guides', 'All-Inclusive', 'Small Groups'],
      color: '#4CAF50'
    },
    {
      id: 4,
      icon: '📸',
      title: 'Photography Tours',
      description: 'Capture stunning moments with our specialized photography tours led by professional photographers.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
      features: ['Pro Equipment', 'Photo Editing', 'Portfolio Building'],
      color: '#9C27B0'
    },
    {
      id: 5,
      icon: '🛡️',
      title: 'Travel Insurance',
      description: 'Comprehensive travel insurance to protect you and your loved ones during your adventures.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop',
      features: ['Medical Coverage', 'Trip Cancellation', 'Emergency Support'],
      color: '#FF9800'
    },
    {
      id: 6,
      icon: '🧭',
      title: 'Custom Itineraries',
      description: 'Personalized travel planning service to create your perfect journey based on your preferences.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop',
      features: ['Personal Consultant', 'Flexible Planning', 'Local Insights'],
      color: '#607D8B'
    }
  ];

  const features = [
    { icon: '⏰', title: '24/7 Support', desc: 'Round-the-clock customer service' },
    { icon: '⭐', title: 'Best Deals', desc: 'Guaranteed lowest prices' },
    { icon: '👥', title: 'Expert Team', desc: 'Travel professionals at your service' },
    { icon: '❤️', title: 'Trusted', desc: 'Over 1M+ happy travelers' }
  ];

  const stats = [
    { number: '1M+', label: 'Happy Travelers' },
    { number: '50+', label: 'Countries' },
    { number: '24/7', label: 'Support' },
    { number: '10+', label: 'Years Experience' }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className={`hero ${isVisible ? 'visible' : ''}`}>
        <div className="floating-icons">
          <div className="floating-icon">✈️</div>
          <div className="floating-icon">🌎</div>
          <div className="floating-icon">🏔️</div>
          <div className="floating-icon">📸</div>
        </div>
        <div className="hero-content">
          <h1>Our Travel Services</h1>
          <p>Discover amazing destinations with our comprehensive travel solutions</p>
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section observe">
        <div className="container">
          <h2>Why Choose TRIP OR TRAVEL?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title observe">Our Premium Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`service-card observe ${hoveredCard === service.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ '--delay': `${index * 0.1}s`, '--accent-color': service.color }}
              >
                <div className="card-image">
                  <img src={service.image} alt={service.title} />
                  <div className="image-overlay">
                    <div className="service-icon">{service.icon}</div>
                  </div>
                </div>
                <div className="card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="features-list">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                  <button className="cta-button">
                    Learn More
                    <span className="button-arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section observe">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Adventure?</h2>
            <p>Let us help you create unforgettable memories with our exceptional travel services</p>
            <div className="cta-buttons">
              <button className="primary-btn">
                <span>Get Started</span>
                <div className="btn-shine"></div>
              </button>
              <button className="secondary-btn">
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;