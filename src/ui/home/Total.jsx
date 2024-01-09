
import { MdBoy  , MdGirl  } from "react-icons/md";
const Total = () => {
  return (
    <div> <h2 className="text-gray-900 border-l-4 border-[#1eb2a6] pl-2 lg:text-2xl md:text-xl text-lg font-semibold my-6">School Community Overview</h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 lg:mx-6 md:mx-4 mx-2">
            <div className="border border-[#1eb2a6] rounded py-2">
                    <h2 className="lg:text-4xl text-[#1eb2a6] text-center md:text-3xl text-2xl font-semibold">4,521</h2>
                    <h2 className="font-bold md:text-2xl text-center text-xl md:my-4 my-2 text-gray-800">student</h2>
                <div className="flex justify-center items-center gap-2">
                    <div className="flex justify-start items-center gap-1 font-semibold md:text-md text-sm">
                    <MdBoy className="text-lg text-[#1eb2a6]" /> Boys: 2000
                    </div>
                    <h2 className="text-[#1eb2a6]">|</h2>
                    <div className="flex justify-start items-center gap-1 font-semibold md:text-md text-sm">
                    <MdGirl className="text-lg text-[#1eb2a6]" /> Girl: 2500
                    </div>
                </div>
            </div>

            <div className="border border-[#1eb2a6] rounded py-2">
                    <h2 className="lg:text-4xl text-[#1eb2a6] text-center md:text-3xl text-2xl font-semibold">3,0</h2>
                    <h2 className="font-bold md:text-2xl text-center text-xl md:my-4 my-2 text-gray-800">Alumny</h2>
                <div className="flex justify-center items-center gap-2">
                    <div className="flex justify-start items-center gap-1 font-semibold md:text-md text-sm">
                    <MdBoy className="text-lg text-[#1eb2a6]" /> Boys: 2000
                    </div>
                    <h2 className="text-[#1eb2a6]">|</h2>
                    <div className="flex justify-start items-center gap-1 font-semibold md:text-md text-sm">
                    <MdGirl className="text-lg text-[#1eb2a6]" /> Girl: 1000
                    </div>
                </div>
            </div>

            <div className="border border-[#1eb2a6] rounded py-2">
                    <h2 className="lg:text-4xl text-[#1eb2a6] text-center md:text-3xl text-2xl font-semibold">1000</h2>
                    <h2 className="font-bold md:text-2xl text-center text-xl md:my-4 my-2 text-gray-800">Teacher</h2>
                <div className="flex justify-center items-center gap-2">
                    <div className="flex justify-start items-center gap-1 font-semibold md:text-md text-sm">
                    <MdBoy className="text-lg text-[#1eb2a6]" /> Boys: 500
                    </div>
                    <h2 className="text-[#1eb2a6]">|</h2>
                    <div className="flex justify-start items-center gap-1 font-semibold md:text-md text-sm">
                    <MdGirl className="text-lg text-[#1eb2a6]" /> Girl: 500
                    </div>
                </div>
            </div>

            <div className="border border-[#1eb2a6] rounded py-2">
                    <h2 className="lg:text-4xl text-[#1eb2a6] text-center md:text-3xl text-2xl font-semibold">1200</h2>
                    <h2 className="font-bold md:text-2xl text-center text-xl md:my-4 my-2 text-gray-800">Office Stuffs</h2>
                <div className="flex justify-center items-center gap-2">
                    <div className="flex justify-start items-center gap-1 font-semibold md:text-md text-sm">
                    <MdBoy className="text-lg text-[#1eb2a6]" /> Boys: 700
                    </div>
                    <h2 className="text-[#1eb2a6]">|</h2>
                    <div className="flex justify-start items-center gap-1 font-semibold md:text-md text-sm">
                    <MdGirl className="text-lg text-[#1eb2a6]"/> Girl: 500
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Total;