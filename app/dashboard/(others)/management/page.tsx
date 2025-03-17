"use client";

import Link from "next/link";
import React from "react";
import {ChevronRight} from "lucide-react";

import {useGetBusinessProperties} from "@/api/property/user-properties";
import Loader from "@/components/loader/loader";

import Card from "./_component/property-card";
import DisplayProperties from "./_component/display-cards/display-cards";

function Page() {
  const {data, isLoading} = useGetBusinessProperties();

  return (
    <div className="flex-1 h-full px-4 max-sm:pb-20">
      <article className="py-5">
        <h4 className="text-lg font-semibold">Your Properties</h4>
        <p className="text-grey-200 text-sm">
          Manage your properties with effeciently, Quickly access key details, make updates, and
          monitor status{" "}
        </p>
      </article>

      <Link
        className="flex sm:hidden items-center w-fit ml-auto pb-5 gap-0.5 text-xs sm:text-sm group"
        href=""
      >
        See More <ChevronRight className="group-hover:translate-x-1 transition-all" size={16} />
      </Link>

      {isLoading ? (
        <div className="py-20">
          <Loader />
        </div>
      ) : (
        <DisplayProperties data={data}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data?.data.map((item) => {
              return (
                <Card
                  key={item._id}
                  id={item._id}
                  image={item.gallery[0]}
                  location={`${item.property_address.address}, ${item.property_address.neighborhood}, ${item.property_address.location}`}
                  post_fix={item.price_postfix}
                  price={item.price}
                  status={item.status}
                  title={item.property_title}
                  type={item.type}
                />
              );
            })}
          </ul>
        </DisplayProperties>
      )}
    </div>
  );
}

export default Page;
