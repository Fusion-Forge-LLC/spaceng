import React, {FormEvent} from "react";

import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";

function BankAccount({paymentSuccess, className}: {paymentSuccess: () => void; className: string}) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    paymentSuccess();
  };

  return (
    <form className={cn("pt-5 space-y-4 w-full shrink-0", className)} onSubmit={handleSubmit}>
      <div>
        <label className="text-[15px] text-[#30313D]" htmlFor="account_number">
          Account Number
        </label>
        <Input
          className="payment-input"
          id="account_number"
          placeholder="0204568945"
          type="number"
        />
      </div>
      <div>
        <label className="text-[15px] text-[#30313D]" htmlFor="full_name">
          Account Number
        </label>
        <Input className="payment-input" id="full_name" placeholder="Co-Worka Limited" />
      </div>
      <div className="pb-9">
        <label className="text-[15px] text-[#30313D]" htmlFor="bank_name">
          Account Number
        </label>
        <Input className="payment-input" id="bank_name" placeholder="Guaranty trust bank" />
      </div>

      <button className="booking-btn w-full block">Pay ₦25,000</button>
    </form>
  );
}

export default BankAccount;
