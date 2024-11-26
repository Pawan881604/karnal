"use client"
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedCard() {
  const [isHover, setIsHover] = useState(false);

  // Cursor effect
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const cursorX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const cursorY = useSpring(mouseY, { damping: 20, stiffness: 150 });

  // Handle mouse move event
  useEffect(() => {
    const handleMouseMove = (e:any) => {
      mouseX.set(e.clientX - 25); // Offset to center the effect
      mouseY.set(e.clientY - 25);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-100">
      {/* Card with hover animation */}
      <motion.div
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        className="w-80 h-48 rounded-lg shadow-lg bg-white overflow-hidden relative z-10"
        initial={{ scale: 1 }}
        animate={{ scale: isHover ? 1.05 : 1, boxShadow: isHover ? '0px 15px 30px rgba(0, 0, 0, 0.2)' : '0px 5px 15px rgba(0, 0, 0, 0.1)' }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <div className="p-4 text-center">
          <h2 className="text-2xl font-semibold">Hover Me</h2>
          <p className="text-gray-600">This card animates on hover.</p>
        </div>
      </motion.div>

      {/* Cursor effect */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none bg-blue-500 opacity-70"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
    </div>
  );
}
