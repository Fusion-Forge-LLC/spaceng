import React from "react";
import Image from "next/image";

import Wrapper from "@/components/wrapper/wrapper";

import dummyMap from "../../public/dummymap.png";

import Card from "./components/property/card";
import SearchProperties from "./components/search/search";

const shortlets = [
  {
    image: "/shortlets/image1.png",
    title: "Haven Homes",
    location: "1001, Estate, Lekki, Lagos ",
    labels: ["WiFi", "Air", "conditioning", "Kitchen", "Parking", "Balcony", "Pets Friendly"],
    rating: 4,
    reviewNum: 72,
    price: 25000,
  },
  {
    image: "/shortlets/image2.png",
    title: "Lotus Court",
    location: "1002, Estate, Lekki, Lagos ",
    labels: ["WiFi", "Air", "conditioning", "Kitchen", "Parking", "Balcony", "Pets Friendly"],
    rating: 5,
    reviewNum: 25,
    price: 12500,
  },
  {
    image: "/shortlets/image3.png",
    title: "Summer House",
    location: "1003, Estate, Lekki, Lagos ",
    labels: ["WiFi", "Air", "conditioning", "Kitchen", "Parking", "Balcony", "Pets Friendly"],
    rating: 4,
    reviewNum: 10,
    price: 15000,
  },
  {
    image: "/shortlets/image1.png",
    title: "Haven Homes",
    location: "1001, Estate, Lekki, Lagos ",
    labels: ["WiFi", "Air", "conditioning", "Kitchen", "Parking", "Balcony", "Pets Friendly"],
    rating: 4,
    reviewNum: 72,
    price: 25000,
  },
  {
    image: "/shortlets/image2.png",
    title: "Lotus Court",
    location: "1002, Estate, Lekki, Lagos ",
    labels: ["WiFi", "Air", "conditioning", "Kitchen", "Parking", "Balcony", "Pets Friendly"],
    rating: 5,
    reviewNum: 25,
    price: 12500,
  },
];

function Page() {
  return (
    <main>
      <Wrapper className="py-10">
        <section>
          <div className="flex items-center justify-between">
            <div>
              <h5 className="text-lg font-medium">Shortlets in Lagos, Nigeria</h5>
              <span>250 results</span>
            </div>

            <SearchProperties />
          </div>

          <div className="grid grid-cols-2 gap-12 py-12">
            <div className="space-y-10">
              {shortlets.map((item, index) => {
                return (
                  <Card
                    key={index}
                    image={item.image}
                    labels={item.labels}
                    location={item.location}
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

export default Page;
