"use client";
import { useEffect, useState, useRef } from "react";

export default function ScrollLockSection() {
  const [progress, setProgress] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if section is in viewport
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        // Section is filling the viewport - start locking
        if (!isLocked && progress <= 100) {
          setIsLocked(true);
        }
      } else {
        // Section is not filling viewport - unlock
        if (isLocked) {
          setIsLocked(false);
        }
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (isLocked && progress <= 100) {
        e.preventDefault();

        // Increase progress based on scroll
        setProgress((prev) => {
          const newProgress = Math.min(prev + e.deltaY / 20, 100);

          // If we've reached buffer zones, unlock
          if (newProgress >= 97 || newProgress <= 3) {
            setIsLocked(false);
          }

          return newProgress <= 0 ? 0 : newProgress >= 100 ? 100 : newProgress;
        });
      }
    };

    // Add scroll listener to check position
    window.addEventListener("scroll", handleScroll);

    // Add wheel listener only when locked
    if (isLocked) {
      window.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isLocked, progress]);

  const missionText = "I build B2B SAAS web apps using Next.js";
  const words = missionText.split(" ");
  const wordsToHighlight = Math.floor((progress / 100) * words.length);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-row items-center justify-center bg-black text-white sticky top-0"
    >
      {/* Mission Text */}
      <div className="max-w-5xl px-8 text-center">
        <h2 className="text-7xl font-bold mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          My Mission
        </h2>

        <div className="text-3xl leading-relaxed font-light">
          {words.map((word, index) => {
            const isHighlighted = index < wordsToHighlight;
            return (
              <span
                key={index}
                className={`inline-block mr-3 transition-all duration-300 ${
                  isHighlighted
                    ? "text-yellow-400 drop-shadow-lg transform scale-105"
                    : "text-gray-500"
                }`}
              >
                {word}
              </span>
            );
          })}
        </div>

        {/* Instructions - show when locked and not at extreme states */}
        {/* {isLocked && progress > 3 && progress < 97 && (
          <div className="mt-12 text-gray-400 text-lg animate-pulse">
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
              Scroll up or down to continue...
            </div>
            <div className="mt-2 text-sm text-gray-500">
              {Math.round(progress)}% complete
            </div>
          </div>
        )} */}

        {/* Instructions when at 97% */}
        {/* {isLocked && progress >= 97 && (
          <div className="mt-12 text-green-400 text-lg animate-pulse">
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full animate-spin" />
              Scroll up to go back or down to continue...
            </div>
            <div className="mt-2 text-sm text-green-500">
              Mission complete! Choose your direction.
            </div>
          </div>
        )} */}

        {/* Instructions when at 3% */}
        {/* {isLocked && progress <= 3 && (
          <div className="mt-12 text-blue-400 text-lg animate-pulse">
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
              Scroll down to read or up to go back...
            </div>
            <div className="mt-2 text-sm text-blue-500">
              Ready to start reading again.
            </div>
          </div>
        )} */}

        {/* Completion message - only show briefly when transitioning
        {!isLocked && (progress >= 100 || progress <= 0) && (
          <div className="mt-12 text-purple-400 text-lg font-semibold">
            {progress >= 97
              ? "✨ Mission Complete! Continue scrolling down."
              : "🔄 Back to start! Continue scrolling up."}
          </div>
        )} */}
      </div>
      {/* Progress Bar - only show when locked */}
      {/* {
        <div className="absolute right-[-60vw] top-[50vh] transform -translate-x-1/2 w-[70%] h-3 bg-gray-800 rounded-full z-50 border border-gray-600 rotate-90">
          <div
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-yellow-400 font-mono text-sm">
            {Math.round(progress)}%
          </div>
        </div>
      } */}

      {
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 h-[100vh] w-[1px] bg-gray-700/0 rounded-full z-50 backdrop-blur-sm">
          {/* Progress fill */}
          <div
            className="w-full bg-gradient-to-t from-yellow-400 via-orange-400 to-yellow-300 rounded-full transition-all duration-150 ease-out relative"
            style={{
              height: `${Math.max(0, Math.min(100, progress))}%`,
              boxShadow:
                "0 0 20px rgba(251, 191, 36, 0.6), 0 0 40px rgba(251, 191, 36, 0.3)",
            }}
          >
            {/* Glowing tip */}
            {/* <div
              className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-7 h-3 bg-yellow-300 rounded-full"
              style={{
                boxShadow:
                  "0 0 15px rgba(251, 191, 36, 0.8), 0 0 30px rgba(251, 191, 36, 0.4)",
                opacity: progress > 0 ? 1 : 0,
              }}
            /> */}
          </div>

          {/* Percentage display */}
          {/* <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 text-yellow-400 font-mono text-sm bg-black/20 backdrop-blur-sm px-2 py-1 rounded">
            {Math.round(progress)}%
          </div> */}

          {/* Progress markers */}
          {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-full h-full">
            {[25, 50, 75].map((marker) => (
              <div
                key={marker}
                className="absolute w-2 h-0.5 bg-gray-500/50 rounded-full -left-0.5"
                style={{ top: `${100 - marker}%` }}
              />
            ))}
          </div> */}
        </div>
      }
    </section>
  );
}
