import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { useEffect, useState } from "react";
import { readAllContact } from "../../services/index/contactPost";
import { readAllNavbarIcon } from "../../services/index/navbarPost";
import Subscription from "../../ui/home/Subscription";
const Footer = () => {
  const [contactId, setContactId] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await readAllContact();
      //    console.log(data)
          setContactId(data.data);
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchData();
    }, []);
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
  return (
    <div>
      <Subscription></Subscription>
    <footer className="bg-gray-100  font-Roboto">
  <div className="max-w-[85rem] pt-2   mx-auto uppercase ">

   
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 md:px-12 lg:px-20  pt-4 ">
      
     <div>
     {nav && nav?.map((i, index) => (
             <div key={index} className='flex justify-start items-center gap-2'>

<Link to="/"><img className='md:w-[60px] md:h-[60px] w-[40px] h-[40px]' src={i.image} alt="logo"></img></Link> 
            <div>
              <h1 className='md:text-md text-sm'>{i.schoolName}</h1>
            <span className='md:text-md text-sm'> EIIN: {i.eiin}</span>
            </div>
          </div> ))}
        </div>

   

      <div className="col-span-1">
      <h4 className="font-semibold text-black yoyo md:text-lg text-md">About Us</h4>
        <div className="mt-3  space-y-2">
          <Link to="/authorities"><p className="inline-flex gap-x-1 text-gray-600 font-thin hover:text-[#1eb2a6] atc text-xs">Academic </p></Link>
          <p><a className="inline-flex gap-x-1 text-gray-600 font-thin hover:text-[#1eb2a6] atc text-xs" href="#">About us</a></p>
          <p><a className="inline-flex gap-x-1 text-gray-600 font-thin hover:text-[#1eb2a6] atc text-xs" href="#">Responsibility</a></p>
        </div>
      </div>

      <div className="col-span-1">
      <h4 className="font-semibold text-black yoyo md:text-lg text-md">Contact</h4>
      {contactId && contactId?.map((i, index) => (  
        <div key={index} className="mt-3  space-y-2">
          <p><a className="inline-flex gap-x-1 text-gray-600 border border-gray-50 border-b-[#1eb2a6]  font-thin hover:text-[#1eb2a6] atc text-xs" href="tel:+1234567890">Call Us: {i.number}</a></p>
          <p><a className="inline-flex gap-x-1 text-gray-600 font-thin border border-b-[#1eb2a6] border-gray-50 hover:text-[#1eb2a6] atc text-xs" href={`mailto:${i.email}?subject=Hello&body=I%20hope%20you%20are%20doing%20well`}>Send us an email</a></p>
         
        </div>
      ))}
        
      </div>
       
     
    </div>
   

    <div className="mt-5 py-2 sm:mt-12  gap-y-2 px-6 md:px-12 lg:px-20 bg-gray-200 flex justify-center items-center">

        <p className=" text-sm text-center capitalize text-[#1eb2a6]">© 2023 school. All rights reserved.</p>

    </div>
  </div>
</footer>
</div>
  );
}

export default Footer;
