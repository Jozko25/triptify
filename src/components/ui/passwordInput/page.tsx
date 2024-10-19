import React, { useEffect, useState } from 'react';

interface AnimatedPasswordInputProps {
  password: string; // This prop should be a string
}

const AnimatedPasswordInput: React.FC<AnimatedPasswordInputProps> = ({ password }) => {
  const [displayedPassword, setDisplayedPassword] = useState('');
  const [animationIndex, setAnimationIndex] = useState(0);

  useEffect(() => {
    // Reset on password change
    setDisplayedPassword('');
    setAnimationIndex(0);
  
    // Ensure password is defined and animate
    if (password && animationIndex < password.length) {
      const timeout = setTimeout(() => {
        setDisplayedPassword((prev) => prev + '•'); // Append a dot for each character
        setAnimationIndex((prev) => prev + 1);
      }, 500); // Adjust time as needed
  
      return () => clearTimeout(timeout);
    }
  }, [animationIndex, password]); // Re-run effect if password or animationIndex changes

  return (
    <div className="flex flex-col items-center">
      <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-700">
        Enter Password
      </label>
      <div
        className="border border-gray-300 rounded-md p-2 w-64 bg-gray-50 text-gray-900"
        id="password"
      >
        {displayedPassword}
      </div>
    </div>
  );
};

export default AnimatedPasswordInput;
