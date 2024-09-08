"use client";

import {ArrowLeft} from "lucide-react";
import {useRouter} from "next/navigation";
import React, {FormEvent, useState} from "react";

// import { Calendar } from './_components/calendar/calender'
import Calendar from "react-calendar";

import Wrapper from "@/components/wrapper/wrapper";

import BookingSuccess from "../../components/modal/booking-success";

import FormControl, {PhoneNumber, TextArea} from "./_components/form-control/form-control";
// import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function Page() {
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

        <section className="flex gap-40 py-5">
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-8">Arrange A Pre-Booking</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <FormControl label="Full Name" />

              <FormControl label="Email" type="email" />

              <PhoneNumber />
              <TextArea />
              <div className="pt-8">
                <button className="booking-btn w-full ">Submit Request</button>
              </div>
            </form>
          </div>

          <div className="w-full max-w-sm">
            {/* <div className='flex justify-between'>
                            <h3 className='text-lg font-medium mb-8'>{date.toLocaleDateString("en-Us", {month: "long", year: "numeric" })}</h3>
                            <div className='flex gap-4 items-start'>
                                <button>
                                    <ChevronLeft />
                                </button>
                                <button>
                                    <ChevronRight />
                                </button>
                            </div> */}
            {/* </div> */}
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

export default Page;
