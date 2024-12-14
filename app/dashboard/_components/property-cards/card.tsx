import {Star} from "lucide-react";
import Image from "next/image";
import React from "react";

import {Rating} from "@/components/Icons/icons";
import {ReviewTypes} from "@/@types/types";
import {getAverageRating} from "@/lib/utils";

import UpdateBtn from "../property_update/update-btn";

interface Props {
  image: string;
  title: string;
  booking: any[];
  views: number;
  rating: ReviewTypes[];
  type: string;
  id: string;
}

function Card({image, title, booking, views, rating, type, id}: Props) {
  const averageRating = getAverageRating(rating);

  return (
    <li>
      <div className="w-full aspect-[334/342] relative">
        <Image fill alt="property image" className="object-cover object-center" src={image} />
      </div>

      <div className="flex items-center gap-2 text-blue py-2">
        <h4 className="flex-1 text-lg overflow-hidden whitespace-nowrap text-ellipsis text-grey font-semibold">
          {title}
        </h4>

        <UpdateBtn id={id} type={type} />
      </div>

      <ul className="text-[#6D6E78] text-sm space-y-2 md:space-y-1">
        <li>Bookings: {booking.length} upcoming</li>
        <li>Views: {views} in the last 30 days</li>
        <li className="flex items-center gap-1">
          Ratings:
          <span className="flex gap-px">
            {Array.from({length: 5}).map((_, index) => {
              if (index + 1 <= averageRating) {
                return <Rating key={index} fill={"#6D6E78"} />;
              } else {
                return <Star key={index} color="#6D6E78" size={13} />;
              }
            })}
          </span>
          {averageRating || 0}/5.0
        </li>
      </ul>
    </li>
  );
}

export default Card;
