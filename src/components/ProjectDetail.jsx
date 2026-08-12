import React, { useMemo, useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import projects from "../data/projects";
import "../styles/Projects.css";

function parseYouTubeTime(t) {
  if (!t) return 0;
  const s = String(t).replace(/^t=/, "");
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
    if (u.includes("youtube.com/embed/")) return u;
    const watch = u.match(/[?&]v=([A-Za-z0-9_-]{11})/);
    if (watch) {
      const id = watch[1];
      const tMatch = u.match(/[?&](?:t|start)=([^&]+)/);
      const start = tMatch ? parseYouTubeTime(tMatch[1]) : null;
      return start
        ? `https://www.youtube.com/embed/${id}?start=${start}`
        : `https://www.youtube.com/embed/${id}`;
    }
    const short = u.match(/youtu\.be\/([A-Za-z0-9_-]{11})/);
    if (short) {
      const id = short[1];
      const tMatch = u.match(/[?&](?:t|start)=([^&]+)/);
      const start = tMatch ? parseYouTubeTime(tMatch[1]) : null;
      return start
        ? `https://www.youtube.com/embed/${id}?start=${start}`
        : `https://www.youtube.com/embed/${id}`;
    }
    return u;
  } catch (e) {
    return url;
  }
}

function slugify(text) {
  return String(text || "")
    .replace(/<[^>]*>/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function isVideoSrc(src) {
  return typeof src === "string" && /\.(mp4|webm|ogg)(\?.*)?$/i.test(src);
}

function renderText(text) {
  if (typeof text === "string") return text;

  return text.map((part, i) =>
    typeof part === "string" ? (
      <React.Fragment key={i}>{part}</React.Fragment>
    ) : (
      <span key={i} className="text-accent">
        {part.text}
      </span>
    ),
  );
}

function renderBlock(block, key, handleMediaExpand) {
  switch (block.type) {
    case "heading":
      return (
        <h3 key={key} className="longdesc-heading">
          {block.text}
        </h3>
      );
    case "paragraph":
      return (
        <p key={key} className="longdesc-paragraph">
          {renderText(block.text)}
        </p>
      );
    case "image":
      return (
        <div key={key} className="longdesc-image-wrap">
          <button
            type="button"
            className="expandable-media-preview"
            onClick={() => handleMediaExpand({ type: "image", src: block.src })}
          >
            <img
              src={block.src}
              alt={block.alt || ""}
              className="longdesc-image expandable-media"
            />
          </button>
        </div>
      );
    case "gif": {
      const gifSources = Array.isArray(block.src) ? block.src : [block.src];
      return (
        <div key={key} className="longdesc-gif-wrap">
          {gifSources.map((src, gifIndex) => (
            <button
              key={`${key}-${gifIndex}`}
              type="button"
              className="expandable-media-preview"
              onClick={() =>
                handleMediaExpand({
                  type: isVideoSrc(src) ? "video" : "image",
                  src,
                })
              }
            >
              {isVideoSrc(src) ? (
                <video
                  src={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="longdesc-gif expandable-media"
                />
              ) : (
                <img
                  src={src}
                  alt={block.alt || `gif-${key}-${gifIndex}`}
                  className="longdesc-gif expandable-media"
                />
              )}
            </button>
          ))}
        </div>
      );
    }
    default:
      return null;
  }
}

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const game = projects.find((item) => String(item.id) === projectId);
  const [lightboxMedia, setLightboxMedia] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const descriptionRef = useRef(null);

  const sectionAnchors = useMemo(() => {
    if (!game || !Array.isArray(game.longDescription)) return [];
    return game.longDescription
      .filter((block) => block && block.type === "heading")
      .map((block) => ({
        label: block.text,
        id: slugify(block.text),
      }));
  }, [game]);

  const handleMediaExpand = (media) => {
    setLightboxMedia(media);
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0 });
    document.documentElement.style.scrollBehavior = ""; // restore original CSS behavior afterward
  }, [projectId]);

  useEffect(() => {
    if (!descriptionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowSidebar(entry.isIntersecting),
      { root: null, rootMargin: "-30% 0px -70% 0px", threshold: 0.08 },
    );

    observer.observe(descriptionRef.current);
    return () => observer.disconnect();
  }, []);

  if (!game) {
    return (
      <section className="projects" id="project-detail">
        <div className="projects-container">
          <h2 className="section-title">Project not found</h2>
          <p className="section-subtitle">
            The project you are looking for does not exist.
          </p>
          <button
            type="button"
            className="itch-button"
            onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
          >
            Back to projects
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="projects project-detail-page" id="project-detail">
      <div className="projects-container">
        {/* <Link to="/" className="project-detail-back">
          ← Back to projects
        </Link> */}

        <div className="project-detail-title-card">
          {(game.thumbnail || game.image) && (
            <div className="project-detail-title-media">
              {isVideoSrc(game.thumbnail || game.image) ? (
                <video
                  src={game.thumbnail || game.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={game.thumbnail || game.image}
                  alt={`${game.title} thumbnail`}
                />
              )}
            </div>
          )}
          <div className="project-detail-title-copy">
            <h2 className="project-detail-title">{game.title}</h2>
            <p className="project-detail-genre">{game.genre}</p>
          </div>
        </div>
        <div className="project-detail-summary project-detail-summary-under-title">
          <div className="project-detail-summary-item">
            <span className="project-detail-meta-label">Role</span>
            <span className="project-detail-role-value">
              {game.role.replace(/^Role:\s*/i, "")}
            </span>
          </div>
          {game.teamSize && (
            <div className="project-detail-summary-item">
              <span className="project-detail-meta-label">Team size</span>
              <span>{game.teamSize}</span>
            </div>
          )}
          <div className="project-detail-summary-item">
            <span className="project-detail-meta-label">Tools</span>
            <span>{(game.technologies || []).join("  •  ")}</span>
          </div>
          <div className="project-detail-summary-item">
            <span className="project-detail-meta-label">Status</span>
            <span
              className={`project-status ${(game.status || "").toLowerCase().replace(/\s+/g, "-")}`}
            >
              {game.status}
            </span>
          </div>
        </div>

        <div
          className={`project-detail-layout ${showSidebar ? "sidebar-visible" : ""}`}
        >
          <article className="project-detail-card">
            <div className="project-detail-hero">
              <div className="project-detail-hero-actions">
                {" "}
                {game.playLink && game.playLink !== "#" && (
                  <a
                    href={game.playLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="itch-button project-detail-play-button"
                  >
                    View project
                  </a>
                )}
              </div>
            </div>

            <section
              className="project-detail-description-block"
              ref={descriptionRef}
            ></section>

            {game.media && game.media.length > 0 && (
              <div className="project-detail-media">
                {game.media.map((m, idx) => {
                  if (!m) return null;
                  if (m.type === "gif" || m.type === "image") {
                    const sources = Array.isArray(m.src) ? m.src : [m.src];
                    return (
                      <div key={idx} className="project-media-group">
                        {sources.map((src, srcIdx) => (
                          <button
                            key={`${idx}-${srcIdx}`}
                            type="button"
                            className="expandable-media-preview"
                            onClick={() =>
                              handleMediaExpand({ type: "image", src })
                            }
                          >
                            <img
                              src={src}
                              alt={
                                m.alt || `${game.title}-media-${idx}-${srcIdx}`
                              }
                              className="project-media-img expandable-media"
                            />
                          </button>
                        ))}
                      </div>
                    );
                  }
                  if (m.type === "video") {
                    return (
                      <video
                        key={idx}
                        className="project-media-video expandable-media"
                        src={m.src}
                        controls
                        playsInline
                        muted
                        preload="metadata"
                        onClick={() =>
                          handleMediaExpand({ type: "video", src: m.src })
                        }
                      />
                    );
                  }
                  if (m.type === "youtube") {
                    return (
                      <div key={idx} className="project-media-group">
                        <iframe
                          className="media-iframe expandable-media"
                          src={toYouTubeEmbed(m.src)}
                          title={m.title || `${game.title} video`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          onClick={() =>
                            handleMediaExpand({
                              type: "youtube",
                              src: toYouTubeEmbed(m.src),
                            })
                          }
                        />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            )}

            {game.longDescription && (
              <div className="project-detail-content">
                {Array.isArray(game.longDescription) ? (
                  game.longDescription.map((block, i) => {
                    if (!block) return null;
                    if (block.type === "heading") {
                      const variantClass = block.variant
                        ? `project-detail-section-title-${block.variant}`
                        : "";

                      return (
                        <h1
                          key={i}
                          className={`project-detail-section-title ${variantClass}`.trim()}
                          id={slugify(block.text)}
                        >
                          {block.text}
                        </h1>
                      );
                    }
                    if (block.type === "paragraph")
                      return (
                        <p key={i} className="project-detail-paragraph">
                          {renderText(block.text)}
                        </p>
                      );
                    if (block.type === "list") {
                      return (
                        <ul key={i} className="project-detail-list">
                          {Array.isArray(block.items)
                            ? block.items.map((it, j) => <li key={j}>{it}</li>)
                            : null}
                        </ul>
                      );
                    }
                    if (block.type === "columns") {
                      const variantClass = block.variant
                        ? `longdesc-columns-${block.variant}`
                        : "";

                      return (
                        <div
                          key={i}
                          className={`longdesc-columns ${variantClass}`.trim()}
                        >
                          {Array.isArray(block.items)
                            ? block.items.map((col, idx) => (
                                <div key={idx} className="longdesc-column">
                                  {Array.isArray(col)
                                    ? col.map((subBlock, k) =>
                                        renderBlock(
                                          subBlock,
                                          k,
                                          handleMediaExpand,
                                        ),
                                      )
                                    : null}
                                </div>
                              ))
                            : null}
                        </div>
                      );
                    }
                    if (block.type === "image-row") {
                      return (
                        <div key={i} className="longdesc-images-row">
                          {Array.isArray(block.items)
                            ? block.items.map((img, idx) => (
                                <div
                                  key={idx}
                                  className="longdesc-images-row-item"
                                >
                                  <button
                                    type="button"
                                    className="expandable-media-preview"
                                    onClick={() =>
                                      handleMediaExpand({
                                        type: "image",
                                        src: img.src,
                                      })
                                    }
                                  >
                                    <img
                                      src={img.src}
                                      alt={img.alt || ""}
                                      className="longdesc-image expandable-media"
                                    />
                                  </button>
                                </div>
                              ))
                            : null}
                        </div>
                      );
                    }
                    if (block.type === "image") {
                      return (
                        <div key={i} className="longdesc-image-wrap">
                          <button
                            type="button"
                            className="expandable-media-preview"
                            onClick={() =>
                              handleMediaExpand({
                                type: "image",
                                src: block.src,
                              })
                            }
                          >
                            <img
                              src={block.src}
                              alt={block.alt || ""}
                              className="longdesc-image expandable-media"
                            />
                          </button>
                        </div>
                      );
                    }
                    if (block.type === "gif") {
                      const gifSources = Array.isArray(block.src)
                        ? block.src
                        : [block.src];
                      return (
                        <div key={i} className="longdesc-gif-wrap">
                          {gifSources.map((src, gifIndex) => (
                            <button
                              key={`${i}-${gifIndex}`}
                              type="button"
                              className="expandable-media-preview"
                              onClick={() =>
                                handleMediaExpand({ type: "image", src })
                              }
                            >
                              <img
                                key={`${i}-${gifIndex}`}
                                src={src}
                                alt={block.alt || `gif-${i}-${gifIndex}`}
                                className="longdesc-gif expandable-media"
                              />
                            </button>
                          ))}
                        </div>
                      );
                    }
                    if (block.type === "video") {
                      return (
                        <div key={i} className="longdesc-video-wrap">
                          <video
                            className="longdesc-video expandable-media"
                            src={block.src}
                            controls
                            playsInline
                            muted
                            preload="metadata"
                          />
                        </div>
                      );
                    }
                    if (block.type === "youtube") {
                      return (
                        <div key={i} className="longdesc-youtube-wrap">
                          <iframe
                            className="longdesc-youtube expandable-media"
                            src={toYouTubeEmbed(block.src)}
                            title={block.title || `video-${i}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      );
                    }
                    if (block.type === "steam") {
                      return (
                        <div key={i} className="longdesc-steam-wrap">
                          <div className="longdesc-steam-card">
                            <div className="longdesc-steam-card-header">
                              <div>
                                <p className="longdesc-steam-card-title">
                                  {block.title || "Steam Store Preview"}
                                </p>
                                {block.subtitle && (
                                  <p className="longdesc-steam-card-subtitle">
                                    {renderText(block.subtitle)}
                                  </p>
                                )}
                              </div>
                              <span className="longdesc-steam-card-badge">Steam</span>
                            </div>
                            {block.description && (
                              <p className="longdesc-steam-card-description">
                                {renderText(block.description)}
                              </p>
                            )}
                            {block.image && (
                              <div className="longdesc-steam-card-image-wrap">
                                <img
                                  src={block.image}
                                  alt={block.imageAlt || "Steam preview"}
                                  className="longdesc-steam-card-image"
                                />
                              </div>
                            )}
                            <a
                              href={block.src}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="longdesc-steam-card-link"
                            >
                              Open Steam page
                            </a>
                            <p className="longdesc-steam-card-note">
                              Steam blocks direct iframe embeds, so this preview card links to the store page.
                            </p>
                          </div>
                        </div>
                      );
                    }
                    if (block.type === "steam-widget") {
                      const steamSrc = block.src || `https://store.steampowered.com/widget/${block.appid}/`;
                      return (
                        <div key={i} className="longdesc-steam-widget-wrap">
                          <iframe
                            className="longdesc-steam-iframe"
                            src={steamSrc}
                            title={block.title || "Steam widget"}
                            frameBorder="0"
                            width={block.width || 646}
                            height={block.height || 190}
                            allowFullScreen
                          />
                        </div>
                      );
                    }
                    return null;
                  })
                ) : (
                  <p
                    className="project-detail-paragraph"
                    dangerouslySetInnerHTML={{ __html: game.description }}
                  />
                )}
                <div className="project-detail-back-wrap">
                  <Link
                    to="/"
                    className="itch-button project-detail-back"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/', { state: { scrollTo: 'projects' } });
                    }}
                  >
                    ← Back to projects
                  </Link>
                </div>
              </div>
            )}
          </article>

          {lightboxMedia && (
            <div
              className="lightbox-overlay"
              role="dialog"
              aria-modal="true"
              onClick={() => setLightboxMedia(null)}
            >
              <div
                className="lightbox-content"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  className="lightbox-close"
                  onClick={() => setLightboxMedia(null)}
                  aria-label="Close media preview"
                ></button>
                {lightboxMedia.type === "image" && (
                  <img src={lightboxMedia.src} alt="Expanded media" />
                )}
                {lightboxMedia.type === "video" && (
                  <video
                    src={lightboxMedia.src}
                    controls
                    autoPlay
                    playsInline
                    className="lightbox-media"
                  />
                )}
                {lightboxMedia.type === "youtube" && (
                  <iframe
                    className="lightbox-media"
                    src={lightboxMedia.src}
                    title="Expanded video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          )}

          {sectionAnchors.length > 0 && (
            <aside
              className={`project-detail-sidebar ${showSidebar ? "show" : ""}`}
            >
              <div className="project-detail-sidebar-card">
                <p className="project-detail-sidebar-title">Content</p>
                <nav className="project-detail-sidebar-nav">
                  {sectionAnchors.map((anchor) => (
                    <a
                      key={anchor.id}
                      href={`#${anchor.id}`}
                      className="project-detail-sidebar-link"
                    >
                      {anchor.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
