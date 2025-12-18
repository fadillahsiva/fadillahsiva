// src/App.jsx
import React, { useState, useEffect } from 'react';
import { profileData } from './profileData';
import { Mail, MapPin, Linkedin, Github, BookOpen, ExternalLink, Menu, X, ArrowUp, ChevronRight, Users } from 'lucide-react';
// Pastikan foto sudah ada di folder src/assets/profile.jpg
import profilePic from './assets/profile.jpg'; 
import './App.css';

function App() {
  const { header, about, interests, experience, education, publications, projects, skills, organization } = profileData;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="app-container">
      {/* NAVIGATION BAR */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            FS<span>.</span>
          </div>
          
          <div className="desktop-menu">
            {['About', 'Experience', 'Education', 'Publications', 'Portfolio'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())}>
                {item}
              </button>
            ))}
          </div>

          <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div className={`mobile-dropdown ${isMenuOpen ? 'open' : ''}`}>
          {['About', 'Experience', 'Education', 'Publications', 'Portfolio'].map((item) => (
            <button key={item} onClick={() => scrollToSection(item.toLowerCase())}>
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO SECTION WITH PHOTO */}
      <header className="hero-section">
        <div className="hero-bg-pattern"></div>
        <div className="hero-content">
          
          {/* PROFILE PICTURE */}
          <div className="profile-wrapper fade-in-up">
            <div className="profile-frame">
              <img src={profilePic} alt={header.name} className="profile-img" />
            </div>
          </div>

          <div className="hero-text fade-in-up">
            <span className="badge">Academic & Researcher</span>
            <h1>{header.name}</h1>
            <p className="hero-title">{header.title}</p>
            <div className="location-tag">
              <MapPin size={18} /> {header.location}
            </div>
            
            <div className="social-links">
              <a href={header.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href={header.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href={header.scholar} target="_blank" rel="noreferrer" aria-label="Google Scholar"><BookOpen /></a>
            </div>

            <div className="cta-group">
              <a href={`mailto:${header.emailWork}`} className="btn btn-primary">
                Contact Work <Mail size={16} />
              </a>
              <a href={`mailto:${header.emailResearch}`} className="btn btn-secondary">
                Contact Research <ArrowUp className="rotate-45" size={16} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="main-container">
        
        {/* ABOUT SECTION */}
        <section id="about" className="section-padding">
          <div className="section-header">
            <h2>About & Vision</h2>
            <div className="line"></div>
          </div>
          <div className="about-grid">
            <div className="about-text card">
              <p className="lead">{about.summary}</p>
              <div className="vision-box">
                <span className="vision-label">Research Goal</span>
                <p>{about.vision}</p>
              </div>
            </div>
            <div className="interests-wrapper">
              <h3>Core Interests</h3>
              <div className="interests-list">
                {interests.map((item, index) => (
                  <div key={index} className="interest-item">
                    <div className="check-icon"><ChevronRight size={16}/></div>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section-padding bg-light">
          <div className="section-header">
            <h2>Professional Experience</h2>
            <div className="line"></div>
          </div>
          <div className="timeline-container">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-card fade-in-on-scroll">
                <div className="timeline-year">{exp.period}</div>
                <div className="timeline-content">
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <p>{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & ORGANIZATION SECTION */}
        <section id="education" className="section-padding">
          <div className="grid-2-col">
            <div>
              <div className="section-header-left">
                <h3>Education</h3>
              </div>
              <div className="education-list">
                {education.map((edu, index) => (
                  <div key={index} className="edu-card-simple">
                    <div className="edu-icon"><BookOpen size={20} /></div>
                    <div>
                      <h4>{edu.degree}</h4>
                      <span className="edu-school">{edu.school}</span>
                      <span className="edu-grade">{edu.grade}</span>
                      <span className="edu-year-simple">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="section-header-left">
                <h3>Organization</h3>
              </div>
              <div className="org-list">
                {organization && organization.map((org, index) => (
                  <div key={index} className="edu-card-simple">
                     <div className="edu-icon"><Users size={20} /></div>
                     <div>
                        <h4>{org.role}</h4>
                        <span className="edu-school">{org.name}</span>
                        <span className="edu-year-simple">{org.period}</span>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PUBLICATIONS SECTION - NEW CARD LAYOUT WITH IMAGES */}
        <section id="publications" className="section-padding bg-light">
          <div className="section-header">
            <h2>Selected Publications</h2>
            <div className="line"></div>
          </div>
                      
          {/* International Publications */}
          <div className="pub-subsection">
            <h3 className="subsection-title">International Conferences & Proceedings</h3>
            <div className="pub-grid-illustrated">
              {publications.international.map((pub, index) => (
                <div key={index} className="pub-card-illustrated">
                  <div className="pub-image-container">
                    <img src={pub.image} alt={pub.title} className="pub-img" />
                  </div>
                  <div className="pub-content-wrapper">
                    <h3 className="pub-title">{pub.title}</h3>
                    <div className="pub-meta-container">
                      <p className="pub-publisher">{pub.publisher}</p>
                      <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer" className="view-paper-link">
                        View Paper <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
            
          {/* Spacer */}
          <div style={{ height: '3rem' }}></div>
            
          {/* National Publications */}
          <div className="pub-subsection">
            <h3 className="subsection-title">National Journals</h3>
            <div className="pub-grid-illustrated national-grid"> {/* Tambah class national-grid */}
              {publications.national.map((pub, index) => (
                <div key={index} className="pub-card-illustrated">
                  <div className="pub-image-container">
                    <img src={pub.image} alt={pub.title} className="pub-img" />
                  </div>
                  <div className="pub-content-wrapper">
                    <h3 className="pub-title">{pub.title}</h3>
                    <div className="pub-meta-container">
                      <p className="pub-publisher">{pub.publisher}</p>
                      <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer" className="view-paper-link">
                        View Paper <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO & SKILLS SECTION */}
        <section id="portfolio" className="section-padding">
          <div className="grid-2-col">
            <div className="projects-column">
              <div className="section-header-left">
                <h3>Key Projects & Certifications</h3>
              </div>
              <ul className="project-list">
                {projects.map((proj, index) => (
                  <li key={index} className="project-item">
                    <span className="bullet"></span> {proj}
                  </li>
                ))}
              </ul>
            </div>

            <div className="skills-column">
              <div className="section-header-left">
                <h3>Technical Arsenal</h3>
              </div>
              <div className="skills-cloud">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="footer-professional">
        <div className="footer-content">
          <div className="footer-logo">FS.</div>
          <p>© {new Date().getFullYear()} Fadillah Siva. <br/>Lecturer & Researcher.</p>
          <div className="footer-socials">
             <a href={header.linkedin}>LinkedIn</a> • <a href={header.scholar}>Scholar</a>
          </div>
        </div>
      </footer>
      
      {isScrolled && (
        <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;