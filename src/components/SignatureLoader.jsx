import { useEffect } from "react";
import { motion } from "framer-motion";

const SignatureLoader = ({ onFinished }) => {
  const name = "Shubham Gyawali";

  useEffect(() => {

    const timer = setTimeout(() => {
      onFinished(); 
    }, 3500); 
    return () => clearTimeout(timer);
  }, [onFinished]);

  const containerVariants = {
    animate: {
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const letterVariants = {
    initial: { opacity: 0, y: 15 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-150vh" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black text-white"
    >

      <div className="relative flex flex-col items-center w-full max-w-[90vw] px-4">
        
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"

          className="flex flex-wrap justify-center mb-6"
        >
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="text-3xl sm:text-5xl md:text-7xl font-bold italic"
              style={{
                fontFamily: "'Dancing Script', cursive",
                display: char === " " ? "pre" : "inline-block",
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 1.5, ease: "circOut" }}
          className="w-full max-w-50 md:max-w-100 h-px bg-orange-600 origin-center opacity-70"
        />
      </div>
    </motion.div>
  );
};

export default SignatureLoader;