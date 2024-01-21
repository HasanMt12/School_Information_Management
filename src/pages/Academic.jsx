import { useEffect, useState } from "react";
import { readAllTeachers } from "../services/index/techersPost";
import { Button, Tooltip } from "@nextui-org/react";
import { IoOpenOutline } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";


const Academic = () => {
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

    return (
      <div className="min-h-screen text-center py-4 text-[#1eb2a6]">
         <h2 data-aos="fade-right"  className="text-gray-900 md:w-[20%] w-[50%] mx-auto border-x-4 pl-2 border-[#1eb2a6] lg:text-2xl md:text-xl text-lg font-semibold lg:my-7 md:my-5 my-3">
                Our 
              </h2>
          <div className="grid  lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-3 md:gap-2 gap-2 md:px-4 px-2">
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
                 <Tooltip content="click">
                   <Button  size="sm"  className="text-tiny bg-black/10 group-hover:bg-gray-200 rounded-sm mt-3 flex justify-center items-center text-[#333333] font-semibold group-hover:text-[#1eb2a6]" variant="flat" color="default" onPress={() => handleOpen(size)}>details <IoOpenOutline /></Button>
                 </Tooltip>
             </div>
             </div>
         </div>
           ))}
          </div>
      
      
      </div>
    )
  }
  
  export default Academic
  