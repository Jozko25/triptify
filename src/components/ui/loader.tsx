"use client"

import React, { useEffect, useState } from 'react';

const Loading = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Set the loader to animate after 0.3 seconds
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="relative loader-container">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`dot dot-${i + 1}`}
            style={{
              // Calculate position using sine and cosine for a circle
              top: `${50 + 30 * Math.sin((i / 8) * 2 * Math.PI)}%`, // 30 is the radius
              left: `${50 + 30 * Math.cos((i / 8) * 2 * Math.PI)}%`,
              animationDelay: `${i * 0.2}s`, // 0.2 seconds delay per dot
              backgroundColor: animate ? '#FDA4AF' : '#000000', // Change color based on animate state
            }}
          ></div>
        ))}
      </div>
      <style jsx>{`
        .loader-container {
          position: absolute;
          width: 100px; /* Size of loader container on mobile */
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: auto; /* Center loader on mobile */
        }

        .dot {
          position: absolute;
          width: 12px; /* Smaller dot size for better fit on mobile */
          height: 12px;
          border-radius: 50%;
          animation: rotate 1.5s cubic-bezier(0.5, 0.1, 0.1, 1) infinite;
          opacity: 0; /* Start invisible */
          animation: fadeIn 1.5s cubic-bezier(0.5, 0.1, 0.1, 1) infinite; 
        }

        @keyframes fadeIn {
          0%, 100% {
            opacity: 0; 
          }
          50% {
            opacity: 1; 
          }
        }

        @keyframes rotate {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(0.5);
            opacity: 0.5;
          }
        }

        @media (min-width: 640px) {
          .loader-container {
            width: 200px; /* Increase size of loader container on desktop */
            height: 200px;
            left: calc(50% - 10px); /* Position slightly to the left on desktop */
            transform: translateX(-50%); /* Keep centered based on the new left property */
          }

          .dot {
            width: 20px; /* Larger dot size for desktop */
            height: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
