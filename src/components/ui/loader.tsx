import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <div className="loader"></div>
        <div className="sparkles"></div>
      </div>
      <style jsx>{`
        .loader {
          border: 16px solid rgba(255, 255, 255, 0.2); /* Increased border size */
          border-top: 16px solid #f43f5e; /* Changed to rose-400 color */
          border-radius: 50%;
          width: 120px; /* Increased loader size */
          height: 120px; /* Increased loader size */
          animation: spin 1s linear infinite; /* Always spin */
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Shadow effect */
          margin-top: 8px; /* Add margin-top for spacing */
        }

        .sparkles {
          position: absolute;
          top: -10px;
          left: -10px;
          width: 100%;
          height: 100%;
          pointer-events: none;
          animation: sparkle 1.5s infinite;
        }

        .sparkles::before,
        .sparkles::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, #fff, rgba(255, 255, 255, 0) 70%);
          width: 20px; /* Size of sparkles */
          height: 20px; /* Size of sparkles */
          animation: sparkleEffect 2s infinite;
        }

        .sparkles::before {
          top: 20%;
          left: 30%;
          animation-delay: 0.5s; /* Delays for staggered effect */
        }

        .sparkles::after {
          top: 60%;
          left: 70%;
          animation-delay: 1s; /* Delays for staggered effect */
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes sparkleEffect {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
