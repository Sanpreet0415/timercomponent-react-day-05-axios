import React, { useState, useEffect } from 'react';

const ScrollEventComponent = () => {
  // State to keep track of scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // Effect to handle scroll event
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Update state with current scroll position
      setScrollPosition(window.scrollY);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <div>
      <h1>Scroll Position Tracker</h1>
      <p>Current scroll position: {scrollPosition}px</p>
    </div>
  );
};

export default ScrollEventComponent;
