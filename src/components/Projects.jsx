import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const games = [
    {
      id: 1,
      title: "Mystic Realms",
      genre: "RPG Adventure",
      description: "An immersive fantasy RPG featuring rich storytelling, complex character progression, and stunning magical environments. Players embark on an epic quest through multiple realms.",
      technologies: ["Unity", "C#", "Photoshop"],
      features: [
        "Open-world exploration",
        "Character customization",
        "Magic system with 50+ spells",
        "20+ hours of gameplay"
      ],
      status: "Released",
      platforms: ["PC", "Steam"],
      image: "/api/placeholder/400/250",
      demoLink: "#",
      githubLink: "#",
      playLink: "#"
    },
    {
      id: 2,
      title: "Neon Racer",
      genre: "Racing/Arcade",
      description: "A high-speed cyberpunk racing game with neon-soaked tracks, customizable vehicles, and intense multiplayer competition in a futuristic cityscape.",
      technologies: ["Unreal Engine", "C++", "Blender"],
      features: [
        "8-player online multiplayer",
        "Vehicle customization system",
        "12 unique racing tracks",
        "Time trial and championship modes"
      ],
      status: "In Development",
      platforms: ["PC", "Console"],
      image: "/api/placeholder/400/250",
      demoLink: "#",
      githubLink: "#",
      playLink: "#"
    },
    {
      id: 3,
      title: "Pixel Garden",
      genre: "Simulation/Casual",
      description: "A relaxing farming simulation game where players create and manage their dream garden using pixel art aesthetics and soothing gameplay mechanics.",
      technologies: ["Godot", "GDScript", "Aseprite"],
      features: [
        "50+ unique plants to grow",
        "Seasonal weather system",
        "Decoration and customization",
        "Peaceful ambient soundtrack"
      ],
      status: "Released",
      platforms: ["PC", "Mobile", "Web"],
      image: "/api/placeholder/400/250",
      demoLink: "#",
      githubLink: "#",
      playLink: "#"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">My Games</h2>
        <p className="section-subtitle">
          Explore the worlds I've created - from epic adventures to casual experiences
        </p>
        
        <div className="projects-grid">
          {games.map((game) => (
            <div key={game.id} className="project-card">
              <div className="project-image">
                <img src={game.image} alt={game.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={game.demoLink} className="link-btn demo-btn">
                      <span>🎮</span> Demo
                    </a>
                    <a href={game.githubLink} className="link-btn github-btn">
                      <span>📁</span> Code
                    </a>
                    <a href={game.playLink} className="link-btn play-btn">
                      <span>▶️</span> Play
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{game.title}</h3>
                  <span className={`project-status ${game.status.toLowerCase().replace(' ', '-')}`}>
                    {game.status}
                  </span>
                </div>
                
                <p className="project-genre">{game.genre}</p>
                <p className="project-description">{game.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {game.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-tech">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {game.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-platforms">
                  <h4>Platforms:</h4>
                  <div className="platform-tags">
                    {game.platforms.map((platform, index) => (
                      <span key={index} className="platform-tag">{platform}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;