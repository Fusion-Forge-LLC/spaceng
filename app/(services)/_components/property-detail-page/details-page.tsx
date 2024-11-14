"use client";

import React from "react";
import {ArrowRight, CalendarDaysIcon, ImageIcon, MapPin} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

import Wrapper from "@/components/wrapper/wrapper";
import {cn} from "@/lib/utils";
import {useUpdateViews} from "@/api/property/update-view";

import ReviewCard from "../../_components/review-card/review-card";
import SearchProperties from "../../_components/search/search";
import BookShortlet from "../booking-page/booking";

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
  amenities,
  reviews,
}: {
  images: string[];
  title: string;
  location: string;
  descriptionTitle: string;
  description: string;
  cost: number;
  label: "Guest" | "Team";
  amenities: string[];
  reviews: any[];
}) {
  useUpdateViews();

  return (
    <main>
      <Wrapper className="py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-sm:space-y-3">
            <h5 className="md:text-lg font-medium">{title}</h5>
            <p className="flex gap-1 ">
              <MapPin /> {location}{" "}
            </p>
          </div>

          <SearchProperties />
        </div>

        <div className="py-10">
          <div
            className={cn(
              "hidden sm:grid gap-3",
              images.length >= 4
                ? "grid-cols-4"
                : images.length === 3
                  ? "grid-cols-3"
                  : images.length === 2
                    ? "grid-cols-2"
                    : "grid-cols-1",
            )}
          >
            {images.map((item, index) => {
              if (index > 4) return;

              return <PropertyImage key={index} totalImage={images.length} url={item} />;
            })}
          </div>

          <div className="aspect-[331/321] relative rounded-md sm:hidden overflow-hidden">
            <Image
              fill
              alt="Shortlet property image"
              className="object-cover object-center"
              src={images[0]}
            />
            <button className="bg-[#F4F4F4]/80 rounded-lg items-center px-5 py-3 gap-4 flex absolute right-4 bottom-4">
              <ImageIcon /> Gallery
            </button>
          </div>

          <div className="py-12 text-grey-200 flex gap-10 lg:gap-40">
            <article className="text-grey-200 flex-1">
              <div>
                <h4 className="mb-6">About Us</h4>

                <h5 className="text-lg mb-6 font-medium text-grey">{descriptionTitle}</h5>

                <div
                  dangerouslySetInnerHTML={{__html: description}}
                  className="leading-loose mb-8"
                />

                <h5 className="text-lg  md:mb-6 font-medium text-grey">Amenities</h5>

                <ul className="sm:grid grid-rows-3 grid-flow-col gap-8 py-3">
                  {amenities.map((item, index) => {
                    return (
                      <li key={index} className="py-3 sm:py-0">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <BookingCard className="md:hidden my-16" cost={cost} label={label} />

              <div className="pt-12">
                <h4 className="mb-6">Reviews & Ratings</h4>

                <h5 className="text-lg mb-6 font-medium text-grey">
                  Our Guest Reviews & Ratings for {title}
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
                {reviews.length === 0 && <p className="py-10 italic text-center">No review yet</p>}
              </div>
            </article>

            <BookingCard className="hidden md:block" cost={cost} label={label} />
          </div>
        </div>
      </Wrapper>
    </main>
  );
}

function BookingCard({
  className,
  cost,
  label,
}: {
  className: string;
  cost: number;
  label: "Guest" | "Team";
}) {
  const pathname = usePathname();

  return (
    <div className={cn("sm:w-[310px] lg:w-[435px] shrink-0 space-y-5", className)}>
      <Link className="flex items-center group property-book gap-4" href={`${pathname}/booking`}>
        <CalendarDaysIcon />
        <span>Arrange a visit</span>

        <ArrowRight className="ml-auto group-hover:scale-150 transition-all" color="#205BF3" />
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
  );
}

function PropertyImage({url, totalImage}: {url: string; totalImage: number}) {
  return (
    <div
      className={cn(
        "aspect-[300/255] group relative rounded-md first:rounded-lg overflow-hidden",
        totalImage >= 5 || totalImage === 3
          ? "first:col-span-2 first:row-span-2"
          : totalImage === 4
            ? "first:col-span-3 first:row-span-3"
            : null,
      )}
    >
      <Image fill alt="Shortlet property image" className="object-cover object-center" src={url} />
      <button className="bg-[#F4F4F4]/80 hover:bg-[#F4F4F4] rounded-lg items-center px-3 lg:px-5 py-2 lg:py-3 gap-4 hidden group-last:flex absolute right-2 md:right-3 lg:right-6 bottom-2 md:bottom-3 lg:lbottom-6">
        <ImageIcon /> Gallery
      </button>
    </div>
  );
}

export default DetailsPage;
