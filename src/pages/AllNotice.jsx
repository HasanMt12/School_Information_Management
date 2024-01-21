import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import "aos/dist/aos.css";
import { readAllNotices } from '../services/index/noticePost';
import samplePDF from "../assets/demo.pdf"
 // date formate
 const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};
const AllNotice = () => {
    const [notice, setNotice] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await readAllNotices();
        // console.log(data.data)
          setNotice(data.data);
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchData();
    }, []);
    useEffect(function () {
        Aos.init({ duration: 500 });
      }, []);
    return (
        <div className="min-h-screen  py-4 ">
        <h2 data-aos="fade-up"  className="text-gray-900 text-center md:w-[20%] w-[50%] mx-auto border-x-4 pl-2 border-[#1eb2a6] lg:text-2xl md:text-xl text-lg font-semibold lg:my-7 md:my-5 my-3">
               Important Notice
             </h2>
             <div className='lg:px-20 md:px-12 px-6'>
             <table className="w-full divide-y divide-[#457B9D] my-6 bg-white shadow-lg">
    <thead className="bg-[#DCE8F5] text-[#457B9D]">
        <tr>
        <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold uppercase tracking-wider">Notice Date</th>
        <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold uppercase tracking-wider">Notice Title</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold uppercase tracking-wider">Notice Description</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold uppercase tracking-wider">Notice Pdf</th>
        </tr>
    </thead>
    {notice && notice?.map((i, index) => ( 
    <tbody key={index} className="w-full divide-y divide-[#457B9D] my-6">
        <tr>
        <td className="px-6 py-4 ">{formatDate(i.createdAt)}</td>
            <td className="px-6 py-4 ">{i.title}</td>
            <td className="px-6 py-4 ">{i.description}</td>
            <td className="px-6 py-4">
{/* please replace carefuly http://localhost:5173/demo-notice to http://localhost:3000/${i.pdf}*/}       
            <a href={`http://localhost:5173/demo-notice`} target="_blank" rel="noopener noreferrer" className="hover:text-slate-800 bg-slate-800 text-white border-solid border-[1px] rounded-md px-2 py-1 border-slate-800 hover:bg-white ">
              Open PDF
            </a>
            </td>
        </tr>
    </tbody>
    ))} 
</table>
             </div>
        </div>
    );
}

export default AllNotice;
