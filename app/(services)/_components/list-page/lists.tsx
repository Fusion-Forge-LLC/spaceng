"use client";

import React from "react";
import Image from "next/image";
import {usePathname} from "next/navigation";

import Wrapper from "@/components/wrapper/wrapper";
import {PropertyResponse} from "@/@types/types";
import {cn} from "@/lib/utils";

import dummyMap from "../../../../public/dummymap.png";
import SearchProperties from "../search/search";
import Card from "../property/card";

function Lists({
  properties,
  total,
  type,
}: {
  properties: PropertyResponse[];
  type: "shortlets" | "workspaces";
  total: number;
}) {
  const pathname = usePathname();
  const offset = 10;
  const totalPages = Math.ceil(total / offset);

  return (
    <main>
      <Wrapper className="pt-10">
        <section>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div>
              <h5 className="md:text-lg font-medium capitalize">{type} in Lagos, Nigeria</h5>
              <span className="text-sm md:text-base">250 results</span>
            </div>

            <SearchProperties />
          </div>
        </section>
      </Wrapper>

      <Wrapper className="sm:px-0">
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12">
            <div className="space-y-10">
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
                    rating={item.reviews.length}
                    reviewNum={item.reviews.length}
                    title={item.property_title}
                  />
                );
              })}
            </div>
            <div className="px-4 sm:px-0 hidden lg:block">
              <Image alt="Map Image" placeholder="blur" src={dummyMap} />
            </div>
          </div>

          <div className="lg:pt-20 pb-10">
            <ul className="flex justify-center gap-4">
              {Array.from({length: totalPages}).map((item, index) => {
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

          <div className="px-4 sm:px-0 lg:hidden py-14">
            <Image alt="Map Image" className="mx-auto" placeholder="blur" src={dummyMap} />
          </div>
        </section>
      </Wrapper>
    </main>
  );
}

export default Lists;
