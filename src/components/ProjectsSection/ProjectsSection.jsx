import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import BackgroundNetwork from '../BackgroundNetwork';
import styles from './ProjectsSection.module.css';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for managing products, orders, and customer analytics with real-time data visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with drag-and-drop functionality, team assignments, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Weather Application',
      description: 'A clean weather app that shows current conditions and 7-day forecasts with location-based detection.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=450&fit=crop',
      tech: ['React', 'API Integration', 'CSS Modules'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations.',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=450&fit=crop',
      tech: ['React', 'Framer Motion', 'CSS Modules'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  return (
    <section className={styles.projectsSection} id="projects" ref={ref}>
      <BackgroundNetwork opacity={0.04} />
      
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>Projects</span>
          <h2 className={styles.mainHeading}>Featured Projects</h2>
          <p className={styles.subHeading}>Real projects built to solve real problems</p>
        </motion.div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={styles.projectCard}
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <div className={styles.imageOverlay} />
                {project.featured && (
                  <span className={styles.featuredBadge}>Featured</span>
                )}
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.techTags}>
                  {project.tech.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      <span className={styles.techDot} />
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.projectLinks}>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectLink} ${styles.primaryLink}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiExternalLink className={styles.linkIcon} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectLink} ${styles.secondaryLink}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiGithub className={styles.linkIcon} />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
