import  { useEffect, useState } from "react"
import {Dropdown, DropdownTrigger,DropdownMenu, DropdownItem, Image, Button, Tooltip} from "@nextui-org/react";
import { MdLogin } from "react-icons/md";
import { Link } from "react-router-dom"
import Head from "./Head"
import { MdKeyboardArrowDown } from "react-icons/md";
import "./header.css"
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
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
      const threshold = 100; 
      setIsFixed(offset > threshold);
    };
    window.addEventListener('scroll', handleScroll);
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
            <Dropdown placement="bottom-center">
          <DropdownTrigger>
          <li className="font-semibold flex gap-2 justify-start items-start cursor-pointer hover:text-[#1eb2a6]">
              Authorities <MdKeyboardArrowDown className="mt-1 text-lg text-[#1eb2a6]"/>
            </li>
          </DropdownTrigger>
            <DropdownMenu  variant="flat" >
              <DropdownItem  className="">
              <li className="flex justify-evenly items-center gap-2 hover:text-[#1eb2a6]">
              <Link to='/authorities'>Teachers </Link><FaLongArrowAltRight className="text-[#1eb2a6]"/>
            </li>
              </DropdownItem>
              <DropdownItem  className="">
              <li className="flex justify-evenly items-center gap-2 hover:text-[#1eb2a6]">
              <Link to='/authorities'>stuff  </Link><FaLongArrowAltRight className="text-[#1eb2a6]"/>
            </li>
              </DropdownItem>
          
            </DropdownMenu>
          </Dropdown>
          <Dropdown placement="bottom-center">
          <DropdownTrigger>
          <li className="font-semibold flex gap-2 justify-start items-start cursor-pointer hover:text-[#1eb2a6]">
              Academic <MdKeyboardArrowDown className="mt-1 text-lg text-[#1eb2a6]"/>
            </li>
          </DropdownTrigger>
            <DropdownMenu  variant="flat" >
              <DropdownItem  className="">
              <li className="flex justify-evenly items-center gap-2 hover:text-[#1eb2a6]">
              <Link to='/academic'>Routine of All classes </Link><FaLongArrowAltRight className="text-[#1eb2a6]"/>
            </li>
              </DropdownItem>
              <DropdownItem  className="">
              <li className="flex justify-evenly items-center gap-2 hover:text-[#1eb2a6]">
              <Link to='/academic'>Result of All classes  </Link><FaLongArrowAltRight className="text-[#1eb2a6]"/>
            </li>
              </DropdownItem>
          
            </DropdownMenu>
          </Dropdown>
       
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
          
            </li>
          </ul>
          <div className="flex justify-center items-center mr-2">
             {userState?.userInfo?( <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Image
              
              src={"https://i.ibb.co/0QZCv5C/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"}
              className="transition-transform ring-1 p-[1px] ring-[#1eb2a6] w-7 h-7 md:w-8 md:h-8 cursor-pointer rounded-full"
              size="sm"
            
            />
          </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold text-sm">Signed in as</p>
              <p className="font-semibold text-sm text-[#1eb2a6]">{userState?.userInfo?.data?.user?.email}</p>           
              </DropdownItem>
               <DropdownItem> <Link to="/dashboard">Admin Dashboard</Link> </DropdownItem>
              <DropdownItem   onClick={logoutHandler} key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>):(
            <li>
            <Link  to="/login" >
              <Tooltip content="Only Admin Login">
                <Button  size="sm"  className="text-sm bg-black/10 hover:bg-gray-200 rounded-sm flex justify-center items-center text-[#333333] font-semibold hover:text-[#1eb2a6]" variant="flat" color="default" >Login <MdLogin /></Button>
              </Tooltip>
            </Link>
          </li>
          )}
          </div>
          
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <IoMdClose/> : <RiMenu3Fill></RiMenu3Fill>}
          </button>
        </nav>
         {/* <div className={`start ${isFixed ? 'bg-[#1eb2a6]' : 'bg-[#1eb2a6]'} flex justify-center items-center px-10 py-2`}>
            <div className='button'>Notice</div>
          </div> */}
      </header>
    </div>
  )
}

export default Navbar