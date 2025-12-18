// src/App.jsx
import React from 'react';
import { profileData } from './profileData';
import { Mail, MapPin, Linkedin, Github, BookOpen, ExternalLink } from 'lucide-react';
import './App.css';

function App() {
  const { header, about, interests, experience, education, publications, projects, skills } = profileData;

  return (
    <div className="container">
      {/* HEADER / HERO SECTION */}
      <header className="hero">
        <div className="hero-content">
          <h1>{header.name}</h1>
          <h2>{header.title}</h2>
          
          <div className="contact-info">
            <span className="icon-text"><MapPin size={16} /> {header.location}</span>
            <a href={header.linkedin} target="_blank" className="icon-text"><Linkedin size={16} /> LinkedIn</a>
            {/* Hapus baris di bawah jika tidak ada Github/Scholar */}
            <a href={header.github} target="_blank" className="icon-text"><Github size={16} /> GitHub</a>
            <a href={header.scholar} target="_blank" className="icon-text"><BookOpen size={16} /> Scholar</a>
          </div>

          <div className="email-buttons">
            <a href={`mailto:${header.emailWork}`} className="btn btn-primary">
              <Mail size={16} /> Email Work
            </a>
            <a href={`mailto:${header.emailResearch}`} className="btn btn-outline">
              <Mail size={16} /> Email Research
            </a>
          </div>
        </div>
      </header>

      <main className="main-content">
        
        {/* ABOUT & RESEARCH INTERESTS */}
        <section className="section">
          <h3>Professional Summary & Research Vision</h3>
          <p className="summary-text">{about.summary}</p>
          <p className="summary-text vision-text">{about.vision}</p>
          
          <div className="interests-grid">
            {interests.map((item, index) => (
              <div key={index} className="interest-card">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section">
          <h3>Experience</h3>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-header">
                  <h4>{exp.role}</h4>
                  <span className="date">{exp.period}</span>
                </div>
                <div className="company">{exp.company}</div>
                <p>{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section">
          <h3>Education</h3>
          {education.map((edu, index) => (
            <div key={index} className="edu-item">
              <h4>{edu.degree}</h4>
              <div className="school">{edu.school} | {edu.period}</div>
              <div className="grade">{edu.grade}</div>
              {edu.note && <div className="note">{edu.note}</div>}
            </div>
          ))}
        </section>

        {/* PUBLICATIONS */}
        <section className="section">
          <h3>Selected Publications</h3>
          <div className="pub-list">
            {publications.map((pub, index) => (
              <div key={index} className="pub-item">
                <a href={`https://doi.org/${pub.doi}`} target="_blank" className="pub-title">
                  {pub.title} <ExternalLink size={12} />
                </a>
                <div className="pub-meta">{pub.publisher}</div>
                {pub.relevance && <div className="pub-relevance">💡 <strong>Relevance to Medical AI:</strong> {pub.relevance}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS & SKILLS */}
        <div className="grid-2-col">
          <section className="section">
            <h3>Certifications & Projects</h3>
            <ul className="list-disc">
              {projects.map((proj, index) => (
                <li key={index}>{proj}</li>
              ))}
            </ul>
          </section>
          
          <section className="section">
            <h3>Technical Skills</h3>
            <div className="skills-tags">
              {skills.map((skill, index) => (
                <span key={index} className="tag">{skill}</span>
              ))}
            </div>
          </section>
        </div>

      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Fadillah Siva. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;