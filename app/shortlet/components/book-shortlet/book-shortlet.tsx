"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import React, {useState} from "react";

import {CaretDown} from "@/components/Icons/icons";
import {PopoverElement} from "@/components/style-guide/style-guide";
import {Calendar} from "@/components/ui/calendar";

function BookShortlet() {
  const pathName = usePathname();
  const [date, setDate] = React.useState<{checkin: Date | undefined; checkout: Date | undefined}>({
    checkin: new Date(),
    checkout: new Date(),
  });
  const [guestsCount, setGuestsCount] = useState(1);

  function updateDate(date: Date | undefined, key: "checkin" | "checkout") {
    setDate((prevState) => {
      return {...prevState, [key]: date};
    });
  }

  return (
    <div className="space-y-4 py-6">
      <PopoverElement
        trigger={
          <div className="border border-grey-200 cursor-pointer rounded-lg p-4 flex items-center justify-between w-full">
            <div className="flex flex-col gap-2">
              <span className="font-medium text-xs">{"CHECK-IN"}</span>
              <span>{date.checkin?.toLocaleDateString()}</span>
            </div>
            <CaretDown />
          </div>
        }
      >
        <Calendar
          className="rounded-md border"
          mode="single"
          selected={date.checkin}
          onSelect={(date) => updateDate(date, "checkin")}
        />
      </PopoverElement>
      <PopoverElement
        trigger={
          <div className="border border-grey-200 cursor-pointer rounded-lg p-4 flex items-center justify-between w-full">
            <div className="flex flex-col gap-2">
              <span className="font-medium text-xs">{"CHECK-OUT"}</span>
              <span>{date.checkout?.toLocaleDateString()}</span>
            </div>
            <CaretDown />
          </div>
        }
      >
        <Calendar
          className="rounded-md border"
          mode="single"
          selected={date.checkout}
          onSelect={(date) => updateDate(date, "checkout")}
        />
      </PopoverElement>
      <PopoverElement
        trigger={
          <div className="border border-grey-200 cursor-pointer rounded-lg p-4 flex items-center justify-between w-full">
            <div className="flex flex-col gap-2">
              <span className="font-medium text-xs">No of Guests</span>
              <span>
                {guestsCount} Guest{guestsCount > 1 && "s"}
              </span>
            </div>
            <CaretDown />
          </div>
        }
      >
        <ul>
          <li className="p-2 rounded hover:bg-black/5 cursor-pointer">
            <button className="w-full" onClick={() => setGuestsCount(1)}>
              1 Guest
            </button>
          </li>
          <li className="p-2 rounded hover:bg-black/5 cursor-pointer">
            <button className="w-full" onClick={() => setGuestsCount(2)}>
              2 Guests
            </button>
          </li>
          <li className="p-2 rounded hover:bg-black/5 cursor-pointer">
            <button className="w-full" onClick={() => setGuestsCount(3)}>
              3 Guests
            </button>
          </li>
          <li className="p-2 rounded hover:bg-black/5 cursor-pointer">
            <button className="w-full" onClick={() => setGuestsCount(4)}>
              4 Guests
            </button>
          </li>
          <li className="p-2 rounded hover:bg-black/5 cursor-pointer">
            <button className="w-full" onClick={() => setGuestsCount(5)}>
              5 Guests
            </button>
          </li>
          <li className="p-2 rounded hover:bg-black/5 cursor-pointer">
            <button className="w-full" onClick={() => setGuestsCount(6)}>
              6+ Guests
            </button>
          </li>
        </ul>
      </PopoverElement>

      <Link
        className="text-lg font-medium text-white rounded-xl py-3 px-4 block text-center bg-blue mt-4 hover:opacity-75 transition-all"
        href={`${pathName}/booking?guest=${guestsCount}`}
      >
        Book
      </Link>
    </div>
  );
}

export default BookShortlet;
