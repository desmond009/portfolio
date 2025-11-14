import React from 'react';
import { downloadResume } from '../utils/helpers';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Full Stack and Blockchain Developer with expertise in building scalable web 
              applications and decentralized solutions. With a strong foundation in modern web technologies 
              and blockchain development, I create innovative solutions that solve real-world problems.
            </p>
            <p>
              I love working with React, Node.js, and exploring the exciting world of Web3 and decentralized 
              applications. When I'm not coding, I'm exploring new technologies and contributing to the open-source community.
            </p>
            <button className="resume-btn" onClick={downloadResume}>
              Download Resume
            </button>
          </div>
          <div className="about-image">
            <div className="profile-placeholder">VY</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
