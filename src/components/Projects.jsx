import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const games = [
    {
      id: 1,
      title: "BUD'S OASIS",
      role: "DESIGNER / ARTIST",
      genre: "CO-OP COUCH GAME",
      description: "Developed during the Franco-Belge Game Jam, this project earned the Community Award and was later livestreamed on Twitch. I contributed as the Game Designer and modelled Game assets.",
      technologies: ["Unity", "C#", "3D Modeling"],
      status: "Community Award Winner",
      platforms: ["PC"],
      image: "/src/assets/games-pictures/buds_oasis.jpeg",
      demoLink: "#",
      githubLink: "#",
      playLink: "#"
    },
    {
      id: 2,
      title: "SOMBRE",
      role: "DESIGNER / PROJECT MANAGER",
      genre: "STORY - PUZZLE PLATFORMER",
      description: "Born as a concept for a game design class, this story-driven puzzle-platformer is now a collaborative project and in development. I'm leading a team of five developers, working as both designer and programmer to realize the game. Drawing inspiration from Inside and Omori, it features a \"somber\" story but with a more unique mechanic.",
      technologies: ["Unity", "C#", "Team Leadership"],
      status: "In Development",
      platforms: ["PC"],
      image: "/src/assets/games-pictures/concept_art_first_lvl.png",
      demoLink: "#",
      githubLink: "#",
      playLink: "#"
    },
    {
      id: 3,
      title: "SHOPPER'S HAVOC",
      role: "INDEPENDENT",
      genre: "Strategy / Humour",
      description: "I designed this Unity-based strategy game, drawing inspiration from a Black Friday sale. The game's core twist — the ability to clone yourself — adds both strategic depth and humor, shaping the player's experience.",
      technologies: ["Unity", "C#", "Game Design"],
      status: "Completed",
      platforms: ["PC"],
      image: "/src/assets/games-pictures/shoppers_havoc.png",
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
                  <span className={`project-status ${game.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {game.status}
                  </span>
                </div>
                
                <p className="project-role">{game.role}</p>
                <p className="project-genre">{game.genre}</p>
                <p className="project-description">{game.description}</p>
                
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