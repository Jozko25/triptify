"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AnimatedTie() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Change the timeout to 0.5 seconds (500 ms)
    const timer = setTimeout(() => setAnimate(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-9 w-full max-w-[150px] h-auto flex items-center justify-center bg-transparent mx-auto">
      <motion.svg
        width="100%"
        height="auto"
        viewBox="0 0 200 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Animated tie"
      >
        <motion.path
          d="M100 0 L150 50 L120 300 L100 280 L80 300 L50 50 Z"
          initial={{ fill: "#000000" }}
          // Change the delay to 0.5 seconds
          animate={{ fill: animate ? "#FDA4AF" : "#000000" }}
          transition={{ duration: 1, delay: 0.5 }} // Adjust the delay here
        />
        {animate && (
          <>
            {[...Array(20)].map((_, i) => (
              <motion.circle
                key={i}
                r={2}
                fill="#FFFFFF"
                initial={{
                  x: Math.random() * 200,
                  y: Math.random() * 300,
                  scale: 0,
                  opacity: 1,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [1, 1, 0],
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + Math.random() * 0.5, // Adjust to match the tie's animation timing
                  repeat: Infinity,
                  repeatDelay: Math.random() * 2,
                }}
              />
            ))}
          </>
        )}
      </motion.svg>
    </div>
  );
}
