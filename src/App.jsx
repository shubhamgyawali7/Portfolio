import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import './styles/index.css';
import Skill from './sections/Skill';

export default function App() {
  return (
    <div className="relative bg-white min-h-screen cursor-none">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skill/>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}