import React from 'react';
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

  return (
    <AntFooter style={{ background: token.colorBgContainer, borderTop: `1px solid ${token.colorBorder}` }}>
      <div className="footer-wrapper">
        {/* Main Footer Content */}
        <Row gutter={[60, 60]} className="footer-content">
          {/* Branding Column */}
          <Col xs={24} sm={12} md={6} className="footer-column">
            <div className="footer-branding">
              <h3 className="footer-logo" style={{ color: token.colorPrimary }}>VY</h3>
              <p className="footer-tagline" style={{ color: token.colorTextSecondary }}>
                Full Stack & Blockchain Developer
              </p>
              <p className="footer-description" style={{ color: token.colorTextSecondary }}>
                Building innovative web applications and decentralized solutions.
              </p>
            </div>
          </Col>

          {/* Quick Links Column */}
          <Col xs={24} sm={12} md={6} className="footer-column">
            <h4 className="footer-column-title" style={{ color: token.colorText }}>Navigation</h4>
            <Space direction="vertical" size={12} style={{ display: 'flex', width: '100%' }} className="footer-links">
              {footerLinks.map((link, index) => (
                <button
                  key={index}
                  className="footer-link"
                  onClick={() => scrollToSection(link.id)}
                  style={{ color: token.colorTextSecondary }}
                >
                  {link.label}
                </button>
              ))}
            </Space>
          </Col>

          {/* Social Links Column */}
          <Col xs={24} sm={12} md={6} className="footer-column">
            <h4 className="footer-column-title" style={{ color: token.colorText }}>Follow</h4>
            <Space size={12} wrap className="footer-socials">
              {SOCIAL_LINKS.map((link, index) => {
                let icon;
                if (link.name === 'GitHub') icon = <GithubOutlined />;
                else if (link.name === 'LinkedIn') icon = <LinkedinOutlined />;
                else if (link.name === 'Twitter') icon = <TwitterOutlined />;
                else if (link.name === 'Email') icon = <MailOutlined />;

                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    title={link.name}
                    style={{ color: token.colorTextSecondary }}
                  >
                    {icon}
                  </a>
                );
              })}
            </Space>
          </Col>

          {/* Contact Column */}
          <Col xs={24} sm={12} md={6} className="footer-column">
            <h4 className="footer-column-title" style={{ color: token.colorText }}>Contact</h4>
            <Space direction="vertical" size={12} className="footer-contact">
              <div className="contact-item">
                <p className="contact-label" style={{ color: token.colorTextSecondary }}>Email</p>
                <a href="mailto:your@email.com" className="contact-link" style={{ color: token.colorPrimary }}>
                  your@email.com
                </a>
              </div>
              <div className="contact-item">
                <p className="contact-label" style={{ color: token.colorTextSecondary }}>Phone</p>
                <p className="contact-text" style={{ color: token.colorText }}>+1 (555) 000-0000</p>
              </div>
            </Space>
          </Col>
        </Row>

        <Divider style={{ borderTopColor: token.colorBorder, margin: '48px 0' }} />

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} md={12}>
              <p className="footer-copyright" style={{ color: token.colorTextSecondary }}>
                &copy; {new Date().getFullYear()} Vijender Yadav. All rights reserved.
              </p>
            </Col>
            <Col xs={24} md={12} style={{ textAlign: 'right' }}>
              <Button
                type="text"
                icon={<ArrowUpOutlined />}
                onClick={scrollToTop}
                className="scroll-to-top-btn"
                style={{ color: token.colorTextSecondary }}
              >
                Back to Top
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </AntFooter>
  );
}

export default Footer;
