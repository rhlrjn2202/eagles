import { useEffect, useState } from 'react';

const Logo = () => {
  const [scale, setScale] = useState(1);
  const [leftPosition, setLeftPosition] = useState('400px'); // Default left position

  const handleScroll = () => {
    const newScale = Math.max(0.8, 1 - window.scrollY / 300);
    setScale(newScale);
  };

  const updateLeftPosition = () => {
    const width = window.innerWidth;

    // Example: Adjust left position based on the width of the navigation menu
    const navMenuWidth = 200; // Replace this with the actual width of your navigation menu

    if (width < 768) {
      setLeftPosition('20px'); // Adjust for mobile
    } else if (width >= 768 && width < 1200) {
      setLeftPosition(`${navMenuWidth + 20}px`); // Position next to the nav menu
    } else {
      setLeftPosition(`${navMenuWidth + 40}px`); // Position next to the nav menu for larger screens
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateLeftPosition); // Listen for resize events
    updateLeftPosition(); // Set initial position based on current width

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateLeftPosition); // Clean up the event listener
    };
  }, []);

  return (
    <div className="flex items-center relative" style={{ position: 'fixed', top: '5px', left: leftPosition }}>
      <div className="absolute -top-3 flex items-center justify-center" style={{ transform: `scale(${scale})` }}>
        <div className="w-28 h-24 bg-yellow-400 flex items-center justify-center rounded-b-lg shadow-lg">
          <img
            src="/images/eagle-logo.png"
            alt="Eagles Cricket Club"
            className="w-30 h-30 object-contain"
            style={{ transform: `scale(${scale})` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Logo;