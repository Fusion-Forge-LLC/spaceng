import Link from "next/link";
import React from "react";

import {cn} from "@/lib/utils";

import Card from "./_component/property-card";

const properties = [
  {
    id: 1,
    image: "/dashboard/image1.png",
    title: "Sunset Villa",
    location: "Lagos, Ikoyi, Banana Island",
    price: 150000,
    status: "Active",
  },
  {
    id: 2,
    image: "/dashboard/image2.png",
    title: "Urban Loft",
    location: "Abuja, Maitama, Gana Street",
    price: 100000,
    status: "Pending Approval",
  },
  {
    id: 3,
    image: "/dashboard/image3.png",
    title: "Seaside Cottage",
    location: "Lagos, Lekki Phase 1, Admiralty Way",
    price: 85000,
    status: "Inactive",
  },
  {
    id: 4,
    image: "/dashboard/image4.png",
    title: "Country Manor",
    location: "Ibadan, Jericho, Obafemi Awolowo Road",
    price: 50000,
    status: "Active",
  },
];

function Page() {
  return (
    <div className="p-2">
      <div className="flex gap-5 items-center text-grey-100">
        <Link className={cn("property-tab-link", "active")} href={""}>
          Property List
        </Link>
        <Link className={cn("property-tab-link")} href={""}>
          Property Details
        </Link>
        <Link className={cn("property-tab-link")} href={""}>
          Booking Calender
        </Link>
        <Link className={cn("property-tab-link")} href={""}>
          Review & Ratings
        </Link>
      </div>
      <div>
        <article className="py-5">
          <h4 className="text-2xl font-semibold">Your Properties</h4>
          <p className="text-grey-200">
            Manage your properties with effeciently, Quickly access key details, make updates, and
            monitor status{" "}
          </p>
        </article>
        <ul className="grid grid-cols-4 gap-5">
          {properties.map((item) => {
            return (
              <Card
                key={item.id}
                image={item.image}
                location={item.location}
                price={item.price}
                status={item.status}
                title={item.title}
              />
            );
          })}
          {properties.map((item) => {
            return (
              <Card
                key={item.id}
                image={item.image}
                location={item.location}
                price={item.price}
                status={item.status}
                title={item.title}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Page;
