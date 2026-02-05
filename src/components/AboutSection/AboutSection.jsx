import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCheck, FiTarget, FiCode, FiLayout, FiZap } from 'react-icons/fi';
import BackgroundNetwork from '../BackgroundNetwork';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const focusAreas = [
    {
      icon: <FiCode />,
      title: 'React.js',
      desc: 'Building dynamic UIs',
    },
    {
      icon: <FiLayout />,
      title: 'UI/UX',
      desc: 'Clean, intuitive design',
    },
    {
      icon: <FiZap />,
      title: 'Performance',
      desc: 'Fast, optimized apps',
    },
  ];

  const specializations = [
    'Modern React.js development',
    'Responsive & accessible interfaces',
    'Clean, maintainable code',
    'Performance optimization',
  ];

  return (
    <section className={styles.aboutSection} id="about" ref={ref}>
      <BackgroundNetwork opacity={0.08} />
      
      <div className={styles.container}>
        <motion.div
          className={styles.leftContent}
          initial={{ x: -60, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className={styles.sectionLabel}>About Me</span>
          
          <h2 className={styles.mainHeading}>More than just a developer</h2>
          
          <p className={styles.paragraph}>
            My journey into development started with curiosity and countless late nights 
            trying to figure out why my code wasn't working. That frustration turned into 
            passion, and now I spend my days <span className={styles.highlightText}>building 
            interfaces that actually make sense</span>.
          </p>
          
          <p className={styles.paragraph}>
            I believe in writing code that's not just functional, but clean and maintainable. 
            Every project is a chance to learn something new, and I approach each one with 
            the mindset of <span className={styles.highlightText}>solving real problems 
            for real people</span>.
          </p>

          <div className={styles.specializationList}>
            {specializations.map((item, index) => (
              <motion.div
                key={index}
                className={styles.specializationItem}
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <FiCheck className={styles.checkIcon} />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.rightContent}
          initial={{ x: 60, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <div className={styles.highlightCard}>
            <h3 className={styles.cardTitle}>
              <FiTarget className={styles.cardTitleIcon} />
              Focus Areas
            </h3>
            
            <div className={styles.focusItems}>
              {focusAreas.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.focusItem}
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className={styles.focusIcon}>{item.icon}</div>
                  <div className={styles.focusText}>
                    <span className={styles.focusTitle}>{item.title}</span>
                    <span className={styles.focusDesc}>{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
