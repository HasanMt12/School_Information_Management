import { useState } from "react";
import { Link } from "react-router-dom";


const DemoPdfShow = () => {
    const [dynamicPDFPath, setDynamicPDFPath] = useState('http://localhost:3000/${i.pdf}');

    return (
        <div className='min-h-screen md:py-10 p-6 text-center'>
            <h2 className='md:text-3xl text-xl underline font-bold text-[#1EB2A6] mb-6'>Exciting News: </h2>
            <h2 className='md:text-xl text-lg font-semibold text-start'>Notice Document Will Shine on Free Vercel Serverless Hosting! 🚀Vercel has no storage, that's why I cannot show the original notice. </h2>
            <h2 className='md:text-xl text-lg font-semibold text-start my-2'>No worries! Clone the Code, Host it Locally or Anywhere Else, and Voila! </h2>
            <h2 className='md:text-xl text-lg font-semibold text-start mb-6'>The Original Notice Will Captivate Your Eyes, and the Functionality Will Sparkle! 😊✨</h2>
           <div className='text-center mb-10'>
            <h2 className='md:text-3xl text-xl underline font-bold text-[#1EB2A6] mb-6'>Instruction</h2>
             <p className="font-semibold">
            I just want to let you know that if you replace  <span className='text-[#1EB2A6]'>http://localhost:5173/demopdf</span>  with  <span className='text-[#1EB2A6]'>{dynamicPDFPath} </span> at line number 130 in the notice.jsx file and line number 48 Marquee.jsx file and also AllNtoce.jsx file 52 number line,
            <span className='text-[#1EB2A6]'>it will dynamically display the original notices."</span> 
            </p>
           </div>
           <Link to="/" className="md:text-3xl text-xl underline font-bold text-[#245a56]">back to Home</Link>
        </div>
    );
}

export default DemoPdfShow;
