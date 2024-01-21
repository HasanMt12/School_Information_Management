import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {  Input } from "@nextui-org/react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { createNotices, deleteNotices, readAllNotices, updateNotices } from "../../../services/index/noticePost";
import samplePDF from "../../../assets/demo.pdf"

const Notice = () => {
    const { register, handleSubmit, reset } = useForm(); 
    const [notice, setNotice] = useState([]);
   const [selectedNoticeId, setselectedNoticeId] = useState(null);

   const refetchNotice = async () => {
     try {
       const { data } = await readAllNotices();
       setNotice(data.data);
     } catch (error) {
       console.error(error);
     }
   };
   const onSubmit = async (data) => {
    try {
      const token = "your_token_here"; // Replace with actual token retrieval logic
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("pdf", data.pdf[0]);
  
      if (selectedNoticeId) {
        const result = await updateNotices(token, selectedNoticeId, formData);
        toast.success("Notice updated successfully!");
      } else {
        const result = await createNotices({ token, formData });
        toast.success("Notice created successfully!");
      }
  
      reset();
      refetchNotice();
    } catch (error) {
      console.error(error.message);
    }
  };
  
      const handleUpdate = async (iconId) => {
        try {
          // Fetch the notice's information based on the iconId
          const token = "your_token_here"; // Replace with actual token retrieval logic
          const noticeInfo = await readAllNotices(token, iconId); // Implement a function to fetch notice information
          reset(noticeInfo); // Assuming reset is a function to reset the form with new values
          setselectedNoticeId(iconId); // Set the selectedNoticeId when update button is clicked
        } catch (error) {
          console.error(error.message);
          // Handle error (e.g., show error message)
        }
      };
    const handleRemove = async (iconId) => {
        try {
          const token = "your_token_here"; // Replace with actual token retrieval logic
          await deleteNotices(token, iconId); // Call deletenotice function with iconId
          toast.success('notice removed successfully!');
          refetchNotice()
        } catch (error) {
          console.error(error.message);
        }
      };
   
      useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await readAllNotices();
          console.log(data.data)
            setNotice(data.data);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, []);


     
      const color = "primary";
    return (
        <div>
              <h2 className="text-gray-900 mx-auto md:w-[30%]  w-[70%] text-center my-6 border-x-2 border-[#1eb2a6] px-2 lg:text-2xl  capitalize md:text-xl text-lg font-semibold ">Navbar content Form</h2> 
            <form  onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md md:mb-20 mb-10 md:px-3 px-1 md:py-3 py-1">
     
     <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
       <div >
          <label className="font-semibold md:text-md text-sm">Title</label>
        <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("title", { required: true })} label="title" />
       </div>
       <div>
         <label className="font-semibold md:text-md text-sm">description:</label>
         <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("description")} label="description" />
        </div>
        <div>
        <label className="font-semibold md:text-md text-sm">notice:</label>
      <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("pdf", { required: true })} type="file" accept="pdf/*" />
        </div>
     </div>

     <button className="md:ml-0 ml-4 md:px-2 px-1 rounded md:py-2 py-1 md:mt-4 my-2 md:w-[200px] w-[140px] hover:bg-white gap-2 border border-[#1EB2A6] hover:text-[#1EB2A6] bg-[#1EB2A6] text-white md:text-md text-sm flex justify-center items-center" 
      type="submit">{selectedNoticeId ? "Update notice" : "Create notice"}</button>
    
   </form>
       <h2 className="text-gray-900 mx-auto md:w-[30%]  w-[70%] text-center my-6 border-x-2 border-[#1eb2a6] px-2 lg:text-2xl  capitalize md:text-xl text-lg font-semibold ">Navbar content Table</h2> 
 <div className="w-full overflow-x-scroll">
   <table className="w-full divide-y divide-[#457B9D] my-6 bg-white shadow-lg">
    <thead className="bg-[#DCE8F5] text-[#457B9D]">
        <tr>
        <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold uppercase tracking-wider">PDF notice</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold uppercase tracking-wider">Action</th>
        </tr>
    </thead>
    {notice && notice?.map((i, index) => ( 
    <tbody key={index} className="w-full divide-y divide-[#457B9D] my-6">
        <tr>
        
            <td className="px-6 py-4 ">{i.title}</td>
            <td className="px-6 py-4 ">{i.description}</td>
            <td className="px-6 py-4">
        
{/* please replace carefuly http://localhost:5173/demo-notice to http://localhost:3000/${i.pdf}*/}
            <a href={`http://localhost:5173/demo-notice`} target="_blank" rel="noopener noreferrer" className="hover:text-slate-800 bg-slate-800 text-white border-solid border-[1px] rounded-md px-2 py-1 border-slate-800 hover:bg-white ">
              Open PDF
            </a>

            </td>
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

export default Notice;
