import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'glass-nav navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <Zap className="logo-icon" size={32} />
          <span className="text-gradient">KINETIX</span>
        </Link>

        {/* Desktop Links */}
        <div className="desktop-menu">
          <a href={isHome ? "#pricing" : "/#pricing"}>Models</a>
          <a href={isHome ? "#top-sellers" : "/#top-sellers"}>Top Sellers</a>
          <Link to="/technology">Technology</Link>
          <a href={isHome ? "#pricing" : "/#pricing"} className="btn-primary">Pre-Order</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu glass-nav">
          <a href={isHome ? "#pricing" : "/#pricing"}>Models</a>
          <a href={isHome ? "#top-sellers" : "/#top-sellers"}>Top Sellers</a>
          <Link to="/technology">Technology</Link>
          <a href={isHome ? "#pricing" : "/#pricing"} className="btn-primary">Pre-Order</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
