import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Gallery from './pages/Gallery';
import Memories from './pages/Memories';
import Letter from './pages/Letter';
import Surprise from './pages/Surprise';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <CustomCursor />
        <ScrollProgress />
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/letter" element={<Letter />} />
            <Route path="/surprise" element={<Surprise />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
