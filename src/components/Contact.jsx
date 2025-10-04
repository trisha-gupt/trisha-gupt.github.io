import React from 'react';
import '../styles/Contact.css';
import linkedinImg from '../assets/contact-icons/linkedin_icon.PNG';
import youtubeImg from '../assets/contact-icons/youtube_icon.PNG';
import emailImg from '../assets/contact-icons/email_icon.png';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="contact-section">Contact</h2>
        <h3 className="contact-title">Let's get in touch and play!</h3>
        <p className="contact-sub">Reach out — I'm open to collaborations, internships, and chats about games.</p>
        <div className="contact-icons">
          <a className="contact-icon linkedin" href="https://www.linkedin.com/in/trisha-gupta-004761231" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src={linkedinImg} alt="LinkedIn" />
          </a>
          <a className="contact-icon youtube" href="https://www.youtube.com/@teragatchi490" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <img src={youtubeImg} alt="YouTube" />
          </a>
          <a className="contact-icon email" href="mailto:trishagup12@gmail.com" aria-label="Email">
            <img src={emailImg} alt="Email" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
