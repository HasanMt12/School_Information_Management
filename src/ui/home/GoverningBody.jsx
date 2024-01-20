// Import Swiper core and required modules
import { IoIosArrowRoundForward , IoIosArrowRoundBack } from "react-icons/io";
import { IoOpenOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper';
import { useEffect, useRef, useState } from "react";
SwiperCore.use([Navigation]);
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Tooltip} from "@nextui-org/react";
import { readAllTeachers } from "../../services/index/techersPost";
const GoverningBody = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await readAllTeachers();
        setTeachers(data.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  const [size, setSize] = useState('md')

    const swiperRef = useRef();

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handleOpen = (size) => {
    setSize(size)
    onOpen();
  }
  return (
    <div className="lg:my-12 md:my-10 my-8 py-4">
        <h2 className="text-gray-900 border-l-4 border-[#1eb2a6] pl-2 lg:text-2xl md:text-xl text-lg font-semibold">Governing Body</h2>
<Swiper
        ref={(swiper) => {
            if (swiper) swiperRef.current = swiper;
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            788: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1170: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1600: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          //   spaceBetween={30}
          slidesPerGroup={1}
          grabCursor={true}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={{
            nextEl: '.custom-next-button',
            prevEl: '.custom-prev-button',
          }}
      >
        <>
        {teachers.map((teacher, index) => (
            <SwiperSlide key={index} className=" mt-8 ">
            <div key={index}
                className="bg-gray-100 relative shadow-lg overflow-hidden hover:shadow-sm group rounded-xl p-5 transition-all duration-500 transform">
                <div className="flex items-center gap-4">
                <img src={teacher.image}
                className="w-32  h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
                />
                <div className="w-fit transition-all transform duration-500">
                    <h1 className="text-[#1eb2a6] font-bold md:text-lg text-md">
                    {teacher.name}
                    </h1>
                    <p className="text-gray-600 text-sm">junior teacher</p>
                    <Tooltip content="click">
                      <Button key={size} size="sm"  className="text-tiny bg-black/10 group-hover:bg-gray-200 rounded-sm mt-3 flex justify-center items-center text-[#333333] font-semibold group-hover:text-[#1eb2a6]" variant="flat" color="default" onPress={() => handleOpen(size)}>details <IoOpenOutline /></Button>
                    </Tooltip>
                </div>
                </div>
            </div>
        </SwiperSlide>
         ))}
         
        </>


          {/* custom navigation buttons */}
          <div className="flex justify-center gap-4 items-center group my-4">
        <button onClick={handlePrev} className="custom-prev-button text-[#1eb2a6] border-l-[1px] mx-1 bg-[#e7f5f7] shadow-sm hover:bg-[#1eb2a6] border-t-[1px] border-[#90b4ba] mt-2 px-3 py-1  text-xl hover:text-white rounded-sm  ">
         <IoIosArrowRoundBack />
        </button>
        
        <button onClick={handleNext} className="custom-next-button text-[#1eb2a6]  mt-2 px-3 py-1 border-r-[1px] border-t-[1px] shadow-sm border-[#1eb2a6]  bg-[#e7f5f7] hover:bg-[#1eb2a6] rounded-sm text-xl hover:text-white ">
          <IoIosArrowRoundForward  />
        </button>
      </div>

      <Modal 
        size={size} 
        isOpen={isOpen} 
        onClose={onClose} 
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 z-[2000]">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      </Swiper>
    </div>
  )
}
export default GoverningBody;