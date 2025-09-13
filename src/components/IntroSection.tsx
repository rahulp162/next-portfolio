"use client";
import { motion } from "motion/react";
import CurvedLoop from "./CurvedLoop";

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
              
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">{name}</h2>
          <p className="text-xl md:text-2xl text-green-400 font-semibold mb-8">
            {role}
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {provision}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
