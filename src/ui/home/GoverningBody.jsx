// Import Swiper core and required modules
import { IoIosArrowRoundForward , IoIosArrowRoundBack } from "react-icons/io";
import { IoOpenOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper';
import { useEffect, useRef, useState } from "react";
SwiperCore.use([Navigation]);
import { Button, useDisclosure, Tooltip} from "@nextui-org/react";
import { readAllTeachers } from "../../services/index/techersPost";
import {  Avatar, Modal } from 'antd';
const GoverningBody = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await readAllTeachers();
        setTeachers(data.data);
        // console.log(data.data)
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  const [size, setSize] = useState('md')

    const swiperRef = useRef();

// swiper button
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


  // modal
  const [modalState, setModalState] = useState({
    open: false,
    teacher: null,
  });

  const showModal = (teacher) => {
    setModalState({
      open: true,
      teacher: teacher,
    });
  };

  const handleOk = () => {
    setModalState({
      open: false,
      teacher: null,
    });
  };

  const handleCancel = () => {
    setModalState({
      open: false,
      teacher: null,
    });
  };

  // date formate
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <div className="lg:mb-12 md:mb-10 mb-8 py-4 px-auto">
       
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
              <div key={index}>
          
<div 
                className="bg-gray-100 relative shadow-lg overflow-hidden hover:shadow-sm group rounded-xl p-5 transition-all duration-500 transform">
                <div className="flex items-center gap-4">
                <img src={teacher.image}
                className="w-32  h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
                />
                <div className="w-fit transition-all transform duration-500">
                    <h1 className="text-[#1eb2a6] font-bold md:text-lg text-md">
                    {teacher.name}
                    </h1>
                    <p className="text-gray-600 text-sm">{teacher.designation}</p>
                    <Tooltip content="click">
                      <Button key={size} size="sm" onClick={() => showModal(teacher)}  className="text-tiny bg-black/10 group-hover:bg-gray-200 rounded-sm mt-3 flex justify-center items-center text-[#333333] font-semibold group-hover:text-[#1eb2a6]" variant="flat" color="default" >details <IoOpenOutline /></Button>
                    </Tooltip>
                </div>
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
       {/* Dynamic Modal */}
       {modalState.teacher && (
        <Modal
          open={modalState.open}
          title="Teacher Details"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="cancel" onClick={handleCancel} variant="text" color="error">
              Cancel
            </Button>,
            <Button key="ok" onClick={handleOk} size="sm"  className="bg-[#1EB2A6] text-white">
              OK
            </Button>,
          ]}
        >
         <div className="flex justify-start items-center gap-2 pb-2 border-b-[1px] border-gray-600">
          <Avatar src={modalState.teacher.image}></Avatar>
          <p className="md:text-sm text-xs font-semibold text-gray-500 mt-2"> <span className="text-gray-700">{modalState.teacher.name}</span></p>
          </div> 
          <p className="md:text-sm text-xs font-semibold text-gray-500">Designation:  <span className="text-[#1EB2A6] ml-2 font-medium"> {modalState.teacher.designation}</span></p>
          <p className="md:text-sm text-xs font-semibold text-gray-500">Email: <span className="text-[#1EB2A6] ml-2 font-medium">{modalState.teacher.email}</span></p>
          <p className="md:text-sm text-xs font-semibold text-gray-500">Address: <span className="text-[#1EB2A6] ml-2 font-medium">{modalState.teacher.address.city}</span></p>
          <p className="md:text-sm text-xs font-semibold text-gray-500">Education: <span className="text-[#1EB2A6] ml-2 font-medium">{modalState.teacher.education.degree}</span></p>
          <p className="md:text-sm text-xs font-semibold text-gray-500">Phone: <span className="text-[#1EB2A6] ml-2 font-medium">{modalState.teacher.phone}</span></p>
          <p className="md:text-sm text-xs font-semibold text-gray-500">Gender: <span className="text-[#1EB2A6] ml-2 font-medium">{modalState.teacher.gender}</span></p>
          <p className="md:text-sm text-xs font-semibold text-gray-500">Joining Date: <span className="text-[#1EB2A6] ml-2 font-medium">{formatDate(modalState.teacher.joinDate)}</span></p>
          <p className="md:text-sm text-xs font-semibold text-gray-500">Experience: <span className="text-[#1EB2A6] ml-2 font-medium">{modalState.teacher.yearsOfExperience}</span></p>
        </Modal>   )}
      </Swiper>
    </div>
  )
}
export default GoverningBody;