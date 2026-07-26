// Hero.jsx - Beginner-friendly Hero section with standard React state & useEffect
import { useState, useEffect } from 'react';

// Titles for typewriter effect
const titles = [
  "MERN Full Stack Developer",
  "UI/UX Designer",
  "WordPress Developer"
];

export default function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const activeTitle = titles[titleIndex];

    if (charIndex < activeTitle.length) {
      // Add one character at a time
      const timer = setTimeout(() => {
        setCurrentText((prev) => prev + activeTitle[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // Pause when full word is typed, then switch to next word
      const resetTimer = setTimeout(() => {
        setCurrentText('');
        setCharIndex(0);
        setTitleIndex((titleIndex + 1) % titles.length);
      }, 1500);
      return () => clearTimeout(resetTimer);
    }
  }, [charIndex, titleIndex]);

  return (
    <section id="home" className="hero">
      <h1>Hi, I'm <span>Sivadinesh R</span></h1>
      <h2 id="typing">{currentText}</h2>
      <p className="hero-subtitle">Fullstack Developer | UI/UX Designer</p>

      {/* Contact Info */}
      <div className="hero-contact">
        <span><i className="fas fa-map-marker-alt"></i> Chennai, Tamilnadu, India</span>
        <span><i className="fas fa-phone-alt"></i> (+91) 9940375646</span>
        <span><i className="fas fa-envelope"></i> sivadinesh872@gmail.com</span>
      </div>

      {/* Social Links */}
      <div className="hero-socials">
        <a href="https://www.linkedin.com/in/sivadinesh-r-a497042a5/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/sivadinesh-07" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>

      {/* Resume Button */}
      <a href="resume/Siva's_resume.pdf" className="btn" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-file-pdf"></i> View Resume
      </a>
    </section>
  );
}
