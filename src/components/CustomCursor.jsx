import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { useMousePosition } from "../hooks/useMousePosition";

const CustomCursor = () => {
  const { x, y } = useMousePosition();

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };

  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);

  useEffect(() => {
    cursorX.set(x);
    cursorY.set(y);
  }, [x, y, cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-9999 hidden md:flex items-center justify-center"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        left: -20,
        top: -20,
      }}
    >
      <div className="absolute inset-0 rounded-full border-2 border-[#FF6600] bg-white/20 backdrop-blur-[2px] shadow-[0_0_15px_rgba(255,102,0,0.4)]" />

      <img
        src="/logo/my-logo1.png"
        alt="cursor-logo"
        className="w-8 h-8 rounded-full object-cover relative z-10"
      />
    </motion.div>
  );
};

export default CustomCursor;
