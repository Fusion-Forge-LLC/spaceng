import React from "react";

import {PropertyType} from "@/@types/types";

import Lists from "../_components/list-page/lists";

const shortlets: PropertyType[] = [
  {
    image: "/workspace/image1.png",
    title: "Co-worka",
    location: "1001, Estate, Lekki, Lagos ",
    labels: ["WiFi", "Air", "conditioning", "Kitchen", "Parking", "Balcony", "Pets Friendly"],
    rating: 4,
    reviewNum: 75,
    price: 5000,
  },
  {
    image: "/workspace/image2.png",
    title: "Work Buddies",
    location: "1001, Estate, Lekki, Lagos ",
    labels: ["WiFi", "Air", "conditioning", "Kitchen", "Parking", "Balcony", "Pets Friendly"],
    rating: 5,
    reviewNum: 25,
    price: 3500,
  },
  {
    image: "/workspace/image3.png",
    title: "Share a Desk",
    location: "1001, Estate, Lekki, Lagos ",
    labels: ["WiFi", "Air", "conditioning", "Kitchen", "Parking", "Balcony", "Pets Friendly"],
    rating: 4,
    reviewNum: 10,
    price: 400,
  },
  {
    image: "/workspace/image1.png",
    title: "Co-worka",
    location: "1001, Estate, Lekki, Lagos ",
    labels: ["WiFi", "Air", "conditioning", "Kitchen", "Parking", "Balcony", "Pets Friendly"],
    rating: 4,
    reviewNum: 75,
    price: 5000,
  },
  {
    image: "/workspace/image2.png",
    title: "Work Buddies",
    location: "1001, Estate, Lekki, Lagos ",
    labels: ["WiFi", "Air", "conditioning", "Kitchen", "Parking", "Balcony", "Pets Friendly"],
    rating: 5,
    reviewNum: 25,
    price: 3500,
  },
];

function Page() {
  return <Lists properties={shortlets} type="workspaces" />;
}

export default Page;
