import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import PlaceholderPage from './pages/PlaceholderPage';
import Technology from './pages/Technology';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/about" element={<PlaceholderPage title="About Us" />} />
        <Route path="/careers" element={<PlaceholderPage title="Careers" />} />
        <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
        <Route path="/compare" element={<PlaceholderPage title="Compare Models" />} />
      </Routes>
    </Router>
  );
}

export default App;
