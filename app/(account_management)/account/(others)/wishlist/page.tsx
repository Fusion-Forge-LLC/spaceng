"use client";

import Image from "next/image";
import {useState} from "react";
import {ChevronDown} from "lucide-react";

import Card from "@/app/(services)/_components/property/card";
import {useGetUserWishlists} from "@/api/wishlist/get-wishlists";
import {useUser} from "@/context/user";
import Loader from "@/components/loader/loader";

export default function Wishlist() {
  const [display, setDisplay] = useState<"shortlet" | "workspace">("shortlet");
  const {User} = useUser();
  const {data, isPending} = useGetUserWishlists(User?._id as string);

  if (isPending || !data) {
    return (
      <div className="min-h-screen grid place-content-center">
        <Loader />
      </div>
    );
  }

  const properties = data?.data.wishlists[display];

  return (
    <div className="min-h-screen text-grey-200">
      <div
        className="border-b-[#D7D7D7] py-5 px-5 lg:px-24 flex items-center gap-4"
        style={{borderBottomWidth: "0.5px"}}
      >
        <button className="flex gap-[5px] items-center">
          <span className="text-grey text-lg">Saved</span>
          <div className="w-7 h-7 bg-[#D7D7D7] rounded-full flex items-center justify-center text-grey text-[11px]">
            {isPending ? 0 : data?.data.total_wishlists}
          </div>
        </button>
        <button className="py-1.5 px-4 rounded-lg text-blue bg-[#E2EAFF] font-medium">
          Share list
        </button>
        <button className="py-1.5 px-4 rounded-lg bg-blue text-white font-medium">
          Create a list
        </button>
      </div>
      {data?.data.total_wishlists === 0 ? (
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
            <button className="bg-blue py-3 px-4 text-white font-medium rounded-lg mx-auto block">
              Start searching
            </button>
          </div>
        </div>
      ) : (
        <div className="px-5 lg:px-24 py-5">
          <div className="mb-2.5 flex gap-6 items-center">
            <button
              className={`${display == "shortlet" ? "text-blue" : "text-grey"} flex items-center gap-2 font-medium text-base lg:text-lg`}
              onClick={() => setDisplay("shortlet")}
            >
              Shortlets
              <ChevronDown size={24} />
            </button>
            <button
              className={`${display == "workspace" ? "text-blue" : "text-grey"} flex items-center gap-2 font-medium text-base lg:text-lg`}
              onClick={() => setDisplay("workspace")}
            >
              Workspaces
              <ChevronDown size={24} />
            </button>
          </div>

          {properties.length === 0 ? (
            <div className="text-center py-10">No Property Wishlisted for {display}</div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 py-3 lg:py-8">
              {properties.map((item) => {
                return (
                  <Card
                    key={item._id}
                    id={item.property_id._id}
                    image={item.property_id.gallery[0]}
                    labels={item.property_id.features}
                    location={`${item.property_id.property_address.address}`}
                    path={"/" + item.property_id.type}
                    postfix={item.property_id.price_postfix}
                    price={item.property_id.price}
                    rating={item.property_id.reviews}
                    reviewNum={item.property_id.reviews.length}
                    title={item.property_id.property_title}
                    wishlist={item.property_id.wishlists}
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
