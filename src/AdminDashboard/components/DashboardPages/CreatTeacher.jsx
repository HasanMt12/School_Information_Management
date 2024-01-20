import { useForm } from "react-hook-form";
import { createTeacher, deleteTeacher, readAllTeachers, updateTeacher } from "../../../services/index/techersPost";
import { useEffect, useState } from "react";
import { Avatar, Input } from "@nextui-org/react";
import toast from "react-hot-toast";


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
            toast.success('Teacher updated successfully!');
          } else {
            // Create new teacher
            const result = await createTeacher({ token, formData: data });
            toast.success('Teacher created successfully!');
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
          toast.success('Teacher removed successfully!');
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
            console.log(data)
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
            <h2 className="text-gray-900 border-l-4 border-[#1eb2a6] pl-2 lg:text-2xl md:text-xl text-lg font-semibold">Manage Governing  Body</h2>

            <div className="my-6">
    {/*  */}
  </div>
            <form  onSubmit={handleSubmit(onSubmit)}>
     
      <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
        <div >
           <label className="font-semibold md:text-md text-sm">Name:</label>
         <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("name", { required: true })} label="Name" />
        </div>
        <div >
           <label className="font-semibold md:text-md text-sm">Designation:</label>
         <Input className="max-h-12"  variant="bordered" color={color} radius="sm" size="md"{...register("designation", { required: true })} label="Name" />
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
       type="submit">{selectedTeacherId ? "Update Teacher" : "Create Teacher"}</button>
     
    </form>

    <table class="min-w-full divide-y divide-gray-200 my-6">
    <thead>
        <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">photo</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">designation</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
        </tr>
    </thead>
    {teachers.map((teacher, index) => ( 
    <tbody key={index} class="bg-white divide-y divide-gray-200">
        <tr>
        <td class="px-6 py-4 whitespace-nowrap"> <Avatar src={teacher.image} /></td>
            <td class="px-6 py-4 whitespace-nowrap">{teacher.name}</td>
            <td class="px-6 py-4 whitespace-nowrap">{teacher.designation}</td>
            <td class="px-6 py-4 whitespace-nowrap">
                <button onClick={() => handleUpdate(teacher._id)} class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</button>
                <button onClick={() => handleRemove(teacher._id)} class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
            </td>
        </tr>
    </tbody>
    ))} 
</table>
        </div>
    );
}

export default CreatTeacher;

