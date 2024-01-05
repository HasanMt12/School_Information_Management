import  { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [click, setClick] = useState(false)

  return (
    <div className="z-20 relative">
      <Head />
      <header >
        <nav className='flexSB'>
          <ul className={`py-4 px-8 ${click ? "mobile-nav" : "flexSB "}`} onClick={() => setClick(false)}>
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
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/'>Contact US</Link>
            </li>
            <li>
              <Link to='/'>signIn</Link>
            </li>
          </ul>
          <div className='start flex justify-center items-center px-10 py-2'>
            <div className='button'>Academic</div>
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