import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { createContact, deleteContact, readAllContact, updateContact } from "../../../services/index/contactPost";




const ContactManage = () => {
    const { register, handleSubmit, reset } = useForm(); 
    const [contactId, setContactId] = useState([]);
   const [selectedContactId, setSelectedContactId] = useState(null);

   const refetchContact = async () => {
     try {
       const { data } = await readAllContact();
       setContactId(data.data);
     } catch (error) {
       console.error(error);
     }
   };
    const onSubmit = async (data) => {
        try {
          const token = "your_token_here"; // Replace with actual token retrieval logic
          
          if (selectedContactId) {
            const result = await updateContact(token, selectedContactId, data); // Call updateTeacher function with selectedContactId and data
            toast.success('Contact updated successfully!');
          } else {
            // Create new teacher
            const result = await createContact({ token, formData: data });
            toast.success('Contact created successfully!');
          }
          reset(); // Reset the form after submission
          refetchContact()
        } catch (error) {
          console.error(error.message);
        }
      };
      const handleUpdate = async (ContactId) => {
        try {
          const token = "your_token_here"; // Replace with actual token retrieval logic
          const teacherInfo = await readAllContact(token, ContactId); // Implement a function to fetch teacher information
          reset(teacherInfo); // Assuming reset is a function to reset the form with new values
          setSelectedContactId(ContactId); // Set the selectedContactId when update button is clicked
        } catch (error) {
          console.error(error.message);
        }
      };
    const handleRemove = async (ContactId) => {
        try {
          const token = "your_token_here"; // Replace with actual token retrieval logic
          await deleteContact(token, ContactId); // Call deleteTeacher function with ContactId
          toast.success('Contact removed successfully!');
          refetchContact()
        } catch (error) {
          console.error(error.message);
        }
      };
      useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await readAllContact();
          //  console.log(data)
            setContactId(data.data);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, []);
      const color = "primary";
    return (
        <div>
            <h2 className="text-gray-900 border-l-4 border-[#1eb2a6] pl-2 lg:text-2xl md:text-xl text-lg font-semibold capitalizemy-4">School Contact manage</h2> 
          

        <h2 className="text-gray-900 mx-auto md:w-[30%] md:mt-20 mt-10 w-[50%] text-center my-6 border-x-2 border-[#1eb2a6] px-2 lg:text-2xl md:text-xl text-lg font-semibold ">School Contact Form</h2> 
            <form  onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md md:mb-20 mb-10 md:px-3 px-1 md:py-3 py-1">
     
     <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
        
     <div>
        <label className="font-semibold md:text-md text-sm">Contact Email:</label>
      <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("email")} type="text" label="email" />
        </div>

       <div>
        <label className="font-semibold md:text-md text-sm">Contact Address:</label>
      <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("address")} type="text" label="address" />
        </div>

       <div>
        <label className="font-semibold md:text-md text-sm">number:</label>
      <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("number")} type="number" label="number" />
        </div>
     </div>

     <button className="md:ml-0 ml-4 md:px-2 px-1 rounded md:py-2 py-1 md:mt-4 my-2 md:w-[200px] w-[140px] hover:bg-white gap-2 border border-[#1EB2A6] hover:text-[#1EB2A6] bg-[#1EB2A6] text-white md:text-md text-sm flex justify-center items-center" 
      type="submit">{selectedContactId ? "Update Contact" : "Create Contact"}</button>
    
          </form>
 
<h2 className="text-gray-900 mx-auto md:w-[30%]  w-[70%] text-center my-6 border-x-2 border-[#1eb2a6] px-2 lg:text-2xl  capitalize md:text-xl text-lg font-semibold ">School Contact Details</h2> 
    <div className="w-full overflow-x-scroll">
        <table className="w-full divide-y divide-[#457B9D] my-6 bg-white shadow-lg">
    <thead className="bg-[#DCE8F5] text-[#457B9D]">
        <tr>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">email</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">address</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">number</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">Actions</th>
        </tr>
    </thead>

    {contactId && contactId?.map((i, index) => ( 
    <tbody key={index} className="w-full divide-y divide-[#457B9D] my-6">
        <tr>
            <td className="px-6 py-4 ">{i.email}</td>
            <td className="px-6 py-4 ">{i.address}</td>
            <td className="px-6 py-4 ">{i.number}</td>
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

export default ContactManage;
