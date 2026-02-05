import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveNav(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={styles.logo}>
          <FiUser className={styles.logoIcon} />
        </div>

        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li
              key={item}
              className={`${styles.navItem} ${activeNav === item ? styles.active : ''}`}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className={styles.rightSection}>
          <button
            className={styles.themeToggle}
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <FiMoon size={18} /> : <FiSun size={18} />}
          </button>

          <button
            className={styles.menuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        {navItems.map((item) => (
          <div
            key={item}
            className={`${styles.mobileNavItem} ${activeNav === item ? styles.active : ''}`}
            onClick={() => scrollToSection(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
