import Image from "next/image";
import Link from "next/link";
import React from "react";

import {cn} from "@/lib/utils";

import dummyMap from "../../../../public/dummymap.png";

const amenities = [
  "Wi-Fi",
  "Air Conditioning",
  "Private Pool",
  "Fully Equipped Kitchen",
  "24/7 Security",
  "Parking",
  "Cable TV",
  "Washing Machine",
  "Gym",
  "Terrace with Outdoor Seating",
];

function Page() {
  return (
    <div className="p-2">
      <div className="flex gap-5 items-center text-grey-100">
        <Link className={cn("property-tab-link")} href={""}>
          Property List
        </Link>
        <Link className={cn("property-tab-link", "active")} href={""}>
          Property Details
        </Link>
        <Link className={cn("property-tab-link")} href={""}>
          Booking Calender
        </Link>
        <Link className={cn("property-tab-link")} href={""}>
          Review & Ratings
        </Link>
      </div>
      <div className="grid grid-cols-11 gap-8">
        <article className="py-5 col-span-6">
          <h4 className="text-2xl font-semibold">Luxurious Waterfront Getaway in Banana Island</h4>
          <p className="text-grey-200">
            Experience the epitome of luxury in this stunning waterfront property located in the
            exclusive Banana Island area of Lagos. This spacious 5-bedroom home offers breathtaking
            views of the lagoon, a private swimming pool, and elegant interiors designed for comfort
            and style. The open-plan living area is perfect for entertaining, featuring modern
            furnishings, high ceilings, and floor-to-ceiling windows that flood the space with
            natural light. Each bedroom is an oasis of calm, with en-suite bathrooms and plush
            bedding. The fully equipped kitchen is a chef&apos;s dream, with top-of-the-line
            appliances and a sleek design. Whether you&apos;re looking to relax by the pool, enjoy a
            meal on the terrace, or explore the vibrant city of Lagos, this property provides the
            perfect setting for an unforgettable stay.
          </p>

          <div className="py-5">
            <h4 className="font-semibold text-grey text-2xl">Amenities</h4>
            <ul className="text-grey-200 flex py-2 gap-x-5 gap-y-2 flex-wrap">
              {amenities.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full grid bg-grey-200" />
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          <h4 className="text-2xl font-semibold">Neighborhood Insights</h4>
          <p className="text-grey-200">
            Banana Island is one of Lagos&apos; most prestigious and secure neighborhoods, known for
            its serene environment and luxurious residences. The area offers easy access to top
            restaurants, shopping centers, and cultural attractions. Nearby, you&apos;ll find the
            Lekki Conservation Centre, perfect for a day of nature exploration, and the vibrant
            nightlife of Victoria Island just a short drive away. Whether you&apos;re in Lagos for
            business or leisure, Banana Island provides a tranquil escape with all the conveniences
            of city life at your doorstep.
          </p>

          <div className="flex gap-8 justify-center pt-8">
            <Link className="property-page-link bg-blue text-white hover:opacity-85" href={""}>
              Edit Property
            </Link>
            <Link className="property-page-link text-blue hover:bg-blue hover:text-white" href={""}>
              View Booking
            </Link>
          </div>
        </article>
        <div className="col-span-5 space-y-4">
          <div className=" aspect-video relative overflow-hidden">
            <Image fill alt="Property image" src={"/ikoyi.png"} />
          </div>
          <h3 className="text-xl font-semibold">Address: Plot 45, Banana Island, Ikoyi, Lagos</h3>
          <Image alt="Dummy Map Image" src={dummyMap} />
        </div>
      </div>
    </div>
  );
}

export default Page;
