"use client";

import React from "react";
import {Bell, ChevronRight, Mail, Plus} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {useUser} from "@/context/user";
import {useGetBusinessDashboard} from "@/api/property/property-overview";
import Loader from "@/components/loader/loader";
import {getAmountString} from "@/lib/utils";

import Chart from "../_components/charts/charts";
import Card from "../_components/property-cards/card";
import DisplayProperties from "../management/_component/display-cards/display-cards";
import PayoutHistoryShort from "../_components/payout-history/payout-history-short";

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
  const {User} = useUser();

  const {data, isLoading} = useGetBusinessDashboard();

  return (
    <div className="text-grey-200">
      <section className="flex items-center justify-between px-4 py-3 md:p-3 border-b border-b-grey-200">
        <div>
          <h1 className="text-grey text-lg sm:text-2xl font-semibold capitalize">
            Welcome {User?.fullname},
          </h1>
          <p className="font-medium max-sm:text-sm">Manage your properties with ease</p>
        </div>

        <Link
          className="bg-blue px-1 py-1 sm:px-4 sm:py-2 text-white font-medium rounded-md hover:opacity-75"
          href={"/dashboard/management/new-property"}
        >
          <span className="hidden sm:inline">Add New property</span> <Plus className="sm:hidden" />
        </Link>
      </section>

      <section className="px-4 py-3 md:p-3">
        <h2 className="text-black font-medium text-sm sm:text-base md:text-lg mb-4 max-md:py-2 flex items-center justify-between">
          Your Properties at a glance
          <Link
            className="flex items-center gap-0.5 text-xs sm:text-sm group"
            href="/dashboard/management"
          >
            See More <ChevronRight className="group-hover:translate-x-1 transition-all" size={16} />
          </Link>
        </h2>
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
                    booking={item.booking}
                    id={item._id}
                    image={item.gallery[0]}
                    rating={item.reviews}
                    title={item.property_title}
                    type={item.type}
                    views={item.views}
                  />
                );
              })}
            </ul>
          </DisplayProperties>
        )}

        <div className="grid grid-cols-12 gap-4 pt-10">
          <div className="col-span-12 lg:col-span-6 border border-[#77787D] rounded-xl py-2 px-3">
            <h4 className="text-black font-medium mb-2">Your Earnings</h4>

            <div className="text-center flex gap-5 mb-4">
              <div className="text-[#333] space-y-2 py-2 px-8 rounded-lg bg-[#D3D3D3]">
                <h5 className="text-xs ">Total Earning</h5>
                <p className="text-xl font-bold">{getAmountString(User?.total_earnings)}</p>
              </div>
              <div className="text-white space-y-2 py-2 px-8 rounded-lg bg-blue">
                <h5 className="text-xs ">Pending Payout</h5>
                <p className="text-xl font-bold">{getAmountString(User?.pending_payout)}</p>
              </div>
            </div>

            <Chart />
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 border border-[#77787D] rounded-xl py-2 px-3">
            <PayoutHistoryShort />
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 border border-[#77787D] rounded-xl py-2 px-2">
            <h4 className="text-black font-medium mb-2">Notifications</h4>
            <p className="py-10 text-center italic">Notification is Empty</p>
            <ul className="space-y-2 hidden">
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
