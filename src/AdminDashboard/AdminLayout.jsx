/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaChartBar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import DashboardHeader from "./components/Header";
import { useEffect, useState } from "react";
import Sidebar from "./components/DrawerSidbar/Sidebar";
import SideBarMenu from "./components/DrawerSidbar/SideBarMenu";
import {  AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaImage } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdImportContacts } from "react-icons/md";
import { BsCalendar2Event } from "react-icons/bs";
import { MdOutlineUnsubscribe } from "react-icons/md";
import { TbLayoutNavbarCollapseFilled } from "react-icons/tb";
import { SlSpeech } from "react-icons/sl";
import { FaPeopleGroup, FaSchoolFlag } from "react-icons/fa6";
import { readAllNavbarIcon } from "../services/index/navbarPost";

const AdminLayout = () => {
  const [nav, setNav] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await readAllNavbarIcon();
        //console.log(data)
        setNav(data.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const userState = useSelector((state) => state.user);
  // console.log(userState)
  const [isAdmin, setIsAdmin] = useState(false);
const [loading, setLoading] = useState(true);

// Check if the user is an admin based on userState directly
useEffect(() => {
  const checkAdminStatus = async () => {
    try {
      if (userState && userState.userInfo && userState.userInfo.data.user.admin) {
        setIsAdmin(true);
      } else {
        navigate("/");
        toast.error("You are not allowed to access the admin panel.");
      }
    } catch (error) {
      console.error(error);
      navigate("/");
      toast.error("Failed to check admin status.");
    } finally {
      setLoading(false);
    }
  };

  checkAdminStatus();
}, [userState, navigate]);

if (loading) {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h3 className="text-2xl text-slate-700">Loading...</h3>
    </div>
  );
}

if (!isAdmin) {
  return null;
}
const iconClasses = "text-xl text-default-500  pointer-events-none flex-shrink-0";
  return (
  <>
  
     <div className="bg-gray-50 mx-auto">

        <DashboardHeader></DashboardHeader>

  {/* <!-- ========== MAIN CONTENT ========== -->
  <!-- Sidebar Toggle -->  */}
  <div className="sticky top-0  inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden ">
    <div className="flex items-center  py-4">
 

       {/* menu burger icon Navigation Toggle*/}
      <div className="cursor-pointer lg:hidden">
        {isOpen ? (
          <AiOutlineClose className="w-6 h-6" onClick={() => setIsOpen(false)} />
        ) : (
          <AiOutlineMenu className="w-6 h-6" onClick={() => setIsOpen(true)} />
        )}
      </div>
      {/* <!-- End Navigation Toggle -->

      <!-- Breadcrumb --> */}
      <ol className="ms-3 flex items-center whitespace-nowrap" aria-label="Breadcrumb">
        <li className="flex items-center text-sm text-gray-800 ">
          Application Layout
          <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </li>
        <li className="text-sm font-semibold text-gray-800 truncate " aria-current="page">
          Dashboard
        </li>
      </ol>
      {/* <!-- End Breadcrumb --> */}
    </div>
  </div>
  {/* <!-- End Sidebar Toggle -->
    
  <!-- Sidebar --> */}
  <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>
  <SideBarMenu></SideBarMenu>

  </Sidebar>
  <div className="bg-[#DCE8F5] hs-overlay -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 pt-5 pb-0 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 ">
  {nav && nav?.map((i, index) => ( 
   <div  key={index}  className="px-6">
     <Link to="/"> <img src={i.image} className="w-[60px] h-[60px]" alt="mind Space" title="home"></img></Link>
    </div> 
  ))}
    

    <nav className="hs-accordion-group py-2 px-6 w-full flex flex-col flex-wrap   min-h-[88vh]" data-hs-accordion-always-open>
      <ul className="space-y-1.5">
       
       <Link to="/dashboard">
        <li>
          <div className="flex items-center gap-x-3.5 py-2 mt-3 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-[#457B9D]/60  " href="#">
            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Dashboard
          </div>
        </li>
        </Link> 
    <Link to="/dashboard/header">  
      <li>
          <button type="button" className=" w-full text-start flex items-center gap-x-3.5 py-2 mt-3 bg-[#457B9D]  px-2.5 text-sm text-white rounded-lg capitalize hover:bg-[#457B9D]/60   ">
            <TbLayoutNavbarCollapseFilled></TbLayoutNavbarCollapseFilled>
            Header Option manage
          </button>
        </li>
    </Link>
    <Link to="/dashboard/speech">  
      <li>
          <button type="button" className=" w-full text-start flex items-center gap-x-3.5 py-2 mt-3 bg-[#457B9D]  px-2.5 text-sm text-white rounded-lg capitalize hover:bg-[#457B9D]/60   ">
            <SlSpeech />
            Authorities Speech
          </button>
        </li>
    </Link>
   
      <Link to="/dashboard">  
      <li>
          <button type="button" className=" w-full text-start flex items-center gap-x-3.5 py-2 mt-3 bg-[#457B9D]  px-2.5 text-sm text-white rounded-lg capitalize hover:bg-[#457B9D]/60   ">
            <svg className="flex-shrink-0 mt-0.5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4-1"/><path d="m16.8 12.3-.4-1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>
            Authorities Manage
          </button>
        </li>
    </Link>
    <Link to="/dashboard/facilities">  
      <li>
          <button type="button" className=" w-full text-start flex items-center gap-x-3.5 py-2 mt-3 bg-[#457B9D]  px-2.5 text-sm text-white rounded-lg capitalize hover:bg-[#457B9D]/60   ">
           <FaSchoolFlag /> School Facilities
          </button>
        </li>
    </Link>

    <Link to="/dashboard/record">  
      <li>
          <button type="button" className=" w-full text-start flex items-center gap-x-3.5 py-2 mt-3 bg-[#457B9D]  px-2.5 text-sm text-white rounded-lg capitalize hover:bg-[#457B9D]/60   ">
           <FaChartBar /> Result Record
          </button>
        </li>
    </Link>

    <Link to="/dashboard/insight">  
      <li>
          <button type="button" className=" w-full text-start flex items-center gap-x-3.5 py-2 mt-3 bg-[#457B9D]  px-2.5 text-sm text-white rounded-lg capitalize hover:bg-[#457B9D]/60   ">
           <FaPeopleGroup /> School Community
          </button>
        </li>
    </Link>
    <Link to="/dashboard/headline">  
      <li>
          <button type="button" className=" w-full text-start flex items-center gap-x-3.5 py-2 mt-3 bg-[#457B9D]  px-2.5 text-sm text-white rounded-lg capitalize hover:bg-[#457B9D]/60   ">
           <FaImage />Headline Manage
          </button>
        </li>
    </Link>
    <Link to="/dashboard/contact">  
      <li>
          <button type="button" className=" w-full text-start flex items-center gap-x-3.5 py-2 mt-3 bg-[#457B9D]  px-2.5 text-sm text-white rounded-lg capitalize hover:bg-[#457B9D]/60   ">
           <MdImportContacts />Contact
          </button>
        </li>
    </Link>
    <Link to="/dashboard/notice">  
      <li>
          <button type="button" className=" w-full text-start flex items-center gap-x-3.5 py-2 mt-3 bg-[#457B9D]  px-2.5 text-sm text-white rounded-lg capitalize hover:bg-[#457B9D]/60   ">
           <IoMdNotifications /> Notice
          </button>
        </li>
    </Link>
    <Link to="/dashboard/slider">  
      <li>
          <button type="button" className=" w-full text-start flex items-center gap-x-3.5 py-2 mt-3 bg-[#457B9D]  px-2.5 text-sm text-white rounded-lg capitalize hover:bg-[#457B9D]/60   ">
           <FaImage /> slider photo
          </button>
        </li>
    </Link>
    <Link to="/dashboard/gallery">  
      <li>
          <button type="button" className=" w-full text-start flex items-center gap-x-3.5 py-2 mt-3 bg-[#457B9D]  px-2.5 text-sm text-white rounded-lg capitalize hover:bg-[#457B9D]/60   ">
           <FaImage /> gallery photo
          </button>
        </li>
    </Link>
    <Link to="/dashboard/users">  
      <li>
          <button type="button" className=" w-full text-start flex items-center gap-x-3.5 py-2 mt-3 bg-[#457B9D]  px-2.5 text-sm text-white rounded-lg capitalize hover:bg-[#457B9D]/60   ">
           <MdOutlineUnsubscribe /> Subscription Users
          </button>
        </li>
    </Link>
    <Link to="/dashboard/event">  
      <li>
          <button type="button" className=" w-full text-start flex items-center gap-x-3.5 py-2 mt-3 bg-[#457B9D]  px-2.5 text-sm text-white rounded-lg capitalize hover:bg-[#457B9D]/60   ">
           <BsCalendar2Event /> Events Manage
          </button>
        </li>
    </Link>
    <Link to="/dashboard/video">  
      <li>
          <button type="button" className=" w-full text-start flex items-center gap-x-3.5 py-2 mt-3 bg-[#457B9D]  px-2.5 text-sm text-white rounded-lg capitalize hover:bg-[#457B9D]/60   ">
           <BsCalendar2Event /> Videos Manage
          </button>
        </li>
    </Link>

      </ul>
    </nav>
  </div>
  {/* <!-- End Sidebar -->

  <!-- Content --> */}
  <div className="w-full py-2  bg-[#F9F9F9] min-h-screen px-4 sm:px-6 md:px-8 lg:ps-72">
    {/* <!-- Children  --> */}
            <Outlet></Outlet>
  </div>

  {/* <!-- End Content -->
  <!-- ========== END MAIN CONTENT ========== --> */}
</div>

  
</>

  );
};

export default AdminLayout;