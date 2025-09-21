"use client";
import { motion } from "motion/react";
import CurvedLoop from "./CurvedLoop";
import SmoothCursor from "./SmoothCursor";
import ScrollReveal from "./ScrollReveal";
import ScrollFloat from "./ScrollReveal";
import ScrollVelocity from "./ScrollVelocity";

const IntroSection = () => {
  const name = "Rahul Panchal"; // Placeholder Name
  const role = "Jr. Software Developer";
  const provision =
    "I design and build beautiful, scalable, and user-friendly web applications from concept to completion.";

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white py-20">
      {/* <CurvedLoop

                marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"

                speed={3}

                curveAmount={1700}

                direction="right"

                interactive={true}

                className="custom-text-style absolute  w-screen"

              /> */}
      <div className="max-w-4xl mx-auto px-8 text-center">
        <SmoothCursor
          size={25}
          // color="white"
          showTrail={false}
          magneticDistance={60}
          magneticElements="[data-magnetic]"
          springConfig={{
            damping: 90,
            stiffness: 450,
            mass: 0.9,
            restDelta: 0.001,
          }}
        />
        <ScrollVelocity
          texts={[
            "React.js Next.js GSAP Framer ",
            "Node.js Express.js MongoDB",
            "TypeScript JavaScript",
          ]}
          // velocity={velocity}

          className="custom-scroll-text w-[100vw]"
        />
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={15}
          blurStrength={10}
        >
          So..... what I actually do with these technologies?
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IntroSection;
