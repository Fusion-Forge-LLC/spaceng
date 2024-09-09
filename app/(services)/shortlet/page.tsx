import React from "react";

import {PropertyType} from "@/@types/types";

import Lists from "../_components/list-page/lists";

const shortlets: PropertyType[] = [
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
  return <Lists properties={shortlets} type="shortlets" />;
}

export default Page;
