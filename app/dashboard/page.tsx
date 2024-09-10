import React from "react";
import {Bell, Mail} from "lucide-react";
import Image from "next/image";

import Card from "./_components/property-cards/card";
import Chart from "./_components/charts/charts";

const properties = [
  {
    id: 1,
    image: "/dashboard/image1.png",
    title: "Sunset Villa",
    booking: 12,
    views: 345,
    rating: 4.5,
  },
  {
    id: 2,
    image: "/dashboard/image2.png",
    title: "Urban Loft",
    booking: 8,
    views: 278,
    rating: 4.2,
  },
  {
    id: 3,
    image: "/dashboard/image3.png",
    title: "Seaside Cottage",
    booking: 15,
    views: 410,
    rating: 4.8,
  },
  {
    id: 4,
    image: "/dashboard/image4.png",
    title: "Country Manor",
    booking: 12,
    views: 345,
    rating: 4.5,
  },
];

const payouts = [
  {
    amount: "N56,000",
    date: "10th August, 2024",
  },
  {
    amount: "N80,000 ",
    date: "15th August, 2024",
  },
  {
    amount: "N26,500",
    date: "18th August, 2024",
  },
  {
    amount: "N26,000",
    date: "20th August, 2024",
  },
  {
    amount: "N16,000 ",
    date: "22nd August, 2024",
  },
  {
    amount: "N150,000",
    date: "26th August, 2024",
  },
  {
    amount: "N6,800",
    date: "27th August, 2024",
  },
  {
    amount: "N31,000",
    date: "23rd August, 2024",
  },
  {
    amount: "N6,000",
    date: "28th August, 2024",
  },
  {
    amount: "N47,000",
    date: "30th August, 2024",
  },
];

function Page() {
  return (
    <div className="text-grey-200">
      <section className="flex items-center justify-between p-3 border-b border-b-grey-200">
        <div>
          <h1 className="text-grey text-2xl font-semibold">Welcome Oluwatosin,</h1>
          <p className="font-medium">Manage your properties with ease</p>
        </div>

        <button className="bg-blue px-4 py-2 text-white font-medium rounded-md hover:opacity-75">
          Add New property
        </button>
      </section>

      <section className="p-3">
        <h2 className="text-black font-medium text-lg mb-4">Your Properties at a glance</h2>
        <ul className="grid grid-cols-4 gap-5">
          {properties.map((item) => {
            return (
              <Card
                key={item.id}
                booking={item.booking}
                image={item.image}
                rating={item.rating}
                title={item.title}
                views={item.views}
              />
            );
          })}
        </ul>

        <div className="grid grid-cols-12 gap-4 pt-10">
          <div className="col-span-6 border border-[#77787D] rounded-xl py-2 px-3">
            <h4 className="text-black font-medium mb-2">Your Earnings</h4>

            <div className="text-center flex gap-5 mb-4">
              <div className="text-[#333] space-y-2 py-2 px-8 rounded-lg bg-[#D3D3D3]">
                <h5 className="text-xs ">Total Earning</h5>
                <p className="text-xl font-bold">532,750</p>
              </div>
              <div className="text-white space-y-2 py-2 px-8 rounded-lg bg-blue">
                <h5 className="text-xs ">Pending Payout</h5>
                <p className="text-xl font-bold">232,420</p>
              </div>
            </div>

            <Chart />
          </div>
          <div className="col-span-3 border border-[#77787D] rounded-xl py-2 px-3">
            <h4 className="text-black font-medium mb-5">Payouts</h4>

            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left">Amount (N)</th>
                  <th className="text-right pb-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {payouts.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.amount}</td>
                      <td className="text-right py-1.5">{item.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-span-3 border border-[#77787D] rounded-xl py-2 px-2">
            <h4 className="text-black font-medium mb-2">Notifications</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 rounded-lg border border-grey-100 p-1.5">
                <Mail color="#205BF3" size={16} />
                <div className="flex-1">
                  <header className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full overflow-hidden">
                      <Image alt="Profile image" height={32} src={"/user2.png"} width={32} />
                    </div>
                    <h4 className="text-sm">Alfred Smith</h4>
                    <span className="text-xs ml-auto text-grey-200">02:05pm</span>
                  </header>
                  <p className="text-xs text-[#30313D] pt-1.5">
                    Hello Oluwatosin, I need an electrician to come check the room
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2 rounded-lg border border-grey-100 p-1.5">
                <Bell color="#205BF3" size={16} />
                <div className="flex-1">
                  <header className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full overflow-hidden">
                      <Image alt="Profile image" height={32} src={"/user2.png"} width={32} />
                    </div>
                    <h4 className="text-sm">Alfred Smith</h4>
                    <span className="text-xs ml-auto text-grey-200">02:05pm</span>
                  </header>
                  <p className="text-xs text-[#30313D] pt-1.5">
                    Hello Oluwatosin, I need an electrician to come check the room
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2 rounded-lg border border-grey-100 p-1.5">
                <Mail color="#205BF3" size={16} />
                <div className="flex-1">
                  <header className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full overflow-hidden">
                      <Image alt="Profile image" height={32} src={"/user2.png"} width={32} />
                    </div>
                    <h4 className="text-sm">Alfred Smith</h4>
                    <span className="text-xs ml-auto text-grey-200">02:05pm</span>
                  </header>
                  <p className="text-xs text-[#30313D] pt-1.5">
                    Hello Oluwatosin, I need an electrician to come check the room
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2 rounded-lg border border-grey-100 p-1.5">
                <Bell color="#205BF3" size={16} />
                <div className="flex-1">
                  <header className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full overflow-hidden">
                      <Image alt="Profile image" height={32} src={"/user2.png"} width={32} />
                    </div>
                    <h4 className="text-sm">Alfred Smith</h4>
                    <span className="text-xs ml-auto text-grey-200">02:05pm</span>
                  </header>
                  <p className="text-xs text-[#30313D] pt-1.5">
                    Hello Oluwatosin, I need an electrician to come check the room
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
