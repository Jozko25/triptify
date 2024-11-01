// components/DotLoader.tsx
import React from "react";

const DotLoader: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-3">
      <div className="dot animate-jump"></div>
      <div className="dot animate-jump animation-delay-200"></div>
      <div className="dot animate-jump animation-delay-400"></div>
    </div>
  );
};

export default DotLoader;
