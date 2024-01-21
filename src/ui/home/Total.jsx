
import { MdBoy  , MdGirl  } from "react-icons/md";
import { readAllinsightCommunity } from "../../services/index/insightCommunity";
import { useEffect, useState } from "react";
const Total = () => {
    const [insight, setInsight] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await readAllinsightCommunity();
            //console.log(data)
            setInsight(data.data);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, []);
  return (
    <div> 

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 lg:mx-6 md:mx-4 mx-2 lg:my-8 md:my-6 my-4">
      
        {insight && insight?.map((i, index) => ( 
            <div key={index} className="border border-[#1eb2a6] rounded py-2">
                    <h2 className="lg:text-4xl text-[#1eb2a6] text-center md:text-3xl text-2xl font-semibold">{i.communityQuantity}</h2>
                    <h2 className="font-bold md:text-2xl text-center text-xl md:my-4 my-2 text-gray-800">{i.communityName}</h2>
                <div className="flex justify-center items-center gap-2">
                    <div className="flex justify-start items-center gap-1 font-semibold md:text-md text-sm">
                    <MdBoy className="text-lg text-[#1eb2a6]" /> Boys: {i.boys}
                    </div>
                    <h2 className="text-[#1eb2a6]">|</h2>
                    <div className="flex justify-start items-center gap-1 font-semibold md:text-md text-sm">
                    <MdGirl className="text-lg text-[#1eb2a6]" /> Girl: {i.girls}
                    </div>
                </div>
            </div>
        ))}
            

       
        </div>
    </div>
  )
}
export default Total;