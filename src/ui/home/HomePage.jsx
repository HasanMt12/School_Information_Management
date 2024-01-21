
import { Link } from "react-router-dom"
import Hero from "../../components/hero/Hero"
import BackToTopButton from "../../components/topBUtton/BackToTop"
import Gallery from "./Gallery"
import GoverningBody from "./GoverningBody"
import HomePageSpeech from "./HomePageSpeech"
import ResultChart from "./ResultChart"
import SchoolFacilities from "./SchoolFacilities"
import Subscription from "./Subscription"
import Total from "./Total"
import { FaLongArrowAltRight } from "react-icons/fa"
import { useEffect, useState } from "react"
import { readAllHeadline } from "../../services/index/sectionHeadline"


import "aos/dist/aos.css";
import Aos from "aos"
import EventsUi from "../../pages/Events"

const HomePage = () => {
  const [headline, setHeadline] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await readAllHeadline();
      //  console.log(data.data)
      
        setHeadline(data.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  useEffect(function () {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className="lg:px-6 md:px-4 px-1">
     
      <Hero></Hero>
      {headline &&
        headline?.map((i, index) => (
          <div key={index}>
            {i.index === 'speech' && (
              <h2 data-aos="fade-right"  className="text-gray-900 border-l-4 pl-2 border-[#1eb2a6] lg:text-2xl md:text-xl text-lg font-semibold lg:mt-10 md:mt-7 mt-5">
                {i.title}
              </h2>
            )}
          </div>
        )) 
        }
      <HomePageSpeech />
      {headline &&
        headline?.map((i, index) => (
          <div key={index}>
            {i.index === 'governingBody' && (
              <h2 data-aos="fade-right"  className="text-gray-900 border-l-4 pl-2 border-[#1eb2a6] lg:text-2xl md:text-xl text-lg font-semibold lg:mt-10 md:mt-7 mt-5">
                {i.title}
              </h2>
            )}
          </div>
        )) 
        }
      <GoverningBody />
      {headline &&
        headline?.map((i, index) => (
          <div key={index}>
            {i.index === 'school' && (
              <h2 data-aos="fade-right"  className="text-gray-900 border-l-4 pl-2 border-[#1eb2a6] lg:text-2xl md:text-xl text-lg font-semibold lg:mt-10 md:mt-7 mt-5">
                {i.title}
              </h2>
            )}
          </div>
        )) 
        }
     
      <SchoolFacilities></SchoolFacilities>
      {headline &&
        headline?.map((i, index) => (
          <div key={index}>
            {i.index === 'community' && (
              <h2 data-aos="fade-right"  className="text-gray-900 border-l-4 pl-2 border-[#1eb2a6] lg:text-2xl md:text-xl text-lg font-semibold lg:mt-10 md:mt-7 mt-5">
                {i.title}
              </h2>
            )}
          </div>
        )) 
        }
      <Total></Total>
      {headline &&
        headline?.map((i, index) => (
          <div key={index}>
            {i.index === 'result' && (
              <h2 data-aos="fade-right"  className="text-gray-900 border-l-4 pl-2 border-[#1eb2a6] lg:text-2xl md:text-xl text-lg font-semibold lg:mt-10 md:mt-7 mt-5">
                {i.title}
              </h2>
            )}
          </div>
        )) 
        }
      <ResultChart />
      {headline &&
        headline?.map((i, index) => (
          <div key={index}>
            {i.index === 'event' && (
              <h2 data-aos="fade-right"  className="text-gray-900 border-l-4 pl-2 border-[#1eb2a6] lg:text-2xl md:text-xl text-lg font-semibold lg:mt-10 md:mt-7 mt-5">
                {i.title}
              </h2>
            )}
          </div>
        )) 
        }
      <EventsUi></EventsUi>
      <div className="flex justify-between items-center lg:mt-10 md:mt-7 mt-5">
    <div>  
      {headline &&
        headline?.map((i, index) => (
          <div key={index}>
            {i.index === 'gallery' && (
              <h2 data-aos="fade-right"  className="text-gray-900 border-l-4 pl-2 border-[#1eb2a6] lg:text-2xl md:text-xl text-lg font-semibold lg:mt-10 md:mt-7 ">
                {i.title}
              </h2>
            )}
          </div>
          
        )) 
        }
        </div>
        <Link to='/gallery' className='md:ml-0 ml-4 md:px-6 px-3 rounded md:py-2 py-1 md:mt-4  md:w-[180px] w-[120px] hover:bg-white gap-2 border border-[#1EB2A6] hover:text-[#1EB2A6] bg-[#1EB2A6] text-white md:text-md text-sm flex justify-center items-center'>
                See More <FaLongArrowAltRight className="mt-1 "></FaLongArrowAltRight>
              </Link>
        </div>
     
      <Gallery></Gallery>

      <BackToTopButton />
    </div>
  )
}
export default HomePage