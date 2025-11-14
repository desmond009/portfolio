import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { theme } from 'antd';
import './RightSidebar.css';

function RightSidebar({ navItems, onNavClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { token } = theme.useToken();

  return (
    <aside className="right-sidebar" style={{ background: token.colorBgBase }}>
      <div className="sidebar-content">
        {/* Hamburger Menu */}
        <button
          className={`hamburger-menu ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: token.colorText }}
        >
          <MenuOutlined style={{ fontSize: '24px' }} />
        </button>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <nav className="mobile-nav" style={{ background: token.colorBgElevated }}>
            {navItems.map((item) => (
              <button
                key={item}
                className="mobile-nav-link"
                onClick={() => {
                  onNavClick(item);
                  setMenuOpen(false);
                }}
                style={{ color: token.colorText }}
              >
                {item}
              </button>
            ))}
          </nav>
        )}

        {/* Vertical Line */}
        <div className="sidebar-line" style={{ background: token.colorBorder }}></div>
      </div>
    </aside>
  );
}

export default RightSidebar;
