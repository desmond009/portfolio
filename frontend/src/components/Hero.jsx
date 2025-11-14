import React from 'react';
import { Button, Space, theme } from 'antd';
import { ArrowRightOutlined, GithubOutlined, LinkedinOutlined, MailOutlined, TwitterOutlined } from '@ant-design/icons';
import { scrollToSection } from '../utils/helpers';
import './Hero.css';

function Hero() {
  const { token } = theme.useToken();

  return (
    <section className="hero" id="hero">
      <div className="hero-wrapper">
        <div className="hero-content">
          {/* Hero Title and Subtitle */}
          <div className="hero-intro">
            <p className="hero-label" style={{ color: token.colorPrimary }}>Welcome to my portfolio</p>
            <h1 className="hero-title" style={{ color: token.colorText }}>
              Hi, I'm Vijender Yadav
            </h1>
            <h2 className="hero-subtitle" style={{ color: token.colorTextSecondary }}>
              Full Stack & Blockchain Developer
            </h2>
          </div>

          {/* Hero Description */}
          <p className="hero-description" style={{ color: token.colorTextSecondary }}>
            I create innovative web applications and decentralized solutions using modern technologies. 
            Specializing in React, Node.js, Web3, and building scalable digital experiences.
          </p>

          {/* CTA Buttons */}
          <Space size={16} wrap className="hero-cta">
            <Button 
              type="primary" 
              size="large" 
              onClick={() => scrollToSection('contact')}
              icon={<ArrowRightOutlined />}
              className="hero-btn-primary"
            >
              Get In Touch
            </Button>
            <Button 
              size="large" 
              onClick={() => scrollToSection('projects')}
              className="hero-btn-secondary"
              style={{ 
                border: `1px solid ${token.colorBorder}`,
                color: token.colorText 
              }}
            >
              View My Work
            </Button>
          </Space>

          {/* Social Links */}
          <Space size={24} className="hero-socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
              <GithubOutlined />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
              <LinkedinOutlined />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Twitter">
              <TwitterOutlined />
            </a>
            <a href="mailto:your@email.com" className="social-link" title="Email">
              <MailOutlined />
            </a>
          </Space>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
