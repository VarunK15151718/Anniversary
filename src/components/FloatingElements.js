import React from 'react';
import { motion } from 'framer-motion';
import './FloatingElements.css';

const FloatingElements = () => {
  const elements = [
    { emoji: '🌸', delay: 0, duration: 3 },
    { emoji: '💕', delay: 0.5, duration: 4 },
    { emoji: '✨', delay: 1, duration: 2.5 },
    { emoji: '🦋', delay: 1.5, duration: 3.5 },
    { emoji: '🌺', delay: 2, duration: 3 },
    { emoji: '💖', delay: 2.5, duration: 4.5 },
    { emoji: '🦋', delay: 3, duration: 3.2 },
    { emoji: '✨', delay: 3.5, duration: 2.8 },
  ];

  return (
    <div className="floating-elements">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="floating-element"
          initial={{ 
            opacity: 0,
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50
          }}
          animate={{
            opacity: [0, 1, 0],
            y: [window.innerHeight + 50, -50],
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            rotate: [0, 360]
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${element.delay}s`
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
