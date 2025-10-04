import React, { useState } from 'react';
import '../styles/Projects.css';
import projects from '../data/projects';

const Projects = () => {
  const [openProjectId, setOpenProjectId] = useState(null);

  const toggleOpen = (id) => {
    setOpenProjectId((prev) => (prev === id ? null : id));
  };
  const games = projects;

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">My Games</h2>
        <p className="section-subtitle">
          Explore the worlds I've created - from epic adventures to casual experiences
        </p>
        
        <div className="projects-grid">
          {games.map((game) => (
            // make the card clickable if it has a longDescription or media
            <div key={game.id} className={`project-card ${(game.media || game.longDescription) ? 'clickable' : ''}`} onClick={() => (game.media || game.longDescription) && toggleOpen(game.id)}>
              <div className="project-image">
                <img src={game.image} alt={game.title} />
                <div className="project-overlay">
                  {/* Single show-more control on overlay; show it when there is anything to expand */}
                  {(game.media || game.longDescription) && (
                    <button
                      className="overlay-showmore"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleOpen(game.id);
                      }}
                      aria-expanded={openProjectId === game.id}
                    >
                      {openProjectId === game.id ? 'Hide details' : 'Show more'}
                    </button>
                  )}
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

              {/* details render in-place below project-content, clicking card toggles them */}
              {(game.longDescription || game.media) && openProjectId === game.id && (
                <div className="project-details-inline" onClick={(e) => e.stopPropagation()}>
                  <div className="details-body">
                    <h4>More about {game.title}</h4>
                    {/* Render structured longDescription if present (array of blocks) */}
                    {Array.isArray(game.longDescription) ? (
                      game.longDescription.map((block, i) => {
                        if (block.type === 'heading') return <h5 key={i}>{block.text}</h5>;
                        if (block.type === 'paragraph') return <p key={i}>{block.text}</p>;
                        if (block.type === 'list') return (
                          <ul key={i}>
                            {block.items.map((it, j) => <li key={j}>{it}</li>)}
                          </ul>
                        );
                        return null;
                      })
                    ) : (
                      <p style={{ marginTop: 4 }}>{game.description}</p>
                    )}

                    {/* Render media only when present */}
                    {game.media && (
                      <div className="project-media">
                        {game.media.map((m, idx) => {
                          if (m.type === 'gif') {
                            return <img key={idx} src={m.src} alt={m.alt || `${game.title}-media-${idx}`} />;
                          }

                          if (m.type === 'youtube') {
                            return (
                              <iframe
                                key={idx}
                                className="media-iframe"
                                src={m.src}
                                title={m.title || `${game.title} video`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            );
                          }

                          return null;
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;