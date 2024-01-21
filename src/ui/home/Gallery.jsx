
import { useEffect, useState } from "react";
import { readAllgalleryPhoto } from "../../services/index/GalleryPhoto";
import ReactPlayer from "react-player";
import { readAllVideoPhoto } from "../../services/index/videoPost";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';

const Gallery = () => {
  const [speech, setSpeech] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await readAllgalleryPhoto();
        // console.log(data.data)
        setSpeech(data.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  const displayLimit = 3;
  const limitedPhoto = speech.slice(0, displayLimit);


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
  const displayLimitVideo = 2;
  const limitedVideo = video.slice(0, displayLimitVideo);
  return (
    <div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 mx-auto max-w-[400px] md:max-w-[95%] place-items-center">
        {limitedPhoto && limitedPhoto?.map((i, index) => (
            <PhotoProvider>
            <PhotoView src={i.image}>
            <img key={index} className="hover:opacity-75 cursor-zoom-in w-full object-cover object-center rounded-sm" src={i.image}/>
            </PhotoView>
          </PhotoProvider>
        ))}
</div>
<div className="grid md:grid-cols-2 grid-cols-1 md:px-16 gap-4 mx-auto md:my-10 my-5">
  {limitedVideo &&
    limitedVideo?.map((item, index) => (
      <div
        className="mx-auto "
        key={index}
      >
        {item.youtube ? (
          <>
          <div className="mx-auto lg:block hidden">
            <ReactPlayer url={item.youtube} controls={true} width="500px" />
          </div>
          <div className="mx-auto md:block lg:hidden sm:hidden">
            <ReactPlayer url={item.youtube} controls={true} width="300px" />
          </div>
          <div className="mx-auto sm:hidden">
            <ReactPlayer url={item.youtube} controls={true} width="300px" />
          </div>
          </>
          
        ) : (
          ""
        )}
        
      </div>
    ))}
</div>

    </div>
  )
}
export default Gallery;