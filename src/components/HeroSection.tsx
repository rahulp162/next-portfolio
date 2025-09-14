"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Rounded Falling Columns Animation for Hero Section
const FallingColumnsAnimation = () => {
  const { scrollYProgress } = useScroll();

  // Create transforms that hold at 0 until user starts scrolling
  // Then quickly animate to full height
  const column1Height = useTransform(
    scrollYProgress,
    [0, 0.01, 0.16],
    ["0vh", "0vh", "310vh"]
  );
  const column2Height = useTransform(
    scrollYProgress,
    [0, 0.01, 0.18],
    ["0vh", "0vh", "310vh"]
  );
  const column3Height = useTransform(
    scrollYProgress,
    [0, 0.01, 0.2],
    ["0vh", "0vh", "310vh"]
  );
  const column4Height = useTransform(
    scrollYProgress,
    [0, 0.01, 0.22],
    ["0vh", "0vh", "310vh"]
  );

  return (
    <div className="absolute inset-0 w-full h-[300vh] overflow-visible">
      {/* Column 1 - Blue */}
      <div className="absolute left-0 top-0 w-[25vw] flex justify-center">
        <motion.div
          className="w-[20vw] rounded-[50px]"
          style={{
            height: column1Height,
            background:
              "linear-gradient(to bottom, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.7), rgba(99, 102, 241, 0.9))",
            borderTopLeftRadius: "100px",
            borderTopRightRadius: "100px",
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
          }}
        />
      </div>

      {/* Column 2 - Purple */}
      <div className="absolute left-[25vw] top-0 w-[25vw] flex justify-center">
        <motion.div
          className="w-[20vw] rounded-[50px]"
          style={{
            height: column2Height,
            background:
              "linear-gradient(to bottom, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.7), rgba(167, 139, 250, 0.9))",
            borderTopLeftRadius: "100px",
            borderTopRightRadius: "100px",
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
          }}
        />
      </div>

      {/* Column 3 - Pink */}
      <div className="absolute left-[50vw] top-0 w-[25vw] flex justify-center">
        <motion.div
          className="w-[20vw] rounded-[50px]"
          style={{
            height: column3Height,
            background:
              "linear-gradient(to bottom, rgba(236, 72, 153, 0.1), rgba(236, 72, 153, 0.7), rgba(244, 114, 182, 0.9))",
            borderTopLeftRadius: "100px",
            borderTopRightRadius: "100px",
            boxShadow: "0 0 20px rgba(236, 72, 153, 0.3)",
          }}
        />
      </div>

      {/* Column 4 - Green */}
      <div className="absolute left-[75vw] top-0 w-[25vw] flex justify-center">
        <motion.div
          className="w-[20vw] rounded-[50px]"
          style={{
            height: column4Height,
            background:
              "linear-gradient(to bottom, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.7), rgba(52, 211, 153, 0.9))",
            borderTopLeftRadius: "100px",
            borderTopRightRadius: "100px",
            boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
          }}
        />
      </div>

      {/* Grid overlay for texture */}
      <div
        className="absolute inset-0 z-5 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
};

// Skills component
const Skills = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-6">
      {["React", "Next.js", "TypeScript", "Node.js", "UI/UX", "MongoDB"].map(
        (skill, i) => (
          <motion.span
            key={skill}
            className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
          >
            {skill}
          </motion.span>
        )
      )}
    </div>
  );
};

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  // Hold content at initial state until scrolling begins
  const scale = useTransform(scrollYProgress, [0, 0.01, 0.5], [1, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.01, 0.7], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.01, 0.5], [0, 0, -30]);

  return (
    <section className="relative min-h-[310vh] bg-black text-white overflow-hidden">
      {/* Simple Falling Columns Animation */}
      <FallingColumnsAnimation />

      {/* Content container - sticky to stay visible while scrolling */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          className="relative z-20 max-w-4xl mx-auto px-6 text-center pt-[400vh]"
          style={{ scale, opacity, y }}
        >
          {/* Main heading with gradient */}
          <motion.h1
            className="text-7xl md:text-8xl lg:text-9xl font-extrabold mb-4"
            style={{
              // backgroundImage:
              //   "linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
              backgroundSize: "cover",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundColor: "white",
              backgroundBlendMode: "revert-layer",
              // textShadow: "0 0 40px rgba(139, 92, 246, 0.3)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            RAHUL PANCHAL
          </motion.h1>

          {/* Profession with typing animation */}
          <motion.h2
            className="text-xl md:text-2xl font-light mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Full Stack Developer
          </motion.h2>

          {/* Short bio */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 backdrop-blur-sm bg-black/10 p-4 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            I build modern web applications with cutting-edge technologies,
            focusing on performance, accessibility, and beautiful user
            experiences.
          </motion.p>

          {/* Skills tags */}
          <Skills />

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border border-white/30 backdrop-blur-sm rounded-full font-medium hover:bg-white/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Scroll indicator */}
          {/* <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
              <motion.div
                className="w-1.5 h-3 bg-white rounded-full mt-2"
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
