import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Row, Col, Button, Divider, theme, Space } from 'antd';
import { GithubOutlined, LinkedinOutlined, TwitterOutlined, MailOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { SOCIAL_LINKS } from '../constants/index';
import './Footer.css';

const { Footer: AntFooter } = Layout;

function Footer() {
  const { token } = theme.useToken();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <AntFooter
      style={{
        background: token.colorBgContainer,
        borderTop: `1px solid ${token.colorBorder}`,
        marginLeft: '60px',
        marginRight: '60px',
      }}
    >
      <div className="footer-wrapper">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row gutter={[60, 60]} className="footer-content">
            {/* Branding Column */}
            <Col xs={24} sm={12} md={6} className="footer-column">
              <motion.div className="footer-branding" variants={itemVariants}>
                <h3 className="footer-logo" style={{ color: token.colorPrimary }}>
                  VY
                </h3>
                <p className="footer-tagline" style={{ color: token.colorTextSecondary }}>
                  Full Stack & Blockchain Developer
                </p>
                <p className="footer-description" style={{ color: token.colorTextSecondary }}>
                  Building innovative web applications and decentralized solutions.
                </p>
              </motion.div>
            </Col>

            {/* Quick Links Column */}
            <Col xs={24} sm={12} md={6} className="footer-column">
              <motion.h4 className="footer-column-title" style={{ color: token.colorText }} variants={itemVariants}>
                Navigation
              </motion.h4>
              <motion.div variants={containerVariants}>
                <Space direction="vertical" size={12} style={{ display: 'flex', width: '100%' }} className="footer-links">
                  {footerLinks.map((link, index) => (
                    <motion.button
                      key={index}
                      className="footer-link"
                      onClick={() => scrollToSection(link.id)}
                      style={{ color: token.colorTextSecondary }}
                      variants={itemVariants}
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </Space>
              </motion.div>
            </Col>

            {/* Social Links Column */}
            <Col xs={24} sm={12} md={6} className="footer-column">
              <motion.h4 className="footer-column-title" style={{ color: token.colorText }} variants={itemVariants}>
                Follow
              </motion.h4>
              <motion.div variants={containerVariants}>
                <Space size={12} wrap className="footer-socials">
                  {SOCIAL_LINKS.map((link, index) => {
                    let icon;
                    if (link.name === 'GitHub') icon = <GithubOutlined />;
                    else if (link.name === 'LinkedIn') icon = <LinkedinOutlined />;
                    else if (link.name === 'Twitter') icon = <TwitterOutlined />;
                    else if (link.name === 'Email') icon = <MailOutlined />;

                    return (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                        style={{ color: token.colorTextSecondary }}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, color: '#00ff00' }}
                      >
                        {icon}
                      </motion.a>
                    );
                  })}
                </Space>
              </motion.div>
            </Col>

            {/* CTA Column */}
            <Col xs={24} sm={12} md={6} className="footer-column">
              <motion.div variants={itemVariants}>
                <Button
                  type="primary"
                  shape="circle"
                  size="large"
                  icon={<ArrowUpOutlined />}
                  onClick={scrollToTop}
                  className="scroll-to-top-btn"
                  style={{
                    background: '#00ff00',
                    border: 'none',
                    color: '#000',
                    fontWeight: '700',
                  }}
                />
                <p className="footer-cta-text" style={{ color: token.colorTextSecondary }}>
                  Back to Top
                </p>
              </motion.div>
            </Col>
          </Row>
        </motion.div>

        {/* Divider */}
        <Divider style={{ borderColor: token.colorBorder, margin: '3rem 0' }} />

        {/* Bottom Footer */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} md={12} className="footer-copyright">
              <p style={{ color: token.colorTextSecondary, margin: 0, fontSize: '14px' }}>
                © {new Date().getFullYear()} Vijender Yadav. All rights reserved.
              </p>
            </Col>
            <Col xs={24} md={12} className="footer-credits" style={{ textAlign: 'right' }}>
              <p style={{ color: token.colorTextSecondary, margin: 0, fontSize: '14px' }}>
                Designed & Developed with <span style={{ color: '#00ff00' }}>❤</span>
              </p>
            </Col>
          </Row>
        </motion.div>
      </div>
    </AntFooter>
  );
}

export default Footer;
