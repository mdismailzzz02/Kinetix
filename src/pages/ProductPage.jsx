import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Battery, Zap, Wind, ShieldCheck, Activity, Gauge } from 'lucide-react';
import { bikes } from '../data/bikes';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Ferrofluid from '../components/Ferrofluid';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const bike = bikes.find(b => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleBackClick = (e) => {
    if (window.history.length > 2) {
      e.preventDefault();
      navigate(-1);
    }
  };

  if (!bike) {
    return (
      <div className="not-found">
        <h1>Bike Not Found</h1>
        <Link to="/" className="btn-primary">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="container" style={{ paddingTop: '120px' }}>
        <Link 
          to="/" 
          onClick={handleBackClick}
          className="back-link"
        >
          <ArrowLeft size={18} /> Back to Models
        </Link>
        
        <div className="product-page-grid">
          <div className="product-page-image-wrapper glass animate-fade-up" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none', zIndex: 0 }}>
              <Ferrofluid
                colors={["#00F0FF", "#3B82F6", "#A855F7"]}
                speed={0.5}
                scale={1.3}
                turbulence={1.1}
                fluidity={0.15}
                rimWidth={0.2}
                sharpness={2.5}
                shimmer={1.0}
                glow={2.0}
                flowDirection="down"
                opacity={0.8}
                mouseInteraction={true}
                mouseStrength={1.2}
              />
            </div>
            <img src={bike.image} alt={bike.name} className="product-page-image" style={{ position: 'relative', zIndex: 1 }} />
          </div>
          
          <div className="product-page-info animate-fade-up delay-100">
            <div className="product-page-header">
              <span className="product-page-type">{bike.type}</span>
              <h1>{bike.name}</h1>
              <p className="product-page-desc">{bike.description}</p>
              <div className="price-display">
                <span className="price">{bike.price}</span>
                <span className="currency">USD</span>
              </div>
            </div>
            
            <h3 className="specs-title">Technical Specifications</h3>
            
            <div className="specs-grid">
              <div className="spec-card glass">
                <Zap className="text-cyan spec-icon" size={24} />
                <p className="spec-label">Motor</p>
                <p className="spec-value">{bike.specs.motor}</p>
              </div>
              <div className="spec-card glass">
                <Battery className="text-purple spec-icon" size={24} />
                <p className="spec-label">Battery Life</p>
                <p className="spec-value">{bike.specs.batteryLife}</p>
              </div>
              <div className="spec-card glass">
                <Gauge className="text-white spec-icon" size={24} />
                <p className="spec-label">Top Speed</p>
                <p className="spec-value">{bike.specs.topSpeed}</p>
              </div>
              <div className="spec-card glass">
                <ShieldCheck className="text-cyan spec-icon" size={24} />
                <p className="spec-label">Brakes</p>
                <p className="spec-value">{bike.specs.brakes}</p>
              </div>
              <div className="spec-card glass">
                <Activity className="text-purple spec-icon" size={24} />
                <p className="spec-label">Suspension</p>
                <p className="spec-value">{bike.specs.suspension}</p>
              </div>
              <div className="spec-card glass">
                <Wind className="text-white spec-icon" size={24} />
                <p className="spec-label">Weight</p>
                <p className="spec-value">{bike.specs.weight}</p>
              </div>
            </div>
            
            <div className="product-page-action">
              <button className="btn-primary btn-block">
                Pre-Order {bike.name}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
