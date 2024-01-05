import logo from '../../assets/logo.svg'
import { FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB flex justify-between items-center '>
          <div className='flex justify-start items-center'>
            <img className='w-[60px] h-[60px]' src={logo} alt="logo"></img>
            <div>
              <h1 className='md:text-md text-sm'>Here Shool name</h1>
            <span className='md:text-md text-sm'> EIIN: 00000</span>
            </div>
            
          </div>

          <div className='flex justify-start items-center md:gap-4 gap-2'>
            <FaFacebook></FaFacebook>
            <CiMail></CiMail>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head