import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCalendarOutline } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import {  Autoplay   , Pagination,  A11y } from "swiper";
import './homePage.css'
const HomePageSpeech = () => {
    return (
        <div className="flex flex-col lg:gap-8 gap-2 md:gap-4 md:flex-row md:justify-between justify-center md:items-start items-center lg:my-10 md:my-7 my-5">
         <Swiper className="md:w-[65%] w-full"
      slidesPerView={1}
      modules={[Pagination, Autoplay, A11y,]}
      pagination={{ clickable: true }}
      spaceBetween={10}
       // Fade effect
    
      loop={true}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
      <div className="flex flex-col   lg:gap-8 gap-2 md:gap-4 md:flex-row md:justify-start justify-center md:items-start items-center lg:my-10 md:my-7 my-5">
            <img  src="https://i.ibb.co/7ymV62k/outgoing-lecturer-standing-rostrum-explaining-material.jpg" className="md:h-[280px] md:w-[280px] h-[200px] rounded w-[200px] headMasterPhoto" />
           
           <div className="md:max-w-lg max-w-sm md:mx-0 mx-auto ">
            <h2 className="md:text-xl md:text-start text-center md:my-4 my-2 text-lg text-[#1EB2A6] font-semibold">The speech of Principal</h2>
            <p className="text-md text-gray-700 md:ml-0 ml-4 md:text-md text-sm">
                As we gather here today, I am reminded of the incredible journey we have undertaken throughout the academic year [or mention the specific occasion]. We have faced challenges, celebrated victories, and worked together to overcome obstacles. The spirit of unity and collaboration within our school community is truly commendable.
            </p>
            <Link to='/speech' className='md:ml-0 ml-4 md:px-7 px-4 rounded md:py-2 py-1 md:mt-4 my-2 md:w-[200px] w-[140px] hover:bg-white gap-2 border border-[#1EB2A6] hover:text-[#1EB2A6] bg-[#1EB2A6] text-white md:text-lg text-md flex justify-center items-center'>
                Read More <FaLongArrowAltRight className="mt-1 "></FaLongArrowAltRight>
              </Link>
            </div> 
            
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="flex flex-col   lg:gap-8 gap-2 md:gap-4 md:flex-row md:justify-start justify-center md:items-start items-center lg:my-10 md:my-7 my-5">
            <img  src="https://i.ibb.co/7ymV62k/outgoing-lecturer-standing-rostrum-explaining-material.jpg" className="md:h-[280px] md:w-[280px] h-[200px] rounded w-[200px] headMasterPhoto" />
           
           <div className="md:max-w-lg max-w-sm md:mx-0 mx-auto ">
            <h2 className="md:text-xl md:text-start text-center md:my-4 my-2 text-lg text-[#1EB2A6] font-semibold">The speech of Principal nl</h2>
            <p className="text-md text-gray-700 md:ml-0 ml-4 md:text-md text-sm">
                As we gather here today, I am reminded of the incredible journey we have undertaken throughout the academic year [or mention the specific occasion]. We have faced challenges, celebrated victories, and worked together to overcome obstacles. The spirit of unity and collaboration within our school community is truly commendable.
            </p>
            <Link to='/speech' className='md:ml-0 ml-4 md:px-7 px-4 rounded md:py-2 py-1 md:mt-4 my-2 md:w-[200px] w-[140px] hover:bg-white gap-2 border border-[#1EB2A6] hover:text-[#1EB2A6] bg-[#1EB2A6] text-white md:text-lg text-md flex justify-center items-center'>
                Read More <FaLongArrowAltRight className="mt-1 "></FaLongArrowAltRight>
              </Link>
            </div> 
            
        </div>
      </SwiperSlide>
      <div className="swiper-pagination"></div>

      {/* Add more SwiperSlides as needed */}
    </Swiper>
        
        
      
        <div className="md:w-[30%] w-full lg:my-10 md:my-7 my-2 md:ml-2 ml-10 ">
            <div >
                <div className="md:ml-0 ml-0 md:px-7 px-4 rounded md:py-1 py-[2px] md:mt-4 my-2 md:w-[200px] w-[140px] gap-2 border border-[#1EB2A6]  bg-[#1EB2A6] text-white md:text-lg text-md flex justify-center items-center">Notice Board</div>
                <div className="md:max-w-[250px] w-[90%]  py-1 pl-3 bg-gray-100 shadow-sm rounded md:my-4 my-2">
                    <a href="/" className="text-sm underline">notice one</a>
                    <p className="flex justify-start items-center gap-2 text-gray-600 text-xs"><IoCalendarOutline></IoCalendarOutline> Junuary, 31</p>

                </div>
                <div className="md:max-w-[250px] w-[90%] py-1 pl-3 bg-gray-100 shadow-sm rounded md:my-4 my-2">
                    <a href="/" className="text-sm underline">notice one</a>
                    <p className="flex justify-start items-center gap-2 text-gray-600 text-xs"><IoCalendarOutline></IoCalendarOutline> Junuary, 31</p>

                </div>
                <div className="md:max-w-[250px] w-[90%] py-1 pl-3 bg-gray-100 shadow-sm rounded md:my-4 my-2">
                    <a href="/" className="text-sm underline">notice one</a>
                    <p className="flex justify-start items-center gap-2 text-gray-600 text-xs"><IoCalendarOutline></IoCalendarOutline> Junuary, 31</p>

                </div>
            </div>

        </div>
        </div>
      
    );
};

export default HomePageSpeech;