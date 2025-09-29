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
              Hi, I'm Trisha Gupta! A final-year Independent Game Production student at Howest's Digital Arts and Entertainment program. I've studied game design, gameplay programming, and game art, which gave me a strong foundation in building and playtesting games from the ground up.
            </p>
            <p className="about-intro">
              I mostly develop in Unity using C#, and am also experienced with Blender, Maya, and Substance Painter for basic modeling and texturing.
            </p>
            <p className="about-intro">
              Currently, I'm leading a team of six developers as both Game Designer and Programmer on our upcoming title, Sombre. I'm passionate about crafting engaging gameplay experiences and seeing ideas come to life through collaboration.
            </p>
            
            <div className="skills-section">
              <h3>Skills & Technologies</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Game Development</h4>
                  <ul>
                    <li>Unity Engine</li>
                    <li>Game Design</li>
                    <li>Gameplay Programming</li>
                    <li>Playtesting</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Programming</h4>
                  <ul>
                    <li>C#</li>
                    <li>Unity Scripting</li>
                    <li>Game Logic</li>
                    <li>Team Leadership</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>3D Art & Design</h4>
                  <ul>
                    <li>Blender</li>
                    <li>Maya</li>
                    <li>Substance Painter</li>
                    <li>Game Art</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="experience-section">
              <h3>Experience Highlights</h3>
              <ul className="experience-list">
                <li>Final-year student at Howest Digital Arts and Entertainment</li>
                <li>Leading a team of six developers on collaborative project 'Sombre'</li>
                <li>Community Award winner at Franco-Belge Game Jam for 'Bud's Oasis'</li>
                <li>Strong foundation in game design, programming, and 3D art</li>
              </ul>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="profile-card">
              <div className="profile-image">
                <img src="/src/assets/profile_photo.jpg" alt="Trisha Gupta" className="profile-img" />
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