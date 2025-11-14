import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Form, Input, Button, message, theme, Row, Col, Space, Divider } from 'antd';
import { SendOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { submitContactForm } from '../api/apiClient';
import './Contact.css';

function Contact() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { token } = theme.useToken();

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await submitContactForm(values);
      message.success(response.message || 'Message sent successfully!');
      form.resetFields();
    } catch (error) {
      message.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <MailOutlined />,
      label: 'Email',
      value: 'your@email.com',
      link: 'mailto:your@email.com'
    },
    {
      icon: <PhoneOutlined />,
      label: 'Phone',
      value: '+1 (555) 000-0000',
      link: 'tel:+15550000000'
    },
    {
      icon: <EnvironmentOutlined />,
      label: 'Location',
      value: 'Your City, Country',
      link: null
    }
  ];

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
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-label" style={{ color: token.colorPrimary }}>
            GET IN TOUCH
          </div>
          <h2 className="section-title" style={{ color: token.colorText }}>
            Let's Connect
          </h2>
        </motion.div>

        <Row gutter={[60, 60]} align="stretch" className="contact-content">
          {/* Left Column - Contact Info */}
          <Col xs={24} lg={10} className="contact-info-column">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Space direction="vertical" size={32} style={{ width: '100%' }}>
                {contactInfo.map((info, index) => (
                  <motion.div key={index} className="contact-info-item" variants={itemVariants}>
                    <div className="contact-icon" style={{ color: token.colorPrimary }}>
                      {info.icon}
                    </div>
                    <div className="contact-details">
                      <p className="contact-label" style={{ color: token.colorTextSecondary }}>
                        {info.label}
                      </p>
                      {info.link ? (
                        <a href={info.link} className="contact-value" style={{ color: token.colorText }}>
                          {info.value}
                        </a>
                      ) : (
                        <p className="contact-value" style={{ color: token.colorText }}>
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}

                <Divider style={{ borderColor: token.colorBorder, margin: '24px 0' }} />

                {/* Social Links */}
                <div className="contact-socials">
                  <p
                    style={{
                      fontSize: '14px',
                      color: token.colorTextSecondary,
                      marginBottom: '16px',
                      fontWeight: '600',
                    }}
                  >
                    Follow Me
                  </p>
                  <Space size={12}>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                      GitHub
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                      LinkedIn
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                      Twitter
                    </a>
                  </Space>
                </div>
              </Space>
            </motion.div>
          </Col>

          {/* Right Column - Contact Form */}
          <Col xs={24} lg={14} className="contact-form-column">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                className="contact-form"
              >
                <Row gutter={[24, 0]}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="name"
                      label={<span style={{ color: token.colorText, fontWeight: '600' }}>Your Name</span>}
                      rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                      <Input
                        placeholder="John Doe"
                        style={{
                          background: token.colorBgElevated,
                          border: `1px solid ${token.colorBorder}`,
                          borderRadius: '8px',
                          padding: '10px 12px',
                          color: token.colorText,
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="email"
                      label={<span style={{ color: token.colorText, fontWeight: '600' }}>Your Email</span>}
                      rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email' }
                      ]}
                    >
                      <Input
                        placeholder="john@example.com"
                        style={{
                          background: token.colorBgElevated,
                          border: `1px solid ${token.colorBorder}`,
                          borderRadius: '8px',
                          padding: '10px 12px',
                          color: token.colorText,
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  name="subject"
                  label={<span style={{ color: token.colorText, fontWeight: '600' }}>Subject</span>}
                  rules={[{ required: true, message: 'Please enter a subject' }]}
                >
                  <Input
                    placeholder="Project Discussion"
                    style={{
                      background: token.colorBgElevated,
                      border: `1px solid ${token.colorBorder}`,
                      borderRadius: '8px',
                      padding: '10px 12px',
                      color: token.colorText,
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="message"
                  label={<span style={{ color: token.colorText, fontWeight: '600' }}>Message</span>}
                  rules={[{ required: true, message: 'Please enter your message' }]}
                >
                  <Input.TextArea
                    rows={5}
                    placeholder="Tell me about your project..."
                    style={{
                      background: token.colorBgElevated,
                      border: `1px solid ${token.colorBorder}`,
                      borderRadius: '8px',
                      padding: '10px 12px',
                      color: token.colorText,
                      fontFamily: 'inherit',
                    }}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    size="large"
                    icon={<SendOutlined />}
                    className="contact-submit-btn"
                    style={{
                      background: '#00ff00',
                      border: 'none',
                      color: '#000',
                      fontWeight: '700',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Contact;
