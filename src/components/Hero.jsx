import React from "react";
import "../styles/Hero.css";
import "../styles/About.css";
import profilePhoto from "../assets/profile_photo.jpg";

const Hero = () => {
  const quickStats = [
    { value: "6", label: "Games Made" },
    { value: "1", label: "Years of exp" },
    { value: "5", label: "Game Jams & Pitches" },
  ];

  const skillCategories = [
    {
      title: "Game Design",
      items: [
        "Unity - Main Engine",
        "C# - Character, Camera, Controller",
        "Miro - Prototyping",
        "Excel - Balancing",
      ],
    },
    {
      title: "Programming",
      items: ["C#", "GDScripts", "Version Control (Git, P4V, SourceTree)"],
    },
    {
      title: "3D Art & Design",
      items: ["Blender", "Photoshop", "Substance Painter", "Maya"],
    },
  ];

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-main-row">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="name">TRISHA GUPTA</span>
              <span className="role">GAME DESIGNER</span>
            </h1>
            <p className="hero-description">
              Hello! I'm Trisha - Based in Belgium. I specialize in game{" "}
              <span className="text-accent">design and development</span>.
              Passionate about creating experiences that spark emotions and tell
              meaningful stories to players.
            </p>
            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Games
              </button>
              <button
                className="btn btn-secondary"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  // Open in new tab
                  window.open("/Trisha_CV2026.pdf", "_blank");

                  // Also trigger a download
                  const link = document.createElement("a");
                  link.href = "/Trisha_CV2026.pdf";
                  link.download = "Trisha_CV2026.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Resume/ CV
              </button>
            </div>
          </div>
          <div className="profile-card">
            <div className="profile-image">
              <img
                src={profilePhoto}
                alt="Trisha Gupta"
                className="profile-img"
              />
            </div>
            <div className="profile-caption">
              <h4>Game Designer / Generalist</h4>
              <p>
                Designing games and levels &bull; scripting prototypes &bull;
                experienced with stylised 3D and 2D art.
              </p>
            </div>

            <div className="stat-grid">
              {quickStats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="skills-section">
          <h3>My Skills</h3>
          <div className="skills-grid">
            {skillCategories.map((category) => (
              <article className="skill-card" key={category.title}>
                <h4>{category.title}</h4>
                <ul>
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
