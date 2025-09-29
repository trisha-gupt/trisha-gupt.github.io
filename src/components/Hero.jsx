import React from 'react';
import '../styles/Hero-fixed.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="name">Trisha</span>
            <span className="role">Game Developer</span>
          </h1>
          <p className="hero-description">
            Passionate about creating immersive gaming experiences through innovative 
            game design, storytelling, and cutting-edge technology. I bring worlds 
            to life one pixel at a time.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              View My Games
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
              About Me
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