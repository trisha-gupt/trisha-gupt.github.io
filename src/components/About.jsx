import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a passionate game developer with a love for creating immersive digital experiences. 
              My journey in game development started with a fascination for interactive storytelling 
              and has evolved into a career focused on bringing creative visions to life.
            </p>
            
            <div className="skills-section">
              <h3>Skills & Technologies</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Game Engines</h4>
                  <ul>
                    <li>Unity</li>
                    <li>Unreal Engine</li>
                    <li>Godot</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Programming</h4>
                  <ul>
                    <li>C#</li>
                    <li>C++</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Design Tools</h4>
                  <ul>
                    <li>Photoshop</li>
                    <li>Blender</li>
                    <li>Maya</li>
                    <li>Figma</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="experience-section">
              <h3>Experience Highlights</h3>
              <ul className="experience-list">
                <li>3+ years of indie game development</li>
                <li>Published multiple games across different platforms</li>
                <li>Specialized in 2D/3D game mechanics and UI/UX design</li>
                <li>Experience with multiplayer and single-player game development</li>
              </ul>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="profile-card">
              <div className="profile-image">
                <div className="avatar-placeholder">
                  <span>🎮</span>
                </div>
              </div>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Games Shipped</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Coding</span>
                </div>
                <div className="stat">
                  <span className="stat-number">∞</span>
                  <span className="stat-label">Ideas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;