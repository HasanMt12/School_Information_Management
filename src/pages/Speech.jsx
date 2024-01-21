import { useEffect, useState } from "react";
import ScrollToTop from "../hooks/ScrollToTop"
import { readAllSpeech } from "../services/index/speechPost";

const Speech = () => {

  const [speech, setSpeech] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await readAllSpeech();
        //console.log(data)
        setSpeech(data.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
    return (
      
      <ScrollToTop>
        <div className="min-h-screen py-10 ">
              <div className="lg:px-12 md:px-8 px-4">

              {speech && speech?.map((i, index) => ( 
              <div key={index} >
                <div className="flex justify-center items-start">
                <img  src={i.image} className="md:h-[280px] md:w-[280px] h-[200px] rounded w-[200px] headMasterPhoto" />
                </div>
                   <h2 className="md:text-2xl md:text-start text-center md:my-4 my-2 text-lg text-[#1EB2A6] font-bold">{i.title}</h2>
              <p className="lg:text-lg md:text-md text-sm text-gray-600 ">
             {i.dialogue}
              </p>
              <p className="lg:text-lg md:text-md text-sm text-gray-600 md:my-5 my-3">
              {i.dialogue2}
              </p>
              <p className="lg:text-lg md:text-md text-sm text-gray-600 ">
              {i.dialogue3}
              </p>
              </div>
              ))}
           
              </div>
              </div>
        </ScrollToTop>
      
    )
  }
  
  export default Speech
  