import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { createinsightCommunity, deleteinsightCommunity, readAllinsightCommunity, updateinsightCommunity } from "../../../services/index/insightCommunity";



const InsightCommunity = () => {
    const { register, handleSubmit, reset } = useForm(); 
    const [insight, setInsight] = useState([]);
   const [selectedinsightId, setSelectedinsightId] = useState(null);

   const refetchInsightCommunity = async () => {
     try {
       const { data } = await readAllinsightCommunity();
       setInsight(data.data);
     } catch (error) {
       console.error(error);
     }
   };
    const onSubmit = async (data) => {
        try {
          const token = "your_token_here"; // Replace with actual token retrieval logic
          
          if (selectedinsightId) {
            const result = await updateinsightCommunity(token, selectedinsightId, data); // Call updateTeacher function with selectedinsightId and data
            toast.success('insight Community updated successfully!');
          } else {
            // Create new teacher
            const result = await createinsightCommunity({ token, formData: data });
            toast.success('insight Community created successfully!');
          }
          reset(); // Reset the form after submission
          refetchInsightCommunity()
        } catch (error) {
          console.error(error.message);
        }
      };
      const handleUpdate = async (insightId) => {
        try {
          const token = "your_token_here"; // Replace with actual token retrieval logic
          const teacherInfo = await readAllinsightCommunity(token, insightId); // Implement a function to fetch teacher information
          reset(teacherInfo); // Assuming reset is a function to reset the form with new values
          setSelectedinsightId(insightId); // Set the selectedinsightId when update button is clicked
        } catch (error) {
          console.error(error.message);
        }
      };
    const handleRemove = async (insightId) => {
        try {
          const token = "your_token_here"; // Replace with actual token retrieval logic
          await deleteinsightCommunity(token, insightId); // Call deleteTeacher function with insightId
          toast.success('insight Community removed successfully!');
          refetchInsightCommunity()
        } catch (error) {
          console.error(error.message);
        }
      };
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
      const color = "primary";
    return (
        <div>
            <h2 className="text-gray-900 border-l-4 border-[#1eb2a6] pl-2 lg:text-2xl md:text-xl text-lg font-semibold capitalizemy-4">School Community manage</h2> 
          

        <h2 className="text-gray-900 mx-auto md:w-[30%] md:mt-20 mt-10 w-[50%] text-center my-6 border-x-2 border-[#1eb2a6] px-2 lg:text-2xl md:text-xl text-lg font-semibold ">School community Form</h2> 
            <form  onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md md:mb-20 mb-10 md:px-3 px-1 md:py-3 py-1">
     
     <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
        
     <div>
        <label className="font-semibold md:text-md text-sm">Community Name:</label>
      <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("communityName")} type="text" label="Community Name" />
        </div>

       <div>
        <label className="font-semibold md:text-md text-sm">Community Quantities:</label>
      <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("communityQuantity")} type="number" label="community Quantities" />
        </div>

       <div>
        <label className="font-semibold md:text-md text-sm">Men:</label>
      <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("boys")} type="number" label="Community gendar" />
        </div>
        <div>
        <label className="font-semibold md:text-md text-sm">Women:</label>
      <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("girls")} type="number" label="Community gendar" />
        </div>
     </div>

     <button className="md:ml-0 ml-4 md:px-2 px-1 rounded md:py-2 py-1 md:mt-4 my-2 md:w-[200px] w-[140px] hover:bg-white gap-2 border border-[#1EB2A6] hover:text-[#1EB2A6] bg-[#1EB2A6] text-white md:text-md text-sm flex justify-center items-center" 
      type="submit">{selectedinsightId ? "Update Community" : "Create Community"}</button>
    
          </form>
 
<h2 className="text-gray-900 mx-auto md:w-[30%]  w-[70%] text-center my-6 border-x-2 border-[#1eb2a6] px-2 lg:text-2xl  capitalize md:text-xl text-lg font-semibold ">School Communities</h2> 
    <div className="w-full overflow-x-scroll">
        <table className="w-full divide-y divide-[#457B9D] my-6 bg-white shadow-lg">
    <thead className="bg-[#DCE8F5] text-[#457B9D]">
        <tr>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">Quantities</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">mens</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">womens</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">Actions</th>
        </tr>
    </thead>

    {insight && insight?.map((i, index) => ( 
    <tbody key={index} className="w-full divide-y divide-[#457B9D] my-6">
        <tr>
            <td className="px-6 py-4 ">{i.communityName}</td>
            <td className="px-6 py-4 ">{i.communityQuantity}</td>
            <td className="px-6 py-4 ">{i.boys}</td>
            <td className="px-6 py-4 ">{i.girls}</td>
       <td className="py-4 flex justify-start items-center gap-1">
         <button onClick={() => handleUpdate(i._id)} className="text-slate-800 hover:bg-slate-800 hover:text-white border-solid border-[1px] rounded-md px-2 py-1 border-slate-800 flex justify-center items-center gap-1 ">
        <FaEdit /> Edit 
      </button>
         <button onClick={() => handleRemove(i._id)} className="text-[#e53935] hover:text-white hover:bg-[#e53935] border-solid border-[1px] rounded-md px-2 py-1 border-[#e53935] flex justify-center items-center gap-1 ">
        <MdDeleteForever /> Delete 
      </button>
        </td> 
     
        </tr>
    </tbody>
    ))} 
        </table>
</div>
        </div>
    );
}

export default InsightCommunity;
