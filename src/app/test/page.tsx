"use client"


import React, { useRef } from 'react';

const ScrollAndFocusButton = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      // Scroll the input into view
      inputRef.current.scrollIntoView({ behavior: 'smooth' });
      // Focus the input field
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Scroll and Focus</button>

      <div style={{ height: '500px' }} /> {/* Spacer to simulate scrolling */}

      <input ref={inputRef} type="text" placeholder="Focus me!" />
    </div>
  );
};

export default ScrollAndFocusButton;
