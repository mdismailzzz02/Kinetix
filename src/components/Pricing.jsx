import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { bikes } from '../data/bikes';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        
        <div className="section-header animate-fade-up">
          <h2>Models & <span className="text-gradient">Pricing</span></h2>
          <p>From city commutes to off-road adventures, find the perfect Kinetix e-bike for your lifestyle.</p>
        </div>

        <div className="pricing-grid">
          {bikes.map((model, index) => (
            <div 
              key={model.id} 
              className={`glass pricing-card animate-fade-up delay-${(index % 3 + 1) * 100} ${model.recommended ? 'recommended' : ''}`}
            >
              {model.recommended && (
                <div className="popular-badge">Most Popular</div>
              )}
              
              <div className="pricing-header">
                <p className="model-type">{model.type}</p>
                <h3>{model.name}</h3>
                <div className="price-display">
                  <span className="price">{model.price}</span>
                  <span className="currency">USD</span>
                </div>
              </div>

              <ul className="feature-list">
                {model.features.map((feature, i) => (
                  <li key={i}>
                    <Check className="check-icon" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to={`/product/${model.id}`} className={`btn-block ${model.recommended ? 'btn-primary' : 'btn-secondary'}`} style={{ display: 'block', textAlign: 'center', textDecoration: 'none', boxSizing: 'border-box' }}>
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
