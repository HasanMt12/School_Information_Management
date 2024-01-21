import { useEffect, useState } from "react";
import { readAllFacilities } from "../../services/index/schoolFacilities";


const SchoolFacilities = () => {
    const [speech, setSpeech] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await readAllFacilities();
            //console.log(data)
            setSpeech(data.data);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, []);
  return (
    <div className="md:my-6 my-4"> 
    
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2 md:mt-6 mt-4">
    
{/* section */}
{speech && speech?.map((i, index) => ( 
   <div key={index} className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">

    <a href="#">
        <img className="w-full md:w-full md:min-h-[240px] md:max-h-[240px] min-h-[160px] max-h-[160px] object-cover object-center" src={i.image} alt="Sunset in the mountains"/>
    </a>
    <div className="relative -mt-16 px-10 pt-5 pb-16 bg-gray-100 shadow-md hover:shadow-sm m-10">
        <a href="#"
            className="font-semibold text-lg text-[#1eb2a6] inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">The
            {i.title}</a>
        <p className="text-gray-500 text-sm">
           {i.description}
        </p>
    
    </div>

</div> 
))}



    </div>
    </div>
  )
}

export default SchoolFacilities
