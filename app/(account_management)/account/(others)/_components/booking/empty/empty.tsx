import Image from "next/image";
import Link from "next/link";
import React from "react";

function EmptyBooking() {
  return (
    <div>
      <div className="max-w-[486px] max-lg:mx-auto">
        <h2 className="hidden lg:block text-lg font-medium text-grey mb-2">
          No bookings made...yet!
        </h2>
        <p className="lg:hidden text-sm mb-10">
          Exercise your privacy rights and control how your data is used.
        </p>
        <Image
          alt="Calendar with a tick"
          className="mx-auto mb-10 lg:hidden "
          height={150}
          src={"/account_management/calendar-tick.svg"}
          width={150}
        />
        <p className="text-grey text-center mb-4 lg:hidden">Oops! No bookings made...yet!</p>
        <p className="mb-6 text-center lg:text-left">
          Time to explore our range of workspaces and shortlets. Find the perfect spot and start
          planning your next stay or workspace experience!
        </p>
      </div>
      <Link
        className="bg-blue w-fit rounded-lg py-3 px-4 text-white font-medium block mx-auto lg:mx-0"
        href="/shortlet"
      >
        Start searching
      </Link>
    </div>
  );
}

export default EmptyBooking;
