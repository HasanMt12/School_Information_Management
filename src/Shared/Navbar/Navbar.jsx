import  { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [isFixed, setIsFixed] = useState(false);

useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      // You can adjust the threshold value as needed
      const threshold = 100; 

      // Check if the user has scrolled beyond the threshold
      setIsFixed(offset > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <Head />
      <header className={isFixed ? 'fixed-header backdrop-blur-sm max-w-[1280px] md:min-w-[95%] min-w-[94%] ' : 'md:bg-gray-200 bg-[#1eb2a6] '}>
        <nav className='flexSB'>
          <ul className={`py-4 px-8 ${click ? "mobile-nav" : "flexSB "} `} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/team'>Authorities</Link>
            </li>
            <li>
              <Link to='/'>Academic</Link>
            </li>
            <li>
              <Link to='/'>Contact US</Link>
            </li>
            <li>
              <Link to='/'>signIn</Link>
            </li>
          </ul>
          <div className={`start ${isFixed ? 'bg-[#1eb2a6]' : 'bg-[#1eb2a6]'} flex justify-center items-center px-10 py-2`}>
            <div className='button'>Notice</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <IoMdClose/> : <RiMenu3Fill></RiMenu3Fill>}
          </button>
        </nav>
      </header>
    </div>
  )
}

export default Navbar