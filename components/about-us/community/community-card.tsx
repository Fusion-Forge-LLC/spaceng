import Image from "next/image";
import React from "react";

function CommunityCard({label, note, image}: {label: string; note: string; image: string}) {
  return (
    <li className="bg-grey rounded-lg p-2 flex gap-20 even:flex-row-reverse">
      <article>
        <span className="bg-blue uppercase rounded-lg py-2 px-4 block w-fit max-w-44 leading-snug text-white font-semibold">
          {label}
        </span>
        <p className="w-72 text-white leading-loose pt-4">{note}</p>
      </article>
      <div className="flex-1 relative rounded-lg overflow-hidden border border-grey-100 h-64">
        <Image fill alt="image" className="object-cover object-center" src={image} />
      </div>
    </li>
  );
}

export default CommunityCard;
