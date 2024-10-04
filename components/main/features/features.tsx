import Image from "next/image";
import React from "react";

function Features({title, note, image}: {title: string; note: string; image: string}) {
  return (
    <li className="shadow-[2px_0px_15px_rgba(0,0,0,0.25)] sm:h-64 md:h-80 lg:h-[400px] h rounded-[15px] flex gap-1 sm:gap-10 even:flex-row-reverse group">
      <article className="flex flex-col group-even:items-end gap-4 md:gap-10 mb-8 sm:mb-3 p-2 sm:p-4 w-1/2 md:w-2/5 lg:w-1/3 shrink-0">
        <h3 className="p-3 font-semibold  text-white text-[10px] sm:text-sm md:text-base px-2 sm:px-4 lg:px-8 features-text">
          {title}
        </h3>
        <p className="p-3 px-1.5 max-sm:leading-tight sm:px-4 lg:px-8 bg-white text-[8px] sm:text-sm border border-grey-100 shadow-[2px_0px_15px_rgba(0,0,0,0.25)]">
          {note}
        </p>
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
