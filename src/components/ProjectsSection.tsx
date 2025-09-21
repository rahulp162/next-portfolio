"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
// import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import AnimatedList from "./ScrollStack";

export default function ProjectsSection() {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
  ];

  return (
    // <section ref={targetRef} className="h-[150vh] bg-white">

    // <AnimatedList
    //   className="w-screen"
    //   items={items}
    //   onItemSelect={(item, index) => console.log(item, index)}
    //   showGradients={true}
    //   enableArrowNavigation={true}
    //   displayScrollbar={true}
    // />
    <div className="h-screen bg-white text-black text-[100px] flex items-center justify-center w-full">
      PROJECTS
    </div>
    // </section>
  );
}
