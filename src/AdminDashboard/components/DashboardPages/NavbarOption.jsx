import { useEffect, useState } from "react";
import { createHeaderIcon, deleteHeaderIcon, readAllHeaderIcon, updateHeaderIcon } from "../../../services/index/headerPost";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import toast from "react-hot-toast";
import { deleteTeacher } from "../../../services/index/techersPost";
import NavbarMainOption from "./NavbarMainOption";

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
          // Fetch the teacher's information based on the iconId
          const token = "your_token_here"; // Replace with actual token retrieval logic
          const teacherInfo = await readAllHeaderIcon(token, iconId); // Implement a function to fetch teacher information
          reset(teacherInfo); // Assuming reset is a function to reset the form with new values
          setSelectedIconId(iconId); // Set the selectediconId when update button is clicked
        } catch (error) {
          console.error(error.message);
          // Handle error (e.g., show error message)
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
            console.log(data)
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
            <NavbarMainOption></NavbarMainOption>
            <form  onSubmit={handleSubmit(onSubmit)}>
     
     <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
       <div >
          <label className="font-semibold md:text-md text-sm">social link:</label>
        <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("url", { required: true })} label="link" />
       </div>
       <div>
       <label className="font-semibold md:text-md text-sm">social Network:</label>
     <select {...register("icon", { required: true })}>
       <option value="facebook">facebook</option>
       <option value="email">email</option>
       <option value="linkedin">linkedin</option>
       <option value="youtube">youtube</option>
       <option value="whatsapp">whatsapp</option>
     </select>
       </div>
     </div>

     <button className="md:ml-0 ml-4 md:px-2 px-1 rounded md:py-2 py-1 md:mt-4 my-2 md:w-[200px] w-[140px] hover:bg-white gap-2 border border-[#1EB2A6] hover:text-[#1EB2A6] bg-[#1EB2A6] text-white md:text-md text-sm flex justify-center items-center" 
      type="submit">{selectedIconId ? "Update social Option" : "Create social Option"}</button>
    
   </form>
   <table class="min-w-full divide-y divide-gray-200 my-6">
    <thead>
        <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">social name</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">link</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
        </tr>
    </thead>
    {icon.map((i, index) => ( 
    <tbody key={index} class="bg-white divide-y divide-gray-200">
        <tr>
            <td class="px-6 py-4 whitespace-nowrap">{i.icon}</td>
            <td class="px-6 py-4 whitespace-nowrap">{i.url}</td>
            <button onClick={() => handleUpdate(i._id)} class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</button>
                <button onClick={() => handleRemove(i._id)} class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
        </tr>
    </tbody>
    ))} 
</table>
        </div>
    );
}

export default NavbarOption;
