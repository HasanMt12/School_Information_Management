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
   

    <div className="mt-5 sm:mt-12 grid gap-y-2 px-6 md:px-12 lg:px-20 bg-black sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
      <div className="flex justify-between items-center">
        <p className="text-sm text-[#a35b45]">© 2023 Insented. All rights reserved.</p>
      </div>
      
      <div>
        <Link to="https://www.facebook.com/profile.php?id=61550837099301" target="_blank" className="inline-flex justify-center items-center gap-x-3.5 w-10 md:h-12 h-10 text-center text-[#a35b45] rounded-md f transition" >
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
        </Link>
        <Link to="https://www.instagram.com/insentyy/" target="_blank"
        className="inline-flex justify-center items-center gap-x-3.5 w-10 md:h-12 h-10 text-center text-[#a35b45] rounded-md  transition"
        >
        <FaSquareInstagram />
       </Link> 
      
       
      </div>
   
    </div>
  </div>
</footer>
  );
}

export default Footer;
