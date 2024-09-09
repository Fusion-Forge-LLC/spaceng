"use client";

import React from "react";
import {ArrowRight, CalendarDaysIcon, ImageIcon, MapPin} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

import Wrapper from "@/components/wrapper/wrapper";

import ReviewCard from "../../_components/review-card/review-card";
import SearchProperties from "../../_components/search/search";
import BookShortlet from "../booking-page/booking";

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

function DetailsPage({
  images,
  title,
  location,
  descriptionTitle,
  description,
  cost,
  label,
}: {
  images: string[];
  title: string;
  location: string;
  descriptionTitle: string;
  description: string;
  cost: number;
  label: "Guest" | "Team";
}) {
  const pathname = usePathname();

  return (
    <main>
      <Wrapper className="py-10">
        <div className="flex items-center justify-between">
          <div>
            <h5 className="text-lg font-medium">{title}</h5>
            <p className="flex gap-1">
              <MapPin /> {location}{" "}
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

                <h5 className="text-lg mb-6 font-medium text-grey">{descriptionTitle}</h5>

                <p className="leading-loose mb-8">{description}</p>

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
              <Link
                className="flex items-center group property-book gap-4"
                href={`${pathname}/booking`}
              >
                <CalendarDaysIcon />
                <span>Arrange a visit</span>

                <ArrowRight
                  className="ml-auto group-hover:scale-150 transition-all"
                  color="#205BF3"
                />
              </Link>

              <div className="property-book ">
                <p className="text-2xl font-bold text-[#443344] flex items-center gap-2">
                  ₦ {cost.toLocaleString("en-Us")}{" "}
                  <span className="text-[#333] text-xs font-normal">/night</span>
                </p>

                <div>
                  <BookShortlet showBtn label={label} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </main>
  );
}

export default DetailsPage;