/* eslint-disable prettier/prettier */
import React from "react";
import Image from "next/image";
import Link from "next/link";
//import { useMediaQuery } from 'react-responsive';

interface SettingsCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  url: string;
}

function SettingsCard({title, description, link, image, url}: SettingsCardProps) {
  /* const isMobile = useMediaQuery({
        query:'(max-width:764px)'
    }) */
  /* <div className="w-full md:max-w-[397px] py-6 px-4 bg-white flex gap-2 items-start rounded-lg shadow-none md:shadow " style={{boxShadow: isMobile ? "" : "0 2px 4px 0 rgb(0,0,0,0.25)"}} > */

  return (
    <div
      className="w-full md:max-w-[397px] py-6 px-4 bg-white flex gap-2 items-start rounded-lg shadow-none md:shadow "
      style={{boxShadow: "0 2px 4px 0 rgb(0,0,0,0.25)"}}
    >
      <Image
        alt="avatar"
        className="rounded-full relative top-0.5"
        height={24}
        src={image}
        width={24}
      />
      <div className="flex flex-col gap-1">
        <h3 className="font-bold lg:font-semibold text-base lg:text-xl text-grey">{title}</h3>
        <p className="text-sm lg:text-base text-grey-200">{description}</p>
        <Link className="text-blue font-medium lg:text-base" href={url}>
          {link}
        </Link>
      </div>
    </div>
  );
}

export default SettingsCard;
