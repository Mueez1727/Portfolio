import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBook, FiBriefcase } from 'react-icons/fi';
import BackgroundNetwork from '../BackgroundNetwork';
import styles from './ExperienceSection.module.css';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const timelineData = [
    {
      type: 'education',
      icon: <FiBook />,
      institution: 'University of Technology',
      degree: 'BS in Software Engineering',
      status: '7th Semester',
      duration: '2022 – Present',
      coursework: [
        'Data Structures & Algorithms',
        'Web Development',
        'Database Systems',
        'Software Engineering',
        'Human Computer Interaction',
      ],
    },
    {
      type: 'experience',
      icon: <FiBriefcase />,
      institution: 'Self-Learning & Projects',
      degree: 'Frontend Development Focus',
      status: 'Ongoing',
      duration: '2023 – Present',
      coursework: [
        'React.js Development',
        'Responsive Design',
        'UI/UX Principles',
        'API Integration',
        'Performance Optimization',
      ],
    },
  ];

  return (
    <section className={styles.experienceSection} id="experience" ref={ref}>
      <BackgroundNetwork opacity={0.03} />
      
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>Background</span>
          <h2 className={styles.mainHeading}>Education & Experience</h2>
          <p className={styles.subHeading}>My academic journey and practical learning</p>
        </motion.div>

        <div className={styles.timeline}>
          {timelineData.map((item, index) => (
            <motion.div
              key={item.institution}
              className={styles.timelineItem}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.timelineDot} />
              <div className={styles.timelineCard}>
                <div className={styles.cardIcon}>{item.icon}</div>
                
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.institutionName}>{item.institution}</h3>
                    <p className={styles.degree}>{item.degree}</p>
                  </div>
                  <span className={styles.statusBadge}>{item.status}</span>
                </div>
                
                <p className={styles.duration}>{item.duration}</p>

                <div>
                  <h4 className={styles.courseworkTitle}>
                    {item.type === 'education' ? 'Relevant Coursework' : 'Focus Areas'}
                  </h4>
                  <div className={styles.courseworkTags}>
                    {item.coursework.map((course) => (
                      <span key={course} className={styles.courseworkTag}>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
