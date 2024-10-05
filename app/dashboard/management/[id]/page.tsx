import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-11 gap-8 max-lg:pt-5">
      <article className="py-5 lg:col-span-6 text-sm lg:text-base">
        <h4 className="text-lg sm:text-2xl font-semibold mb-2 max-lg:text-center">
          Luxurious Waterfront Getaway in Banana Island
        </h4>
        <p className="text-grey-200">
          Experience the epitome of luxury in this stunning waterfront property located in the
          exclusive Banana Island area of Lagos. This spacious 5-bedroom home offers breathtaking
          views of the lagoon, a private swimming pool, and elegant interiors designed for comfort
          and style. The open-plan living area is perfect for entertaining, featuring modern
          furnishings, high ceilings, and floor-to-ceiling windows that flood the space with natural
          light. Each bedroom is an oasis of calm, with en-suite bathrooms and plush bedding. The
          fully equipped kitchen is a chef&apos;s dream, with top-of-the-line appliances and a sleek
          design. Whether you&apos;re looking to relax by the pool, enjoy a meal on the terrace, or
          explore the vibrant city of Lagos, this property provides the perfect setting for an
          unforgettable stay.
        </p>

        <div className="py-5">
          <h4 className="font-semibold text-grey text-lg sm:text-2xl">Amenities</h4>
          <ul className="text-grey-200 flex flex-col md:flex-row py-2 gap-x-5 gap-y-2 flex-wrap">
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
          <Link className="property-page-link bg-blue w-full text-white hover:opacity-85" href={""}>
            Edit Property
          </Link>
          <Link
            className="property-page-link text-blue w-full hover:bg-blue hover:text-white"
            href={"/dashboard/management/200"}
          >
            View Booking
          </Link>
        </div>
      </article>
      <div className="lg:col-span-5 space-y-6 lg:space-y-4">
        <div className=" aspect-video relative overflow-hidden">
          <Image fill alt="Property image" src={"/ikoyi.png"} />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold">
          Address: Plot 45, Banana Island, Ikoyi, Lagos
        </h3>
        <Image alt="Dummy Map Image" className="max-lg:w-full" src={dummyMap} />
      </div>
    </div>
  );
}

export default Page;
