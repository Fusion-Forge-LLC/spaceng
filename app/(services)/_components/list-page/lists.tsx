"use client";

import React from "react";
import Image from "next/image";
import {usePathname} from "next/navigation";

import Wrapper from "@/components/wrapper/wrapper";
import {PropertyType} from "@/@types/types";

import dummyMap from "../../../../public/dummymap.png";
import SearchProperties from "../search/search";
import Card from "../property/card";

function Lists({properties, type}: {properties: PropertyType[]; type: "shortlets" | "workspaces"}) {
  const pathname = usePathname();

  return (
    <main>
      <Wrapper className="py-10">
        <section>
          <div className="flex items-center justify-between">
            <div>
              <h5 className="text-lg font-medium capitalize">{type} in Lagos, Nigeria</h5>
              <span>250 results</span>
            </div>

            <SearchProperties />
          </div>

          <div className="grid grid-cols-2 gap-12 py-12">
            <div className="space-y-10">
              {properties.map((item, index) => {
                return (
                  <Card
                    key={index}
                    image={item.image}
                    labels={item.labels}
                    location={item.location}
                    path={pathname}
                    price={item.price}
                    rating={item.rating}
                    reviewNum={item.reviewNum}
                    title={item.title}
                  />
                );
              })}
            </div>
            <div>
              <Image alt="Map Image" placeholder="blur" src={dummyMap} />
            </div>
          </div>

          <div className="pt-20 pb-10">
            <ul className="flex justify-center gap-4">
              <li>
                <button className="pageination-btn bg-blue text-white">1</button>
              </li>
              <li>
                <button className="pageination-btn">2</button>
              </li>
              <li>
                <button className="pageination-btn">3</button>
              </li>
              <li>
                <button className="pageination-btn">4</button>
              </li>
              <li>
                <button className="pageination-btn">5</button>
              </li>
            </ul>
          </div>
        </section>
      </Wrapper>
    </main>
  );
}

export default Lists;
