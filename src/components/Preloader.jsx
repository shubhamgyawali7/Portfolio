import { motion } from "framer-motion";

const Preloader = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 2.5 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black text-white"
    >
      <div className="relative flex flex-col items-center">
        <svg
          width="400"
          height="120"
          viewBox="0 0 400 120"
          className="w-64 md:w-100"
        >
          {/* Signature Path - Replace 'd' with your own path for a real custom signature */}
          <motion.path
            d="M10,80 Q50,20 100,80 T200,80 T300,50" // Sample decorative line
            fill="transparent"
            strokeWidth="3"
            stroke="#FF6600"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-4xl md:text-5xl font-light italic tracking-widest fill-white"
            style={{ fontFamily: "'Dancing Script', cursive" }} // Use a Google Font like Dancing Script
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Shubham Gyawali
          </motion.text>
        </svg>
        
        {/* Animated underline */}
        <motion.div 
          className="h-0.5 bg-[#FF6600] mt-2"
          initial={{ width: 0 }}
          animate={{ width: "80%" }}
          transition={{ delay: 1, duration: 1.5 }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;