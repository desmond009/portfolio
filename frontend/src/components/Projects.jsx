import React, { useState } from 'react';
import { Card, Row, Col, Button, Tag, Space, theme } from 'antd';
import { GithubOutlined, LinkOutlined, EyeOutlined } from '@ant-design/icons';
import { PROJECTS } from '../constants/index';
import './Projects.css';

function Projects() {
  const { token } = theme.useToken();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label" style={{ color: token.colorPrimary }}>Recent Works</div>
          <h2 className="section-title" style={{ color: token.colorText }}>Featured Projects</h2>
          <p className="section-subtitle" style={{ color: token.colorTextSecondary }}>
            A selection of projects I've worked on, showcasing my skills and expertise
          </p>
        </div>

        {/* Projects Grid */}
        <Row gutter={[32, 32]} className="projects-grid">
          {PROJECTS.map((project) => (
            <Col key={project.id} xs={24} sm={24} lg={8} className="project-col">
              <Card
                className="project-card"
                hoverable
                style={{
                  background: token.colorBgContainer,
                  border: `1px solid ${token.colorBorder}`,
                  height: '100%',
                }}
                bodyStyle={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '24px' }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Project Image Placeholder */}
                <div 
                  className="project-image"
                  style={{
                    background: `linear-gradient(135deg, ${token.colorPrimary}20, ${token.colorPrimary}05)`,
                    borderRadius: '8px',
                    height: '200px',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '48px',
                    fontWeight: '700',
                    color: token.colorPrimary,
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <div className="image-overlay">
                    <EyeOutlined style={{ fontSize: '32px' }} />
                  </div>
                  {project.id}
                </div>

                {/* Project Title */}
                <h3 className="project-title" style={{ color: token.colorText, marginBottom: '12px' }}>
                  {project.name}
                </h3>

                {/* Project Description */}
                <p className="project-description" style={{ 
                  flex: 1,
                  color: token.colorTextSecondary,
                  marginBottom: '16px',
                  lineHeight: '1.6',
                }}>
                  {project.description}
                </p>

                {/* Project Tags */}
                <Space wrap style={{ marginBottom: '20px' }}>
                  {project.tags.map((tag, idx) => (
                    <Tag 
                      key={idx}
                      style={{
                        background: `${token.colorPrimary}15`,
                        color: token.colorPrimary,
                        border: `1px solid ${token.colorPrimary}40`,
                        borderRadius: '4px',
                        padding: '4px 12px',
                      }}
                    >
                      {tag}
                    </Tag>
                  ))}
                </Space>

                {/* Project Actions */}
                <Space style={{ width: '100%', gap: '12px' }} className="project-actions">
                  <Button 
                    type="primary" 
                    icon={<LinkOutlined />}
                    onClick={() => window.open(project.demo, '_blank')}
                    style={{ flex: 1 }}
                    className="project-btn"
                  >
                    Live Demo
                  </Button>
                  <Button 
                    icon={<GithubOutlined />}
                    onClick={() => window.open(project.code, '_blank')}
                    className="project-btn"
                    style={{
                      border: `1px solid ${token.colorBorder}`,
                      color: token.colorText,
                    }}
                  >
                    Code
                  </Button>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default Projects;
