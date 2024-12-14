import Image from "next/image";
import {useRouter} from "next/navigation";
import React, {useState} from "react";

import {StarReview} from "@/components/Icons/icons";
import {Button} from "@/components/ui/button";
import ModalWrapper from "@/components/ui/modals/modal-wrapper";
import {ratingText} from "@/lib/utils";

function Review({
  title,
  thumbnail,
  property_id,
}: {
  title: string;
  thumbnail: string;
  property_id: string;
}) {
  const router = useRouter();
  const [rating, setRating] = useState(0);

  const openReview = (rating: number) => {
    const params = new URLSearchParams();

    params.set("rating", rating.toString());

    router.push(`/account/bookings/${property_id}/review?${params.toString()}`);
  };

  return (
    <ModalWrapper title="How would you rate this property" trigger={<Button>Review</Button>}>
      <div className="pt-8 pb-1 flex gap-4">
        <div className="overflow-hidden relative h-28 w-28 rounded">
          <Image
            fill
            alt="Property image"
            className="object-cover overflow-hidden"
            src={thumbnail}
          />
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <h4 className="text-lg font-medium">{title}</h4>
          <span>Select the stars to rate</span>

          <div className="flex mt-auto pb-4">
            {Array.from({length: 5}).map((_, index) => {
              return (
                <button
                  key={index}
                  className="pr-3 last:pr-0"
                  onClick={() => openReview(index + 1)}
                  onMouseLeave={() => setRating(0)}
                  onMouseMove={() => setRating(index + 1)}
                >
                  <StarReview
                    fill={index + 1 <= rating ? "#FABB05" : "#888888"}
                    opacity={index + 1 <= rating ? 1 : 0.5}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="pl-32 h-5">
        <span className="text-black/90">{ratingText(rating)}</span>
      </div>
    </ModalWrapper>
  );
}

export default Review;
