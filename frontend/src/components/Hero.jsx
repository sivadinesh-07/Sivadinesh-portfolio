// Hero.jsx - Highly professional executive Hero section
import { useState, useEffect } from 'react';

// Titles for typewriter effect
const titles = [
  "MERN Stack Developer",
  "UI/UX Designer",
  "AWS Cloud Enthusiast",
  "WordPress Developer"
];

export default function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const activeTitle = titles[titleIndex];

    if (charIndex < activeTitle.length) {
      const timer = setTimeout(() => {
        setCurrentText((prev) => prev + activeTitle[charIndex]);
        setCharIndex(charIndex + 1);
      }, 90);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setCurrentText('');
        setCharIndex(0);
        setTitleIndex((titleIndex + 1) % titles.length);
      }, 1600);
      return () => clearTimeout(resetTimer);
    }
  }, [charIndex, titleIndex]);

  return (
    <section id="home" className="hero">
      {/* Availability Status Pill */}
      <div className="hero-status-pill" data-aos="fade-down">
        <span className="status-dot-pulse"></span>
        <span>Available for Full-Time & Freelance Roles</span>
      </div>

      {/* Main Title & Typewriter */}
      <h1 className="hero-title" data-aos="fade-up">
        Hi, I'm <span className="hero-name-gradient">Sivadinesh R</span>
      </h1>

      <div className="hero-typing-wrap" data-aos="fade-up" data-aos-delay="100">
        <span className="typing-prefix">I am a </span>
        <h2 id="typing" className="typing-text">{currentText}</h2>
      </div>

      <p className="hero-bio" data-aos="fade-up" data-aos-delay="200">
        Computer Science student engineering robust <strong>MERN Stack</strong> applications and crafting intuitive, user-centered <strong>UI/UX interfaces</strong> in Figma with modern design systems.
      </p>

      {/* Action Buttons */}
      <div className="hero-cta-group" data-aos="fade-up" data-aos-delay="300">
        <a href="#projects" className="hero-cta-btn primary-cta">
          <i className="fas fa-layer-group"></i> Explore Projects
        </a>
        <a href="/resume/siva_resume.pdf" className="hero-cta-btn secondary-cta" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-file-pdf"></i> View Resume
        </a>
        <a href="#contact" className="hero-cta-btn outline-cta">
          <i className="fas fa-paper-plane"></i> Contact Me
        </a>
      </div>

      {/* Metadata & Quick Socials Strip */}
      <div className="hero-meta-strip" data-aos="fade-up" data-aos-delay="400">
        <div className="hero-meta-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>Chennai, Tamil Nadu, India</span>
        </div>
        <div className="hero-meta-divider"></div>
        <div className="hero-meta-item">
          <i className="fas fa-envelope"></i>
          <a href="mailto:sivadinesh872@gmail.com">sivadinesh872@gmail.com</a>
        </div>
        <div className="hero-meta-divider"></div>
        <div className="hero-meta-item">
          <i className="fas fa-phone-alt"></i>
          <a href="tel:+919940375646">(+91) 9940375646</a>
        </div>
        <div className="hero-meta-divider"></div>
        <div className="hero-meta-socials">
          <a href="https://www.linkedin.com/in/sivadinesh-r-a497042a5/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn Profile">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/sivadinesh-07" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub Profile">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
