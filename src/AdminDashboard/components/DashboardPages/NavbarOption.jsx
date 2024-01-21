import { useEffect, useState } from "react";
import { createHeaderIcon, deleteHeaderIcon, readAllHeaderIcon, updateHeaderIcon } from "../../../services/index/headerPost";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import toast from "react-hot-toast";
import NavbarMainOption from "./NavbarMainOption";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";


const NavbarOption = () => {
    const { register, handleSubmit, reset } = useForm(); 
    const [icon, setIcons] = useState([]);
   const [selectedIconId, setSelectedIconId] = useState(null);

   const refetchHeader = async () => {
     try {
       const { data } = await readAllHeaderIcon();
       setIcons(data.data);
     } catch (error) {
       console.error(error);
     }
   };
    const onSubmit = async (data) => {
        try {
          const token = "your_token_here"; // Replace with actual token retrieval logic
          
          if (selectedIconId) {
            const result = await updateHeaderIcon(token, selectedIconId, data); // Call updateTeacher function with selectediconId and data
            toast.success('Teacher updated successfully!');
          } else {
            // Create new teacher
            const result = await createHeaderIcon({ token, formData: data });
            toast.success('Teacher created successfully!');
          }
          reset(); // Reset the form after submission
          refetchHeader()
        } catch (error) {
          console.error(error.message);
        }
      };
      const handleUpdate = async (iconId) => {
        try {
          const token = "your_token_here"; // Replace with actual token retrieval logic
          const teacherInfo = await readAllHeaderIcon(token, iconId); // Implement a function to fetch teacher information
          reset(teacherInfo); // Assuming reset is a function to reset the form with new values
          setSelectedIconId(iconId); // Set the selectediconId when update button is clicked
        } catch (error) {
          console.error(error.message);
        }
      };
    const handleRemove = async (iconId) => {
        try {
          const token = "your_token_here"; // Replace with actual token retrieval logic
          await deleteHeaderIcon(token, iconId); // Call deleteTeacher function with iconId
          toast.success('Teacher removed successfully!');
          refetchHeader()
        } catch (error) {
          console.error(error.message);
        }
      };
      useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await readAllHeaderIcon();
            //console.log(data)
            setIcons(data.data);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, []);
      const color = "primary";
    return (
        <div>
            <h2 className="text-gray-900 border-l-4 border-[#1eb2a6] pl-2 lg:text-2xl md:text-xl text-lg font-semibold capitalizemy-4">Navbar content manage</h2> 
            <NavbarMainOption></NavbarMainOption>

        <h2 className="text-gray-900 mx-auto md:w-[30%] md:mt-20 mt-10 w-[50%] text-center my-6 border-x-2 border-[#1eb2a6] px-2 lg:text-2xl md:text-xl text-lg font-semibold ">social media Form</h2> 
            <form  onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md md:mb-20 mb-10 md:px-3 px-1 md:py-3 py-1">
     
     <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
       <div >
          <label className="font-semibold md:text-md text-sm">social link:</label>
        <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("url", { required: true })} label="link" />
       </div>
       <div>
       <label className="font-semibold md:text-md text-sm">social Network:</label>
     <select {...register("icon", { required: true })} className="bg-[#DCE8F5] text-[#457B9D] cursor-pointer font-semibold">
       <option value="facebook" className="bg-[#DCE8F5] text-[#457B9D] cursor-pointer font-semibold">facebook</option>
       <option value="email" className="bg-[#DCE8F5] text-[#457B9D] cursor-pointer font-semibold" >email</option>
       <option value="linkedin" className="bg-[#DCE8F5] text-[#457B9D] cursor-pointer font-semibold">linkedin</option>
       <option value="youtube" className="bg-[#DCE8F5] text-[#457B9D] cursor-pointer font-semibold">youtube</option>
       <option value="whatsapp" className="bg-[#DCE8F5] text-[#457B9D] cursor-pointer font-semibold">whatsapp</option>
     </select>
       </div>
     </div>

     <button className="md:ml-0 ml-4 md:px-2 px-1 rounded md:py-2 py-1 md:mt-4 my-2 md:w-[200px] w-[140px] hover:bg-white gap-2 border border-[#1EB2A6] hover:text-[#1EB2A6] bg-[#1EB2A6] text-white md:text-md text-sm flex justify-center items-center" 
      type="submit">{selectedIconId ? "Update social Option" : "Create social Option"}</button>
    
          </form>
 
<h2 className="text-gray-900 mx-auto md:w-[30%]  w-[70%] text-center my-6 border-x-2 border-[#1eb2a6] px-2 lg:text-2xl  capitalize md:text-xl text-lg font-semibold ">social media option</h2> 
    <div className="w-full overflow-x-scroll">
        <table className="w-full divide-y divide-[#457B9D] my-6 bg-white shadow-lg">
    <thead className="bg-[#DCE8F5] text-[#457B9D]">
        <tr>
        <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">social name</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">Link</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">Action</th>
        </tr>
    </thead>

    {icon && icon?.map((i, index) => ( 
    <tbody key={index} className="w-full divide-y divide-[#457B9D] my-6">
        <tr>
            <td className="px-6 py-4 ">{i.icon}</td>
            <td className="px-6 py-4 ">{i.url}</td>
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

export default NavbarOption;
