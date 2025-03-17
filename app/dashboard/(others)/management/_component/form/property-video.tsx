import {LucideUploadCloud, Trash2} from "lucide-react";
import React, {Dispatch, SetStateAction} from "react";
import {toast} from "sonner";

import {useUploadVideo} from "@/api/upload-video";
import Loader from "@/components/loader/loader";
import {showSuccess} from "@/lib/utils";

interface Props {
  video: string[];
  setVideo: Dispatch<SetStateAction<string[]>>;
}

function PropertyVideo({video, setVideo}: Props) {
  const {mutateAsync: uploadVideo, isPending: isUploading} = useUploadVideo();

  const handleFileUpload = async (event: React.FormEvent<HTMLInputElement>) => {
    const selectedVideos = event.currentTarget.files;

    if (selectedVideos) {
      if (video.length) {
        toast.error("You can only upload one video");

        return;
      }

      if (selectedVideos[0].size > 10 * 1024 * 1024) {
        toast.error("File size exceeds 5MB. Please upload a smaller video.");

        return;
      }

      const formData = new FormData();

      formData.append("video", selectedVideos[0]);

      await uploadVideo(formData).then((res) => {
        console.log(res.data.url);
        showSuccess(res.message);
        setVideo([res.data.url]);
      });
    }
  };

  const removeVideo = (item: string) => {
    setVideo([]);
  };

  return (
    <div className="space-y-6">
      <div className="">
        {video.map((item, index) => {
          return (
            <div key={index} className="relative h-40 aspect-video">
              <video controls className="h-full w-full object-contain" src={item} />
              <button className="absolute top-2 right-2" onClick={() => removeVideo(item)}>
                <Trash2 size={20} />
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <span className="text-grey-200 block mb-2 text-left">Property Video</span>
        <div className="rounded-3xl border border-dashed border-grey-200 flex flex-col items-center gap-6 py-10 relative">
          <LucideUploadCloud size={40} />
          <span>Drag and Drop Video</span>
          <span>or</span>
          <label
            className="bg-grey-200 text-white font-medium px-5 py-3 grid place-content-center w-fit rounded-md"
            htmlFor="upload-video"
          >
            {isUploading ? <Loader /> : "Browse Videos"}
            <input
              accept="video/*"
              className="hidden"
              id="upload-video"
              multiple={false}
              name="upload-video"
              type="file"
              onChange={handleFileUpload}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default PropertyVideo;
