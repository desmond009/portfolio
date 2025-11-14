import React from 'react';
import { scrollToSection } from '../utils/helpers';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-title">Vijender Yadav</h1>
        <h2 className="hero-subtitle">Full Stack & Blockchain Developer</h2>
        <p className="hero-description">
          Building innovative web applications and decentralized solutions with modern technologies.
        </p>
        <button className="cta-button" onClick={() => scrollToSection('contact')}>
          Get In Touch
        </button>
      </div>
    </section>
  );
}

export default Hero;
