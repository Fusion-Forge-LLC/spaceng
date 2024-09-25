import Image from "next/image";
import React from "react";

function TestimonialCard({
  image,
  name,
  occupation,
  reviewType,
  testimony,
}: {
  image: string;
  name: string;
  occupation: string;
  reviewType: string;
  testimony: string;
}) {
  return (
    <li className="rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.25)] flex flex-col gap-8 border border-white p-2">
      <header className="flex gap-4">
        <div className="h-20 w-20 rounded-full overflow-hidden">
          <Image alt="user image" height={80} src={image} width={80} />
        </div>
        <div className="space-y-3 pt-2 flex-1">
          <h4 className=" font-medium">{name}</h4>
          <p className="">{occupation}</p>
        </div>
      </header>
      <p className="pb-10 flex- leading-loose">{testimony}</p>
      <p className="pb-2">{reviewType}</p>
    </li>
  );
}

export default TestimonialCard;
