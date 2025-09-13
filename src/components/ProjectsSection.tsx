'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ProjectsSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0.2, 0.8],
    ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)']
  );

  return (
    <section ref={targetRef} className="relative h-[150vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://assets-global.website-files.com/659693a744f35a61957b2162/65a563b95c13325047a7c41c_SwiftGlow%20Gradients%20(1).webp')`,
          }}
        ></div>
        <motion.div
          className="absolute inset-0 bg-black"
          style={{ clipPath }}
        />
        <h1
          className="text-[20vw] leading-[0.8] font-extrabold text-center text-white"
        >
          PROJECTS
        </h1>
      </div>
    </section>
  );
}
