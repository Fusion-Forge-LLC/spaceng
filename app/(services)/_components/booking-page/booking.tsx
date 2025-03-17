"use client";

import {usePathname, useRouter} from "next/navigation";
import React, {useMemo, useState} from "react";

import {CaretDown} from "@/components/Icons/icons";
import {PopoverElement} from "@/components/style-guide/style-guide";
import {Calendar} from "@/components/ui/calendar";
import {useCheckout} from "@/hooks/use-checkout";
import {useUser} from "@/context/user";
import Loader from "@/components/loader/loader";

function Booking({showBtn, label}: {showBtn?: boolean; label: "Guest" | "Team"}) {
  const {User} = useUser();
  const pathName = usePathname();
  const router = useRouter();
  const {date, guestsCount, setGuestsCount, updateDate} = useCheckout();
  const [isLoading, setisLoading] = useState(false);

  const params = useMemo(() => {
    const checkin = date.checkin?.getTime().toString();
    const checkout = date.checkout?.getTime().toString();

    const params = new URLSearchParams();

    params.set("guest", guestsCount.toString());
    params.set("checkin", checkin || "");
    params.set("checkout", checkout || "");

    if (typeof window !== "undefined") {
      const parsedUrl = new URL(window.location.href);

      parsedUrl.searchParams.set("guest", guestsCount.toString());
      parsedUrl.searchParams.set("checkin", checkin || "");
      parsedUrl.searchParams.set("checkout", checkout || "");
      router.push(parsedUrl.toString());
    }

    return params.toString();
  }, [date, guestsCount, guestsCount]);

  const checkoutBooking = () => {
    const path = `${pathName}/checkout?${params}`;

    setisLoading(true);
    if (User) {
      router.push(path);
    } else {
      sessionStorage.setItem("redirectLink", path);
      router.push("/auth/client/signin");
    }
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
          disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
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
          disabled={(current) => current < date?.checkin! || current < new Date("1900-01-01")}
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
        <button className="booking-btn w-full" onClick={checkoutBooking}>
          {isLoading ? <Loader /> : "Book"}
        </button>
      )}
    </div>
  );
}

export default Booking;
