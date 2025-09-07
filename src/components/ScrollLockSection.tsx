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

          // If we've reached 100%, unlock after a short delay
          if (newProgress >= 100 || progress <= 0) {
            // setTimeout(() => {
            setIsLocked(false);
            // }, 300);
          }

          return newProgress < 0 ? 0 : newProgress > 100 ? 100 : newProgress;
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

  const missionText =
    "My mission is to create exceptional digital experiences that solve real-world problems and drive business growth through innovative technology solutions.";
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
        {isLocked && progress > 0 && progress < 100 && (
          <div className="mt-12 text-gray-400 text-lg animate-pulse">
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
              Scroll up or down to continue...
            </div>
            <div className="mt-2 text-sm text-gray-500">
              {Math.round(progress)}% complete
            </div>
          </div>
        )}

        {/* Instructions when at 100% */}
        {isLocked && progress >= 100 && (
          <div className="mt-12 text-green-400 text-lg animate-pulse">
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full animate-spin" />
              Scroll up to go back or down to continue...
            </div>
            <div className="mt-2 text-sm text-green-500">
              Mission complete! Choose your direction.
            </div>
          </div>
        )}

        {/* Instructions when at 0% */}
        {isLocked && progress <= 0 && (
          <div className="mt-12 text-blue-400 text-lg animate-pulse">
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
              Scroll down to read or up to go back...
            </div>
            <div className="mt-2 text-sm text-blue-500">
              Ready to start reading again.
            </div>
          </div>
        )}

        {/* Completion message - only show briefly when transitioning */}
        {!isLocked && (progress >= 100 || progress <= 0) && (
          <div className="mt-12 text-purple-400 text-lg font-semibold">
            {progress >= 100
              ? "✨ Mission Complete! Continue scrolling down."
              : "🔄 Back to start! Continue scrolling up."}
          </div>
        )}
      </div>
      {/* Progress Bar - only show when locked */}
      {isLocked && (
        <div className="transform -translate-x-1/2 w-80 h-3 bg-gray-800 rounded-full z-50 border border-gray-600 rotate-90">
          <div
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-yellow-400 font-mono text-sm">
            {Math.round(progress)}%
          </div>
        </div>
      )}
    </section>
  );
}
