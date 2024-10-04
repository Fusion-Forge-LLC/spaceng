import {ArrowRight} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, {FC} from "react";

function Offers({
  image,
  title,
  Icon,
  note,
  amount,
}: {
  image: string;
  title: string;
  Icon: FC;
  note: string;
  amount: number;
}) {
  return (
    <div className="aspect-[595/619] relative">
      <Image fill alt="Offer image" src={image} />
      <div className="absolute bottom-8 w-11/12 left-1/2 -translate-x-1/2 bg-white rounded-[15px] p-4 shadow-[4px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="flex items-center justify-between py-2 mb-5">
          <h4 className="font-semibold text-[#707070] sm:text-2xl">{title}</h4>
          <span className="h-8 sm:h-12 w-8 sm:w-12   rounded-full bg-grey grid place-content-center">
            <Icon />
          </span>
        </div>

        <p className="text-sm ">{note}</p>
        <div className="flex items-center pt-4 lg:pt-12">
          <Link className="flex items-center gap-1 ml-auto" href={`/${title.toLocaleLowerCase()}`}>
            <span className="font-bold">Book Now</span>
            <span className="grid h-5 w-5 place-content-center rounded-full bg-grey">
              <ArrowRight color="#fff" size={10} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Offers;
