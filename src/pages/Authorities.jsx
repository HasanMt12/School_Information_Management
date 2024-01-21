import { useEffect, useState } from "react";
import { readAllTeachers } from "../services/index/techersPost";
import { Button, Tooltip } from "@nextui-org/react";
import { IoOpenOutline } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../hooks/ScrollToTop";


const Authorities = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await readAllTeachers();
        setTeachers(data.data);
        console.log(data.data)
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  useEffect(function () {
    Aos.init({ duration: 500 });
  }, []);
    // date formate
    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
      <ScrollToTop>
        <div className="min-h-screen  py-4">
         <h2 data-aos="fade-up"  className="text-gray-900 md:w-[20%] text-center w-[50%] mx-auto border-x-4 pl-2 border-[#1eb2a6] lg:text-2xl md:text-xl text-lg font-semibold lg:my-7 md:my-5 my-3">
                Our Authorities
              </h2>
          <div className="grid  lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:gap-5 md:gap-4 gap-2 md:px-4 px-3">
          {teachers.map((teacher, index) => (
             <div key={index}
             className="bg-gray-100 relative shadow-lg overflow-hidden hover:shadow-sm group rounded-xl p-5 transition-all duration-500 transform">
             <div className="flex items-center gap-4">
             <img src={teacher.image}
             className="w-32  h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
             />
             <div className="w-fit transition-all transform duration-500">
                 <h1 className="text-[#1eb2a6] font-bold md:text-lg text-md">
                 {teacher.name}
                 </h1>
                 <p className="text-gray-600 text-sm">{teacher.designation}</p>
                 
             </div>
             </div>
<div className="text-start md:my-4 my-2">
          <p className="md:text-md text-sm font-semibold text-gray-500">Email: <span className="text-[#1EB2A6] ml-2 font-medium">{teacher.email}</span></p>
          <p className="md:text-md text-sm font-semibold text-gray-500">Address: <span className="text-[#1EB2A6] ml-2 font-medium">{teacher.address.city}</span></p>
          <p className="md:text-md text-sm font-semibold text-gray-500">Education: <span className="text-[#1EB2A6] ml-2 font-medium">{teacher.education.degree}</span></p>
          <p className="md:text-md text-sm font-semibold text-gray-500">Phone: <span className="text-[#1EB2A6] ml-2 font-medium">{teacher.phone}</span></p>
          <p className="md:text-md text-sm font-semibold text-gray-500">Gender: <span className="text-[#1EB2A6] ml-2 font-medium">{teacher.gender}</span></p>
          <p className="md:text-md text-sm font-semibold text-gray-500">Joining Date: <span className="text-[#1EB2A6] ml-2 font-medium">{formatDate(teacher.joinDate)}</span></p>
          <p className="md:text-md text-sm font-semibold text-gray-500">Experience: <span className="text-[#1EB2A6] ml-2 font-medium">{teacher.yearsOfExperience}</span></p>
</div>
   
         </div>
           ))}
          </div>
      
      
      </div>
      </ScrollToTop>
      
    )
  }
  
  export default Authorities
  