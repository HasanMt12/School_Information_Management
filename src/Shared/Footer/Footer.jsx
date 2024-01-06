import { Link } from "react-router-dom";
import { AiOutlineGift } from 'react-icons/ai';
import { FaSquareInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gray-100  font-Roboto">
  <div className="max-w-[85rem] pt-2   mx-auto uppercase ">

   
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 px-4 md:px-12 lg:px-20  pt-4 ">
      
      <div className="col-span-1 md:mt-0 -mt-4">
        <div className="-ml-4 flex justify-start items-center">
          <img src="/logo.png" alt="insented" className="w-14 h-14"></img>
          <h4 className="font-bold text-black yoyo md:text-lg text-md font-Lore">Insented</h4>
        </div>
        <div className="mt-2 grid space-y-2">
          <p><Link to="/products" className="inline-flex gap-x-1 text-gray-600 font-thin hover:text-[#c09363] atc text-xs border border-b-[#c09363] border-gray-50" >Our products</Link></p>

        </div>
      </div>


      <div className="col-span-1">
        <h4 className="font-semibold text-black yoyo md:text-lg text-md">support</h4>

        <div className="mt-3 grid space-y-2">
          <p><a className="inline-flex gap-x-1 text-gray-600 font-thin hover:text-[#c09363] atc text-xs" href="#">Order status</a></p>
          <p><a className="inline-flex gap-x-1 text-gray-600 font-thin hover:text-[#c09363] atc text-xs" href="#">Refund and Return Policy</a></p>
          <p><a className="inline-flex gap-x-1 text-gray-600 font-thin hover:text-[#c09363] atc text-xs" href="#">Shipping Policy</a></p>
        </div>
      </div>
   

      <div className="col-span-1">
      <h4 className="font-semibold text-black yoyo md:text-lg text-md">Company</h4>
        <div className="mt-3 grid space-y-2">
          <Link to="/terms"><p><a className="inline-flex gap-x-1 text-gray-600 font-thin hover:text-[#c09363] atc text-xs" href="#">Terms of service </a></p></Link>
          <p><a className="inline-flex gap-x-1 text-gray-600 font-thin hover:text-[#c09363] atc text-xs" href="#">About us</a></p>
          <p><a className="inline-flex gap-x-1 text-gray-600 font-thin hover:text-[#c09363] atc text-xs" href="#">Responsibility</a></p>
        </div>
      </div>

      <div className="col-span-1">
      <h4 className="font-semibold text-black yoyo md:text-lg text-md">Contact</h4>
        <div className="mt-3 grid space-y-2">
          <p><a className="inline-flex gap-x-1 text-gray-600 border border-gray-50 border-b-[#c09363]  font-thin hover:text-[#c09363] atc text-xs" href="tel:+1234567890">Call Us: +88 01983483623</a></p>
          <p><a className="inline-flex gap-x-1 text-gray-600 font-thin border border-b-[#c09363] border-gray-50 hover:text-[#c09363] atc text-xs" href="mailto:hasanmah751@gmail.com?subject=Hello&body=I%20hope%20you%20are%20doing%20well">Send us an email</a></p>
         
        </div>
      </div>
       
     
    </div>
   

    <div className="mt-5 py-2 sm:mt-12  gap-y-2 px-6 md:px-12 lg:px-20 bg-gray-200 flex justify-center items-center">

        <p className=" text-sm text-center capitalize text-[#1eb2a6]">© 2023 school. All rights reserved.</p>

    </div>
  </div>
</footer>
  );
}

export default Footer;
