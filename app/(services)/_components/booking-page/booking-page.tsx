"use client";

import {ArrowLeft} from "lucide-react";
import {useParams, useRouter} from "next/navigation";
import React, {useState} from "react";
import Calendar from "react-calendar";
import * as yup from "yup";

// import FormControl from "./_components/form-control/form-control";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import {Form, FormField, FormItem, FormMessage, FormControl} from "@/components/ui/form";
import Wrapper from "@/components/wrapper/wrapper";
import {useCreatePreBooking} from "@/api/pre-booking";
import Loader from "@/components/loader/loader";

import BookingSuccess from "../modal/booking-success";

import FormInput, {PhoneNumber, TextArea} from "./_components/form-control/form-control";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const preBookingSchema = yup.object({
  full_name: yup.string().required("Please enter your full name"),
  email: yup
    .string()
    .email()
    .required("Please enter email address")
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email must have a valid domain"),
  phone_number: yup.string().required("Phone Number is required"),
  reason: yup.string().required("Please state your reason for visit"),
});

type PreBookingType = yup.InferType<typeof preBookingSchema>;

function BookingPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [date, setDate] = React.useState<Value>(new Date());
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);
  const {mutateAsync: createPreBooking, isPending} = useCreatePreBooking();

  const form = useForm<PreBookingType>({
    resolver: yupResolver(preBookingSchema),
  });

  const onsubmit = (values: PreBookingType) => {
    const payload = {
      id,
      ...values,
      date: date?.toLocaleString() || "",
    };

    createPreBooking(payload).then(() => {
      setIsBookingSuccess(true);
    });
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

            <Form {...form}>
              <form className="space-y-4" onSubmit={form.handleSubmit(onsubmit)}>
                <FormField
                  control={form.control}
                  name="full_name"
                  render={({field}) => (
                    <FormItem>
                      <FormControl>
                        <FormInput id="full_name" label="Full Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({field}) => (
                    <FormItem>
                      <FormControl>
                        <FormInput id="email" label="Email" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone_number"
                  render={({field}) => (
                    <FormItem>
                      <FormControl>
                        <PhoneNumber id="phone_number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="reason"
                  render={({field}) => (
                    <FormItem>
                      <FormControl>
                        <TextArea id="reason" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4 sm:pt-8">
                  <button className="booking-btn w-full" disabled={isPending}>
                    {isPending ? <Loader /> : "Submit Request"}
                  </button>
                </div>
              </form>
            </Form>
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
