"use client";

import React, {useEffect, useState} from "react";

import {BookingResponse, useGetBooking} from "@/api/booking/get-booking";
import Loader from "@/components/loader/loader";

import BookingCalender from "../../../_component/booking-calender/booking-calender";
import BookingDetails from "../../../_component/booking-details/booking-details";

function Page({params}: {params: {id: string}}) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const {mutateAsync, isPending} = useGetBooking();
  const [data, setData] = useState<BookingResponse | null>(null);
  const propertyId = params.id;

  useEffect(() => {
    const dateObj = new Date();

    dateObj.setHours(0, 0, 0, 0);
    const payload = {
      propertyId,
      date: dateObj.getTime(),
    };

    mutateAsync(payload).then((data) => {
      setData(data.data);
    });
  }, []);

  useEffect(() => {
    const payload = {
      propertyId,
      date: selectedDate.getTime(),
    };

    mutateAsync(payload).then((data) => {
      setData(data.data);
    });
  }, [selectedDate]);

  return (
    <div className="flex-1">
      <div className="sm:p-4 md:p-3 flex flex-col lg:flex-row gap-10 min-[1115px]:gap-40 text-grey-200 overflow-hidden">
        <section className="flex-1 lg:max-w-96">
          <h3 className="text-grey text-xl font-semibold mb-2">Booking Calender</h3>
          <p>Monitor your property’s availability and manage bookings with ease.</p>

          <div className="pt-5 space-y-8">
            <BookingCalender
              activeDates={data?.dates || []}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </div>
        </section>

        <section className="max-[1200px]:max-w-md">
          <h3 className="text-grey text-xl font-semibold mb-2">Booking Calender</h3>

          {isPending ? (
            <div className="py-20 grid place-content-center">
              <Loader />
            </div>
          ) : data?.booking ? (
            <BookingDetails booking={data.booking} />
          ) : (
            <div className="py-20 text-center">
              <p>No Booking For Selected Date</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Page;
