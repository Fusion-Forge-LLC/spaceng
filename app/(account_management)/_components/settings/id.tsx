import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";
import {toast} from "sonner";

import {useUpdateProfile} from "@/api/profile/update-profile";
import {useUploadBase64Image} from "@/api/upload-base64image";
import Loader from "@/components/loader/loader";
import {useUser} from "@/context/user";

function CaptureId({toggleEditMode}: {toggleEditMode: () => void}) {
  const {setUser} = useUser();
  const [idUrl, setIdUrl] = useState<string | null>(null);
  const {mutateAsync: uploadImage, isPending: isUploading} = useUploadBase64Image();
  const {mutateAsync: updateProfile, isPending: isUpdating} = useUpdateProfile();
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    openCamera();

    return () => mediaStream?.getTracks().forEach((track) => track.stop());
  }, []);

  useEffect(() => {
    if (idUrl) {
      updateProfile({government_id: idUrl}).then(() => {
        toast.success("Profile updated successfully");
        setUser((prevState) => {
          if (prevState === null) {
            return null;
          } else {
            const data = {...prevState, government_id: idUrl};

            return data;
          }
        });
        toggleEditMode();
      });
    }
  }, [idUrl]);

  async function openCamera() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });

    setMediaStream(stream);
    if (videoRef.current) videoRef.current.srcObject = stream;
  }

  const getIdImage = () => {
    if (!canvas.current || !videoRef.current) return;
    canvas.current.width = videoRef.current.clientWidth;
    canvas.current.height = videoRef.current.clientHeight;

    const ctx = canvas.current.getContext("2d");

    ctx?.drawImage(videoRef.current, 0, 0, canvas.current.width, canvas.current.height);

    // Return the captured image as a data URL
    return canvas.current.toDataURL("image/jpeg");
  };

  const saveUserId = async () => {
    const imageId = getIdImage();

    if (!imageId) return toast.error("No image found");

    await uploadImage({url: imageId}).then((res) => {
      setIdUrl(res.data.url);
    });
  };

  return (
    <div className="w-full flex-1">
      <div
        className="lg:border-grey-200 lg:box-border py-1 lg:py-4 mb-4 w-full text-grey font-semibold"
        style={{borderBottomWidth: "0.1px"}}
      >
        <div className="flex justify-between">
          Take a photo with your webcam
          <svg
            fill="none"
            height="17"
            viewBox="0 0 16 17"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8.78516" fill="#434343" r="8" />
            <circle cx="8" cy="8.78516" fill="#D9D9D9" r="4" />
          </svg>
        </div>
        <div>
          <video ref={videoRef} autoPlay disablePictureInPicture />
          <canvas ref={canvas} className="w-full hidden" height={600} width={600} />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="text-blue font-medium cursor-pointer text-sm lg:hidden"
          onClick={toggleEditMode}
        >
          Cancel
        </button>
        <button
          className="py-2 lg:py-3 px-2.5 lg:px-4 text-sm lg:text-base bg-blue rounded-lg text-white block ml-auto"
          disabled={isUploading || isUpdating}
          onClick={saveUserId}
        >
          {isUploading || isUpdating ? <Loader /> : "Save"}
        </button>
      </div>
    </div>
  );
}

function Id() {
  const [isEditMode, setEditMode] = useState(false);
  const {User} = useUser();
  const toggleEditMode = () => setEditMode((prevState) => !prevState);

  return (
    <div className="">
      <div
        className={` ${isEditMode ? "hidden" : "lg:flex"} py-4  justify-between items-start border-grey-200 box-border `}
        style={{borderBottomWidth: "0.1px"}}
      >
        <div className="flex flex-col gap-3">
          <h2 className="font-medium">Government ID</h2>
          <div>
            {User?.government_id ? (
              <div>
                <Image
                  alt="Government ID"
                  className="object-contain"
                  height={200}
                  src={User.government_id}
                  width={200}
                />
              </div>
            ) : (
              <p className="text-grey-200">Not provided</p>
            )}
          </div>
        </div>
        <button
          className="text-blue font-medium cursor-pointer hidden lg:block"
          onClick={toggleEditMode}
        >
          {User?.government_id ? "Edit" : "Add"}
        </button>
        <button
          className="text-blue font-medium cursor-pointer block lg:hidden ml-auto"
          onClick={toggleEditMode}
        >
          {User?.government_id ? "Edit" : "Add"}
        </button>
      </div>
      {isEditMode && (
        <div>
          <div className="flex justify-between gap-2 mb-3">
            <h2 className="font-medium">Government ID</h2>
            <button
              className="text-blue font-medium cursor-pointer hidden lg:block"
              onClick={toggleEditMode}
            >
              Cancel
            </button>
          </div>
          <p className="text-grey-200 mb-6">
            We’ll need you to add an official Government ID. This step helps to make sure it’s
            really you
          </p>
          <div className="flex flex-col md:flex-row gap-10 lg:gap-7 mb-4">
            <CaptureId toggleEditMode={toggleEditMode} />
            <div className="flex-1 border border-grey-200 p-5 rounded-lg">
              <h3 className="text-grey font-semibold mb-3.5">Your Privacy</h3>
              <p className="text-grey-200">
                We aim to keep the data you share during this process private, safe, and secure.
                Learn more in our <span className="font-bold">Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Id;
