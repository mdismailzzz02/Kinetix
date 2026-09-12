import React from 'react';
import { ArrowRight, Battery, Zap, Wind } from 'lucide-react';
import Ferrofluid from './Ferrofluid';

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Interactive Ferrofluid WebGL background */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.45, pointerEvents: 'none', zIndex: 0 }}>
        <Ferrofluid
          colors={["#00F0FF", "#7000FF", "#00F0FF", "#3B82F6"]}
          speed={0.4}
          scale={1.4}
          turbulence={1.2}
          fluidity={0.15}
          rimWidth={0.25}
          sharpness={3}
          shimmer={1.2}
          glow={2.5}
          flowDirection="down"
          opacity={0.85}
          mouseInteraction={true}
          mouseStrength={1.5}
          mouseRadius={0.4}
        />
      </div>

      {/* Background glow effects */}
      <div className="glow-effect glow-cyan"></div>
      <div className="glow-effect glow-purple"></div>

      <div className="container hero-container">
        
        {/* Text Content */}
        <div className="hero-content animate-fade-up">
          <div className="hero-badge glass">
            <span className="pulse-dot"></span>
            THE FUTURE OF MOBILITY IS HERE
          </div>
          
          <h1 className="hero-title">
            Ride The <br />
            <span className="text-gradient">Lightning.</span>
          </h1>
          
          <p className="hero-subtitle">
            Experience uncompromised power, sleek aesthetics, and revolutionary battery tech with the new Kinetix e-bike series.
          </p>
          
          <div className="hero-actions">
            <a href="#pricing" className="btn-primary">
              View Models <ArrowRight size={20} />
            </a>
            <a href="#top-sellers" className="btn-outline">
              Explore Top Sellers
            </a>
          </div>

          {/* Quick Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-label text-cyan"><Zap size={20}/> <span>Top Speed</span></div>
              <div className="stat-value">45 <span>mph</span></div>
            </div>
            <div className="stat-item">
              <div className="stat-label text-purple"><Battery size={20}/> <span>Range</span></div>
              <div className="stat-value">120 <span>miles</span></div>
            </div>
            <div className="stat-item">
              <div className="stat-label text-white"><Wind size={20}/> <span>Weight</span></div>
              <div className="stat-value">48 <span>lbs</span></div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image-wrapper animate-fade-up delay-200">
          <div className="hero-image-glow"></div>
          <img 
            src="/images/ebike_hero_dark_1788575086186.jpg" 
            alt="Kinetix Concept E-Bike" 
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
