import { useForm } from "react-hook-form";
import { createTeacher, deleteTeacher, readAllTeachers, updateTeacher } from "../../../services/index/techersPost";
import { useEffect, useState } from "react";
import { Avatar, Input } from "@nextui-org/react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";


const CreatTeacher = () => {
    const { register, handleSubmit, reset } = useForm(); 
     const [teachers, setTeachers] = useState([]);
    const [selectedTeacherId, setSelectedTeacherId] = useState(null);
    const refetchTeachers = async () => {
      try {
        const { data } = await readAllTeachers();
        setTeachers(data.data);
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
          if (selectedTeacherId) {
            const result = await updateTeacher(token, selectedTeacherId, data); // Call updateTeacher function with selectedTeacherId and data
            toast.success('Authorities updated successfully!');
          } else {
            // Create new teacher
            const result = await createTeacher({ token, formData: data });
            toast.success('Authorities created successfully!');
          }
          reset(); // Reset the form after submission
          refetchTeachers()
        } catch (error) {
          console.error(error.message);
        }
      };

      const handleUpdate = async (teacherId) => {
        try {
          // Fetch the teacher's information based on the teacherId
          const token = "your_token_here"; // Replace with actual token retrieval logic
          const teacherInfo = await readAllTeachers(token, teacherId); // Implement a function to fetch teacher information
          // Pre-fill the form fields with the fetched teacherInfo for update
          reset(teacherInfo); // Assuming reset is a function to reset the form with new values
          setSelectedTeacherId(teacherId); // Set the selectedTeacherId when update button is clicked
        } catch (error) {
          console.error(error.message);
          // Handle error (e.g., show error message)
        }
      };
    const handleRemove = async (teacherId) => {
        try {
          const token = "your_token_here"; // Replace with actual token retrieval logic
          await deleteTeacher(token, teacherId); // Call deleteTeacher function with teacherId
          toast.success('Authorities removed successfully!');
          refetchTeachers()
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
            const { data } = await readAllTeachers();
            //console.log(data)
            setTeachers(data.data);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, []);
      const color = "primary";
    return (
        <div className="">
            <h2 className="text-gray-900 border-l-4 border-[#1eb2a6] pl-2 lg:text-2xl md:text-xl text-lg font-semibold">Manage Authorities</h2>

            <div className="my-6">
    <h2 className="text-gray-900  mx-auto md:w-[30%] text-center w-[50%] my-6 border-x-2 border-[#1eb2a6] px-2 lg:text-2xl md:text-xl text-lg font-semibold ">Authorities Form</h2> 
  </div>
            <form  onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md md:mb-20 mb-10 md:px-3 px-1 md:py-3 py-1">
     
      <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
        <div >
           <label className="font-semibold md:text-md text-sm">Name:</label>
         <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("name", { required: true })} label="Name" />
        </div>
        <div >
           <label className="font-semibold md:text-md text-sm">Designation:</label>
         <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("designation", { required: true })} label="designation" />
        </div>
        <div>
          <label className="font-semibold md:text-md text-sm">Email:</label>
         <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("email")} label="Email" />
        </div>
        <div>
         <label className="font-semibold md:text-md text-sm">Phone:</label>
         <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("phone")} label="Phone" />
        </div>
        <div>
        <label className="font-semibold md:text-md text-sm">Join Date:</label>
      <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("joinDate")} type="date" />
        </div>
        <div>
        <label className="font-semibold md:text-md text-sm">Image:</label>
      <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("image", { required: true })} type="file" accept="image/*" />
        </div>
        <div>
        <label className="font-semibold md:text-md text-sm">Degree:</label>
        <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("education.degree")} label="Degree" />
        </div>
        <div>
        <label className="font-semibold md:text-md text-sm">University:</label>
      <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("education.university")} label="University" />
        </div>
        <div>
        <label className="font-semibold md:text-md text-sm">Year Completed:</label>
      <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("education.yearCompleted")} type="number" label="Year Completed" />
        </div>
        <div>
        <label className="font-semibold md:text-md text-sm">Gender:</label>
      <select {...register("gender", { required: true })}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
        </div>
        <div>
        <label className="font-semibold md:text-md text-sm">Years of Experience:</label>
      <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("yearsOfExperience", { required: true })} type="number" label="Years of Experience" />
        </div>
        <div>
        <label className="font-semibold md:text-md text-sm">Street:</label>
      <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("address.street")} label="Street" />
        </div>
        <div>
        <label className="font-semibold md:text-md text-sm">City:</label>
      <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("address.city")} label="City" />
        </div>
        <div>
        <label className="font-semibold md:text-md text-sm">State</label>
      <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("address.state")} label="State" />
        </div>
        <div>
        <label className="font-semibold md:text-md text-sm">Zip Code:</label>
      <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("address.zipCode")} label="Zip Code" />
        </div>
      </div>

      <button className="md:ml-0 ml-4 md:px-7 px-4 rounded md:py-2 py-1 md:mt-4 my-2 md:w-[200px] w-[140px] hover:bg-white gap-2 border border-[#1EB2A6] hover:text-[#1EB2A6] bg-[#1EB2A6] text-white md:text-lg text-md flex justify-center items-center" 
       type="submit">{selectedTeacherId ? "Update Authorities" : "Create Authorities"}</button>
     
    </form>

         <h2 className="text-gray-900 mx-auto md:w-[30%]  w-[70%] text-center my-6 border-x-2 border-[#1eb2a6] px-2 lg:text-2xl  capitalize md:text-xl text-lg font-semibold ">Authorities table</h2> 
<div className="w-full overflow-x-scroll">
    <table className="w-full divide-y divide-[#457B9D] my-6 bg-white shadow-md">
    <thead className="bg-[#DCE8F5] text-[#457B9D]">
        <tr>
        <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">photo</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">designation</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">Action</th>
        </tr>
    </thead>
    {teachers.map((teacher, index) => ( 
    <tbody key={index} className="w-full divide-y divide-[#457B9D] my-6">
        <tr>
        <td className="px-6 py-4 "> <Avatar src={teacher.image} /></td>
            <td className="px-6 py-4 ">{teacher.name}</td>
            <td className="px-6 py-4 ">{teacher.designation}</td>
            <td className="px-6 py-4 ">
                 <td className="py-4 flex justify-start items-center gap-1">
         <button onClick={() => handleUpdate(teacher._id)} className="text-slate-800 hover:bg-slate-800 hover:text-white border-solid border-[1px] rounded-md px-2 py-1 border-slate-800 flex justify-center items-center gap-1 ">
        <FaEdit /> Edit 
      </button>
         <button onClick={() => handleRemove(teacher._id)} className="text-[#e53935] hover:text-white hover:bg-[#e53935] border-solid border-[1px] rounded-md px-2 py-1 border-[#e53935] flex justify-center items-center gap-1 ">
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

export default CreatTeacher;

