import {Edit3, Eye, Star, Trash2} from "lucide-react";
import Image from "next/image";
import React from "react";

import {Rating} from "@/components/Icons/icons";

interface Props {
  image: string;
  title: string;
  booking: number;
  views: number;
  rating: number;
}

function Card({image, title, booking, views, rating}: Props) {
  return (
    <li>
      <div className="w-full aspect-[334/342] relative">
        <Image fill alt="property image" className="object-cover object-center" src={image} />
      </div>

      <div className="flex items-center gap-2 text-blue py-2">
        <h4 className="flex-1 text-lg overflow-hidden whitespace-nowrap text-ellipsis text-grey font-semibold">
          {title}
        </h4>

        <button>
          <Edit3 size={16} />
        </button>
        <button>
          <Eye size={16} />
        </button>
        <button>
          <Trash2 size={16} />
        </button>
      </div>

      <ul className="text-[#6D6E78] text-sm space-y-2 md:space-y-1">
        <li>Bookings: {booking} upcoming</li>
        <li>Views: {views} in the last 30 days</li>
        <li className="flex items-center gap-1">
          Ratings:
          <span className="flex gap-px">
            {Array.from({length: 5}).map((_, index) => {
              if (index + 1 < rating) {
                return <Rating key={index} fill={"#6D6E78"} />;
              } else {
                return <Star key={index} color="#6D6E78" size={13} />;
              }
            })}
          </span>
          {rating}/5.0
        </li>
      </ul>
    </li>
  );
}

export default Card;
