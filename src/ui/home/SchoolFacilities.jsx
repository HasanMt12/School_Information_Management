

const SchoolFacilities = () => {
  return (
    <div className="md:my-6 my-4"> 
      <h2 className="text-gray-900 border-l-4 pl-2 border-[#1eb2a6] lg:text-2xl md:text-xl text-lg font-semibold">The facilities we offer</h2>
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2 md:mt-6 mt-4">
    
{/* section1 */}
<div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">

    <a href="#">
        <img className="w-full md:w-full md:h-[240px] h-[160px] object-cover object-center" src="https://inviqa.com/sites/default/files/styles/pullout/public/2020-08/XD-1.jpeg?h=f75d236a&itok=PBoXPDmW" alt="Sunset in the mountains"/>
    </a>
    <div className="relative -mt-16 px-10 pt-5 pb-16 bg-gray-100 shadow-md hover:shadow-sm m-10">
        <a href="#"
            className="font-semibold text-lg text-[#1eb2a6] inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">The
            Science Laboratory</a>
        <p className="text-gray-500 text-sm">
            Today, I’m covering one of my favorite parts of the Nordstrom Anniversary Sale: the activewear!
        </p>
    
    </div>

</div>

{/* section2 */}

    <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">

        <a href="#">
            <img className="w-full md:w-full md:h-[240px] h-[160px] object-cover object-center" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" alt="Sunset in the mountains"/>
        </a>
        <div className="relative -mt-16 px-10 pt-5 pb-16 bg-gray-100 shadow-md hover:shadow-sm m-10">
            <a href="#"
                className="font-semibold text-lg text-[#1eb2a6] inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">The
               Decorated Classroom</a>
            <p className="text-gray-500 text-sm">
                Today, I’m covering one of my favorite parts of the Nordstrom Anniversary Sale: the activewear!
            </p>
            
        </div>

    </div>


{/* section3 */}
    <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">

        <a href="#">
            <img className="w-full md:w-full md:h-[240px] h-[160px] object-cover object-center" src="https://inviqa.com/sites/default/files/styles/pullout/public/2020-08/XD-1.jpeg?h=f75d236a&itok=PBoXPDmW"/>
        </a>
        <div className="relative -mt-16 px-10 pt-5 pb-16 bg-gray-100 shadow-md hover:shadow-sm m-10">
            <a href="#"
                className="font-semibold text-lg text-[#1eb2a6] inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">The
             Library</a>
            <p className="text-gray-500 text-sm">
                Today, I’m covering one of my favorite parts of the Nordstrom Anniversary Sale: the activewear!
            </p>
            
        </div>

    </div>

{/* section4 */}
    <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">

        <a href="#">
            <img className="w-full md:w-full md:h-[240px] h-[160px] object-cover object-center" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" alt="Sunset in the mountains"/>
        </a>
        <div className="relative -mt-16 px-10 pt-5 pb-16 bg-gray-100 shadow-md hover:shadow-sm m-10">
            <a href="/"
                className="font-semibold text-lg text-[#1eb2a6]  inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">The
                Decorated Classroom</a>
            <p className="text-gray-500 text-sm">
                Today, I’m covering one of my favorite parts of the Nordstrom Anniversary Sale: the activewear!
            </p>
            
        </div>

    </div>
    </div>
    </div>
  )
}

export default SchoolFacilities
