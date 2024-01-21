// Marquee.js

import React, { useState, useEffect } from 'react';
import './marquee.css';
import Marquee from 'react-fast-marquee';
import { readAllNotices } from '../../services/index/noticePost';
import { Link } from 'react-router-dom';

const MarqueeText = () => {
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

  const [notice, setNotice] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await readAllNotices();
      console.log(data.data)
        setNotice(data.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  return (
    <div
      className={`marquee-container ${isVisible ? 'visible' : 'hidden'} flex justify-between items-center `}
    >
      <div className="button w-[10%] bg-[#1eb2a6] pl-6 text-white font-semibold md:py-2 custom-notice py-1 z-20 md:block hidden">Notice</div>
      <div className="w-[90%]">
        <Marquee pauseOnHover={true}>
        {notice && notice?.map((i, index) => (
        <h2 title='click' key={index} className='hover:text-[#457B9D] hover:underline ml-4 cursor-pointer fonte-semibold'>
{/* please replace carefuly http://localhost:5173/demo-notice to http://localhost:3000/${i.pdf}*/}
          <Link to={`http://localhost:5173/demo-notice`} target="_blank">
            {i.title.length > 10 ? `${i.title.substring(0, 10)}...` : i.title}</Link></h2>
        ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeText;
