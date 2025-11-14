import React, { useState, useEffect } from 'react';
import { theme } from 'antd';
import './App.css';
import './styles/globals.css';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { token } = theme.useToken();

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  const handleNavClick = (item) => {
    const id = item.toLowerCase();
    const element = document.getElementById(id === 'home' ? 'hero' : id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app" style={{ background: token.colorBgBase, color: token.colorText }}>
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Right Sidebar */}
      <RightSidebar navItems={navItems} onNavClick={handleNavClick} />

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
