import Image from "next/image";
import React from "react";

function SocialBtn({name, image}: {name: string; image: string}) {
  return (
    <button className="border-2 border-blue rounded-lg hover:bg-blue/30 hover:border-transparent transition-all flex items-center justify-center gap-1 px-2.5 py-3 min-w-44">
      <Image alt={name + "logo"} height={32} src={image} width={32} />

      {name}
    </button>
  );
}

export default SocialBtn;
