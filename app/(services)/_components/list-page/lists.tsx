"use client";

import React from "react";
import Image from "next/image";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import dynamic from "next/dynamic";

import Wrapper from "@/components/wrapper/wrapper";
import {PropertyResponse} from "@/@types/types";
import {cn} from "@/lib/utils";

import SearchProperties from "../search/search";
import Card from "../property/card";

import LocationFilter from "./filters/location";
import BedFilter from "./filters/bed";
import Sort from "./filters/sort";

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
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentPage = searchParams.get("page") || "1";
  const offset = 10;
  const totalPages = Math.ceil(total / offset);

  const openPage = (number: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", number.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <main>
      <Wrapper className="pt-10">
        <section>
          <div className="flex justify-end">
            <SearchProperties />
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 pt-4">
            <div>
              <h5 className="md:text-lg font-medium capitalize">{type}s in Nigeria</h5>
              <span className="text-sm md:text-base">{total} results</span>
            </div>

            <div className="flex gap-2 flex-wrap">
              <Sort />
              <LocationFilter type={type} />
              {type === "shortlet" && <BedFilter />}
            </div>
          </div>
        </section>
      </Wrapper>

      <Wrapper className="sm:px-0">
        <section>
          <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-12 py-12")}>
            <div className="space-y-10 order-1 lg:order-1">
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
            </div>
            {properties.length ? (
              <>
                <div className={cn("px-4 order-3 lg:order-2")}>
                  <MapComponent properties={properties} />
                </div>

                <div className={cn("lg:pt-20 pb-10 lg:col-span-2 order-2 lg:order-3")}>
                  <ul className="flex justify-center gap-4">
                    {Array.from({length: totalPages}).map((_, index) => {
                      return (
                        <li key={index}>
                          <button
                            className={cn(
                              "pageination-btn",
                              cn(
                                currentPage === (index + 1).toString()
                                  ? "bg-blue text-white"
                                  : null,
                              ),
                            )}
                            onClick={() => openPage(index + 1)}
                          >
                            {index + 1}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            ) : null}
          </div>

          {!properties?.length && (
            <div className="flex flex-col items-center justify-center pb-20">
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
