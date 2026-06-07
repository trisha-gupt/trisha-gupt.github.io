import React from 'react';
import '../styles/About.css';
import profilePhoto from '../assets/profile_photo.jpg';

const About = () => {
  const skillCategories = [
    {
      title: 'Game Design',
      items: ['Level Design', 'Character, Camera, Controller', 'Prototype Programming', 'Playtesting'],
    },
    {
      title: 'Programming',
      items: ['Unity C# basics', 'Prototyping', 'Version Control (Git, P4V)'],
    },
    {
      title: '3D Art & Design',
      items: ['3D Modelling', 'Unwrapping', 'Texturing', 'Stylised 2D/ 3D Game Art'],
    },
  ];

  const experiences = [
    {
      label: 'Game Design and Programming intern at Pixel-Nexus',
      detail: 'Worked with Godot engine and contributed to designing and implementing features for their title Dino Duck Mayhem'
    },
    {
      label: 'Team Lead & Game Designer',
      detail: "Sombre — learnt team management skills and created a narrative puzzle game in Unity",
    },
    {
      label: 'Award-Winning Designer',
      detail: "Franco-Belge Game Jam Community Award for Bud's Oasis",
    },
    {
      label: 'DAE @ Howest',
      detail: 'Independent Game Production student specialising in game design & Stylized art',
    }
  ];

  const quickStats = [
    { value: '6', label: 'Games Made' },
    { value: '3', label: 'Years of exp' },
    { value: '5', label: 'Game Jams & Pitches' },
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <span className="about-tag">Game Designer · 3D Generalist </span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="bio-card">
              <p>
                Hey, I&apos;m Trisha Gupta — A final-year Independent Game Production student at Howest&apos;s Digital Arts and Entertainment program. I&apos;ve studied game design, game art and programming for prototypes which gave me a strong foundation in building and playtesting games from the ground up.
              </p>
              <p>
                I mostly design games in Unity, however I am also experienced with Blender, Maya, and Substance Painter for basic modeling and texturing.
              </p>
              <p>
                Currently, I&apos;m finishing up my internship at Pixel-Nexus whilst learning new skills and working on personal projects.
              </p>
              <div className="bio-highlights">
                <span>Game Design Experience</span>
                <span>Lover of narrative driven puzzle games</span>
                <span>2D and 3D stylised art Experience</span>
              </div>
            </div>

            <div className="skills-section">
              <h3>What My Skills Are</h3>
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

            <div className="experience-section">
              <h3>Experience Highlights</h3>
              <ul className="experience-timeline">
                {experiences.map((experience) => (
                  <li key={experience.label}>
                    <div className="experience-marker" aria-hidden="true" />
                    <div className="experience-content">
                      <span className="experience-label">{experience.label}</span>
                      <p>{experience.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="about-visual" aria-label="Profile snapshot">
            <div className="profile-card">
              <div className="profile-image">
                  {/* <img src="/src/assets/profile_photo.jpg" alt="Trisha Gupta" className="profile-img" /> */}
+                 <img src={profilePhoto} alt="Trisha Gupta" className="profile-img" />
              </div>
              <div className="profile-caption">
                <h4>Game Designer / 3D Generalist</h4>
                <p>Designing games and levels along with being able to script prototypes, also experienced with stylised 3D or 2D art.</p>
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

            <div className="accent-card">
              <h5>Currently</h5>
              <p>
                Finshing up my internship at Pixel-Nexus and working on personal projects while improving my technical and creative skills through making new games every two weeks.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;