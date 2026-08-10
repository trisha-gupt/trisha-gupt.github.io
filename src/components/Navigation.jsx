import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 100);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'projects'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sections[index]);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // Not on the home page — navigate there first
      navigate('/');
      // Wait for the home page to render before scrolling
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100); // small delay so the DOM exists after navigation
    } else {
      // Already home — just scroll
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">Trisha Gupta</span>
          <span className="logo-subtitle">Game Designer</span>
        </div>
        
        <ul className="nav-menu">
          <li>
            <button 
              className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
              onClick={() => goToSection('hero')}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => goToSection('projects')}
            >
              Games
            </button>
          </li>
          <li>
            <button 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => goToSection('about')}
            >
              About
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;