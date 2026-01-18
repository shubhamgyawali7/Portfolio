import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Skill from "./sections/Skill";
import SignatureLoader from "./components/SignatureLoader";
import "./styles/index.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`relative bg-white min-h-screen ${isLoading ? "overflow-hidden" : "cursor-none"}`}
    >
      <CustomCursor />

      <AnimatePresence mode="wait">
        {isLoading && (
          <SignatureLoader
            key="loader"
            onFinished={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
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
    </div>
  );
}
