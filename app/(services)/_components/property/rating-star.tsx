import React from "react";

import {Rating} from "@/components/Icons/icons";

function RatingStars({rating}: {rating: number}) {
  return (
    <div className="flex gap-0.5">
      {Array.from({length: 5}).map((_, index) => {
        return (
          <Rating
            key={index}
            fill={index + 1 <= rating ? "#FABB05" : "#888888"}
            opacity={index + 1 <= rating ? 1 : 0.16}
          />
        );
      })}
    </div>
  );
}

export default RatingStars;
