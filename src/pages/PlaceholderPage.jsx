import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PlaceholderPage = ({ title }) => {
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
      <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '120px', paddingBottom: '64px' }}>
        <Link 
          to="/" 
          onClick={handleBackClick}
          className="back-link mb-6"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>
        <div className="text-center animate-fade-up">
          <h1 className="text-5xl font-extrabold mb-6"><span className="text-gradient">{title}</span></h1>
          <p className="text-xl text-gray-400">This section is currently under development. Check back soon for updates!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceholderPage;
