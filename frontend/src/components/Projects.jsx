import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { theme } from 'antd';
import { PROJECTS } from '../constants/index';
import './Projects.css';

function Projects() {
  const { token } = theme.useToken();
  const [hoveredProject, setHoveredProject] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!hoveredProject) return;

      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hoveredProject]);

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
    <section className="projects" id="projects">
      <div className="projects-container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-label" style={{ color: token.colorPrimary }}>
            SELECTED PROJECTS
          </div>
          <h2 className="section-title" style={{ color: token.colorText }}>
            My Work
          </h2>
        </motion.div>

        {/* Projects List */}
        <motion.div
          className="projects-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              className={`project-item ${hoveredProject?.id === project.id ? 'active' : ''}`}
              variants={itemVariants}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ color: token.colorText }}
            >
              <div className="project-number">{String(idx + 1).padStart(2, '0')}</div>
              <div className="project-name">{project.name}</div>
              <div className="project-arrow">→</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cursor-Following Image Preview */}
        {hoveredProject && (
          <motion.div
            ref={imageRef}
            className="project-preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="preview-card" style={{ background: token.colorBgElevated, border: `1px solid ${token.colorBorder}` }}>
              <div
                className="preview-image"
                style={{
                  background: `linear-gradient(135deg, ${token.colorPrimary}20, ${token.colorPrimary}05)`,
                }}
              >
                <span>{hoveredProject.name.substring(0, 3).toUpperCase()}</span>
              </div>
              <div className="preview-content">
                <h3 style={{ color: token.colorText }}>{hoveredProject.name}</h3>
                <p style={{ color: token.colorTextSecondary }}>{hoveredProject.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Projects;
