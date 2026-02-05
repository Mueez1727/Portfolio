import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaBehance } from 'react-icons/fa';
import BackgroundNetwork from '../BackgroundNetwork';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.heroSection} id="home">
      <BackgroundNetwork opacity={0.15} />
      
      <div className={styles.heroContainer}>
        <motion.div
          className={styles.leftContent}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className={styles.greeting}>Hi,</span>
          
          <div className={styles.nameContainer}>
            <h1 className={styles.name}>
              I'm <span className={styles.nameHighlight}>Mueez</span>
            </h1>
            <h2 className={styles.role}>React.js Developer</h2>
          </div>

          <motion.button
            className={styles.ctaButton}
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.button>

          <div className={styles.socialLinks}>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              whileHover={{ y: -3, color: '#e50914' }}
            >
              <FiLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              whileHover={{ y: -3, color: '#e50914' }}
            >
              <FiGithub />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className={styles.rightContent}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <div className={styles.imageContainer}>
            <div className={styles.imageGlow}></div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
              alt="Profile"
              className={styles.profileImage}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
