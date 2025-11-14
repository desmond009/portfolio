import React from 'react';
import { PROJECTS } from '../constants/index';
import './Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.name}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-btn demo-btn">
                  Live Demo
                </a>
                <a href={project.code} target="_blank" rel="noopener noreferrer" className="link-btn code-btn">
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
