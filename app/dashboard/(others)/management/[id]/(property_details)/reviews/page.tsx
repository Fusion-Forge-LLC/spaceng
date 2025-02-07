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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 pt-10 flex-1 overflow-hidden">
      <section className="h-full md:overflow-y-scroll">
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
                  image={"/reviews/image5.png"}
                  name={item.name}
                  rating={item.rating}
                  text={item.review_text}
                />
              );
            })}
          </ul>
        )}
      </section>

      {/* <section>
        <Sender
          name="Sarah Thomas"
          profileImage="/reviews/image4.jpg"
          rating={5}
          text="Beautiful home and excellent location. We enjoyed our stay, but we did encounter some issues with the Wi-Fi connection. However, the host was quick to assist, and it didn’t impact our overall experience. We would definitely consider staying here again."
        />
        <Receiver
          name="Oluwatosin Oladele"
          profileImage="/avatar.png"
          text="Thank you for your feedback! We apologize for the inconvenience with the Wi-Fi and appreciate your understanding. We’ll work on improving this for future guests"
        />
        <Sender
          name="Sarah Thomas"
          profileImage="/reviews/image4.jpg"
          rating={5}
          text="Beautiful home and excellent location. We enjoyed our stay, but we did encounter some issues with the Wi-Fi connection. However, the host was quick to assist, and it didn’t impact our overall experience. We would definitely consider staying here again."
        />
        <Receiver
          name="Oluwatosin Oladele"
          profileImage="/avatar.png"
          text="Thank you for your feedback! We apologize for the inconvenience with the Wi-Fi and appreciate your understanding. We’ll work on improving this for future guests"
        />
      </section> */}
    </div>
  );
}

export default Page;
