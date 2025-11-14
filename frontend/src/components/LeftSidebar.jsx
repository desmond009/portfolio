import React from 'react';
import { MailOutlined, GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import { theme } from 'antd';
import './LeftSidebar.css';

function LeftSidebar() {
  const { token } = theme.useToken();

  const socialLinks = [
    { icon: <MailOutlined />, url: 'mailto:your@email.com', label: 'Email' },
    { icon: <GithubOutlined />, url: 'https://github.com', label: 'GitHub' },
    { icon: <LinkedinOutlined />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <TwitterOutlined />, url: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <aside className="left-sidebar" style={{ background: token.colorBgBase }}>
      <div className="sidebar-content">
        {/* Email */}
        <a 
          href="mailto:your@email.com" 
          className="sidebar-email"
          style={{ color: token.colorTextSecondary }}
        >
          your@email.com
        </a>

        {/* Social Links */}
        <div className="sidebar-socials">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-social-link"
              title={link.label}
              style={{ color: token.colorTextSecondary }}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Vertical Line */}
        <div className="sidebar-line" style={{ background: token.colorBorder }}></div>
      </div>
    </aside>
  );
}

export default LeftSidebar;
