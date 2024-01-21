import { useEffect, useState } from "react";
import { createHeaderIcon, deleteHeaderIcon, readAllHeaderIcon, updateHeaderIcon } from "../../../services/index/headerPost";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import toast from "react-hot-toast";
import NavbarMainOption from "./NavbarMainOption";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { createHeadline, deleteHeadline, readAllHeadline, updateHeadline } from "../../../services/index/sectionHeadline";


const Headline = () => {
    const { register, handleSubmit, reset } = useForm(); 
    const [headline, setHeadline] = useState([]);
   const [selectedHeadlineId, setSelectedHeadlineId] = useState(null);

   const refetchHeadline = async () => {
     try {
       const { data } = await readAllHeadline();
       setHeadline(data.data);
     } catch (error) {
       console.error(error);
     }
   };
    const onSubmit = async (data) => {
        try {
          const token = "your_token_here"; // Replace with actual token retrieval logic
          
          if (selectedHeadlineId) {
            const result = await updateHeadline(token, selectedHeadlineId, data); // Call updateTeacher function with selectedHeadlineId and data
            toast.success('Headline updated successfully!');
          } else {
            // Create new teacher
            const result = await createHeadline({ token, formData: data });
            toast.success('Headlin created successfully!');
          }
          reset(); // Reset the form after submission
          refetchHeadline()
        } catch (error) {
          console.error(error.message);
        }
      };
      const handleUpdate = async (HeadlineId) => {
        try {
          const token = "your_token_here"; // Replace with actual token retrieval logic
          const teacherInfo = await readAllHeaderIcon(token, HeadlineId); // Implement a function to fetch teacher information
          reset(teacherInfo); // Assuming reset is a function to reset the form with new values
          setSelectedHeadlineId(HeadlineId); // Set the selectedHeadlineId when update button is clicked
        } catch (error) {
          console.error(error.message);
        }
      };
    const handleRemove = async (HeadlineId) => {
        try {
          const token = "your_token_here"; // Replace with actual token retrieval logic
          await deleteHeadline(token, HeadlineId); // Call deleteTeacher function with HeadlineId
          toast.success('Headline removed successfully!');
          refetchHeadline()
        } catch (error) {
          console.error(error.message);
        }
      };
      useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await readAllHeadline();
            // console.log(data)
            setHeadline(data.data);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, []);
      const color = "primary";
    return (
        <div>
            <h2 className="text-gray-900 border-l-4 border-[#1eb2a6] pl-2 lg:text-2xl md:text-xl text-lg font-semibold capitalizemy-4">Homepage Headline manage</h2> 

        <h2 className="text-gray-900 mx-auto md:w-[40%] md:mt-20 mt-10 w-[50%] text-center my-6 border-x-2 border-[#1eb2a6] px-2 lg:text-2xl md:text-xl text-lg font-semibold ">Home Page Headline Form</h2> 
            <form  onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md md:mb-20 mb-10 md:px-3 px-1 md:py-3 py-1">
     
     <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
       <div >
          <label className="font-semibold md:text-md text-sm">Home Page Headline:</label>
        <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("title", { required: true })} label="Write Headline" />
       </div>
       <div>
        <div className="flex flex-col justify-center items-center">
<label className="font-semibold md:text-md text-sm ">Home Page Headline Select:</label>
       <label className="font-semibold md:text-sm text-red-500 text-xs">Select an option or data won't be saved.*</label>
        
       
     <select {...register("index", { required: true })} className="bg-[#DCE8F5] text-[#457B9D] cursor-pointer font-semibold">
       <option value="speech" className="bg-[#DCE8F5] text-[#457B9D] cursor-pointer font-semibold">Governing speech</option>
       <option value="governingBody" className="bg-[#DCE8F5] text-[#457B9D] cursor-pointer font-semibold" >Government Body</option>
       <option value="school" className="bg-[#DCE8F5] text-[#457B9D] cursor-pointer font-semibold">School facilities</option>
       <option value="community" className="bg-[#DCE8F5] text-[#457B9D] cursor-pointer font-semibold">School Community</option>
       <option value="result" className="bg-[#DCE8F5] text-[#457B9D] cursor-pointer font-semibold">School Result</option>
       <option value="gallery" className="bg-[#DCE8F5] text-[#457B9D] cursor-pointer font-semibold">School gallery</option>
       <option value="event" className="bg-[#DCE8F5] text-[#457B9D] cursor-pointer font-semibold">School Events</option>
     </select>
     </div>
       </div>
     </div>

     <button className="md:ml-0 ml-4 md:px-2 px-1 rounded md:py-2 py-1 md:mt-4 my-2 md:w-[200px] w-[140px] hover:bg-white gap-2 border border-[#1EB2A6] hover:text-[#1EB2A6] bg-[#1EB2A6] text-white md:text-md text-sm flex justify-center items-center" 
      type="submit">{selectedHeadlineId ? "Update Headline" : "Create Headline"}</button>
    
          </form>
 
<h2 className="text-gray-900 mx-auto md:w-[40%]  w-[70%] text-center my-6 border-x-2 border-[#1eb2a6] px-2 lg:text-2xl md:text-xl text-lg font-semibold ">Home Page Headline Table</h2> 
    <div className="w-full overflow-x-scroll">
        <table className="w-full divide-y divide-[#457B9D] my-6 bg-white shadow-lg">
    <thead className="bg-[#DCE8F5] text-[#457B9D]">
        <tr>
        <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">Headline section</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">Headline</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">Action</th>
        </tr>
    </thead>

    {headline && headline?.map((i, index) => ( 
    <tbody key={index} className="w-full divide-y divide-[#457B9D] my-6">
        <tr>
            <td className="px-6 py-4 ">{i.index}</td>
            <td className="px-6 py-4 ">{i.title}</td>
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

export default Headline;
