"use client";

import {ArrowLeft} from "lucide-react";
import {useRouter} from "next/navigation";
import React, {FormEvent, useState} from "react";
import Calendar from "react-calendar";

import Wrapper from "@/components/wrapper/wrapper";

import BookingSuccess from "../modal/booking-success";

import FormControl, {PhoneNumber, TextArea} from "./_components/form-control/form-control";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function BookingPage() {
  const router = useRouter();
  const [date, setDate] = React.useState<Value>(new Date());
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsBookingSuccess(true);
  };

  return (
    <main>
      <BookingSuccess close={() => setIsBookingSuccess(false)} isShown={isBookingSuccess} />
      <Wrapper className="pt-10 pb-20">
        <div className="pb-5">
          <button className="flex items-center gap-3" onClick={() => router.back()}>
            <ArrowLeft color="#205BF3" size={18} />
          </button>
        </div>

        <section className="flex flex-col-reverse sm:flex-row gap-20 sm:gap-10 lg:gap-40 py-5">
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-8">Arrange A Pre-Booking</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <FormControl label="Full Name" />

              <FormControl label="Email" type="email" />

              <PhoneNumber />
              <TextArea />
              <div className="pt-4 sm:pt-8">
                <button className="booking-btn w-full ">Submit Request</button>
              </div>
            </form>
          </div>

          <div className="w-full sm:max-w-64 md:max-w-80 lg:max-w-sm">
            <Calendar
              calendarType={"gregory"}
              className={""}
              minDate={new Date()}
              next2Label={null}
              prev2Label={null}
              value={date}
              onChange={setDate}
            />
          </div>
        </section>
      </Wrapper>
    </main>
  );
}

export default BookingPage;
