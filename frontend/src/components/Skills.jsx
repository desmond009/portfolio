import React from 'react';
import { motion } from 'framer-motion';
import { Card, Row, Col, Tag, theme, Space } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { SKILLS } from '../constants/index';
import './Skills.css';

function Skills() {
  const { token } = theme.useToken();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-label" style={{ color: token.colorPrimary }}>My Expertise</div>
          <h2 className="section-title" style={{ color: token.colorText }}>Skills & Expertise</h2>
          <p className="section-subtitle" style={{ color: token.colorTextSecondary }}>
            A comprehensive set of technologies and skills I've mastered over the years
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row gutter={[32, 32]} className="skills-grid">
            {SKILLS.map((skillGroup, index) => (
              <Col key={index} xs={24} sm={12} lg={8} className="skill-col">
                <motion.div variants={itemVariants}>
                  <Card
                    className="skill-card"
                    style={{
                      background: token.colorBgContainer,
                      border: `1px solid ${token.colorBorder}`,
                      height: '100%',
                    }}
                    bodyStyle={{ display: 'flex', flexDirection: 'column', padding: '32px 24px' }}
                  >
                    {/* Card Header with Icon */}
                    <div className="skill-card-header" style={{ marginBottom: '24px' }}>
                      <h3 className="skill-category" style={{ color: token.colorPrimary }}>
                        <CheckCircleOutlined style={{ marginRight: '8px' }} />
                        {skillGroup.category}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <Space direction="vertical" style={{ width: '100%', gap: '12px' }}>
                      {skillGroup.items.map((skill, idx) => (
                        <Tag
                          key={idx}
                          style={{
                            background: `${token.colorPrimary}15`,
                            color: token.colorPrimary,
                            border: `1px solid ${token.colorPrimary}40`,
                            borderRadius: '6px',
                            padding: '8px 16px',
                            fontSize: '14px',
                            fontWeight: '500',
                            margin: 0,
                            cursor: 'default',
                            transition: 'all 0.3s ease',
                          }}
                          className="skill-tag"
                        >
                          {skill}
                        </Tag>
                      ))}
                    </Space>

                    {/* Card Footer */}
                    <div className="skill-card-footer" style={{ marginTop: '20px', paddingTop: '20px', borderTop: `1px solid ${token.colorBorder}` }}>
                      <p style={{ fontSize: '12px', color: token.colorTextSecondary, margin: 0 }}>
                        {skillGroup.items.length} skills
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
