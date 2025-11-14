import React from 'react';
import { motion } from 'framer-motion';
import { Button, Space, theme } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { scrollToSection } from '../utils/helpers';
import './Hero.css';

function Hero() {
  const { token } = theme.useToken();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-wrapper">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Tagline */}
          <motion.div variants={itemVariants} className="hero-tagline">
            <span style={{ color: token.colorPrimary }}>Welcome</span>
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            variants={itemVariants}
            className="hero-title"
            style={{ color: token.colorText }}
          >
            FRONTEND DEVELOPER
          </motion.h1>

          {/* Hero Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="hero-subtitle"
            style={{ color: token.colorTextSecondary }}
          >
            Full Stack & Blockchain Specialist
          </motion.h2>

          {/* Hero Description */}
          <motion.p
            variants={itemVariants}
            className="hero-description"
            style={{ color: token.colorTextSecondary }}
          >
            I create innovative web applications and decentralized solutions using modern
            technologies. Specializing in React, Node.js, Web3, and building scalable
            digital experiences.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="hero-cta">
            <Button
              type="primary"
              size="large"
              onClick={() => scrollToSection('contact')}
              icon={<ArrowRightOutlined />}
              className="hero-btn-primary"
              style={{ background: '#00ff00', border: 'none', color: '#000' }}
            >
              HIRE ME
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="scroll-dot"></div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
