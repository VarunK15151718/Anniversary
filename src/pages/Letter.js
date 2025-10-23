import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FloatingHearts from '../components/FloatingHearts';
import './Letter.css';

const Letter = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const letterSections = [
    {
      id: 'greeting',
      title: 'My Dearest Love',
      content: 'As I sit here writing this letter, my heart is filled with so much love and gratitude for you. One year ago, you walked into my life and changed everything for the better.',
      type: 'greeting'
    },
    {
      id: 'what-i-love',
      title: 'What I Love About You',
      content: 'I love the way your eyes light up when you laugh, the sound of your voice when you\'re excited about something, and the way you make even the most ordinary moments feel extraordinary. I love your kindness, your strength, your silly jokes, and the way you care for everyone around you.',
      type: 'love'
    },
    {
      id: 'memories',
      title: 'Our Beautiful Memories',
      content: 'From our first date to our latest adventure, every moment with you has been a gift. The way you get excited about small things, and the way you make me feel like the luckiest person in the world.',
      type: 'memories'
    },
    {
      id: 'growth',
      title: 'Growing Together',
      content: 'This year has taught us so much about love, patience, and understanding. We\'ve learned to communicate better, to support each other through challenges, and to celebrate each other\'s victories. You\'ve made me a better person just by being in my life.',
      type: 'growth'
    },
    {
      id: 'future',
      title: 'Our Future Together',
      content: 'I can\'t wait to see what the future holds for us. I dream of more adventures, more laughter, more love, and all the beautiful moments we\'ll create together. With you by my side, I know every day will be an adventure.',
      type: 'future'
    },
    {
      id: 'closing',
      title: 'With All My Love',
      content: 'Thank you for being you, for loving me, and for making this past year the best year of my life. Here\'s to many more years of love, laughter, and beautiful memories together.',
      type: 'closing'
    }
  ];

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
    <div className="letter-page">
      <FloatingHearts />
      
      {/* Hero Section */}
      <section className="letter-hero">
        <motion.div
          className="letter-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="letter-title gradient-text">A Letter to My Love</h1>
          <p className="letter-subtitle">
            Words from the heart, written with love and gratitude for the most amazing person in my world.
          </p>
        </motion.div>
      </section>

      {/* Letter Content */}
      <section className="letter-content">
        <motion.div
          className="letter-container"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <div className="letter-paper">
            {letterSections.map((section, index) => (
              <motion.div
                key={section.id}
                className={`letter-section ${section.type}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 className="section-title">{section.title}</h2>
                <p className="section-content">{section.content}</p>
                
                {section.type === 'greeting' && (
                  <div className="letter-date">
                    <span>October 26th, 2024</span>
                  </div>
                )}
                
                {section.type === 'closing' && (
                  <div className="letter-signature">
                    <div className="signature-line"></div>
                    <span className="signature-text">With all my love,</span>
                    <span className="signature-name">Your Beloved</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Print Button */}
      <section className="letter-actions">
        <motion.div
          className="actions-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button
            className="print-btn"
            onClick={() => window.print()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="print-icon">🖨️</span>
            Print This Letter
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Letter;
