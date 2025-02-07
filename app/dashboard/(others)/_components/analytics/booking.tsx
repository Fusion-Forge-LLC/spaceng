"use client";
import React from "react";

import {useGetBookingOverview} from "@/api/booking/get-booking-overview";
import Loader from "@/components/loader/loader";

function Booking() {
  const {data, isPending} = useGetBookingOverview();

  if (isPending) {
    return (
      <div className="py-10 grid place-content-center">
        <Loader />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="py-10 grid place-content-center">
        <p className="text-center">An error occured</p>
      </div>
    );
  }

  return (
    <ul className="p-3 space-y-1.5 rounded-xl border border-blue">
      <li className="flex justify-between">
        <span>Total Bookings</span>
        <span>{data?.data.total_bookings}</span>
      </li>
      <li className="flex justify-between">
        <span>Conversion rate</span>
        <span>{Math.ceil(data?.data.conversion)}%</span>
      </li>
      <li className="flex justify-between">
        <span>Booking Peak</span>
        <span>
          {data?.data.booking_peak?.topBookingDate &&
            new Date(data?.data.booking_peak?.topBookingDate).toLocaleDateString("en-Us", {
              month: "long",
              year: "numeric",
            })}
          ({data?.data.booking_peak?.totalBookings} Bookings)
        </span>
      </li>
    </ul>
  );
}

export default Booking;
