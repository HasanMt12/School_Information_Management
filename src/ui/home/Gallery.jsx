import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from '../../assets/school.webp'
import img2 from '../../assets/school2.webp'
const Gallery = () => {
  return (
    <div>
        <div className="flex justify-between items-center">
        <h2 className="text-gray-900 border-l-4 pl-2 border-[#1eb2a6] lg:text-2xl md:text-xl text-lg font-semibold">Our Gallery</h2>
        <Link to='/speech' className='md:ml-0 ml-4 md:px-6 px-3 rounded md:py-2 py-1 md:mt-4 my-2 md:w-[180px] w-[120px] hover:bg-white gap-2 border border-[#1EB2A6] hover:text-[#1EB2A6] bg-[#1EB2A6] text-white md:text-md text-sm flex justify-center items-center'>
                See More <FaLongArrowAltRight className="mt-1 "></FaLongArrowAltRight>
              </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 mx-auto max-w-[400px] md:max-w-[95%] place-items-center">
    <img className="hover:opacity-75 w-full object-cover object-center rounded-sm" src={img}/>
    <img className="hover:opacity-75 w-full object-cover object-center rounded-sm" src={img2}/>
    <img className="hover:opacity-75 w-full object-cover object-center rounded-sm" src={img}/>
    <img className="hover:opacity-75 w-full object-cover object-center rounded-sm" src={img2}/>
    <img className="hover:opacity-75 w-full object-cover object-center rounded-sm" src={img}/>
    <img className="hover:opacity-75 w-full object-cover object-center rounded-sm" src={img2}/>
</div>
    </div>
  )
}
export default Gallery;