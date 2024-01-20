import logo from '../../assets/logo.svg'
import { FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { useEffect, useState } from 'react';
import { readAllHeaderIcon } from '../../services/index/headerPost';
import { FaLinkedinIn, FaWhatsapp  } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { readAllNavbarIcon } from '../../services/index/navbarPost';

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
          
          {nav.map((i, index) => ( <div className='flex justify-start items-center gap-2'>

<img className='w-[60px] h-[60px]' src={i.image} alt="logo"></img>
            <div>
              <h1 className='md:text-md text-sm'>{i.schoolName}</h1>
            <span className='md:text-md text-sm'> EIIN: {i.eiin}</span>
            </div>
          </div> ))}
         
          <div className='flex justify-start items-center md:gap-4 gap-2'>
          {icon.map((i, index) => ( 
              <div key={index} >
               {i.icon === 'facebook' && <FaFacebook />}
              {i.icon === 'email' && <CiMail />}
              {i.icon === 'linkedin' && <FaLinkedinIn />}
              {i.icon === 'whatsapp' && <FaWhatsapp />}
              {i.icon === 'youtube' && <CiYoutube />}
          </div>
          ))}
          </div>
        
        
        </div>
      </section>
    </>
  )
}

export default Head