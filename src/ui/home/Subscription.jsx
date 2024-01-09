import { IoIosSend } from "react-icons/io";

const Subscription = () =>{
  return (
    <section className='newletter lg:px-12 md:px-10 px-6 lg:mt-12 md:mt-10 mt-6'>
    <div className=' flex lg:flex-row md:flex-row flex-col justify-between items-center'>
      <div className=''>
        <h1 className="lg:text-xl md:text-lg text-md">Newsletter - Stay tune and get the latest update</h1>
        <span>Far far away, behind the word mountains</span>
      </div>
      <div className='right md:w-[40%] w-full md:mt-0 mt-2 bg-[#ffffff] row'>
        <input type='text' placeholder='Enter email address' />
        <IoIosSend className="text-[#1EB2A6] text-xl mr-2"/>
      </div>
    </div>
  </section>
  )
}
export default Subscription