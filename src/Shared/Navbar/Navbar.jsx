import  { useEffect, useState } from "react"
import {Dropdown, DropdownTrigger,DropdownMenu, DropdownItem, Image} from "@nextui-org/react";
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/userLogout";
const Navbar = () => {
  const [click, setClick] = useState(false)
  const [isFixed, setIsFixed] = useState(false);
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  // Logout handler dispatches the logout action
  const logoutHandler = () => {
    dispatch(logout());
   };
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
              <Link to='/authorities'>Authorities</Link>
            </li>
            <li>
              <Link to='/academic'>Academic</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
            {userState?.userInfo?( <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Image
              
              src={"https://i.ibb.co/0QZCv5C/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"}
              className="transition-transform ring-1 p-[1px] ring-cyan-600 w-8 h-8 md:w-9 md:h-9 cursor-pointer rounded-full"
              size="sm"
            
            />
          </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold text-sm">Signed in as</p>
              <p className="font-semibold text-sm text-cyan-600">{userState?.userInfo.email}</p>           
              </DropdownItem>
               <DropdownItem> <Link to="/admin">Admin Dashboard</Link> </DropdownItem>
              <DropdownItem   onClick={logoutHandler} key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>):(
            <li>
            <Link to="/login" >
              Login
            </Link>
          </li>
          )}
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