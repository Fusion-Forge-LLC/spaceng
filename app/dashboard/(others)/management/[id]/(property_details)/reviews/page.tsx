"use client";

import React from "react";

import ReviewCard from "@/app/(services)/_components/review-card/review-card";
import {useGetRatings} from "@/api/rating/get-ratings";
import Loader from "@/components/loader/loader";

function Page({params}: {params: {id: string}}) {
  const {data, isPending} = useGetRatings(params.id);

  if (isPending) {
    return (
      <div className="flex-1 grid py-20 place-content-center">
        <Loader />
      </div>
    );
  }

  if (!data?.data) {
    return (
      <div className="flex-1 grid place-content-center">
        <p className="text-center">An error occured</p>
      </div>
    );
  }
  const reviewList = data.data.reviews || [];

  return (
    <div className="sm:pt-10 flex-1">
      <section className="">
        <h2 className="font-semibold text-grey text-xl mb-2">Reviews & Ratings</h2>

        <p className="font-medium">Guest Reviews & Ratings for {data.data.title}</p>

        {reviewList.length === 0 ? (
          <div className="py-20 text-center">
            <p>No Review yet</p>
          </div>
        ) : (
          <ul className="pt-4">
            {reviewList?.map((item, index) => {
              return (
                <ReviewCard
                  key={index}
                  image={item.client.profile_image}
                  name={item.name}
                  rating={item.rating}
                  text={item.review_text}
                />
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}

export default Page;
