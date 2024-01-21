import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";
import {  deleteNewsLetter, readAllNewsLetter } from "../../../services/index/newsLetterPost";


const NewsLetter = () => {
    const { register, handleSubmit, reset } = useForm(); 
     const [newsLetter, setNewsLetter] = useState([]);

    const [selectedNewsLetterId, setSelectedNewsLetterId] = useState(null);
    const refetchNewsLetter = async () => {
      try {
        const { data } = await readAllNewsLetter();
        setNewsLetter(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    

    const handleRemove = async (NewsLetterId) => {
        try {
          const token = "your_token_here"; // Replace with actual token retrieval logic
          await deleteNewsLetter(token, NewsLetterId); // Call deleteTeacher function with NewsLetterId
          toast.success('NewsLetter removed successfully!');
          refetchNewsLetter()
        } catch (error) {
          console.error(error.message);
        }
      };

      
    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await readAllNewsLetter();
            //console.log(data)
            setNewsLetter(data.data);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, []);
      const color = "primary";
    return (
        <div className="">
            <h2 className="text-gray-900 border-l-4 border-[#1eb2a6] pl-2 lg:text-2xl md:text-xl text-lg font-semibold capitalizecapitalize">Manage subscription Users</h2>


         <h2 className="text-gray-900 mx-auto md:w-[30%]  w-[70%] text-center my-6 border-x-2 border-[#1eb2a6] px-2 lg:text-2xl  capitalize md:text-xl text-lg font-semibold ">subscription Users table</h2> 
<div className="w-full overflow-x-scroll">
    <table className="w-full divide-y divide-[#457B9D] my-6 bg-white shadow-md">
    <thead className="bg-[#DCE8F5] text-[#457B9D]">
        <tr>
        <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">Email</th>

            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">Action</th>
        </tr>
    </thead>
    {newsLetter.map((n, index) => ( 
    <tbody key={index} className="w-full divide-y divide-[#457B9D] my-6">
        <tr>
        
            <td className="px-6 py-4 ">{n.email}</td>
         
            <td className="px-6 py-4 ">
                 <td className="py-4 flex justify-start items-center gap-1">
         <button onClick={() => handleRemove(n._id)} className="text-[#e53935] hover:text-white hover:bg-[#e53935] border-solid border-[1px] rounded-md px-2 py-1 border-[#e53935] flex justify-center items-center gap-1 ">
        <MdDeleteForever /> Delete 
      </button>
        </td> 
            </td>
        </tr>
    </tbody>
    ))} 
</table>
</div>
        </div>
    );
}

export default NewsLetter;

