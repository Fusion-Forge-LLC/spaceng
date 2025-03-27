"use client";

import React, {useState} from "react";
import Image from "next/image";
import {usePathname} from "next/navigation";
import dynamic from "next/dynamic";

import Wrapper from "@/components/wrapper/wrapper";
import {PropertyResponse} from "@/@types/types";
import {cn} from "@/lib/utils";

import SearchProperties from "../search/search";
import Card from "../property/card";

const MapComponent = dynamic(() => import("@/components/map/map"), {ssr: false});

function Lists({
  properties,
  total,
  type,
}: {
  properties: PropertyResponse[];
  type: "shortlet" | "workspace";
  total: number;
}) {
  const pathname = usePathname();
  const offset = 10;
  const totalPages = Math.ceil(total / offset);
  const [searchedData, setSearchedData] = useState<PropertyResponse[] | null>(null);

  return (
    <main>
      <Wrapper className="pt-10">
        <section>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div>
              <h5 className="md:text-lg font-medium capitalize">{type}s in Nigeria</h5>
              <span className="text-sm md:text-base">{total} results</span>
            </div>

            <SearchProperties setSearchedData={setSearchedData} type={type} />
          </div>
        </section>
      </Wrapper>

      <Wrapper className="sm:px-0">
        <section>
          <div
            className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-12 py-12",
              searchedData && searchedData.length === 0 && "hidden",
            )}
          >
            <div className="space-y-10">
              {searchedData ? (
                <>
                  {searchedData.map((item) => {
                    return (
                      <Card
                        key={item._id}
                        id={item._id}
                        image={item.gallery[0]}
                        labels={item.features}
                        location={`${item.property_address.address}`}
                        path={pathname}
                        postfix={item.price_postfix}
                        price={item.price}
                        rating={item.reviews}
                        reviewNum={item.reviews.length}
                        title={item.property_title}
                        wishlist={item.wishlists}
                      />
                    );
                  })}
                </>
              ) : (
                <>
                  {properties.map((item) => {
                    return (
                      <Card
                        key={item._id}
                        id={item._id}
                        image={item.gallery[0]}
                        labels={item.features}
                        location={`${item.property_address.address}`}
                        path={pathname}
                        postfix={item.price_postfix}
                        price={item.price}
                        rating={item.reviews}
                        reviewNum={item.reviews.length}
                        title={item.property_title}
                        wishlist={item.wishlists}
                      />
                    );
                  })}
                </>
              )}
            </div>
            <div
              className={cn(
                "px-4 sm:px-0 hidden lg:block",
                searchedData && searchedData.length === 0 && "lg:hidden",
              )}
            >
              <MapComponent properties={properties} />
            </div>
          </div>

          <div
            className={cn(searchedData && searchedData.length === 0 && "hidden", "lg:pt-20 pb-10")}
          >
            <ul className="flex justify-center gap-4">
              {Array.from({length: totalPages}).map((_, index) => {
                return (
                  <li key={index}>
                    <button className={cn("pageination-btn", "bg-blue text-white")}>
                      {index + 1}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className={cn(
              searchedData && searchedData.length === 0 && "hidden",
              "px-4 sm:px-0 lg:hidden py-14",
            )}
          >
            <MapComponent properties={properties} />
          </div>

          {searchedData && searchedData.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20">
              <Image alt="No data" height={200} src={"/no-data.png"} width={200} />
              <span className="text-lg font-medium italic">No Match found</span>
            </div>
          )}
        </section>
      </Wrapper>
    </main>
  );
}

export default Lists;
