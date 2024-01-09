// Marquee.js

import React, { useState, useEffect } from 'react';
import './marquee.css';

const Marquee = ({ text }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === 'visible');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div
      className={`marquee-container ${isVisible ? 'visible' : 'hidden'} flex justify-between items-center `}
    >
      <div className="button w-[10%] bg-[#1eb2a6] pl-6 text-white font-semibold md:py-2 custom-notice py-1 z-20 md:block hidden">Notice</div>
      <div className="w-[90%]">
        <div className="marquee-content">
          <p className="lg:text-md md:text-sm text-sm font-semibold text-gray-700 z-10">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
