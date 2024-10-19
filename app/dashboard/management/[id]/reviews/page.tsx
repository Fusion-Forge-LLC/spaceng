import React from "react";

import ReviewCard from "@/app/(services)/_components/review-card/review-card";
import {Receiver, Sender} from "@/app/dashboard/_components/chat/message";

const reviews = [
  {
    image: "/reviews/image1.jpg",
    name: "Femi Andrew",
    rating: 5,
    text: "Absolutely stunning property with breathtaking views. The perfect getaway for our family vacation!”",
  },
  {
    image: "/reviews/image2.png",
    name: "Sarah Thomas",
    rating: 5,
    text: "Beautiful home and excellent location. We enjoyed our stay, but we did encounter some issues with the Wi-Fi connection.",
  },
  {
    image: "/reviews/image3.jpg",
    name: "Femi Andrew",
    rating: 5,
    text: "Absolutely stunning property with breathtaking views. The perfect getaway for our family vacation!”",
  },
  {
    image: "/reviews/image4.jpg",
    name: "Femi Andrew",
    rating: 5,
    text: "Absolutely stunning property with breathtaking views. The perfect getaway for our family vacation!”",
  },
  {
    image: "/reviews/image5.png",
    name: "Femi Andrew",
    rating: 5,
    text: "Absolutely stunning property with breathtaking views. The perfect getaway for our family vacation!”",
  },
  {
    image: "/reviews/image6.png",
    name: "Femi Andrew",
    rating: 5,
    text: "Absolutely stunning property with breathtaking views. The perfect getaway for our family vacation!”",
  },
];

function Page() {
  return (
    <div className="grid grid-cols-2 gap-20 pt-10 flex-1 overflow-hidden border border-red-500">
      <section className="h-full overflow-y-scroll">
        <h2 className="font-semibold text-grey text-xl mb-2">Reviews & Ratings</h2>

        <p className="font-medium">Guest Reviews & Ratings for Luxurious Waterfront Getaway</p>

        <ul className="pt-9">
          {reviews.map((item, index) => {
            return (
              <ReviewCard
                key={index}
                image={item.image}
                name={item.name}
                rating={item.rating}
                text={item.text}
              />
            );
          })}
        </ul>
      </section>

      <section>
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
      </section>
    </div>
  );
}

export default Page;
