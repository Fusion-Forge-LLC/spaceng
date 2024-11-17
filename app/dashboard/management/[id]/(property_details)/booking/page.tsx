"use client";

import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import {DayPicker} from "react-day-picker";

import {DropdDown} from "@/components/style-guide/style-guide";

function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [month, setMonth] = useState(new Date());
  const [choosedMonth, setChoosedMonth] = useState<string>(new Date().getMonth().toString());
  const [choosedYear, setChoosedYear] = useState<string>(new Date().getFullYear().toString());

  React.useEffect(() => {
    const month = parseInt(choosedMonth);
    const year = parseInt(choosedYear);

    const newDate = new Date(year, month);

    setMonth(newDate);
  }, [choosedMonth, choosedYear]);

  // const

  return (
    <div className="flex-1 overflow-y-scroll">
      <div className="sm:p-4 md:p-3 flex flex-col lg:flex-row gap-10 min-[1115px]:gap-40 text-grey-200 overflow-hidden">
        <section className="flex-1">
          <h3 className="text-grey text-xl font-semibold mb-2">Booking Calender</h3>
          <p>Monitor your property’s availability and manage bookings with ease.</p>

          <div className="pt-5 space-y-8">
            <div className="flex justify-between">
              <DropdDown
                className="w-fit min-w-28 rounded-xl"
                options={[
                  {
                    value: "0",
                    note: "January",
                  },
                  {
                    value: "1",
                    note: "February",
                  },
                  {
                    value: "2",
                    note: "March",
                  },
                  {
                    value: "3",
                    note: "April",
                  },
                  {
                    value: "4",
                    note: "May",
                  },
                  {
                    value: "5",
                    note: "June",
                  },
                  {
                    value: "6",
                    note: "July",
                  },
                  {
                    value: "7",
                    note: "August",
                  },
                  {
                    value: "8",
                    note: "September",
                  },
                  {
                    value: "9",
                    note: "October",
                  },
                  {
                    value: "10",
                    note: "November",
                  },
                  {
                    value: "11",
                    note: "December",
                  },
                ]}
                placeholder="Month"
                value={choosedMonth}
                onValueChange={setChoosedMonth}
              />

              <DropdDown
                className="w-fit rounded-xl"
                options={[
                  {
                    value: "2024",
                    note: "2024",
                  },
                  {
                    value: "2025",
                    note: "2025",
                  },
                  {
                    value: "2026",
                    note: "2026",
                  },
                  {
                    value: "2027",
                    note: "2027",
                  },
                  {
                    value: "2028",
                    note: "2028",
                  },
                  {
                    value: "2029",
                    note: "2029",
                  },
                  {
                    value: "2030",
                    note: "2030",
                  },
                  {
                    value: "2031",
                    note: "2031",
                  },
                  {
                    value: "2032",
                    note: "2032",
                  },
                  {
                    value: "2033",
                    note: "2033",
                  },
                  {
                    value: "2034",
                    note: "2034",
                  },
                  {
                    value: "2035",
                    note: "2035",
                  },
                  {
                    value: "2036",
                    note: "2036",
                  },
                  {
                    value: "2037",
                    note: "2037",
                  },
                  {
                    value: "2038",
                    note: "2038",
                  },
                  {
                    value: "2039",
                    note: "2039",
                  },
                  {
                    value: "2040",
                    note: "2040",
                  },
                  {
                    value: "2041",
                    note: "2041",
                  },
                  {
                    value: "2042",
                    note: "2042",
                  },
                  {
                    value: "2043",
                    note: "2043",
                  },
                  {
                    value: "2044",
                    note: "2044",
                  },
                  {
                    value: "2045",
                    note: "2045",
                  },
                  {
                    value: "2046",
                    note: "2046",
                  },
                  {
                    value: "2047",
                    note: "2047",
                  },
                  {
                    value: "2048",
                    note: "2048",
                  },
                  {
                    value: "2049",
                    note: "2049",
                  },
                  {
                    value: "2050",
                    note: "2050",
                  },
                ]}
                placeholder="Month"
                value={choosedYear?.toString()}
                onValueChange={setChoosedYear}
              />
            </div>

            <DayPicker
              showOutsideDays
              captionLayout="dropdown"
              classNames={{
                table: "w-full border-collapse space-y-1",
                nav_button: "hidden",
                day_outside: "opacity-45",
                day: "calender-item",
                head_cell: "h-12 w-12",
                caption:
                  "flex justify-center pt-1 relative items-center bg-blue rounded px-5 py-2 text-white w-fit mx-auto",
                month:
                  "border border-grey-200 p-2 rounded-3xl max-lg:w-fit max-w-full max-lg:mx-auto",
                day_selected: "bg-blue text-white",
              }}
              mode="single"
              month={month}
              selected={date}
              onMonthChange={setMonth}
              onSelect={setDate}
            />

            <ul className="[&_li]:flex [&_li]:justify-between space-y-3 text-grey font-medium">
              <li>
                Booked Date: <span>30th August 2024</span>
              </li>
              <li>
                Available Date: <span>30th August 2024</span>
              </li>
              <li>
                Pending Bookings: <span>30th August 2024</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="max-[1200px]:max-w-md">
          <h3 className="text-grey text-xl font-semibold mb-2">Booking Calender</h3>

          <div className="text-sm font-medium space-y-3">
            <h4 className="text-base font-semibold">Guest Information</h4>
            <div className="flex items-center gap-5">
              <span className="mr-20">Name</span>

              <div className="h-10 w-10 rounded-full overflow-hidden relative">
                <Image fill alt="Avatar" src={"/avatar.png"} />
              </div>

              <span>John Adewale</span>
            </div>

            <div>
              <h4 className="text-base font-semibold text-grey">Contact Information</h4>
              <ul className="pt-1 space-y-1">
                <li className="flex gap-20">
                  <span>Phone Number</span>
                  <span>+234 803 123 4567</span>
                </li>
                <li className="flex gap-20">
                  <span>Email</span>
                  <span>john.adewale@gmail.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold text-grey">Number of Guests</h4>
              <ul className="pt-1 space-y-1">
                <li className="flex gap-20">4(2 Adults, 2 Children)</li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold text-grey">Special Requirements</h4>
              <ul className="pt-1 space-y-1 list-disc pl-1.5 list-inside">
                <li>Early Check-in (requested for 11:00 AM)</li>
                <li>Crib of the infant in the master bedroom</li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold text-grey">Payment Status</h4>
              <ul className="pt-1 space-y-1 list-disc pl-1.5 list-inside">
                <li>Total Amount: ₦45,000</li>
                <li>Payment Method: Credit Card (Visa)</li>
                <li>Payment Status: Paid in Full</li>
                <li>Transaction ID: TXN1234567890</li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold text-grey">Booking Notes</h4>
              <ul className="pt-1 space-y-1 list-disc pl-1.5 list-inside">
                <li>Check-in Date: August 25, 2024</li>
                <li>Check-out Date: August 28, 2024</li>
                <li>Check-in Time: 2:00 PM</li>
                <li>Check-out Time: 11:00 AM</li>
                <li>Security Deposit: ₦100,000 (to be refunded after check-out inspection)</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-lg:pb-20 max-lg:pt-8 sm:gap-2 text-center">
              <Link
                className="bg-blue border border-blue font-medium rounded-lg px-2 py-2 text-white"
                href={""}
              >
                Edit Booking
              </Link>
              <Link
                className="border border-blue text-blue font-medium rounded-lg px-2 py-2 hover:bg-blue hover:text-white"
                href={""}
              >
                Contact Guest
              </Link>
              <Link
                className="border border-blue text-blue font-medium rounded-lg px-2 py-2 hover:bg-blue hover:text-white"
                href={""}
              >
                Cancel Booking
              </Link>
              <Link
                className="border border-blue text-blue font-medium rounded-lg px-2 py-2 hover:bg-blue hover:text-white"
                href={""}
              >
                Previous Stays
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
