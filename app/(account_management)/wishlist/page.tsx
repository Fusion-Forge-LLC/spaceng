"use client";
import Image from "next/image";
import {useState} from "react";
import {ChevronDown} from "lucide-react";

import {PropertyType} from "@/@types/types";
import Card from "@/app/(services)/_components/property/card";

export default function Wishlist() {
  const [view, setView] = useState("emptylist");
  const [display, setDisplay] = useState("shortlets");

  return (
    <div className="min-h-screen text-grey-200">
      <div
        className="border-b-[#D7D7D7] py-10 px-5 lg:px-24 flex items-center gap-4"
        style={{borderBottomWidth: "0.5px"}}
      >
        <button className="flex gap-[5px] items-center">
          <span className="text-grey text-lg">Saved</span>
          <div className="w-7 h-7 bg-[#D7D7D7] rounded-full flex items-center justify-center text-grey text-[11px]">
            {view === "emptylist" ? 0 : shortlets.length}
          </div>
        </button>
        <button className="py-3 px-4 rounded-lg text-blue bg-[#E2EAFF] font-medium">
          Share list
        </button>
        <button className="py-3 px-4 rounded-lg bg-blue text-white font-medium">
          Create a list
        </button>
      </div>
      {view === "emptylist" ? (
        <div className="px-5 lg:px-24 py-7">
          <div className="w-full max-w-[447px] mx-auto ">
            <div className="w-fit sm:mx-auto">
              <Image
                alt="office"
                className="z-10 relative w-[260px] h-[150px] lg:w-[284px] lg:h-[173px] "
                height={173}
                src="/account_management/Office1.svg"
                width={284}
              />
              <Image
                alt="office"
                className="relative w-[260px] h-[150px] lg:w-[284px] lg:h-[173px]  bottom-[44px] left-14 md:left-[74px]"
                height={173}
                src="/account_management/Office3.svg"
                width={284}
              />
            </div>
            <div className="text-center -mt-3 mb-8 lg:mb-11">
              <h2 className="mb-2 text-base lg:text-lg font-medium text-grey">
                Here are 3 simple steps to help you begin:
              </h2>
              <ul className="text-sm lg:text-base">
                <li>1. Search for a place to rent</li>
                <li>2. Tap the heart icon when you find a property you like</li>
                <li>3. You&apos;ll find all you&apos;ve saved here</li>
              </ul>
            </div>
            <button
              className="bg-blue py-3 px-4 text-white font-medium rounded-lg mx-auto block"
              onClick={() => setView("list")}
            >
              Start searching
            </button>
          </div>
        </div>
      ) : (
        <div className="px-5 lg:px-24 py-7">
          <div className="mb-2.5 flex gap-6 items-center">
            <button
              className={`${display == "shortlets" ? "text-blue" : "text-grey"} flex items-center gap-2 font-medium text-base lg:text-2xl`}
              onClick={() => setDisplay("shortlets")}
            >
              Shortlets
              <ChevronDown size={24} />
            </button>
            <button
              className={`${display == "workspaces" ? "text-blue" : "text-grey"} flex items-center gap-2 font-medium text-base lg:text-2xl`}
              onClick={() => setDisplay("workspaces")}
            >
              Workspaces
              <ChevronDown size={24} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 py-3 lg:py-12">
            {display === "shortlets"
              ? shortlets.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      image={item.image}
                      labels={item.labels}
                      location={item.location}
                      path={"/shortlet"}
                      price={item.price}
                      rating={item.rating}
                      reviewNum={item.reviewNum}
                      title={item.title}
                    />
                  );
                })
              : workspaces.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      image={item.image}
                      labels={item.labels}
                      location={item.location}
                      path={"/workspace"}
                      price={item.price}
                      rating={item.rating}
                      reviewNum={item.reviewNum}
                      title={item.title}
                    />
                  );
                })}
          </div>
        </div>
      )}
    </div>
  );
}

const workspaces: PropertyType[] = [
  {
    image: "/workspace/image1.png",
    title: "Co-worka",
    location: "1001, Estate, Lekki, Lagos ",
    labels: ["WiFi", "Air", "conditioning", "Kitchen", "Parking", "Balcony", "Pets Friendly"],
    rating: 4,
    reviewNum: 75,
    price: 5000,
  },
  {
    image: "/workspace/image2.png",
    title: "Work Buddies",
    location: "1001, Estate, Lekki, Lagos ",
    labels: ["WiFi", "Air", "conditioning", "Kitchen", "Parking", "Balcony", "Pets Friendly"],
    rating: 5,
    reviewNum: 25,
    price: 3500,
  },
  {
    image: "/workspace/image3.png",
    title: "Share a Desk",
    location: "1001, Estate, Lekki, Lagos ",
    labels: ["WiFi", "Air", "conditioning", "Kitchen", "Parking", "Balcony", "Pets Friendly"],
    rating: 4,
    reviewNum: 10,
    price: 400,
  },
  {
    image: "/workspace/image1.png",
    title: "Co-worka",
    location: "1001, Estate, Lekki, Lagos ",
    labels: ["WiFi", "Air", "conditioning", "Kitchen", "Parking", "Balcony", "Pets Friendly"],
    rating: 4,
    reviewNum: 75,
    price: 5000,
  },
  {
    image: "/workspace/image2.png",
    title: "Work Buddies",
    location: "1001, Estate, Lekki, Lagos ",
    labels: ["WiFi", "Air", "conditioning", "Kitchen", "Parking", "Balcony", "Pets Friendly"],
    rating: 5,
    reviewNum: 25,
    price: 3500,
  },
];

const shortlets: PropertyType[] = [
  {
    image: "/shortlets/image1.png",
    title: "Haven Homes",
    location: "1001, Estate, Lekki, Lagos ",
    labels: ["WiFi", "Air", "conditioning", "Kitchen", "Parking", "Balcony", "Pets Friendly"],
    rating: 4,
    reviewNum: 72,
    price: 25000,
  },
  {
    image: "/shortlets/image2.png",
    title: "Lotus Court",
    location: "1002, Estate, Lekki, Lagos ",
    labels: ["WiFi", "Air", "conditioning", "Kitchen", "Parking", "Balcony", "Pets Friendly"],
    rating: 5,
    reviewNum: 25,
    price: 12500,
  },
  {
    image: "/shortlets/image3.png",
    title: "Summer House",
    location: "1003, Estate, Lekki, Lagos ",
    labels: ["WiFi", "Air", "conditioning", "Kitchen", "Parking", "Balcony", "Pets Friendly"],
    rating: 4,
    reviewNum: 10,
    price: 15000,
  },
  {
    image: "/shortlets/image1.png",
    title: "Haven Homes",
    location: "1001, Estate, Lekki, Lagos ",
    labels: ["WiFi", "Air", "conditioning", "Kitchen", "Parking", "Balcony", "Pets Friendly"],
    rating: 4,
    reviewNum: 72,
    price: 25000,
  },
  {
    image: "/shortlets/image2.png",
    title: "Lotus Court",
    location: "1002, Estate, Lekki, Lagos ",
    labels: ["WiFi", "Air", "conditioning", "Kitchen", "Parking", "Balcony", "Pets Friendly"],
    rating: 5,
    reviewNum: 25,
    price: 12500,
  },
];
