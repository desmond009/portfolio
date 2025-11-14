import React, { useState } from 'react';
import { Form, Input, Button, message, theme, Row, Col, Card, Space, Divider } from 'antd';
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

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label" style={{ color: token.colorPrimary }}>Let's connect</div>
          <h2 className="section-title" style={{ color: token.colorText }}>Get In Touch</h2>
          <p className="section-subtitle" style={{ color: token.colorTextSecondary }}>
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <Row gutter={[60, 60]} align="stretch" className="contact-content">
          {/* Left Column - Contact Info */}
          <Col xs={24} lg={10} className="contact-info-column">
            <Space direction="vertical" size={32} style={{ width: '100%' }}>
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item">
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
                </div>
              ))}

              <Divider style={{ borderColor: token.colorBorder, margin: '24px 0' }} />

              {/* Social Links */}
              <div className="contact-socials">
                <p style={{ fontSize: '14px', color: token.colorTextSecondary, marginBottom: '16px', fontWeight: '600' }}>
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
          </Col>

          {/* Right Column - Contact Form */}
          <Col xs={24} lg={14} className="contact-form-column">
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
                      size="large"
                      className="contact-input"
                      style={{ 
                        background: token.colorBgContainer,
                        borderColor: token.colorBorder
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
                      size="large"
                      className="contact-input"
                      style={{ 
                        background: token.colorBgContainer,
                        borderColor: token.colorBorder
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
                  placeholder="Project Inquiry" 
                  size="large"
                  className="contact-input"
                  style={{ 
                    background: token.colorBgContainer,
                    borderColor: token.colorBorder
                  }}
                />
              </Form.Item>

              <Form.Item
                name="message"
                label={<span style={{ color: token.colorText, fontWeight: '600' }}>Your Message</span>}
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <Input.TextArea
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="contact-input"
                  style={{ 
                    background: token.colorBgContainer,
                    borderColor: token.colorBorder
                  }}
                />
              </Form.Item>

              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  size="large"
                  icon={<SendOutlined />}
                  loading={loading}
                  block
                  className="contact-submit-btn"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Contact;
