import React from 'react';
import '../styles/About.css';
import profilePhoto from '../assets/profile_photo.jpg';

const About = () => {
  const skillCategories = [
    {
      title: 'Game Development',
      items: ['Game Design', 'Character, Camera, Controller', 'Prototype Programming', 'Playtesting'],
    },
    {
      title: 'Programming',
      items: ['C#', 'Unity Scripting', 'Prototyping', 'Version Control (Git, P4V)'],
    },
    {
      title: '3D Art & Design',
      items: ['3D Modelling', 'Unwrapping', 'Texturing', 'Stylised Game Art', '2D Stylized Art'],
    },
  ];

  const experiences = [
    {
      label: 'Team Lead & Game Designer',
      detail: "Sombre — Project manager for a six-person team to build a narrative heavy puzzle game in Unity",
    },
    {
      label: 'Award-Winning Designer',
      detail: "Franco-Belge Game Jam Community Award for Bud's Oasis",
    },
    {
      label: 'DAE @ Howest',
      detail: 'Independent Game Production student specialising in gameplay & systems',
    },
    {
      label: 'Art Internship At A tech studio',
      detail: 'Assisted in creating realistic 3D models and textures for their VR applications',
    },
  ];

  const quickStats = [
    { value: '3+', label: 'Games Shipped' },
    { value: '3+', label: 'Years Coding' },
    { value: '4+', label: 'Game Jams & Pitches' },
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <span className="about-tag">Game Designer · 3D Generalist · Team Lead</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="bio-card">
              <p>
                Hey, I&apos;m Trisha Gupta — A final-year Independent Game Production student at Howest&apos;s Digital Arts and Entertainment program. I&apos;ve studied game design, gameplay programming, and game art, which gave me a strong foundation in building and playtesting games from the ground up.
              </p>
              <p>
                I mostly design games in Unity using C#, however I am also experienced with Blender, Maya, and Substance Painter for basic modeling and texturing.
              </p>
              <p>
                Currently, I&apos;m leading a team of six developers as both Game Designer and Programmer on our upcoming title, Sombre. I&apos;m passionate about crafting engaging gameplay experiences and seeing ideas come to life through collaboration.
              </p>
              <div className="bio-highlights">
                <span>Game Design Experience</span>
                <span>Lover of narrative driven puzzle games</span>
                <span>Comunications Experience</span>
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
                Working on a Group projects game called: <span className="accent-card__focus">Sombre</span>, a narrative based puzzle game about shadows and lights. Ask me about the mechancics and the story!
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;