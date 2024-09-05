import Image from "next/image";
import React from "react";

function Features({title, note, image}: {title: string; note: string; image: string}) {
  return (
    <li className="shadow-[2px_0px_15px_rgba(0,0,0,0.25)] h-[400px] h rounded-[15px] flex gap-10 even:flex-row-reverse group">
      <article className="text-white font-semibold text-lg flex flex-col group-even:items-end gap-10 p-4 w-1/3 shrink-0">
        <h3 className="p-3 features-text">{title}</h3>
        <p className="p-3 features-text">{note}</p>
      </article>
      <div className="relative flex-1 rounded-[15px] overflow-hidden">
        <Image
          fill
          alt="SpaceNG Image"
          className="object-cover object-center drop-shadow-[(0px_0px_10px_rgba(0,0,0,0.4))]"
          src={image}
        />
      </div>
    </li>
  );
}

export default Features;
