"use client";
import { motion } from "motion/react";
import Threads from "./Threads";
import Aurora from "@/aurora/Aurora";
import Shuffle from "@/shuffle/Shuffle";

export default function HeroSection() {
  const title = "Hi! I am rahul";
  const subtitle =
    "Crafting exceptional web experiences with React, Next.js & MERN Stack";

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <Aurora

        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}

        blend={0.5}

        amplitude={1.0}

        speed={0.5}

      />
      {/* Background Aurora Effect */}
      {/* <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-[0%] left-[10%] w-[40rem] h-[40rem] bg-purple-600/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-[0%] right-[10%] w-[40rem] h-[40rem] bg-blue-600/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute  left-[25%] w-[30rem] h-[30rem] bg-pink-600/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div> */}

      <div className="relative z-10 text-center max-w-4xl px-8">
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Shuffle

            text={title}

            shuffleDirection="right"

            duration={1}

            animationMode="evenodd"

            shuffleTimes={2}

            ease="power3.out"

            stagger={1}

            threshold={0.1}
            loop={true}

            triggerOnce={false}

            triggerOnHover={true}

            respectReducedMotion={true}
          />
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        >
          {subtitle}
        </motion.p>
        <motion.button
          className="bg-white/10 border border-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          View My Work
        </motion.button>
      </div>

      {/* Subtle grid background */}
      {/* <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "2rem 2rem",
        }}
      ></div> */}
      {/* <div className="absolute top-0 left-0 w-full h-full z-0 bg-black">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, #8484843f 1px, transparent 1px),
        linear-gradient(to bottom, #8484843f 1px, transparent 1px)
      `,
            backgroundSize: "20px 30px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          }}
        />
      </div> */}
      {/* <div style={{ width: '100%', height: '600px', position: 'absolute' }}>

  <Threads

    amplitude={1}

    distance={0}

    enableMouseInteraction={true}

  />

</div> */}

    </section>
  );
}
