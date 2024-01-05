


import { Carousel } from "react-responsive-carousel"
// import Heading from "../heading/Heading"
import img from '../../assets/school.webp'
import img2 from '../../assets/school2.webp'
import "./Hero.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Hero = () => {
  return (
    <div >
       <Carousel showThumbs={false}>
                <div>
                    <img src={img} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
    </div>
  )
}

export default Hero