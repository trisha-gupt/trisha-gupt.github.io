import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Projects.css';
import projects from '../data/projects';

// Convert various YouTube URL formats into an embeddable URL.
// Supports: watch?v=VIDEO_ID, youtu.be/VIDEO_ID, embed URLs, and time params like t=1m30s or t=90
function parseYouTubeTime(t) {
  if (!t) return 0;
  const s = String(t).replace(/^t=/, '');
  if (/^\d+$/.test(s)) return parseInt(s, 10) || 0;
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
    if (u.includes('youtube.com/embed/')) return u;
    const watch = u.match(/[?&]v=([A-Za-z0-9_-]{11})/);
    if (watch) {
      const id = watch[1];
      const tMatch = u.match(/[?&](?:t|start)=([^&]+)/);
      const start = tMatch ? parseYouTubeTime(tMatch[1]) : null;
      return start ? `https://www.youtube.com/embed/${id}?start=${start}` : `https://www.youtube.com/embed/${id}`;
    }
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
  const navigate = useNavigate();

  const isVideoSrc = (src) => typeof src === 'string' && /\.(mp4|webm|ogg)$/i.test(src);

  const openProject = (id) => {
    navigate(`/project/${id}`);
  };
  const games = projects || [];

  // render media array (gifs, youtube, images)
  const renderMedia = (mediaArray, game) => {
    if (!Array.isArray(mediaArray) || mediaArray.length === 0) return null;
    return (
      <div className="project-media">
        {mediaArray.map((m, idx) => {
          if (!m) return null;
          if (m.type === 'gif' || m.type === 'image') {
            const sources = Array.isArray(m.src) ? m.src : [m.src];
            return (
              <div key={idx} className="project-media-group">
                {sources.map((src, srcIdx) => (
                  <img
                    key={`${idx}-${srcIdx}`}
                    src={src}
                    alt={m.alt || `${game.title}-media-${idx}-${srcIdx}`}
                    className="project-media-img"
                  />
                ))}
              </div>
            );
          }
          if (m.type === 'video') {
            return (
              <video
                key={idx}
                className="project-media-video"
                src={m.src}
                controls
                playsInline
                muted
                preload="metadata"
              />
            );
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
    );
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">My Games</h2>
        <p className="section-subtitle">
          Explore some of the games I've designed and been a part of the development process!
        </p>

        <div className="projects-grid">
          {games.map((game) => (
            <div
              key={game.id}
              className={`project-card ${ (game.media || game.longDescription) ? 'clickable' : '' }`}
              onClick={() => {
                if (game.media || game.longDescription) {
                  openProject(game.id);
                }
              }}
            >
              <div className="project-image">
                {isVideoSrc(game.thumbnail || game.image) ? (
                  <video
                    className="project-thumbnail-video"
                    src={game.thumbnail || game.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img src={game.thumbnail || game.image} alt={game.title} />
                )}
              </div>

              <div className="project-content">
                <div className="project-header">
                  <div className="project-header-copy">
                    <h3 className="project-title">{game.title}</h3>
                    <p className="project-role">{game.role}</p>
                  </div>
                  <div className="project-header-actions">
                    <span className={`project-status ${(game.status || '').toLowerCase().replace(/\s+/g, '-')}`}>
                      {game.status}
                    </span>
                  </div>
                </div>

                <p className="project-genre">{game.genre}</p>
                <p className="project-description">{game.description}</p>

                {renderMedia(game.media, game)}

                <div className="project-tech">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {(game.technologies || []).map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* <div className="project-platforms">
                  <h4>Platforms:</h4>
                  <div className="platform-tags">
                    {(game.platforms || []).map((platform, index) => (
                      <span key={index} className="platform-tag">{platform}</span>
                    ))}
                  </div>
                </div> */}

                {/* Itch.io button (shows if playLink is provided) */}
                {game.playLink && game.playLink !== '#' && (
                  <div className="project-links">
                    <a
                      href={game.playLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="itch-button"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Go to Itch
                    </a>
                  </div>
                )}

                {/* If you want a disabled-looking button when no URL, you can render it with game.playLink === '#' */}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;