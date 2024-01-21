import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {  Input } from "@nextui-org/react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { createsliderPhoto, deletesliderPhoto, readAllsliderPhoto, updatesliderPhoto } from "../../../services/index/sliderPhoto";
import { creategalleryPhoto, deletegalleryPhoto, readAllgalleryPhoto, updategalleryPhoto } from "../../../services/index/GalleryPhoto";


const GalleryPost = () => {
      const { register, handleSubmit, reset } = useForm(); 
    const [speech, setSpeech] = useState([]);
   const [selectedsliderId, setSelectedsliderId] = useState(null);

   const refetchSlider = async () => {
     try {
       const { data } = await readAllgalleryPhoto();
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
          if (selectedsliderId) {
            const result = await updategalleryPhoto(token, selectedsliderId, data); // Call updateTeacher function with selectedNavbarId and data
            toast.success('photo updated successfully!');
          } else {
            // Create new teacher
            const result = await creategalleryPhoto({ token, formData: data });
            toast.success('photo created successfully!');
          }
          reset(); // Reset the form after submission
          refetchSlider()
        } catch (error) {
          console.error(error.message);
        }
      };
      const handleUpdate = async (sliderId) => {
        try {
        
          const token = "your_token_here"; // Replace with actual token retrieval logic
          const teacherInfo = await readAllgalleryPhoto(token, sliderId); // Implement a function to fetch teacher information
          reset(teacherInfo); // Assuming reset is a function to reset the form with new values
          setSelectedsliderId(sliderId); // Set the selectedNavbarId when update button is clicked
        } catch (error) {
          console.error(error.message);
          // Handle error (e.g., show error message)
        }
      };
    const handleRemove = async (sliderId) => {
        try {
          const token = "your_token_here"; // Replace with actual token retrieval logic
          await deletegalleryPhoto(token, sliderId); // Call deleteTeacher function with sliderId
          toast.success('photo removed successfully!');
          refetchSlider()
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
            const { data } = await readAllgalleryPhoto();
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
           <h2 className="text-gray-900 border-l-4 border-[#1eb2a6] pl-2 lg:text-2xl md:text-xl text-lg font-semibold capitalizemy-4">Gallery Section</h2>
             <h2 className="text-gray-900  mx-auto md:w-[30%] text-center w-[50%] my-6 border-x-2 border-[#1eb2a6] px-2 lg:text-2xl md:text-xl text-lg font-semibold ">Gallery Form</h2> 

            <form  onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md md:mb-20 mb-10 md:px-3 px-1 md:py-3 py-1">
     
     <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
       <div >
          <label className="font-semibold md:text-md text-sm"> Youtub Link</label>
        <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md" {...register("youtube", { required: true })} label="youtube" />
       </div>
       
        <div>
        <label className="font-semibold md:text-md text-sm">image:</label>
      <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md" {...register("image", { required: true })} type="file" accept="image/*" />
        </div>
     </div>

     <button className="md:ml-0 ml-4 md:px-2 px-1 rounded md:py-2 py-1 md:mt-4 my-2 md:w-[200px] w-[140px] hover:bg-white gap-2 border border-[#1EB2A6] hover:text-[#1EB2A6] bg-[#1EB2A6] text-white md:text-md text-sm flex justify-center items-center" 
      type="submit">{selectedsliderId ? "Update gallery photo" : "Create gallery photo"}</button>
    
   </form>
  <h2 className="text-gray-900 mx-auto md:w-[30%]  w-[70%] text-center mt-6 border-x-2 border-[#1eb2a6] px-2 lg:text-2xl md:text-xl text-lg font-semibold ">Gallery Images</h2> 
   <div className="w-full overflow-x-scroll">
   <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 mx-auto max-w-[400px] md:max-w-[95%] place-items-center">
   {speech && speech?.map((i, index) => (
        <div key={index}>
            <img className="hover:opacity-75 w-full object-cover object-center rounded-sm" src={i.image}/>
            <h2 className="text-center md:text-sm text-xs font-semibold md:my-2 my-1">{i.title}</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-1">
            <button onClick={() => handleUpdate(i._id)} className="text-slate-800 hover:bg-slate-800 hover:text-white border-solid border-[1px] rounded-md px-2 py-1 border-slate-800 flex justify-center items-center gap-1 w-full">
                    <FaEdit /> Edit 
                </button>
                    <button onClick={() => handleRemove(i._id)} className="text-[#e53935] hover:text-white hover:bg-[#e53935] border-solid border-[1px] rounded-md px-2 py-1 border-[#e53935] flex justify-center items-center gap-1 w-full">
                    <MdDeleteForever /> Delete 
                </button>
            </div>
        </div>

   
    ))} 
    </div>
</div>
        </div>
    );
};

export default GalleryPost;


