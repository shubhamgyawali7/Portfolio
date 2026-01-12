import { motion, AnimatePresence } from "framer-motion"; 
import { useEffect, useState } from "react";
import image from "../assets/image1.png";

const roles = ["Full-Stack Developer", "Graphic Designer", "Problem Solver"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white px-6 md:px-20"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <div className="min-h-50 md:min-h-75 flex flex-col justify-center">
            <h1 className="text-5xl md:text-8xl font-black text-black leading-[1.1]">
              I am a <br />
              <div className="relative overflow-hidden">
                {" "}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[index]}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-[#FF6600] block"
                  >
                    {roles[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button className="bg-[#FF6600] text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all">
              <a href="/#projects">My Projects</a>
            </button>
            <button className="border-2 border-black text-black px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all">
              <a href="/#contact">Contact Me</a>
            </button>
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden md:flex justify-center relative"
        >
          <div className="absolute inset-0 bg-[#FF6600]/10 rounded-3xl -rotate-6 scale-105" />

          <div className="relative w-full max-w-md aspect-square bg-gray-100 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
            <img
              src={image}
              alt="Shubham"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
