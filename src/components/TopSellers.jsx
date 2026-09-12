import React from 'react';
import { TrendingUp, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { bikes } from '../data/bikes';

const TopSellers = () => {
  const topSellers = bikes.filter(bike => bike.topSeller);

  return (
    <section id="top-sellers" className="top-sellers-section">
      <div className="container">
        
        <div className="section-header animate-fade-up">
          <h2>Highest Sale <span className="text-gradient">Rates</span></h2>
          <p>Discover the community favorites. These models have consistently broken sales records and earned the highest praise from riders worldwide.</p>
        </div>

        <div className="product-grid">
          {topSellers.map((item, index) => (
            <Link to={`/product/${item.id}`} key={item.id} className={`glass product-card animate-fade-up delay-${(index + 1) * 100}`} style={{ display: 'flex', flexDirection: 'column', color: 'inherit', textDecoration: 'none' }}>
              <div className="product-image-container">
                <span className="badge"><TrendingUp size={14}/> {item.badge}</span>
                <img src={item.image} alt={item.name} />
              </div>
              
              <div className="product-info">
                <div className="product-header">
                  <h3>{item.name}</h3>
                  <div className="rating">
                    <Star size={14} fill="currentColor" /> {item.rating}
                  </div>
                </div>
                
                <p className="product-desc">{item.description}</p>
                
                <div className="product-stats">
                  <div>
                    <p className="stat-title">Total Sales</p>
                    <p className="stat-number">{item.sales}</p>
                  </div>
                  <Award className="award-icon" size={40} />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopSellers;
