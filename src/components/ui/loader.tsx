import React from 'react';

interface LoaderProps {
  size?: number; // Size in pixels
  color?: string; // Tailwind color, e.g., 'text-blue-500'
}

const Loader: React.FC<LoaderProps> = ({ size = 24, color = 'text-blue-500' }) => {
  return (
    <div className={`flex items-center justify-center`}>
      <div
        className={`animate-spin rounded-full border-t-2 border-l-2 ${color}`}
        style={{
          width: size,
          height: size,
          borderColor: 'transparent',
          borderTopColor: 'currentColor',
        }}
      />
    </div>
  );
};

export default Loader;
