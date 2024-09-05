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
        <div className="space-y-1 flex-1">
          <h4 className="bg-blue testimonial-label text-white font-semibold">{name}</h4>
          <p className="testimonial-label">{occupation}</p>
          <span className="testimonial-label font-medium">{reviewType}</span>
        </div>
      </header>
      <p className="rounded-lg border border-white shadow-[0px_0px_5px_rgba(0,0,0,0.25)] p-2 pb-4 flex-1 text-lg leading-loose">
        {testimony}
      </p>
    </li>
  );
}

export default TestimonialCard;
