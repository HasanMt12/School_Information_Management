



// import Heading from "../heading/Heading"
import img from '../../assets/school.webp'
import img2 from '../../assets/school2.webp'
import "./Hero.css"
import { Carousel } from 'antd';

const contentStyle = {

 height: '500px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  // Replace with your background image path
  backgroundSize: 'cover',
  '@media (max-width: 400px)': {
    height: '350px',
  },
  '@media (min-width: 401px)': {
    height: '500px',
  },
};

import Marquee from "../marquee/Marquee";

const Hero = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
    const handleError = (error) => {
    console.error('Error loading image:', error);
  };
  return (
    <div >
       <Marquee text="Your notice Text Goes Here." />
        <Carousel autoplay={true} afterChange={onChange} arrows className='z-100  mx-1'>
      <div style={contentStyle} >
          <img className='lg:h-[450px] md:h-[400px] h-[280px] w-full object-cover object-center' src={img} alt="Slide 1" onError={handleError} />
     

        </div>
        <div style={contentStyle}>
          <img className='lg:h-[450px] md:h-[400px] h-[280px] w-full object-cover object-center' src={img2} alt="Slide 1" onError={handleError} />
         
    
        </div>
     
    </Carousel>
    </div>
  )
}

export default Hero