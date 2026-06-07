import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="name">TRISHA GUPTA</span>
            <span className="role">GAME DESIGNER</span>
          </h1>
          <p className="hero-description">
            Hello! I'm Trisha - I specialize in game design and game art, with a focus on creating experiences that spark emotions and tell meaningful stories to players.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              View My Games
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
              About Me
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Contact
            </button>
            <button className="btn btn-secondary" onClick={() => window.open('/Trisha_Gupta_Resume.pdf', '_blank')}>
              Resume
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="game-controller">
            <div className="controller-body">
              <div className="d-pad">
                <div className="d-pad-up"></div>
                <div className="d-pad-down"></div>
                <div className="d-pad-left"></div>
                <div className="d-pad-right"></div>
              </div>
              <div className="buttons">
                <div className="btn-a"></div>
                <div className="btn-b"></div>
                <div className="btn-x"></div>
                <div className="btn-y"></div>
              </div>
            </div>
          </div>
          <div className="floating-elements">
            <div className="pixel pixel-1">▲</div>
            <div className="pixel pixel-2">●</div>
            <div className="pixel pixel-3">■</div>
            <div className="pixel pixel-4">♦</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;