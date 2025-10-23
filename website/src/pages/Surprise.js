import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from '../components/Confetti';
import './Surprise.css';

const Surprise = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedSurprise, setSelectedSurprise] = useState(null);
  const [konamiCode, setKonamiCode] = useState([]);
  const [showHeartExplosion, setShowHeartExplosion] = useState(false);

  const surprises = [
    {
      id: 'countdown',
      title: 'Countdown to Next Anniversary',
      description: 'Watch the timer count down to our next special day!',
      icon: '⏰',
      color: '#FF6B6B'
    },
    {
      id: 'reasons',
      title: '365 Reasons I Love You',
      description: 'Click to discover random reasons why you mean the world to me!',
      icon: '💕',
      color: '#FFB6C1'
    },
    {
      id: 'compatibility',
      title: 'Love Compatibility Meter',
      description: 'See how perfectly we match together!',
      icon: '💖',
      color: '#4ECDC4'
    }
  ];

  const loveReasons = [
    "Your beautiful smile lights up my world",
    "The way you laugh at my silly jokes",
    "Your kindness towards everyone around you",
    "How you make ordinary moments feel magical",
    "Your strength and determination inspire me",
    "The way you care for me when I'm sick",
    "Your beautiful eyes that I could get lost in",
    "How you dance in the kitchen while cooking",
    "Your intelligence and curiosity about the world",
    "The way you make me feel like the luckiest person alive",
    "Your sense of humor that always makes me laugh",
    "How you support my dreams and ambitions",
    "Your beautiful heart that loves so deeply",
    "The way you remember little things about me",
    "How you make every day an adventure",
    "Your creativity and artistic soul",
    "The way you comfort me when I'm sad",
    "How you challenge me to be a better person",
    "Your beautiful voice when you sing",
    "The way you look at me with so much love"
  ];

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const konamiSequence = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'KeyB', 'KeyA'
    ];

    const handleKeyDown = (e) => {
      setKonamiCode(prev => {
        const newCode = [...prev, e.code].slice(-10);
        if (JSON.stringify(newCode) === JSON.stringify(konamiSequence)) {
          setShowHeartExplosion(true);
          setTimeout(() => setShowHeartExplosion(false), 2000);
        }
        return newCode;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getNextAnniversaryDate = () => {
    const currentDate = new Date();
    const nextAnniversary = new Date(currentDate.getFullYear() + 1, 9, 26); // October 26th next year
    if (nextAnniversary < currentDate) {
      nextAnniversary.setFullYear(currentDate.getFullYear() + 1);
    }
    return nextAnniversary;
  };

  const getTimeUntilNextAnniversary = () => {
    const now = new Date();
    const nextAnniversary = getNextAnniversaryDate();
    const timeDiff = nextAnniversary - now;
    
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeUntilNextAnniversary());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilNextAnniversary());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getRandomLoveReason = () => {
    return loveReasons[Math.floor(Math.random() * loveReasons.length)];
  };

  const renderCountdown = () => (
    <div className="countdown-container">
      <h3>Time Until Our Next Anniversary</h3>
      <div className="countdown-grid">
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.days}</div>
          <div className="countdown-label">Days</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.hours}</div>
          <div className="countdown-label">Hours</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.minutes}</div>
          <div className="countdown-label">Minutes</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.seconds}</div>
          <div className="countdown-label">Seconds</div>
        </div>
      </div>
    </div>
  );

  const Reasons = () => {
    const [currentReason, setCurrentReason] = useState('Click the button to discover a reason!');
    
    return (
      <div className="reasons-container">
        <h3>Reasons I Love You</h3>
        <div className="reason-display">
          <p className="current-reason">{currentReason}</p>
        </div>
        <button 
          className="reason-btn"
          onClick={() => setCurrentReason(getRandomLoveReason())}
        >
          💕 Get Another Reason 💕
        </button>
      </div>
    );
  };

  const renderCompatibility = () => (
    <div className="compatibility-container">
      <h3>Our Love Compatibility</h3>
      <div className="compatibility-meter">
        <div className="meter-fill" style={{ width: '100%' }}>
          <span className="meter-text">Perfect Match!</span>
        </div>
      </div>
      <div className="compatibility-stats">
        <div className="stat">
          <span className="stat-label">Love Level</span>
          <span className="stat-value">∞%</span>
        </div>
        <div className="stat">
          <span className="stat-label">Happiness</span>
          <span className="stat-value">100%</span>
        </div>
        <div className="stat">
          <span className="stat-label">Compatibility</span>
          <span className="stat-value">Perfect</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="surprise-page">
      {showConfetti && <Confetti />}
      {showHeartExplosion && <HeartExplosion />}
      
      {/* Hero Section */}
      <section className="surprise-hero">
        <motion.div
          className="surprise-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="surprise-title gradient-text">Surprise! 🎁</h1>
          <p className="surprise-subtitle">
            I've prepared some special surprises just for you. 
            Choose what you'd like to explore!
          </p>
        </motion.div>
      </section>

      {/* Surprise Selection */}
      <section className="surprise-selection">
        <div className="surprises-grid">
          {surprises.map((surprise) => (
            <motion.div
              key={surprise.id}
              className="surprise-card"
              style={{ '--surprise-color': surprise.color }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedSurprise(surprise.id)}
            >
              <div className="surprise-icon">{surprise.icon}</div>
              <h3 className="surprise-card-title">{surprise.title}</h3>
              <p className="surprise-card-description">{surprise.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Selected Surprise Content */}
      <AnimatePresence>
        {selectedSurprise && (
          <motion.section
            className="surprise-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="content-container">
              <button 
                className="close-btn"
                onClick={() => setSelectedSurprise(null)}
              >
                ×
              </button>
              
              {selectedSurprise === 'countdown' && renderCountdown()}
              {selectedSurprise === 'reasons' && <Reasons />}
              {selectedSurprise === 'compatibility' && renderCompatibility()}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

const HeartExplosion = () => (
  <div className="heart-explosion">
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        className="explosion-heart"
        initial={{ 
          x: window.innerWidth / 2, 
          y: window.innerHeight / 2,
          scale: 0,
          rotate: 0
        }}
        animate={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: [0, 1, 0],
          rotate: 360
        }}
        transition={{
          duration: 2,
          delay: i * 0.1,
          ease: "easeOut"
        }}
      >
        💖
      </motion.div>
    ))}
  </div>
);

export default Surprise;
