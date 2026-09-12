import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TopSellers from '../components/TopSellers';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TopSellers />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
