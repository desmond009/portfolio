import React from 'react';
import { SKILLS } from '../constants/index';
import './Skills.css';

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {SKILLS.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3>{skillGroup.category}</h3>
              <ul>
                {skillGroup.items.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
