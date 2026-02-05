import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend, 
  FiLinkedin, 
  FiGithub,
  FiCheck 
} from 'react-icons/fi';
import BackgroundNetwork from '../BackgroundNetwork';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'mueezahmad1727@gmail.com',
      href: 'mailto:mueezahmad1727@gmail.com',
    },
    {
      icon: <FiPhone />,
      label: 'Phone',
      value: '+92 336 6211911',
      href: 'tel:+923366211911',
    },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: 'Khanewal, Pakistan',
      href: null,
    },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/Mueez1727', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/mueez-ahmad-bab574352/', label: 'LinkedIn' },
  ];

  return (
    <section className={styles.contactSection} id="contact" ref={ref}>
      <BackgroundNetwork opacity={0.03} />
      
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>Contact</span>
          <h2 className={styles.mainHeading}>Let's Work Together</h2>
          <p className={styles.subHeading}>Have a project or idea? I'd love to hear from you.</p>
        </motion.div>

        <div className={styles.contentGrid}>
          <motion.div
            className={styles.contactInfo}
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.infoCard}>
              <div className={styles.infoItems}>
                {contactInfo.map((item) => (
                  <div key={item.label} className={styles.infoItem}>
                    <div className={styles.infoIcon}>{item.icon}</div>
                    <div className={styles.infoContent}>
                      <span className={styles.infoLabel}>{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className={styles.infoValue}>
                          {item.value}
                        </a>
                      ) : (
                        <span className={styles.infoValue}>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.socialSection}>
                <h4 className={styles.socialTitle}>Connect with me</h4>
                <div className={styles.socialLinks}>
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      whileHover={{ y: -3 }}
                      aria-label={link.label}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.formCard}
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.inputLabel}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.inputLabel}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.inputLabel}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={styles.textarea}
                  required
                />
              </div>

              {isSubmitted ? (
                <motion.div
                  className={styles.successMessage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FiCheck />
                  Thank you! Your message has been sent successfully.
                </motion.div>
              ) : (
                <motion.button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <FiSend className={styles.buttonIcon} />
                    </>
                  )}
                </motion.button>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
