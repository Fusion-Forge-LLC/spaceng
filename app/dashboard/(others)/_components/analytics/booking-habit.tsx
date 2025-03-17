"use client";
import React from "react";

import {useGetBookingHabit} from "@/api/booking/get-booking-habit";
import Loader from "@/components/loader/loader";

function BookingHabit() {
  const {data, isPending} = useGetBookingHabit();

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
    <ul className="p-3 space-y-1.5 rounded-xl border border-grey-300/10 text-sm bg-grey-300/5">
      <li className="flex justify-between">
        <span>Average Stay Duration</span>
        <span>{Math.ceil(data.data.average_stay.averageDuration)} Nights</span>
      </li>
      <li className="flex justify-between">
        <span>Booking Lead Time</span>
        <span>{data.data.average_stay.maxDuration} Days</span>
      </li>
      <li className="flex justify-between">
        <span>Repeat Guests</span>
        <span>{data.data.repeat_guest}</span>
      </li>
      <li className="flex justify-between">
        <span>Locations</span>
        <span>{data.data.locations}</span>
      </li>
    </ul>
  );
}

export default BookingHabit;
