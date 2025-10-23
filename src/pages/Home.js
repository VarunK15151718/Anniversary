import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FloatingElements from '../components/FloatingElements';
import './Home.css';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="home-page">
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Main Collage Image */}
          <motion.div
            className="hero-image-container"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="hero-image">
              <img 
                src={`${process.env.PUBLIC_URL}/collage.png`} 
                alt="Happy 1st Anniversary Collage" 
                className="collage-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="placeholder-image" style={{ display: 'none' }}>
                <div className="image-placeholder">
                  <span className="placeholder-text">Happy 1st Preyy</span>
                  <span className="placeholder-subtitle">Our Beautiful Collage</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Text */}
          <motion.div
            className="hero-text"
            variants={itemVariants}
          >
            <motion.h1
              className="hero-title gradient-text"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Happy 1st Anniversary
            </motion.h1>
            
            <motion.p
              className="hero-date"
              variants={itemVariants}
            >
              October 26th, 2024
            </motion.p>
            
            <motion.p
              className="hero-subtitle"
              variants={itemVariants}
            >
              A whole year of being absolutely obsessed with you, 
              creating amazing memories together, and falling deeper in love every single day. 
              Here's to us being the ultimate power couple! 💕
            </motion.p>

            <motion.div
              className="hero-cta"
              variants={itemVariants}
            >
              <Link to="/our-story" className="btn-primary cta-button">
                Let's Dive Into Our Story
                <span className="cta-arrow">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="scroll-arrow">
            <span>↓</span>
          </div>
          <p>Scroll to discover the magic</p>
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section className="stats-section">
        <motion.div
          className="stats-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            <motion.div
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-number">365</div>
              <div className="stat-label">Days of Obsession</div>
            </motion.div>
            
            <motion.div
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-number">∞</div>
              <div className="stat-label">Memories Made</div>
            </motion.div>
            
            <motion.div
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-number">1</div>
              <div className="stat-label">Epic Year</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Quick Navigation */}
      <section className="quick-nav-section">
        <motion.div
          className="quick-nav-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Dive Into Our World</h2>
          <div className="quick-nav-grid">
            <Link to="/gallery" className="quick-nav-card">
              <div className="quick-nav-icon">📸</div>
              <h3>Gallery</h3>
              <p>Our beautiful moments</p>
            </Link>
            
            <Link to="/memories" className="quick-nav-card">
              <div className="quick-nav-icon">💭</div>
              <h3>Memories</h3>
              <p>All the weird & wonderful stuff</p>
            </Link>
            
            <Link to="/letter" className="quick-nav-card">
              <div className="quick-nav-icon">💌</div>
              <h3>Love Letter</h3>
              <p>My heart spilled out in words</p>
            </Link>
            
            <Link to="/surprise" className="quick-nav-card">
              <div className="quick-nav-icon">🎁</div>
              <h3>Surprise</h3>
              <p>Something epic awaits you</p>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
