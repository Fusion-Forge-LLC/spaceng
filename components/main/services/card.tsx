import Image, {StaticImageData} from "next/image";
import React from "react";

function Card({image, title, note}: {image: StaticImageData; title: string; note: string}) {
  return (
    <ul className="space-y-2 sm:space-y-4">
      <div className="relative aspect-[368/287]">
        <Image alt="Image" className="w-full h-full object-cover object-center" src={image} />
      </div>
      <div className="py-4 px-2">
        <h5 className="text-[#434343] text-xl sm:text-2xl">{title}</h5>
        <p className="text-[#707070] max-sm:text-sm">
          <span className="leading-loose">{note}</span>
        </p>
      </div>
    </ul>
  );
}

export default Card;
