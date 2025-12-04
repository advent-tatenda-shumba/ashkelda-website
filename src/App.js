import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaWhatsapp, FaMoon, FaSun } from 'react-icons/fa';
import './index.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Import helper

// Pages
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', !darkMode);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '263773026050';
    const message = encodeURIComponent('Hello! I would like to inquire about room availability at Ashkelda Guest House.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Router>
      {/* FIX: ScrollToTop must be INSIDE Router but OUTSIDE Routes */}
      <ScrollToTop />
      
      <div className="App">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
        
        <div className="whatsapp-float" onClick={handleWhatsAppClick} title="Book via WhatsApp">
          <FaWhatsapp />
        </div>
        
        <button 
          className="dark-mode-toggle" 
          onClick={toggleDarkMode}
          style={{
            position: 'fixed',
            bottom: '100px',
            right: '30px',
            zIndex: 999
          }}
          title="Toggle Dark Mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </Router>
  );
}

export default App;