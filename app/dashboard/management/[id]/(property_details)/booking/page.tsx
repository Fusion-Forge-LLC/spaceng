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

  useEffect(() => {
    const payload = {
      propertyId: params.id,
      date: selectedDate.getTime(),
    };

    mutateAsync(payload).then((data) => {
      setData(data.data);
    });
  }, [selectedDate]);
  console.log();

  return (
    <div className="flex-1 overflow-y-scroll">
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

            {/* <ul className="[&_li]:flex [&_li]:justify-between space-y-3 text-grey font-medium">
              <li>
                Booked Date: <span>30th August 2024</span>
              </li>
              <li>
                Available Date: <span>30th August 2024</span>
              </li>
              <li>
                Pending Bookings: <span>30th August 2024</span>
              </li>
            </ul> */}
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
