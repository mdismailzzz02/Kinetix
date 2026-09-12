import React from 'react';
import { Zap, Globe, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <a href="#" className="logo">
              <Zap className="logo-icon" size={32} />
              <span className="text-gradient">KINETIX</span>
            </a>
            <p className="footer-desc">
              Pushing the boundaries of electric mobility. Ride the future today.
            </p>
            <div className="social-links">
              <a href="#"><Globe size={20} /></a>
              <a href="#"><Mail size={20} /></a>
              <a href="#"><MessageCircle size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Models</h4>
            <ul>
              <li><Link to="/product/lite">Kinetix Lite</Link></li>
              <li><Link to="/product/metro">Kinetix Metro</Link></li>
              <li><Link to="/product/apex">Kinetix Apex</Link></li>
              <li><Link to="/compare">Compare Models</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/technology">Technology</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-subscribe">
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for the latest Kinetix news and exclusive offers.</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Kinetix Mobility Inc. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
