"use client";

import dynamic from "next/dynamic";

const BookingTable = dynamic(() => import("../_components/booking/table/booking-table"), {
  ssr: false,
});

export default function Bookings() {
  return (
    <div className="py-6 lg:py-10 px-5 lg:px-24 text-grey-200">
      <h1 className="text-base lg:text-2xl font-semibold text-grey mb-3">Bookings</h1>
      <BookingTable />
    </div>
  );
}
