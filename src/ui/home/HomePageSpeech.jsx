import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCalendarOutline } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import {  Autoplay   , Pagination,  A11y } from "swiper";
import './homePage.css'
import { useEffect, useState } from "react";
import { readAllSpeech } from "../../services/index/speechPost";
import { readAllNotices } from "../../services/index/noticePost";

 // date formate
 const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};
const HomePageSpeech = () => {
    const [speech, setSpeech] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await readAllSpeech();
            //console.log(data)
            setSpeech(data.data);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
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
        <div className="flex flex-col lg:gap-8 gap-2 md:gap-4 md:flex-row md:justify-between justify-center md:items-start items-center lg:mb-10 md:mb-7 mb-5">
         <Swiper className="md:w-[65%] w-full"
      slidesPerView={1}
      modules={[Pagination, Autoplay, A11y,]}
      pagination={{ clickable: true }}
      spaceBetween={10}
       // Fade effect
    
      loop={true}
      autoplay={{ delay: 3000 }}
    >
         {speech && speech?.map((i, index) => (
                  <SwiperSlide key={index}>
                  <div key={index} className="flex flex-col   lg:gap-8 gap-2 md:gap-4 md:flex-row md:justify-start justify-center md:items-start items-center lg:my-10 md:my-7 my-5">
                        <img  src={i.image} className="md:h-[280px] md:w-[280px] h-[200px] rounded w-[200px] headMasterPhoto" />
                       
                       <div className="md:max-w-lg max-w-sm md:mx-0 mx-auto ">
                        <h2 className="md:text-xl md:text-start text-center md:my-4 my-2 text-lg text-[#1EB2A6] font-semibold">{i.title}</h2>
                        <p className="text-md text-gray-700 md:ml-0 ml-4 md:text-md text-sm">
                            As we gather here today, I am reminded of the incredible journey we have undertaken throughout the academic year [or mention the specific occasion]. We have faced challenges, celebrated victories, and worked together to overcome obstacles. The spirit of unity and collaboration within our school community is truly commendable.
                        </p>
                        <Link to='/speech' className='md:ml-0 ml-4 md:px-7 px-4 rounded md:py-2 py-1 md:mt-4 my-2 md:w-[200px] w-[140px] hover:bg-white gap-2 border border-[#1EB2A6] hover:text-[#1EB2A6] bg-[#1EB2A6] text-white md:text-lg text-md flex justify-center items-center'>
                            Read More <FaLongArrowAltRight className="mt-1 "></FaLongArrowAltRight>
                          </Link>
                        </div> 
                        
                    </div>
                  </SwiperSlide>
          ))}

    
      <div className="swiper-pagination"></div>

      {/* Add more SwiperSlides as needed */}
    </Swiper>
        
        
      
        <div className="md:w-[30%] w-full lg:my-10 md:my-7 my-2 md:ml-2 ml-10 ">

            <div >
                <div className="md:ml-0 ml-0 md:px-7 px-4 rounded md:py-1 py-[2px] md:mt-4 my-2 md:w-[200px] w-[140px] gap-2 border border-[#1EB2A6]  bg-[#1EB2A6] text-white md:text-lg text-md flex justify-center items-center">Notice Board</div>
                {notice && notice?.map((i, index) => ( 
                    <div key={index}  className="md:max-w-[250px] w-[90%]  py-1 pl-3 bg-gray-100 shadow-sm rounded md:my-4 my-2">
                    <Link title="click" target="_blank" key={index} to={`http://localhost:3000/${i.pdf}`}>
                    <p className="text-sm underline">{i.title}</p>
                    <p className="flex justify-start items-center gap-2 text-gray-600 text-xs"><IoCalendarOutline></IoCalendarOutline> {formatDate(i.createdAt)}</p>
                        </Link>
                </div>
                 ))}
              
              
            </div>

        </div>
        </div>
      
    );
};

export default HomePageSpeech;