import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Battery, Cpu, Smartphone, Shield, ArrowLeft } from 'lucide-react';
import Ferrofluid from '../components/Ferrofluid';

const Technology = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = (e) => {
    if (window.history.length > 2) {
      e.preventDefault();
      navigate(-1);
    }
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="container" style={{ flex: 1, paddingTop: '120px', paddingBottom: '64px' }}>
        <Link 
          to="/" 
          onClick={handleBackClick}
          className="back-link"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>
        
        <div className="section-header animate-fade-up">
          <h2>Our <span className="text-gradient">Technology</span></h2>
          <p>Innovation at the core of every Kinetix e-bike. We engineer the future of mobility.</p>
        </div>

        {/* Interactive Ferrofluid Tech Banner */}
        <div className="glass animate-fade-up" style={{ borderRadius: '24px', overflow: 'hidden', margin: '40px 0', padding: '40px', position: 'relative', minHeight: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Ferrofluid
              colors={["#00F0FF", "#A855F7", "#3B82F6", "#06B6D4"]}
              speed={0.6}
              scale={1.5}
              turbulence={1.4}
              fluidity={0.12}
              rimWidth={0.25}
              sharpness={2.8}
              shimmer={1.5}
              glow={2.2}
              flowDirection="right"
              opacity={0.9}
              mouseInteraction={true}
              mouseStrength={1.5}
              mouseRadius={0.35}
            />
          </div>
          <div style={{ position: 'relative', zIndex: 1, pointerEvents: 'none', maxWidth: '650px' }}>
            <span style={{ color: 'var(--neon-blue)', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.875rem' }}>Next-Gen Magnetics</span>
            <h3 style={{ fontSize: '2.2rem', margin: '8px 0 16px 0', color: '#fff' }}>Ferrofluid Active Damping & Dynamics</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Interact with our proprietary electromagnetic suspension matrix in real time. Move your cursor to test active magnetic response and fluid viscosity adaptation.
            </p>
          </div>
        </div>

        <div className="tech-grid">
          <div className="tech-card glass animate-fade-up delay-100">
            <Battery className="text-cyan mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">Quantum Core Batteries</h3>
            <p className="text-gray-400">Our proprietary solid-state battery technology delivers 40% more energy density. Experience up to 120 miles of range on a single charge with zero thermal degradation.</p>
          </div>

          <div className="tech-card glass animate-fade-up delay-200">
            <Cpu className="text-purple mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">Vortex Drive Motors</h3>
            <p className="text-gray-400">Engineered for maximum torque and silent operation. The Vortex mid-drive systems offer seamless pedal assist that adapts to your terrain in milliseconds.</p>
          </div>

          <div className="tech-card glass animate-fade-up delay-300">
            <Smartphone className="text-white mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">Kinetix OS</h3>
            <p className="text-gray-400">Your bike is alive. Integrated telemetry connects instantly to your smartphone. Track performance, lock your bike remotely, and receive over-the-air performance updates.</p>
          </div>

          <div className="tech-card glass animate-fade-up delay-100">
            <Shield className="text-cyan mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">Aero-Carbon Frames</h3>
            <p className="text-gray-400">Using aerospace-grade carbon fiber and advanced forging techniques, our frames are incredibly lightweight yet indestructible, dampening road vibration perfectly.</p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Technology;
