import Image from "next/image";
import React from "react";

function SocialBtn({name, image}: {name: string; image: string}) {
  return (
    <button className="border sm:border-2 border-blue text-xs sm:text-base rounded-lg hover:bg-blue/30 hover:border-transparent transition-all flex items-center justify-center gap-1 px-2.5 py-2 sm:py-3 sm:min-w-44">
      <span className="block h-4 w-4 sm:h-8 sm:w-8 relative">
        <Image fill alt={name + " logo"} src={image} />
      </span>

      {name}
    </button>
  );
}

export default SocialBtn;
