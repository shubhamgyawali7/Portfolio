import { motion } from "framer-motion";
import { useEffect } from "react";

const SignatureLoader = ({ onFinished }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinished();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <motion.div
      className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-black"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
    >
      <div className="relative overflow-hidden p-10">
        <svg
          width="400"
          height="100"
          viewBox="0 0 400 100"
          className="w-72 md:w-165"
        >
          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-5xl md:text-6xl italic font-bold"
            style={{
              fontFamily: "'Dancing Script', cursive",
              fill: "transparent",
              stroke: "#FF6600",
              strokeWidth: "1.5",
            }}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            SHUBHAM GYAWALI
          </motion.text>
        </svg>
        {/* Line */}
        <motion.div
          className="h-0.5 bg-[#FF6600] mx-auto mt-4"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

export default SignatureLoader;
