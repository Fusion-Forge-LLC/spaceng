"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";

import {useGetProperty} from "@/api/property/property";
import Loader from "@/components/loader/loader";
import NotFound from "@/components/not-found/not-found";

import dummyMap from "../../../../../public/dummymap.png";

function Page({params}: {params: {id: string}}) {
  const {data, isPending} = useGetProperty(params.id);
  const pathName = usePathname();

  if (isPending) {
    return (
      <div className="flex-1 overflow-hidden grid place-content-center">
        <Loader />
      </div>
    );
  }

  if (!data?.data) {
    return <NotFound />;
  }

  const {
    property_title,
    price,
    property_description,
    property_address,
    gallery,
    features,
    reviews,
  } = data.data;

  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-11 gap-8 max-lg:pt-5 flex-1 overflow-y-scroll">
      <article className="py-5 lg:col-span-6 text-sm lg:text-base">
        <h4 className="text-lg sm:text-2xl font-semibold mb-2 max-lg:text-center">
          {property_title}
        </h4>

        <div
          dangerouslySetInnerHTML={{__html: property_description}}
          className="leading-loose mb-8"
        />

        <div className="py-5">
          <h4 className="font-semibold text-grey text-lg sm:text-2xl">Amenities</h4>
          <ul className="text-grey-200 flex flex-col md:flex-row py-2 gap-x-5 gap-y-2 flex-wrap">
            {features.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full grid bg-grey-200" />
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        <h4 className="text-lg sm:text-2xl font-semibold mb-2">Neighborhood Insights</h4>
        <p className="text-grey-200">
          Banana Island is one of Lagos&apos; most prestigious and secure neighborhoods, known for
          its serene environment and luxurious residences. The area offers easy access to top
          restaurants, shopping centers, and cultural attractions. Nearby, you&apos;ll find the
          Lekki Conservation Centre, perfect for a day of nature exploration, and the vibrant
          nightlife of Victoria Island just a short drive away. Whether you&apos;re in Lagos for
          business or leisure, Banana Island provides a tranquil escape with all the conveniences of
          city life at your doorstep.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 md:gap-8 sm:justify-center pt-8">
          <Link
            className="property-page-link bg-blue w-full text-white hover:opacity-85"
            href={`${pathName}/edit`}
          >
            Edit Property
          </Link>
          <Link
            className="property-page-link text-blue w-full hover:bg-blue hover:text-white"
            href={`${pathName}/booking`}
          >
            View Booking
          </Link>
        </div>
      </article>
      <div className="lg:col-span-5 space-y-6 lg:space-y-4">
        <div className=" aspect-video relative overflow-hidden">
          <Image fill alt="Property image" src={"/ikoyi.png"} />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold">Address: {property_address.address}</h3>
        <Image alt="Dummy Map Image" className="max-lg:w-full" src={dummyMap} />
      </div>
    </div>
  );
}

export default Page;
