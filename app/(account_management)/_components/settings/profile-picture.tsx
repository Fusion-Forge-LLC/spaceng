import {Camera} from "lucide-react";
import Image from "next/image";
import React, {useState} from "react";
import {toast} from "sonner";

import Loader from "@/components/loader/loader";
import {useUploadImage} from "@/api/upload-image";
import {useUpdateProfile} from "@/api/profile/update-profile";

function ProfilePicture({profileImage}: {profileImage: string}) {
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
        handleProfileUpdate(item.url);
      });
    });
  };

  const handleProfileUpdate = (profile_image: string) => {
    profileUpdate({profile_image}).then(() => {
      toast.success("Image uploaded successfully");
    });
  };

  return (
    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden border group relative">
      <Image
        fill
        alt="profile picture"
        className="object-top object-cover"
        src={newProfile || profileImage}
      />
      <div className="h-full w-full absolute top-0 left-0 bg-black/30 hidden group-hover:block z-30">
        <label className="absolute bottom-1 left-1/2 -translate-x-1/2" htmlFor="profile-image">
          <Camera color="#FFF" />
          <input
            hidden
            accept="image/*"
            disabled={isUploading || isUpdating}
            id="profile-image"
            name="profile-image"
            type="file"
            onChange={handleFileUpload}
          />
        </label>
      </div>
      {(isUploading || isUpdating) && (
        <div className="h-full w-full absolute top-0 left-0 bg-black/50 z-40 grid place-content-center">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default ProfilePicture;
