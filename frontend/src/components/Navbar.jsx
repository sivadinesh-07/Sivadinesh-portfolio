// Navbar.jsx - Fully responsive navigation bar with mobile menu toggle & theme switcher
import { useState } from 'react';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle theme mode
  const toggleTheme = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);

    if (nextMode) {
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
    }
  };

  // Toggle mobile navigation menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close mobile navigation menu on link click
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={isMobileMenuOpen ? 'mobile-nav-open' : ''}>
      {/* Brand Logo */}
      <div className="logo">
        Sivadinesh R<span>.</span>
      </div>

      {/* Navigation Links List */}
      <ul className={isMobileMenuOpen ? 'mobile-show' : ''}>
        <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
        <li><a href="#journey" onClick={closeMobileMenu}>Journey</a></li>
        <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
        <li><a href="#certificates" onClick={closeMobileMenu}>Certificates</a></li>
        <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
      </ul>

      {/* Navigation Action Buttons */}
      <div className="nav-actions">
        <button id="themeBtn" onClick={toggleTheme} aria-label="Toggle Theme">
          {isDarkMode ? '🌙' : '☀️'}
        </button>

        {/* Mobile Hamburger Menu Toggle Button */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle Menu">
          <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
      </div>
    </nav>
  );
}
