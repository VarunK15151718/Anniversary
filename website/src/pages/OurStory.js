import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './OurStory.css';

const OurStory = () => {
  const milestones = [
    {
      date: "May 17, 2024",
      title: "First Text",
      description: "Could i be that hot zombie (Iykyk)",
      icon: "📱",
      side: "left"
    },
    {
      date: "October 26, 2024",
      title: "The First Meeting, The first kiss, The first I love you",
      description: "Our eyes met right outside ICAI, and in that moment, everything changed. Butterfly high etched in my memories. The beginning of our beautiful story.",
      icon: "👀",
      side: "right"
    },
    {
      date: "November 17, 2024",
      title: "First Car Date",
      description: "Early morning, picking baby up in the darkness of dawn, and seeing the sun rise with her being besides me.",
      icon: "🚗",
      side: "left"
    },
    {
      date: "November 3, 2024",
      title: "A picture I'd always remember",
      description: "You were in Vapi, and so was my heart and soul alongside. The purple dress, your tied hair, the flying dupatta, your eyes, your hands, perfection is still just a mere word.",
      icon: "📸",
      side: "right"
    },
    {
      date: "December 27, 2024",
      title: "Celebrating my baby's first B'day",
      description: "Couldn’t be there in person, but the real fun was swapping your butter chicken slider expectations with that handbag 😉",
      icon: "🎂",
      side: "left"
    },
    {
      date: "March 11, 2025",
      title: "The side of you which I love",
      description: "This was a very memorable car date with you bacha, and this was also the first time me seeing another side of you which I never knew was there. Samjhdaar ko ishaara kaafi :)",
      icon: "✨",
      side: "right"
    },
    {
      date: "May 9, 2025",
      title: "The first gift",
      description: "Birthday was just around the corner, and my baby had already made me feel special...that black denim jacket, honeybells, and the cutest poster. Felt so loved",
      icon: "🎁",
      side: "left"
    },
    {
      date: "July 1, 2025",
      title: "The first date (After the OG first date ofcourse)",
      description: "Our much-awaited blabber date the one where we finally got to dress up and meet at a café after all those car dates. It felt so good to finally sit together and spend time after so long.",
      icon: "🍽️",
      side: "right"
    },
    {
      date: "October 26, 2025",
      title: "One Year Together",
      description: "365 days of love, laughter, and growth. Here's to our first year and all the beautiful years to come.",
      icon: "🎉",
      side: "left"
    }
  ];

  const TimelineItem = ({ milestone, index }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.3
    });

    return (
      <motion.div
        ref={ref}
        className={`timeline-item ${milestone.side}`}
        initial={{ opacity: 0, x: milestone.side === 'left' ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: milestone.side === 'left' ? -50 : 50 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <div className="timeline-content">
          <div className="timeline-icon">
            <motion.span
              animate={inView ? { scale: [1, 1.2, 1] } : { scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              {milestone.icon}
            </motion.span>
          </div>
          <div className="timeline-card">
            <div className="timeline-date">{milestone.date}</div>
            <h3 className="timeline-title">{milestone.title}</h3>
            <p className="timeline-description">{milestone.description}</p>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="our-story-page">
      {/* Hero Section */}
      <section className="story-hero">
        <motion.div
          className="story-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="story-title gradient-text">Our Love Story</h1>
          <p className="story-subtitle">
            A journey of love, growth, and countless beautiful memories. 
            Here's how our story unfolded, one precious moment at a time.
          </p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {milestones.map((milestone, index) => (
            <TimelineItem key={index} milestone={milestone} index={index} />
          ))}
        </div>
      </section>

      {/* Future Dreams Section */}
      <section className="future-dreams">
        <motion.div
          className="future-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="future-title">Our Future Together</h2>
          <div className="dreams-grid">
            <motion.div
              className="dream-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="dream-icon">🌍</div>
              <h3>Travel the World</h3>
              <p>Exploring new places hand in hand, creating memories in every corner of the globe.</p>
            </motion.div>
            
            <motion.div
              className="dream-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="dream-icon">🏡</div>
              <h3>Build Our Home</h3>
              <p>A place filled with love, laughter, and all the little things that make us happy.</p>
            </motion.div>
            
            <motion.div
              className="dream-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="dream-icon">👶</div>
              <h3>Start a Family</h3>
              <p>Watching our love grow into a beautiful family, sharing all life's precious moments.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default OurStory;
