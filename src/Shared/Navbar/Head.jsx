import logo from '../../assets/logo.svg'
import { FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { useEffect, useState } from 'react';
import { readAllHeaderIcon } from '../../services/index/headerPost';
import { FaLinkedinIn, FaWhatsapp  } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { readAllNavbarIcon } from '../../services/index/navbarPost';
import { Link } from 'react-router-dom';

const Head = () => {
  const [icon, setIcons] = useState([]);
  const [nav, setNav] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await readAllNavbarIcon();
        
        setNav(data.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await readAllHeaderIcon();
   
        setIcons(data.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  return (
    <>
      <section className='head'>
        <div className='container flexSB flex justify-between items-center '>
          
          {nav && nav?.map((i, index) => (
             <div key={index} className='flex justify-start items-center md:gap-2 gap-1'>

           <Link to="/"><img className='md:w-[60px] md:h-[60px] w-[40px] h-[40px]' src={i.image} alt="logo"></img></Link> 
            <div>
              <h1 className='md:text-md text-sm'>{i.schoolName}</h1>
            <span className='md:text-md text-sm'> EIIN: {i.eiin}</span>
            </div>
          </div> ))}
         
          <div className='flex justify-start items-center md:gap-4 gap-2'>
          {icon.map((i, index) => ( 
              <div key={index} >
               {i.icon === 'facebook' && <Link to={i.url} target='_blank'><FaFacebook /></Link> }
              {i.icon === 'email' && <Link to={i.url} target='_blank'><CiMail /></Link>}
              {i.icon === 'linkedin' && <Link to={i.url} target='_blank'><FaLinkedinIn /></Link>}
              {i.icon === 'whatsapp' && <Link to={i.url} target='_blank'><FaWhatsapp /></Link>}
              {i.icon === 'youtube' && <Link to={i.url} target='_blank'><CiYoutube /></Link>}
          </div>
          ))}
          </div>
        
        
        </div>
      </section>
    </>
  )
}

export default Head