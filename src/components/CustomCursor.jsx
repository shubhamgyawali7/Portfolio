import { motion, useSpring } from "motion/react";
import { useEffect } from "react";
import { useMousePosition } from "../hooks/useMousePosition";

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  
  // Spring config for smooth "lagging" effect
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);

  useEffect(() => {
    cursorX.set(x - 16); // 16 is half the width (32px) to center it
    cursorY.set(y - 16);
  }, [x, y, cursorX, cursorY]);

 return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-brand-orange bg-brand-orange/10 shadow-[0_0_10px_rgba(255,102,0,0.3)] pointer-events-none z-9999 hidden md:block"
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
    />
  );
};

export default CustomCursor;