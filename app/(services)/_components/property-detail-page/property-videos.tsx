import {Play} from "lucide-react";
import React, {useEffect, useRef, useState} from "react";

function PropertyVideos({src}: {src: string}) {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const toggleShowVideo = () => setShowVideo((prevState) => !prevState);

  useEffect(() => {
    if (showVideo) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showVideo]);

  return (
    <div className="pt-7">
      <h5 className="text-lg  md:mb-6 font-medium text-grey">Property Video</h5>
      <div className="h-60 relative">
        <video className="h-full w-full object-cover" src={src} />
        <div className="h-full w-full grid place-content-center absolute top-0 left-0">
          <button
            className="h-16 w-16 rounded-full bg-black grid place-content-center bg-opacity-90 hover:bg-white"
            onClick={toggleShowVideo}
          >
            <Play />
          </button>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[5000]">
          <div className="absolute top-0 left-0 px-4 py-2 flex justify-end items-center w-full text-white">
            <button className="text-2xl" onClick={toggleShowVideo}>
              ✖
            </button>
          </div>
          <div className="w-[95%] sm:w-[80%] h-[80%] rounded-lg relative">
            <video
              ref={videoRef}
              autoPlay
              controls
              className="object-contain object-center w-full h-full"
              src={src}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertyVideos;
