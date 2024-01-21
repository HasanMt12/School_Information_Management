import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createSpeech, deleteSpeech, readAllSpeech, updateSpeech } from "../../../services/index/speechPost";
import { useForm } from "react-hook-form";
import { Avatar, Input, ScrollShadow, Textarea } from "@nextui-org/react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const GoverningSpeech = () => {
      const { register, handleSubmit, reset } = useForm(); 
    const [speech, setSpeech] = useState([]);
   const [selectedSpeechId, setSelectedSpeechId] = useState(null);

   const refetchSpeech = async () => {
     try {
       const { data } = await readAllSpeech();
       setSpeech(data.data);
     } catch (error) {
       console.error(error);
     }
   };
    const onSubmit = async (data) => {
        try {
          const token = "your_token_here"; // Replace with actual token retrieval logic
          const imgbbApiKey = '2a78098a00ee689391905aab5c227fd8';
            
            if (data.image[0] instanceof File) {
            const imgbbResponse = await uploadImageToImgBB(data.image[0], imgbbApiKey);
            data.image = imgbbResponse.data.url;
            }
          if (selectedSpeechId) {
            const result = await updateSpeech(token, selectedSpeechId, data); // Call updateTeacher function with selectedNavbarId and data
            toast.success('navbar main updated successfully!');
          } else {
            // Create new teacher
            const result = await createSpeech({ token, formData: data });
            toast.success('navbar main created successfully!');
          }
          reset(); // Reset the form after submission
          refetchSpeech()
        } catch (error) {
          console.error(error.message);
        }
      };
      const handleUpdate = async (iconId) => {
        try {
          // Fetch the teacher's information based on the iconId
          const token = "your_token_here"; // Replace with actual token retrieval logic
          const teacherInfo = await readAllSpeech(token, iconId); // Implement a function to fetch teacher information
          reset(teacherInfo); // Assuming reset is a function to reset the form with new values
          setSelectedSpeechId(iconId); // Set the selectedNavbarId when update button is clicked
        } catch (error) {
          console.error(error.message);
          // Handle error (e.g., show error message)
        }
      };
    const handleRemove = async (iconId) => {
        try {
          const token = "your_token_here"; // Replace with actual token retrieval logic
          await deleteSpeech(token, iconId); // Call deleteTeacher function with iconId
          toast.success('Teacher removed successfully!');
          refetchSpeech()
        } catch (error) {
          console.error(error.message);
        }
      };
      const uploadImageToImgBB = async (imageFile, apiKey) => {
        try {
          const formData = new FormData();
          formData.append('image', imageFile);
      
          const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
            method: 'POST',
            body: formData
          });
      
          const data = await response.json();
          return data;
        } catch (error) {
          throw new Error(error.message);
        }
      };

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
      const color = "primary";
    return (
        <div>
          <h2 className="text-gray-900 border-l-4 border-[#1eb2a6] pl-2 lg:text-2xl md:text-xl text-lg font-semibold capitalizemy-4">Authorities Speech</h2>
             <h2 className="text-gray-900  mx-auto md:w-[30%] text-center w-[50%] my-6 border-x-2 border-[#1eb2a6] px-2 lg:text-2xl md:text-xl text-lg font-semibold ">Authorities Speech Form</h2> 
            <form  onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md md:mb-20 mb-10 md:px-3 px-1 md:py-3 py-1">
     
     <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
       <div >
          <label className="font-semibold md:text-md text-sm">Speech title</label>
        <Input className="max-h-12 z-20"  variant="bordered" color={color} radius="sm" size="md" {...register("title", { required: true })} label="speech title" />
       </div>
       <div>
         <label className="font-semibold md:text-md text-sm">Dialogue</label>
         <Textarea  variant="bordered" color={color} radius="sm" size="md" {...register("dialogue")} label="Dialogue" />
        </div>
        <div>
         <label className="font-semibold md:text-md text-sm">Dialogue2</label>
         <Textarea  variant="bordered" color={color} radius="sm" size="md" {...register("dialogue2")} label="Dialogue" />
        </div>
        <div>
         <label className="font-semibold md:text-md text-sm">Dialogue3</label>
         <Textarea  variant="bordered" color={color} radius="sm" size="md" {...register("dialogue3")} label="Dialogue" />
        </div>
        <div>
        <label className="font-semibold md:text-md text-sm">image:</label>
      <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md" {...register("image", { required: true })} type="file" accept="image/*" />
        </div>
     </div>

     <button className="md:ml-0 ml-4 md:px-2 px-1 rounded md:py-2 py-1 md:mt-4 my-2 md:w-[200px] w-[140px] hover:bg-white gap-2 border border-[#1EB2A6] hover:text-[#1EB2A6] bg-[#1EB2A6] text-white md:text-md text-sm flex justify-center items-center" 
      type="submit">{selectedSpeechId ? "Update speech" : "Create speech"}</button>
    
   </form>

   <h2 className="text-gray-900 mx-auto md:w-[30%]  w-[70%] text-center my-6 border-x-2 border-[#1eb2a6] px-2 lg:text-2xl  capitalize md:text-xl text-lg font-semibold ">Authorities Speech table</h2> 
<div className="w-full overflow-x-scroll">
   <table className="w-full divide-y divide-[#457B9D] my-6 bg-white shadow-md">
    <thead className="bg-[#DCE8F5] text-[#457B9D]">
        <tr>
        <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">photo</th>
            <th className="px-20  py-3 text-center md:text-sm text-xs font-semibold  uppercase tracking-wider">speech title</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">Dialogue</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">Dialogue2</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">Dialogue3</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">Action</th>
        </tr>
    </thead>

    {speech && speech?.map((i, index) => ( 
    <tbody key={index} className="w-full divide-y divide-[#457B9D] my-6">
        <tr>
        <td className="px-6 py-4"> <Avatar src={i.image} /></td>
            <td className="px-6 py-4 md:w-[300px] w-[150px]">{i.title}</td>
            <td className="px-6 py-4 ">
            <ScrollShadow hideScrollBar className="md:w-[300px] w-[150px] h-[100px] text-black">
      <div>
        {i.dialogue}
      </div>
    </ScrollShadow></td>
    <td className="px-6 py-4 "> <ScrollShadow hideScrollBar className="md:w-[300px] w-[150px] h-[100px] text-black">
      <div>
        {i.dialogue2}
      </div>
    </ScrollShadow></td>
    <td className="px-6 py-4 ">   <ScrollShadow hideScrollBar className="md:w-[300px] w-[150px] h-[100px] text-black">
      <div>
        {i.dialogue2}
      </div>
    </ScrollShadow></td>
           
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
};

export default GoverningSpeech;