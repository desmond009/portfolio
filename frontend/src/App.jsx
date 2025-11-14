import React, { useState, useEffect } from 'react';
import { theme } from 'antd';
import './App.css';
import './styles/globals.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { token } = theme.useToken();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  const handleNavClick = (item) => {
    const id = item.toLowerCase();
    const element = document.getElementById(id === 'home' ? 'hero' : id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="app" style={{ background: token.colorBgBase, color: token.colorText }}>
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{
        background: scrolled ? 'rgba(20, 20, 20, 0.95)' : 'transparent',
        borderBottom: scrolled ? `1px solid ${token.colorBorder}` : 'none',
      }}>
        <div className="nav-container">
          <div className="logo" style={{ color: token.colorPrimary, fontSize: '28px', fontWeight: 'bold', letterSpacing: '2px' }}>
            VY
          </div>

          {/* Desktop Menu */}
          <div className="nav-menu desktop-menu">
            {navItems.map((item) => (
              <button
                key={item}
                className="nav-link"
                onClick={() => handleNavClick(item)}
                style={{ color: token.colorText }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: token.colorText }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="nav-menu mobile-menu" style={{ background: token.colorBgElevated }}>
              {navItems.map((item) => (
                <button
                  key={item}
                  className="nav-link"
                  onClick={() => handleNavClick(item)}
                  style={{ color: token.colorText }}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
