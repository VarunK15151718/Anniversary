import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from '../components/Lightbox';
import './Gallery.css';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('hot');
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const categories = [
    { id: 'hot', name: 'Mrs Universe', icon: '🔥', color: '#FF6B6B' },
    { id: 'cute', name: 'Smol Baby', icon: '🐣', color: '#FFB6C1' },
    { id: 'love', name: 'My Heart', icon: '💕', color: '#FF69B4' },
    { id: 'weird', name: 'Bakchod', icon: '🤪', color: '#9370DB' }
  ];

  const loadImages = useCallback(async () => {
    // Only load images once
    if (imagesLoaded) return;
    
    setLoading(true);
    const imageData = {};
    
    for (const category of categories) {
      imageData[category.id] = [];
      
      // Load images for each category with correct counts
      const imageCounts = {
        'hot': 10,
        'cute': 7, 
        'love': 7,
        'weird': 4  // Only 4 images in weird folder
      };
      
      const imageCount = imageCounts[category.id] || 6;
      
      for (let i = 1; i <= imageCount; i++) {
        const imageUrl = `${process.env.PUBLIC_URL}/${category.id}/${i}.jpg`;
        imageData[category.id].push({
          id: `${category.id}-${i}`,
          src: imageUrl,
          alt: `${category.name} photo ${i}`,
          category: category.id,
          isSpecial: category.id === 'hot' && i === 6 // Special styling for the boyfriend's photo (WhatsApp Image 2025-10-21 at 02.40.21.jpeg)
        });
      }
    }
    
    setImages(imageData);
    setLoading(false);
    setImagesLoaded(true);
  }, [categories, imagesLoaded]);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

  const ImageCard = ({ image, index }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [, setImageDimensions] = useState({ width: 0, height: 0 });
    const cardRef = useRef(null);
    
    // Reset states when image changes
    useEffect(() => {
      setImageLoaded(false);
      setImageError(false);
      setImageDimensions({ width: 0, height: 0 });
    }, [image.src]);
    
    const setRowSpan = () => {};

    const handleImageLoad = (e) => {
      const img = e.target;
      setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight });
      setImageLoaded(true);
      setRowSpan(img);
    };
    
    const handleImageError = (e) => {
      setImageError(true);
    };
    
    useEffect(() => {}, [imageLoaded]);
    
    const captions = {
      hot: [
        "Black holes have lesser attraction than this pic",
        "This photo is hotter than the sun",
        "My heart rate just went 📈",
        "This is why I can't focus on anything else",
        "You're literally glowing ✨",
        "This is my favorite view in the universe",
        "You make everything else look boring",
        "This photo should be illegal",
        "My brain just short-circuited",
        "This is pure perfection",
        "Tum itni hot ho ki main pagal ho gaya",
        "Ye photo dekh kar main mar jaunga",
        "Tumhare liye main kuch bhi kar sakta hun",
        "Tumhari har photo main pagal hun"
      ],
      cute: [
        "Babied so hard I feel like a dad",
        "This cuteness is overwhelming me",
        "My heart just melted completely",
        "You're the cutest thing in existence",
        "This is why I can't stop smiling",
        "You're literally perfect",
        "My heart can't handle this much cute",
        "This is pure happiness",
        "You make my heart skip beats",
        "This is the definition of adorable",
        "Tum itni cute ho ki main pagal hun",
        "Meri jaan, tum kitni pyaari ho",
        "Tumhare liye main kuch bhi kar sakta hun",
        "Tumhari har photo main pagal hun"
      ],
      love: [
        "This is what love looks like",
        "My heart belongs to you",
        "This is pure magic",
        "You're my everything",
        "This moment is perfect",
        "I'm so lucky to have you",
        "This is where I want to be forever",
        "You're my favorite person",
        "This is pure bliss",
        "I love you more than words",
        "Tumhare bina main kuch nahi hun",
        "Tum meri jaan ho",
        "Tumhare liye main pagal hun",
        "Tumhari har photo main pagal hun"
      ],
      weird: [
        "This is peak weirdness and I love it",
        "You're adorably strange",
        "This is why I love you",
        "You're perfectly imperfect",
        "This is pure madness and I'm here for it",
        "You make weird look good",
        "This is my kind of beautiful",
        "You're wonderfully weird",
        "This is peak personality",
        "You're beautifully unique",
        "Tum itni weird ho ki main pagal hun",
        "Tumhare liye main kuch bhi kar sakta hun",
        "Tumhari har photo main pagal hun",
        "Tum itni unique ho ki main pagal hun"
      ]
    };

    const getRandomCaption = () => {
      const categoryCaptions = captions[image.category] || captions.cute;
      return categoryCaptions[Math.floor(Math.random() * categoryCaptions.length)];
    };

    return (
      <motion.div
        ref={cardRef}
        className={`image-card ${image.isSpecial ? 'special-card' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        whileHover={{ scale: 1.02 }}
        onClick={() => openLightbox(image)}
      >
      <div className="image-container">
        {loading ? (
          <div className="skeleton image-skeleton"></div>
        ) : (
            <>
              <img
                src={image.src}
                alt={image.alt}
                className={`gallery-image`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                style={{ display: imageLoaded && !imageError ? 'block' : 'none' }}
              />
              {(!imageLoaded || imageError) && (
          <div className="placeholder-image">
            <span className="placeholder-emoji">
              {categories.find(cat => cat.id === image.category)?.icon}
            </span>
                  <span className="placeholder-text">{getRandomCaption()}</span>
          </div>
              )}
            </>
        )}
        
        {image.isSpecial && (
          <div className="special-badge">
            <span className="badge-text">Oops! I'm here too 😄</span>
            <span className="badge-subtitle">But let's keep the focus on you...</span>
          </div>
        )}
      </div>
    </motion.div>
  );
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <motion.div
          className="gallery-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="gallery-title gradient-text">Our Epic Gallery</h1>
          <p className="gallery-subtitle">
            Where every photo is a masterpiece of our amazing love story. 
            From cute to hot to wonderfully weird - it's all here! 🔥
          </p>
        </motion.div>
      </section>

      {/* Tab Navigation */}
      <section className="gallery-tabs">
        <div className="tabs-container">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`tab-button ${activeTab === category.id ? 'active' : ''}`}
              onClick={() => setActiveTab(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ '--category-color': category.color }}
            >
              <span className="tab-icon">{category.icon}</span>
              <span className="tab-label">{category.name}</span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="gallery-container">
          <motion.div
            className="gallery-grid"
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
              {loading ? (
                Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="image-card">
                    <div className="skeleton image-skeleton"></div>
                  </div>
                ))
              ) : images[activeTab] && images[activeTab].length > 0 ? (
                images[activeTab].map((image, index) => (
                  <ImageCard key={image.id} image={image} index={index} />
                ))
              ) : (
                <div className="no-images-message">
                  <h3>No images found</h3>
                  <p>There seems to be an issue loading the images. Please try refreshing the page.</p>
                  <button onClick={() => window.location.reload()} className="refresh-btn">
                    Refresh Page
                  </button>
                </div>
              )}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {isLightboxOpen && (
        <Lightbox
          image={selectedImage}
          onClose={closeLightbox}
          images={images[activeTab] || []}
        />
      )}
    </div>
  );
};

export default Gallery;
