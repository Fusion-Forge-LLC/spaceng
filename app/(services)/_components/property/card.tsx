import {Heart, MapPin} from "lucide-react";
import Image from "next/image";
import React, {useId} from "react";
import Link from "next/link";

import RatingStars from "./rating-star";

function Card({
  image,
  title,
  location,
  labels,
  rating,
  reviewNum,
  price,
  path,
}: {
  image: string;
  title: string;
  location: string;
  labels: string[];
  rating: number;
  reviewNum: number;
  price: number;
  path: string;
}) {
  const id = useId();

  return (
    <div className="rounded-2xl bg-white p-5 shadow-[0px_3.23px_24.23px_rgba(0,0,0,0.08)] flex flex-col sm:flex-row items-stretch gap-5">
      <div className="h-[321px] aspect-[331/321] sm:h-[163px] sm:aspect-[168/163] shrink-0 relative rounded-lg overflow-hidden">
        <Image fill alt="Property image" className="object-cover" src={image} />
        <div className="h-2/3 w-full bg-gradient-to-b from-[#333]/0 to-[#333] absolute bottom-0 left-0 z-10" />
      </div>

      <div className="flex-1">
        <div className="flex max-xl:justify-between gap-2 mb-1">
          <h4 className="sm:flex-1 text-ellipsis overflow-hidden whitespace-nowrap font-medium text-lg">
            <Link className="hover:underline" href={`${path}/${id}`}>
              {title}
            </Link>
          </h4>
          <span className="sm:ml-auto block w-fit p-2 rounded-md text-xs font-medium bg-[#A0B3E5]">
            New Building
          </span>
          <button className="bg-[#FBFBFB] h-8 w-8 rounded-full grid place-content-center group">
            <Heart className="group-hover:scale-105 transition-all" color="#205BF3" size={18} />
          </button>
        </div>
        <p className="flex items-center pt-2 gap-2">
          <MapPin />
          <span>{location}</span>
        </p>

        <div className="text-grey-200 py-5 sm:py-3 leading-loose">
          {labels.map((item, index) => {
            return (
              <span key={index} className="group">
                {item} <span className="group-last:hidden">• </span>
              </span>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <span className="font-semibold">{rating}</span>

          <RatingStars rating={rating} />

          <span className="text-grey-200 text-xs">({reviewNum} Reviews)</span>

          <p className="ml-auto text-[#443344] font-semibold text-lg">₦{price.toLocaleString()}</p>
          <span className="text-[#333333] text-xs">/night</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
