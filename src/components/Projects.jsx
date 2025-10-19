import React, { useState } from 'react';
import '../styles/Projects.css';
import projects from '../data/projects';

// Convert various YouTube URL formats into an embeddable URL.
// Supports: watch?v=VIDEO_ID, youtu.be/VIDEO_ID, embed URLs, and time params like t=1m30s or t=90
function parseYouTubeTime(t) {
  if (!t) return 0;
  // strip leading 't=' if present
  const s = String(t).replace(/^t=/, '');
  // If plain number, return it
  if (/^\d+$/.test(s)) return parseInt(s, 10) || 0;
  // parse 1h2m3s / 2m3s / 45s
  const m = s.match(/(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
  if (!m) return 0;
  const hours = parseInt(m[1] || 0, 10);
  const mins = parseInt(m[2] || 0, 10);
  const secs = parseInt(m[3] || 0, 10);
  return hours * 3600 + mins * 60 + secs;
}

function toYouTubeEmbed(url) {
  if (!url) return url;
  const u = String(url).trim();
  try {
    // already an embed URL
    if (u.includes('youtube.com/embed/')) {
      return u;
    }

    // watch?v=VIDEO_ID
    const watch = u.match(/[?&]v=([A-Za-z0-9_-]{11})/);
    if (watch) {
      const id = watch[1];
      const tMatch = u.match(/[?&](?:t|start)=([^&]+)/);
      const start = tMatch ? parseYouTubeTime(tMatch[1]) : null;
      return start ? `https://www.youtube.com/embed/${id}?start=${start}` : `https://www.youtube.com/embed/${id}`;
    }

    // youtu.be/VIDEO_ID
    const short = u.match(/youtu\.be\/([A-Za-z0-9_-]{11})/);
    if (short) {
      const id = short[1];
      const tMatch = u.match(/[?&](?:t|start)=([^&]+)/);
      const start = tMatch ? parseYouTubeTime(tMatch[1]) : null;
      return start ? `https://www.youtube.com/embed/${id}?start=${start}` : `https://www.youtube.com/embed/${id}`;
    }

    return u;
  } catch (e) {
    return url;
  }
}

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
          Explore some of the games I've designed and been a part of the development process!
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
                                src={toYouTubeEmbed(m.src)}
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