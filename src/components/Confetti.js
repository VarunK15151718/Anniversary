import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Confetti.css';

const Confetti = () => {
  const [confettiPieces, setConfettiPieces] = useState([]);

  useEffect(() => {
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: -50,
      rotation: Math.random() * 360,
      color: ['#FFB6C1', '#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'][Math.floor(Math.random() * 6)],
      shape: Math.random() > 0.5 ? 'circle' : 'square'
    }));
    setConfettiPieces(pieces);
  }, []);

  return (
    <div className="confetti-container">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className={`confetti-piece ${piece.shape}`}
          style={{
            backgroundColor: piece.color,
            left: piece.x,
            top: piece.y
          }}
          animate={{
            y: window.innerHeight + 100,
            x: piece.x + (Math.random() - 0.5) * 200,
            rotation: piece.rotation + 720
          }}
          transition={{
            duration: 3,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
