
import { Carousel } from "react-responsive-carousel";
import "./Hero.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import { useEffect, useState } from 'react';
import { readAllsliderPhoto } from '../../services/index/sliderPhoto';
import MarqueeText from "../marquee/Marquee";


const Hero = () => {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await readAllsliderPhoto();
        //console.log(data)
        setSlider(data.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };
    const handleError = (error) => {
    console.error('Error loading image:', error);
  };
  return (
    <div >
       <MarqueeText  />
       
       <Carousel autoPlay showThumbs={false}>
       {slider && slider?.map((i, index) => ( 
        
          <img key={index} className='lg:h-[500px] md:h-[450px] h-[280px] w-full object-cover object-center' src={i.image} alt="Slide 1" onError={handleError} />
     

     
        ))} 
       </Carousel>
    </div>
  )
}

export default Hero