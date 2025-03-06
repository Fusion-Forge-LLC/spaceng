import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import React from "react";

function Card({
  image,
  title,
  note,
  link,
}: {
  image: StaticImageData;
  title: string;
  note: string;
  link: string;
}) {
  return (
    <li className="space-y-2 sm:space-y-4">
      <Link className="block relative aspect-[368/287]" href={link}>
        <Image alt="Image" className="w-full h-full object-cover object-center" src={image} />
      </Link>
      <div className="py-4 px-2">
        <Link href={link}>
          <h5 className="text-[#434343] text-xl sm:text-2xl hover:underline">{title}</h5>
        </Link>
        <p className="text-[#707070] max-sm:text-sm">
          <span className="leading-loose">{note}</span>
        </p>
      </div>
    </li>
  );
}

export default Card;
