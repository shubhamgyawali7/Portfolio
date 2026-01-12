import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Skill from './sections/Skill';
import SignatureLoader from './components/SignatureLoader'; // We will create this next
import './styles/index.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative bg-white min-h-screen cursor-none">
      <CustomCursor />
      
      <AnimatePresence mode='wait'>
        {isLoading ? (
          // Preloader Screen
          <SignatureLoader key="loader" onFinished={() => setIsLoading(false)} />
        ) : (
          // Main Website Content
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skill />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}