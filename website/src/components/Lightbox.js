import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Lightbox.css';

const Lightbox = ({ image, onClose, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (image && images) {
      const index = images.findIndex(img => img.id === image.id);
      setCurrentIndex(index >= 0 ? index : 0);
    }
  }, [image, images]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex, onClose, goToNext, goToPrevious]);

  const goToPrevious = () => {
    if (images && images.length > 0) {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  const goToNext = () => {
    if (images && images.length > 0) {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  const currentImage = images && images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="lightbox-content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button className="lightbox-close" onClick={onClose}>
            <span>×</span>
          </button>

          {/* Navigation Arrows */}
          {images && images.length > 1 && (
            <>
              <button className="lightbox-prev" onClick={goToPrevious}>
                <span>‹</span>
              </button>
              <button className="lightbox-next" onClick={goToNext}>
                <span>›</span>
              </button>
            </>
          )}

          {/* Image Container */}
          <div className="lightbox-image-container">
            {currentImage ? (
              <motion.div
                key={currentImage.id}
                className="lightbox-image"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="lightbox-main-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="placeholder-image" style={{ display: 'none' }}>
                  <span className="placeholder-emoji">
                    {currentImage.category === 'hot' && '🔥'}
                    {currentImage.category === 'cute' && '🐣'}
                    {currentImage.category === 'love' && '💕'}
                    {currentImage.category === 'weird' && '🤪'}
                  </span>
                  <span className="placeholder-text">{currentImage.alt}</span>
                </div>
                
                {currentImage.isSpecial && (
                  <div className="lightbox-special-badge">
                    <span className="badge-text">Oops! I'm here too 😄</span>
                    <span className="badge-subtitle">But let's keep the focus on you...</span>
                  </div>
                )}
              </motion.div>
            ) : (
              <div className="lightbox-image">
                <div className="placeholder-image">
                  <span className="placeholder-emoji">📸</span>
                  <span className="placeholder-text">Image not found</span>
                </div>
              </div>
            )}
          </div>

          {/* Image Info */}
          <div className="lightbox-info">
            <h3 className="lightbox-title">{currentImage?.alt || 'Image'}</h3>
            <p className="lightbox-category">
              {currentImage?.category?.charAt(0).toUpperCase() + currentImage?.category?.slice(1)} Collection
            </p>
          </div>

          {/* Dots Indicator */}
          {images && images.length > 1 && (
            <div className="lightbox-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`lightbox-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
