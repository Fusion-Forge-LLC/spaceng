import Image from "next/image";
import React from "react";

import RatingStars from "../property/rating-star";

function ReviewCard({
  image,
  name,
  rating,
  text,
}: {
  image: string;
  name: string;
  rating: number;
  text: string;
}) {
  return (
    <li className="p-3 rounded-lg">
      <div className="flex items-center mb-4 gap-5">
        <div className="h-16 w-16 rounded-full relative overflow-hidden">
          <Image fill alt="Reviewer image" className="object-cover object-center" src={image} />
        </div>
        <h4 className="text-grey font-medium ml-auto">{name}</h4>
        <div className="flex gap-1 items-center">
          <RatingStars rating={rating} />
          <span className="font-medium">{rating}/5</span>
        </div>
      </div>
      <p className="leading-loose">{text}</p>
    </li>
  );
}

export default ReviewCard;
