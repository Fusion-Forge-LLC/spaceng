import Image, {StaticImageData} from "next/image";
import React from "react";

function FeaturesCard({image, title, note}: {image: StaticImageData; title: string; note: string}) {
  return (
    <li>
      <div className="aspect-[380/295] p-2 md:p-4 shadow-md drop-shadow-[0px_10.3333px_15.5px_rgba(151,151,151,0.08)]">
        <Image alt="Features image" src={image} />
      </div>
      <div className="py-4 md:px-4 space-y-2">
        <h5 className="font-medium text-[#242527]">{title}</h5>
        <p className="text-[#707070] text-sm">
          <span className="leading-loose">{note}</span>
        </p>
      </div>
    </li>
  );
}

export default FeaturesCard;
