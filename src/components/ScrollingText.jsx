import { motion } from "framer-motion";

const ScrollingText = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative w-full overflow-hidden bg-black py-2 border-y  z-10 -rotate-1 scale-105 -my-2 shadow-sm">
      <motion.div
        className="flex whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="text-sm md:text-base font-bold text-[#FF6600] uppercase mx-6 flex items-center"
          >
            SHUBHAM GYAWALI
            <span className="ml-6 text-white text-xs">★</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingText;
