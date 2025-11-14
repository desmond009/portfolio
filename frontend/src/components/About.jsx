import React from 'react';
import { Card, Button, Row, Col, theme, Space, Divider } from 'antd';
import { DownloadOutlined, CheckOutlined } from '@ant-design/icons';
import { downloadResume } from '../utils/helpers';
import './About.css';

function About() {
  const { token } = theme.useToken();

  const highlights = [
    'Full Stack Development',
    'Blockchain & Web3',
    'React & Node.js Expert',
    'Scalable Solutions',
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label" style={{ color: token.colorPrimary }}>Get to know me</div>
          <h2 className="section-title" style={{ color: token.colorText }}>About Me</h2>
        </div>

        <Row gutter={[60, 60]} align="middle" className="about-content">
          {/* Left Column - Text Content */}
          <Col xs={24} lg={12} className="about-text-column">
            <Space direction="vertical" size={24} style={{ width: '100%' }}>
              <p className="about-paragraph" style={{ color: token.colorTextSecondary }}>
                I'm a passionate Full Stack and Blockchain Developer with a keen interest in building scalable web 
                applications and decentralized solutions. With several years of experience working with modern technologies, 
                I've developed expertise in creating innovative digital experiences.
              </p>

              <p className="about-paragraph" style={{ color: token.colorTextSecondary }}>
                My journey into tech started with a curiosity for solving problems through code. Today, I combine that 
                curiosity with practical experience in React, Node.js, Web3, and cloud technologies. I'm committed to 
                writing clean, maintainable code and staying updated with industry best practices.
              </p>

              <p className="about-paragraph" style={{ color: token.colorTextSecondary }}>
                When I'm not coding, you'll find me exploring emerging technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>

              {/* Highlights */}
              <div className="about-highlights">
                {highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item">
                    <CheckOutlined style={{ color: token.colorPrimary, marginRight: '12px' }} />
                    <span style={{ color: token.colorText }}>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                type="primary" 
                size="large" 
                icon={<DownloadOutlined />}
                onClick={downloadResume}
                className="about-cta"
              >
                Download Resume
              </Button>
            </Space>
          </Col>

          {/* Right Column - Profile Card */}
          <Col xs={24} lg={12} className="about-card-column">
            <Card
              className="about-card"
              style={{
                background: token.colorBgElevated,
                border: `1px solid ${token.colorBorder}`,
              }}
              bodyStyle={{ padding: '48px 32px' }}
            >
              <div className="profile-avatar">
                <div className="avatar-placeholder">VY</div>
              </div>
              
              <Divider style={{ margin: '32px 0', borderColor: token.colorBorder }} />
              
              <div className="profile-info">
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: token.colorText, marginBottom: '8px' }}>
                  Vijender Yadav
                </h3>
                <p style={{ fontSize: '14px', color: token.colorTextSecondary, marginBottom: '24px' }}>
                  Full Stack Developer
                </p>

                <div className="profile-stats">
                  <div className="stat">
                    <div className="stat-value" style={{ color: token.colorPrimary }}>5+</div>
                    <div className="stat-label" style={{ color: token.colorTextSecondary }}>Years Experience</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value" style={{ color: token.colorPrimary }}>20+</div>
                    <div className="stat-label" style={{ color: token.colorTextSecondary }}>Projects Completed</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value" style={{ color: token.colorPrimary }}>10+</div>
                    <div className="stat-label" style={{ color: token.colorTextSecondary }}>Happy Clients</div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default About;
