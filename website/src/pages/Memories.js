import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Memories.css';

const Memories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const memories = [
    {
      id: 1,
      title: "Our First Kiss",
      date: "October 25, 2024",
      description: "In the elevator, so soft and sweet… we couldn’t stop smiling as we walked out.",
      image: "💋",
      color: "#FF6B6B"
    },
    // removed surprise birthday party
    {
      id: 3,
      title: "First Noodles in the Car",
      date: "May 3, 2024",
      description: "Feeding you noodles in the car from your favourite backroad stall. Pure happiness.",
      image: "🍜",
      color: "#4ECDC4"
    },
    // removed rainy day
    {
      id: 5,
      title: "Your Pasta – OMG",
      date: "August 8, 2024",
      description: "First time tasting your pasta — delicious and crazyyyy good. I’m still thinking about it.",
      image: "🍝",
      color: "#96CEB4"
    },
    {
      id: 6,
      title: "Midnight Texting",
      date: "September 20, 2024",
      description: "That thrill of coming online late at night, checking if someone’s awake, and texting from the other side.",
      image: "🌙",
      color: "#FECA57"
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % memories.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, memories.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? memories.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentMemory = memories[currentIndex];

  return (
    <div className="memories-page">
      {/* Hero Section */}
      <section className="memories-hero">
        <motion.div
          className="memories-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="memories-title gradient-text">Precious Memories</h1>
          <p className="memories-subtitle">
            Every moment with you becomes a treasured memory. 
            Here are some of the most special ones that make my heart smile.
          </p>
        </motion.div>
      </section>

      {/* Memory Carousel */}
      <section className="memories-carousel">
        <div className="carousel-container">
          <div className="carousel-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="memory-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                style={{ '--memory-color': currentMemory.color }}
              >
                <div className="memory-image">
                  <div className="memory-emoji">{currentMemory.image}</div>
                </div>
                
                <div className="memory-content">
                  <div className="memory-date">{currentMemory.date}</div>
                  <h2 className="memory-title">{currentMemory.title}</h2>
                  <p className="memory-description">{currentMemory.description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="carousel-controls">
            <button
              className="carousel-btn prev-btn"
              onClick={goToPrevious}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <span>‹</span>
            </button>
            
            <button
              className="carousel-btn next-btn"
              onClick={goToNext}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <span>›</span>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="carousel-dots">
            {memories.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <div className="autoplay-control">
            <button
              className={`autoplay-btn ${isAutoPlaying ? 'active' : ''}`}
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            >
              <span>{isAutoPlaying ? '⏸️' : '▶️'}</span>
              {isAutoPlaying ? 'Pause' : 'Play'}
            </button>
          </div>
        </div>
      </section>

      {/* Memory Stats */}
      <section className="memory-stats">
        <motion.div
          className="stats-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="stats-title">Our Memory Collection</h2>
          <div className="stats-grid">
            <motion.div
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-number">365+</div>
              <div className="stat-label">Days of Memories</div>
            </motion.div>
            
            <motion.div
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-number">∞</div>
              <div className="stat-label">Laughs Shared</div>
            </motion.div>
            
            <motion.div
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-number">100%</div>
              <div className="stat-label">Happiness Rate</div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Memories;
