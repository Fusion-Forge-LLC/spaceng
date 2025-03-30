"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";

import {useGetProperty} from "@/api/property/property";
import Loader from "@/components/loader/loader";
import NotFound from "@/components/not-found/not-found";
import SingleMap from "@/components/map/singlemap";

import Share from "../../_component/share/share";

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

  const {property_title, property_description, property_address, gallery, features, _id, type} =
    data.data;

  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-11 gap-8 max-lg:pt-5 flex-1">
      <article className="py-5 lg:col-span-6 text-sm lg:text-base">
        <h4 className="text-lg sm:text-xl font-semibold mb-2 max-lg:text-center">
          {property_title}
        </h4>

        <div
          dangerouslySetInnerHTML={{__html: property_description}}
          className="leading-loose mb-8"
        />

        <div className="py-5">
          <h4 className="font-semibold text-grey text-lg sm:text-xl">Amenities</h4>
          <ul className="text-grey-200 flex flex-col md:flex-row py-2 gap-x-5 gap-y-2 flex-wrap">
            {features?.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full grid bg-grey-200" />
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:justify-center pt-8">
          <Link
            className="property-page-link text-blue w-full hover:bg-blue hover:text-white "
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
          <Share id={_id} title={property_title} type={type} />
        </div>
      </article>
      <div className="lg:col-span-5 space-y-6 lg:space-y-4">
        <div className=" aspect-video relative overflow-hidden">
          <Image fill alt="Property image" className="object-cover object-top" src={gallery[0]} />
        </div>
        <h3 className="text-lg font-semibold">Address: {property_address.address}</h3>
        {property_address.coordinates &&
          property_address.coordinates.length > 0 &&
          property_address.coordinates[0] !== undefined && (
            <div className="h-80">
              <SingleMap
                posix={[property_address.coordinates[0], property_address.coordinates[1]]}
              />
            </div>
          )}
      </div>
    </div>
  );
}

export default Page;
