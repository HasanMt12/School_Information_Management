
import { useEffect, useState } from "react";
import { readAllgalleryPhoto } from "../services/index/GalleryPhoto";
import ScrollToTop from "../hooks/ScrollToTop";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import ReactPlayer from "react-player";
import { readAllVideoPhoto } from "../services/index/videoPost";

const AllGallery = () => {

  const [speech, setSpeech] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await readAllgalleryPhoto();
        //console.log(data)
        setSpeech(data.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  const [video, setVideo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await readAllVideoPhoto();
        // console.log(data.data)
        setVideo(data.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  return (
    <ScrollToTop>
      <div>
         <h2 className="text-gray-900 border-l-4 pl-2 my-6 border-[#1eb2a6] lg:text-2xl md:text-xl text-lg font-semibold lg:mt-10 md:mt-7 mt-5">
               Our Gallery
              </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 mx-auto max-w-[400px] md:max-w-[95%] place-items-center">
        {speech && speech?.map((i, index) => (
              <PhotoProvider>
              <PhotoView src={i.image}>
              <img key={index} className="hover:opacity-75 cursor-zoom-in w-full object-cover object-center rounded-sm" src={i.image}/>
              </PhotoView>
            </PhotoProvider>
        
          
        ))}
        
</div>

<div className="grid md:grid-cols-2 grid-cols-1 md:px-16 gap-4 mx-auto md:my-10 my-5">

   {video && video?.map((i, index) => ( 

            <div
            className="mx-auto "
            key={index}
            >
            {i.youtube ? (
              <>
              <div className="mx-auto lg:block hidden">
                <ReactPlayer url={i.youtube} controls={true} width="500px" />
              </div>
              <div className="mx-auto md:block lg:hidden sm:hidden">
                <ReactPlayer url={i.youtube} controls={true} width="300px" />
              </div>
              <div className="mx-auto sm:hidden">
                <ReactPlayer url={i.youtube} controls={true} width="300px" />
              </div>
              </>
              
            ) : (
              ""
            )}

</div>
         ))}
</div>
    </div>
    </ScrollToTop>
    
  )
}
export default AllGallery;