import React from "react";

import {Gpay, PhoneRedirect} from "@/components/Icons/icons";
import {cn} from "@/lib/utils";

function GooglePay({className, price}: {className: string; price: string}) {
  return (
    <div className={cn("shrink-0 w-full", className)}>
      <div className="py-12 px-4">
        <div className="rounded-md border border-[#E6E6E6] text-sm p-2">
          <div className="flex flex-col gap-2 pb-2 border-b border-b-[#E6E6E6]">
            <Gpay size={30.61} />
            <span className="text-[#30313D]">Google Pay selected for check out.</span>
          </div>
          <div className="flex items-center gap-4 pt-3">
            <PhoneRedirect />
            <p className="flex-1 text-[#6D6E78]">
              Another step will apper after submitting your order to complete your purchase details.
            </p>
          </div>
        </div>
      </div>

      <button className="booking-btn w-full block">Pay ₦{price}</button>
    </div>
  );
}

export default GooglePay;
