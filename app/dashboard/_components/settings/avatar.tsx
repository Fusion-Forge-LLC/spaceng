"use client";

import {Camera, Edit3} from "lucide-react";
import Image from "next/image";
import React, {useState} from "react";
import {toast} from "sonner";

import {useUpdateProfile} from "@/api/profile/update-profile";
import {useUploadImage} from "@/api/upload-image";
import Loader from "@/components/loader/loader";
import {Button} from "@/components/ui/button";

function Avatar({prevProfileImage}: {prevProfileImage: string}) {
  const [edit, setEdit] = useState(false);
  const [newProfile, setNewProfile] = useState("");
  const {mutateAsync: uploadImage, isPending: isUploading} = useUploadImage();
  const {mutateAsync: profileUpdate, isPending: isUpdating} = useUpdateProfile();

  const handleFileUpload = async (event: React.FormEvent<HTMLInputElement>) => {
    const selectedImage = event.currentTarget.files;

    if (!selectedImage) return;

    const formData = new FormData();

    formData.append("images", selectedImage[0]);

    await uploadImage(formData).then((res) => {
      res.data.uploadedImages.forEach((item) => {
        setNewProfile(item.url);
      });
    });
  };

  const handleProfileUpdate = () => {
    profileUpdate({profile_image: newProfile}).then(() => {
      toast.success("Image uploaded successfully");
      setEdit(false);
    });
  };

  return (
    <div className="flex justify-between items-end gap-3 pb-8">
      <div className="h-20 w-20 rounded-full relative overflow-hidden">
        <Image
          fill
          alt="Profile Image"
          className="object-cover object-center"
          src={newProfile || prevProfileImage}
        />
        {edit && (
          <div className="absolute h-full w-full bg-black/20">
            <label
              className="z-10 absolute bottom-2 left-1/2 -translate-x-1/2"
              htmlFor="upload_image"
            >
              <Camera color="#FFF" />
              <input
                hidden
                accept="image/*"
                id="upload_image"
                name="upload_image"
                type="file"
                onChange={handleFileUpload}
              />
            </label>
          </div>
        )}
        {isUploading && (
          <div className="absolute h-full w-full z-20 grid place-content-center bg-black/20">
            <Loader />
          </div>
        )}
      </div>

      {!edit ? (
        <button className="text-blue hover:scale-105 transition-all" onClick={() => setEdit(true)}>
          <Edit3 size={18} />
        </button>
      ) : (
        <div className="flex gap-1">
          <Button
            className="bg-blue hover:bg-blue/80 transition-all"
            disabled={!newProfile || isUploading || isUploading}
            onClick={handleProfileUpdate}
          >
            {isUpdating ? <Loader /> : "Save"}
          </Button>
          <Button
            className="bg-red transition-all"
            disabled={isUploading || isUploading}
            onClick={() => setEdit(false)}
          >
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
}

export default Avatar;
