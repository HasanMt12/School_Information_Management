import { IoIosSend } from "react-icons/io";
import { createNewsLetter } from "../../services/index/newsLetterPost";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const Subscription = () =>{   
   const { register, handleSubmit, reset } = useForm(); 


const onSubmit = async (data) => {
   try {
     const token = "your_token_here"; // Replace with actual token retrieval logic

       const result = await createNewsLetter({ token, formData: data });
       toast.success('NewsLetter submit successfully!');
     reset(); // Reset the form after submission
  
   } catch (error) {
     console.error(error.message);
   }
 };

  return (
    <section className='newletter lg:px-12 md:px-10 px-6 lg:mt-12 md:mt-10 mt-6'>
    <div className=' flex lg:flex-row md:flex-row flex-col justify-between items-center'>
      <div className=''>
        <h1 className="lg:text-xl md:text-lg text-md">Newsletter - Stay tune and get the latest update</h1>
        <span>Far far away, behind the word mountains</span>
      </div>
      <form  onSubmit={handleSubmit(onSubmit)} className='right md:w-[40%] w-full md:mt-0 mt-2 bg-[#ffffff] row'>
        <input {...register("email")} type='text' placeholder='Enter email address' />
        <IoIosSend onClick={handleSubmit(onSubmit)} className="text-[#1EB2A6] text-xl mr-2 cursor-pointer"/>
      </form>
    </div>
  </section>
  )
}
export default Subscription