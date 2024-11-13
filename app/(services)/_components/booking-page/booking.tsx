"use client";

import {usePathname, useRouter} from "next/navigation";
import React from "react";
import {toast} from "sonner";

import {CaretDown} from "@/components/Icons/icons";
import {PopoverElement} from "@/components/style-guide/style-guide";
import {Calendar} from "@/components/ui/calendar";
import {useCheckout} from "@/hooks/use-checkout";

function Booking({showBtn, label}: {showBtn?: boolean; label: "Guest" | "Team"}) {
  const router = useRouter();
  const pathName = usePathname();
  const {date, guestsCount, setGuestsCount, updateDate} = useCheckout();

  const handleSubmit = () => {
    const checkin = date.checkin?.getTime();
    const checkout = date.checkout?.getTime();

    if (!checkin || !checkout) return toast.error("Please select valid dates");

    if (checkin > checkout) return toast.error("Checkin date cannot exceed checkout date");

    router.push(
      `${pathName}/checkout?guest=${guestsCount}&checkin=${checkin}&checkout=${checkout}`,
    );
  };

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
              <span className="font-medium text-xs">No of {label}</span>
              <span>
                {guestsCount} {label}
                {guestsCount > 1 && "s"}
              </span>
            </div>
            <CaretDown />
          </div>
        }
      >
        <ul>
          <li className="p-2 rounded hover:bg-black/5 cursor-pointer">
            <button className="w-full" onClick={() => setGuestsCount(1)}>
              1 {label}
            </button>
          </li>
          <li className="p-2 rounded hover:bg-black/5 cursor-pointer">
            <button className="w-full" onClick={() => setGuestsCount(2)}>
              2 {label}
            </button>
          </li>
          <li className="p-2 rounded hover:bg-black/5 cursor-pointer">
            <button className="w-full" onClick={() => setGuestsCount(3)}>
              3 {label}
            </button>
          </li>
          <li className="p-2 rounded hover:bg-black/5 cursor-pointer">
            <button className="w-full" onClick={() => setGuestsCount(4)}>
              4 {label}
            </button>
          </li>
          <li className="p-2 rounded hover:bg-black/5 cursor-pointer">
            <button className="w-full" onClick={() => setGuestsCount(5)}>
              5 {label}
            </button>
          </li>
          <li className="p-2 rounded hover:bg-black/5 cursor-pointer">
            <button className="w-full" onClick={() => setGuestsCount(6)}>
              6+ {label}
            </button>
          </li>
        </ul>
      </PopoverElement>

      {showBtn && (
        <button className="booking-btn w-full" onClick={handleSubmit}>
          Book
        </button>
      )}
    </div>
  );
}

export default Booking;
