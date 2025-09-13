"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Threads from "./Threads";
import Aurora from "@/aurora/Aurora";
import CurvedLoop from "./CurvedLoop";
export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const backgroundPosition = useTransform(scrollYProgress, [0, 1], ["0% 50%", "100% 50%"]);

  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* <Aurora

        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}

        blend={0.5}

        amplitude={1.0}

        speed={0.5}

      /> */}
      <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
        <Threads

    amplitude={1}

    distance={0.7}

    enableMouseInteraction={true}

  />

</div>
      {/* Background Aurora Effect */}
      {/* <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-[0%] left-[10%] w-[40rem] h-[40rem] bg-purple-600/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-[0%] right-[10%] w-[40rem] h-[40rem] bg-blue-600/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute  left-[25%] w-[30rem] h-[30rem] bg-pink-600/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div> */}

      <div className="relative z-10 flex flex-col items-center justify-center w-full px-8">
        <motion.h1
          className="text-[20vw] leading-[0.8] font-extrabold text-center"
          style={{
            scale,
            opacity,
            backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/047/553/856/non_2x/a-beautiful-beach-scene-with-a-sunset-in-the-background-vector.jpg')",
            backgroundSize: "cover",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <span>HI! I AM</span>
          <br />
          <span>RAHUL</span>
        </motion.h1>
        
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
    
              </>
  );
}
