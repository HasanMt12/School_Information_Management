import { Link } from "react-router-dom";
import { FaChartBar, FaImage } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdImportContacts } from "react-icons/md";
import { BsCalendar2EventFill } from "react-icons/bs";
import { MdOutlineUnsubscribe } from "react-icons/md";
import { TbLayoutNavbarCollapseFilled } from "react-icons/tb";
import { FaPeopleGroup, FaSchoolFlag } from "react-icons/fa6";


const SideBarMenu = () => {
  
    return (
        <nav className="hs-accordion-group  p-6 w-full flex flex-col flex-wrap z-[1000]" data-hs-accordion-always-open>
      <ul className="space-y-1.5">
        <Link to="/dashboard"><li>
          <div className="flex items-center z-[1000] gap-x-3.5 py-2 px-2.5 backdrop-blur-lg backdrop-brightness-150   w-full mb-2 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-gray-100 ">
            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Dashboard
          </div>
        </li>
        </Link> 

      <Link to="/dashboard/header">  
      <li>
          <button type="button" className="flex items-center z-[1000] gap-x-3.5 py-2 px-2.5 backdrop-blur-lg backdrop-brightness-150   w-full mb-2 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-gray-100 ">
            <TbLayoutNavbarCollapseFilled></TbLayoutNavbarCollapseFilled>
            Header Option manage
          </button>
        </li>
    </Link>
    <Link to="/dashboard">  
      <li>
          <button type="button" className=" flex items-center z-[1000] gap-x-3.5 py-2 px-2.5 backdrop-blur-lg backdrop-brightness-150   w-full mb-2 bg-gray-100 text-sm capitalize  text-slate-700 rounded-lg hover:bg-gray-100  ">
            <svg className="flex-shrink-0 mt-0.5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4-1"/><path d="m16.8 12.3-.4-1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>
            Authorities Manage
          </button>
        </li>
    </Link>
    <Link to="/dashboard/facilities">  
      <li>
          <button type="button" className=" flex items-center z-[1000] gap-x-3.5 py-2 px-2.5 backdrop-blur-lg backdrop-brightness-150   w-full mb-2 bg-gray-100 text-sm capitalize  text-slate-700 rounded-lg hover:bg-gray-100  ">
           <FaSchoolFlag /> School Facilities
          </button>
        </li>
    </Link>

    <Link to="/dashboard/record">  
      <li>
          <button type="button" className=" flex items-center z-[1000] gap-x-3.5 py-2 px-2.5 backdrop-blur-lg backdrop-brightness-150   w-full mb-2 bg-gray-100 text-sm capitalize  text-slate-700 rounded-lg hover:bg-gray-100  ">
           <FaChartBar /> Result Record
          </button>
        </li>
    </Link>

    <Link to="/dashboard/insight">  
      <li>
          <button type="button" className=" flex items-center z-[1000] gap-x-3.5 py-2 px-2.5 backdrop-blur-lg backdrop-brightness-150   w-full mb-2 bg-gray-100 text-sm capitalize  text-slate-700 rounded-lg hover:bg-gray-100  ">
           <FaPeopleGroup /> School Community
          </button>
        </li>
    </Link>
    <Link to="/dashboard/headline">  
      <li>
          <button type="button" className=" flex items-center z-[1000] gap-x-3.5 py-2 px-2.5 backdrop-blur-lg backdrop-brightness-150   w-full mb-2 bg-gray-100 text-sm capitalize  text-slate-700 rounded-lg hover:bg-gray-100  ">
           <FaImage />Headline Manage
          </button>
        </li>
    </Link>
    <Link to="/dashboard/contact">  
      <li>
          <button type="button" className=" flex items-center z-[1000] gap-x-3.5 py-2 px-2.5 backdrop-blur-lg backdrop-brightness-150   w-full mb-2 bg-gray-100 text-sm capitalize  text-slate-700 rounded-lg hover:bg-gray-100  ">
           <MdImportContacts />Contact
          </button>
        </li>
    </Link>
    <Link to="/dashboard/notice">  
      <li>
          <button type="button" className=" flex items-center z-[1000] gap-x-3.5 py-2 px-2.5 backdrop-blur-lg backdrop-brightness-150   w-full mb-2 bg-gray-100 text-sm capitalize  text-slate-700 rounded-lg hover:bg-gray-100  ">
           <IoMdNotifications /> Notice
          </button>
        </li>
    </Link>
    <Link to="/dashboard/slider">  
      <li>
          <button type="button" className=" flex items-center z-[1000] gap-x-3.5 py-2 px-2.5 backdrop-blur-lg backdrop-brightness-150   w-full mb-2 bg-gray-100 text-sm capitalize  text-slate-700 rounded-lg hover:bg-gray-100  ">
           <FaImage /> slider photo
          </button>
        </li>
    </Link>
    <Link to="/dashboard/gallery">  
      <li>
          <button type="button" className=" flex items-center z-[1000] gap-x-3.5 py-2 px-2.5 backdrop-blur-lg backdrop-brightness-150   w-full mb-2 bg-gray-100 text-sm capitalize  text-slate-700 rounded-lg hover:bg-gray-100  ">
           <FaImage /> gallry photo
          </button>
        </li>
    </Link>
    <Link to="/dashboard/users">  
      <li>
          <button type="button" className=" flex items-center z-[1000] gap-x-3.5 py-2 px-2.5 backdrop-blur-lg backdrop-brightness-150   w-full mb-2 bg-gray-100 text-sm capitalize  text-slate-700 rounded-lg hover:bg-gray-100  ">
           <MdOutlineUnsubscribe /> Subscription Users
          </button>
        </li>
    </Link>
    <Link to="/dashboard/event">  
      <li>
          <button type="button" className=" flex items-center z-[1000] gap-x-3.5 py-2 px-2.5 backdrop-blur-lg backdrop-brightness-150   w-full mb-2 bg-gray-100 text-sm capitalize  text-slate-700 rounded-lg hover:bg-gray-100  ">
           <BsCalendar2EventFill /> Events Manage
          </button>
        </li>
    </Link>
      </ul>
    </nav>
    );
};

export default SideBarMenu;