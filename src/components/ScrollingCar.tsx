"use client";
import { motion, useScroll, useTransform } from "motion/react";

export default function ScrollProgressLine() {
  const { scrollYProgress } = useScroll();

  // Transform scroll progress to width percentage
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[80%] max-w-2xl h-2 bg-gray-800 rounded-full overflow-hidden z-50">
      {/* Background track */}
      <div className="absolute inset-0 bg-gray-700 rounded-full opacity-50"></div>

      {/* Glowing progress fill */}
      <motion.div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 rounded-full shadow-lg"
        style={{
          width: progressWidth,
          boxShadow:
            "0 0 20px rgba(147, 51, 234, 0.6), 0 0 40px rgba(147, 51, 234, 0.3)",
        }}
        initial={{ width: "0%" }}
      />

      {/* Extra glow effect */}
      <motion.div
        className="absolute top-0 left-0 h-full bg-white rounded-full opacity-30 blur-sm"
        style={{ width: progressWidth }}
        initial={{ width: "0%" }}
      />
    </div>
  );
}
