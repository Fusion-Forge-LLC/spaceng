import React from "react";
import {ArrowRight, CalendarDaysIcon, ImageIcon, MapPin} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "@/components/wrapper/wrapper";

import ReviewCard from "../components/review-card/review-card";
import SearchProperties from "../components/search/search";
import BookShortlet from "../components/book-shortlet/book-shortlet";

const images = [
  "/shortlets/image6.png",
  "/shortlets/image5.png",
  "/shortlets/image2.png",
  "/shortlets/image4.png",
  "/shortlets/image3.png",
];
const amenities = [
  "Elevator",
  "24 Hour CCTV Mointoring",
  "Easy Access from the Bus Stop",
  "Parking Space Avaliable",
];

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
    <main>
      <Wrapper className="py-10">
        <div className="flex items-center justify-between">
          <div>
            <h5 className="text-lg font-medium">Haven Homes</h5>
            <p className="flex gap-1">
              <MapPin /> 1001, Estate, Lekki, Lagos{" "}
            </p>
          </div>

          <SearchProperties />
        </div>

        <div className="py-10">
          <div className="grid grid-cols-4 gap-3">
            {images.map((item, index) => {
              return (
                <div
                  key={index}
                  className="aspect-[300/255] group relative first:col-span-2 first:row-span-2 rounded-md first:rounded-lg overflow-hidden"
                >
                  <Image
                    fill
                    alt="Shortlet property image"
                    className="object-cover object-center"
                    src={item}
                  />
                  <button className="bg-[#F4F4F4]/80 hover:bg-[#F4F4F4] rounded-lg items-center px-5 py-3 gap-4 hidden group-last:flex absolute right-6 bottom-6">
                    <ImageIcon /> Gallery
                  </button>
                </div>
              );
            })}
          </div>

          <div className="py-12 text-grey-200 flex gap-40">
            <article className="text-grey-200 flex-1">
              <div>
                <h4 className="mb-6">About Us</h4>

                <h5 className="text-lg mb-6 font-medium text-grey">
                  Discover your Lagos haven with Haven Homes.
                </h5>

                <p className="leading-loose mb-8">
                  Our carefully curated collection of stylish shortlets offers the perfect blend of
                  comfort and convenience. Whether you&rsquo;re visiting for business or leisure,
                  our properties provide a home away from home in the heart of Lagos. Enjoy
                  world-class amenities, prime locations, and exceptional service. Book your stay
                  today and experience the best of Lagos living.
                </p>

                <h5 className="text-lg mb-6 font-medium text-grey">Amenities</h5>

                <ul className="grid grid-rows-3 grid-flow-col gap-8 py-3">
                  {amenities.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </div>

              <div className="pt-12">
                <h4 className="mb-6">Reviews & Ratings</h4>

                <h5 className="text-lg mb-6 font-medium text-grey">
                  Our Guest Reviews & Ratings for Haven Homes
                </h5>

                <ul>
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
              </div>
            </article>

            <div className="w-[435px] shrink-0 space-y-5">
              <Link className="flex items-center group property-book gap-4" href={"/"}>
                <CalendarDaysIcon />
                <span>Arrange a visit</span>

                <ArrowRight
                  className="ml-auto group-hover:scale-150 transition-all"
                  color="#205BF3"
                />
              </Link>

              <div className="property-book ">
                <p className="text-2xl font-bold text-[#443344] flex items-center gap-2">
                  ₦ 25,0000 <span className="text-[#333] text-xs font-normal">/night</span>
                </p>

                <div>
                  <BookShortlet showBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </main>
  );
}

export default Page;
