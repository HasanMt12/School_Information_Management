import { useEffect, useState } from "react";
import { createNavbarIcon, deleteNavbarIcon, readAllNavbarIcon, updateNavbarIcon } from "../../../services/index/navbarPost";
import { useForm } from "react-hook-form";
import { Avatar, Input } from "@nextui-org/react";
import toast from "react-hot-toast";
import { deleteTeacher } from "../../../services/index/techersPost";

const NavbarMainOption = () => {
    const { register, handleSubmit, reset } = useForm(); 
    const [nav, setNav] = useState([]);
   const [selectedNavbarId, setselectedNavbarId] = useState(null);

   const refetchNavbar = async () => {
     try {
       const { data } = await readAllNavbarIcon();
       setNav(data.data);
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
          if (selectedNavbarId) {
            const result = await updateNavbarIcon(token, selectedNavbarId, data); // Call updateTeacher function with selectedNavbarId and data
            toast.success('navbar main updated successfully!');
          } else {
            // Create new teacher
            const result = await createNavbarIcon({ token, formData: data });
            toast.success('navbar main created successfully!');
          }
          reset(); // Reset the form after submission
          refetchNavbar()
        } catch (error) {
          console.error(error.message);
        }
      };
      const handleUpdate = async (iconId) => {
        try {
          // Fetch the teacher's information based on the iconId
          const token = "your_token_here"; // Replace with actual token retrieval logic
          const teacherInfo = await readAllNavbarIcon(token, iconId); // Implement a function to fetch teacher information
          reset(teacherInfo); // Assuming reset is a function to reset the form with new values
          setselectedNavbarId(iconId); // Set the selectedNavbarId when update button is clicked
        } catch (error) {
          console.error(error.message);
          // Handle error (e.g., show error message)
        }
      };
    const handleRemove = async (iconId) => {
        try {
          const token = "your_token_here"; // Replace with actual token retrieval logic
          await deleteNavbarIcon(token, iconId); // Call deleteTeacher function with iconId
          toast.success('Teacher removed successfully!');
          refetchNavbar()
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
            const { data } = await readAllNavbarIcon();
            console.log(data)
            setNav(data.data);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, []);
      const color = "primary";
    return (
        <div>
            header
            <form  onSubmit={handleSubmit(onSubmit)}>
     
     <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
       <div >
          <label className="font-semibold md:text-md text-sm">School name</label>
        <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("schoolName", { required: true })} label="school name" />
       </div>
       <div>
         <label className="font-semibold md:text-md text-sm">EIIN NUMBER:</label>
         <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("eiin")} label="Phone" />
        </div>
        <div>
        <label className="font-semibold md:text-md text-sm">logo:</label>
      <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("image", { required: true })} type="file" accept="image/*" />
        </div>
     </div>

     <button className="md:ml-0 ml-4 md:px-2 px-1 rounded md:py-2 py-1 md:mt-4 my-2 md:w-[200px] w-[140px] hover:bg-white gap-2 border border-[#1EB2A6] hover:text-[#1EB2A6] bg-[#1EB2A6] text-white md:text-md text-sm flex justify-center items-center" 
      type="submit">{selectedNavbarId ? "Update social Option" : "Create social Option"}</button>
    
   </form>
   <table class="min-w-full divide-y divide-gray-200 my-6">
    <thead>
        <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">logo</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">school name</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EIIN Number</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
        </tr>
    </thead>
    {nav.map((i, index) => ( 
    <tbody key={index} class="bg-white divide-y divide-gray-200">
        <tr>
        <td class="px-6 py-4 whitespace-nowrap"> <Avatar src={i.image} /></td>
            <td class="px-6 py-4 whitespace-nowrap">{i.schoolName}</td>
            <td class="px-6 py-4 whitespace-nowrap">{i.eiin}</td>
            <button onClick={() => handleUpdate(i._id)} class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</button>
                <button onClick={() => handleRemove(i._id)} class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
        </tr>
    </tbody>
    ))} 
</table>
        </div>
    );
}

export default NavbarMainOption;
