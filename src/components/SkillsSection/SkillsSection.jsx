import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FiMonitor, 
  FiServer, 
  FiTool, 
  FiLayers,
  FiGitBranch,
  FiGithub,
  FiCode,
  FiFigma
} from 'react-icons/fi';
import BackgroundNetwork from '../BackgroundNetwork';
import styles from './SkillsSection.module.css';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FiMonitor />,
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 88 },
        { name: 'Tailwind CSS', level: 82 },
      ],
    },
    {
      title: 'Backend',
      icon: <FiServer />,
      skills: [
        { name: 'PHP', level: 75 },
        { name: 'Node.js', level: 70 },
        { name: 'MySQL', level: 78 },
      ],
    },
    {
      title: 'Tools',
      icon: <FiTool />,
      tools: [
        { name: 'Git', icon: <FiGitBranch /> },
        { name: 'GitHub', icon: <FiGithub /> },
        { name: 'VS Code', icon: <FiCode /> },
        { name: 'Figma', icon: <FiFigma /> },
      ],
    },
    {
      title: 'Other',
      icon: <FiLayers />,
      skills: [
        { name: 'APIs', level: 80 },
        { name: 'Responsive Design', level: 92 },
        { name: 'SEO Basics', level: 70 },
      ],
    },
  ];

  return (
    <section className={styles.skillsSection} id="skills" ref={ref}>
      <BackgroundNetwork opacity={0.05} />
      
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>Skills</span>
          <h2 className={styles.mainHeading}>Skills & Tech Stack</h2>
          <p className={styles.subHeading}>Tools and technologies I work with</p>
        </motion.div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className={styles.skillCard}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>{category.icon}</div>
                <h3 className={styles.cardTitle}>{category.title}</h3>
              </div>

              {category.skills ? (
                <div className={styles.skillsList}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className={styles.skillItem}>
                      <div className={styles.skillInfo}>
                        <span className={styles.skillName}>{skill.name}</span>
                      </div>
                      <div className={styles.progressBar}>
                        <motion.div
                          className={styles.progressFill}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.toolsGrid}>
                  {category.tools.map((tool) => (
                    <motion.div
                      key={tool.name}
                      className={styles.toolTag}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className={styles.toolIcon}>{tool.icon}</span>
                      {tool.name}
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
