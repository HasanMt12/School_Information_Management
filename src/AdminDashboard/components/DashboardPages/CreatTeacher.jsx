import { useForm } from "react-hook-form";
import { createTeacher, deleteTeacher, readAllTeachers, updateTeacher } from "../../../services/index/techersPost";
import { useEffect, useState } from "react";


const CreatTeacher = () => {
    const { register, handleSubmit, reset } = useForm(); 
     const [teachers, setTeachers] = useState([]);
    const [selectedTeacherId, setSelectedTeacherId] = useState(null);

    
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
            console.log(result);
          } else {
            // Create new teacher
            const result = await createTeacher({ token, formData: data });
            console.log(result);
            // Handle success (e.g., show success message, redirect, etc.)
          }
          reset(); // Reset the form after submission
        } catch (error) {
          console.error(error.message);
          // Handle error (e.g., show error message)
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
          // Handle success (e.g., show success message, update the teacher list, etc.)
        } catch (error) {
          console.error(error.message);
          // Handle error (e.g., show error message)
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
      
    return (
        <div>
            teacher route

            <div className="my-20">
    {teachers.map((teacher) => (
      <div key={teacher._id}>
        <h3>{teacher.name}</h3>
        <p>{teacher.email}</p>
        <button onClick={() => handleUpdate(teacher._id)}>Update</button>
            <button onClick={() => handleRemove(teacher._id)}>Remove</button>
      </div>
    ))}
  </div>
            <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name:</label>
      <input {...register("name", { required: true })} placeholder="Name" />

      <label>Email:</label>
      <input {...register("email")} placeholder="Email" />

      <label>Phone:</label>
      <input {...register("phone")} placeholder="Phone" />

      <label>Join Date:</label>
      <input {...register("joinDate")} type="date" />

      <label>Image:</label>
      <input {...register("image", { required: true })} type="file" accept="image/*" />

      <label>Degree:</label>
      <input {...register("education.degree")} placeholder="Degree" />

      <label>University:</label>
      <input {...register("education.university")} placeholder="University" />

      <label>Year Completed:</label>
      <input {...register("education.yearCompleted")} type="number" placeholder="Year Completed" />

      <label>Gender:</label>
      <select {...register("gender", { required: true })}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <label>Years of Experience:</label>
      <input {...register("yearsOfExperience", { required: true })} type="number" placeholder="Years of Experience" />

      <label>Street:</label>
      <input {...register("address.street")} placeholder="Street" />

      <label>City:</label>
      <input {...register("address.city")} placeholder="City" />

      <label>State:</label>
      <input {...register("address.state")} placeholder="State" />

      <label>Zip Code:</label>
      <input {...register("address.zipCode")} placeholder="Zip Code" />
      <button type="submit">{selectedTeacherId ? "Update Teacher" : "Create Teacher"}</button>
     
    </form>
        </div>
    );
}

export default CreatTeacher;

