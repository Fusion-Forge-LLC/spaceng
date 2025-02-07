import Image from "next/image";

import RatingStars from "@/app/(services)/_components/property/rating-star";

interface Props {
  profileImage: string;
  name: string;
  text: string;
  rating?: number;
}

export function Sender({profileImage, name, text, rating}: Props) {
  return (
    <div className="px-3 py-2">
      <div className="flex items-center gap-3 mb-1">
        <div className="h-12 w-12 rounded-full relative overflow-hidden">
          <Image
            fill
            alt="profile image"
            className="object-cover object-center"
            src={profileImage}
          />
        </div>
        <h4 className="text-grey font-medium">{name}</h4>
        {rating && (
          <div className="mx-auto flex items-center gap-2">
            <RatingStars rating={rating} /> {rating}/5
          </div>
        )}
      </div>
      <p className=" text-grey-200 text-sm leading-loose">{text}</p>
    </div>
  );
}

export function Receiver({profileImage, name, text}: Props) {
  return (
    <div className="px-3 py-2">
      <div className="flex items-center flex-row-reverse gap-3 mb-1">
        <div className="h-12 w-12 rounded-full relative overflow-hidden">
          <Image
            fill
            alt="profile image"
            className="object-cover object-center"
            src={profileImage}
          />
        </div>
        <h4 className="text-grey font-medium">{name}</h4>
      </div>
      <p className=" text-grey-200 text-sm leading-loose">{text}</p>
    </div>
  );
}
