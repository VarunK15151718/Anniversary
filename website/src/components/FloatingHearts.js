import React from 'react';
import { motion } from 'framer-motion';
import './FloatingHearts.css';

const FloatingHearts = () => {
  const hearts = [
    { emoji: '💕', delay: 0, duration: 4 },
    { emoji: '💖', delay: 0.5, duration: 3.5 },
    { emoji: '💗', delay: 1, duration: 4.5 },
    { emoji: '💝', delay: 1.5, duration: 3 },
    { emoji: '💘', delay: 2, duration: 4 },
    { emoji: '💕', delay: 2.5, duration: 3.8 },
    { emoji: '💖', delay: 3, duration: 4.2 },
    { emoji: '💗', delay: 3.5, duration: 3.2 },
  ];

  return (
    <div className="floating-hearts">
      {hearts.map((heart, index) => (
        <motion.div
          key={index}
          className="floating-heart"
          initial={{ 
            opacity: 0,
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [window.innerHeight + 50, -50],
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            rotate: [0, 360]
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${heart.delay}s`
          }}
        >
          {heart.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
