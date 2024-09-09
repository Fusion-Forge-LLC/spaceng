"use client";

import {ArrowLeft, Ellipsis} from "lucide-react";
import {useRouter} from "next/navigation";
import React, {useState} from "react";

import {Bank, CreditCard, Gpay} from "@/components/Icons/icons";
import Wrapper from "@/components/wrapper/wrapper";
import {cn} from "@/lib/utils";

import PaymentSuccess from "../modal/payment-success";
import Booking from "../booking-page/booking";

import CardsPayment from "./payment-methods/cards";
import GooglePay from "./payment-methods/google-pay";
import BankAccount from "./payment-methods/bank-account";

enum PaymentMethod {
  CARD = "card_payment",
  GOOGLE = "google_payment",
  BANK = "bank_payment",
}

function Checkout({label}: {label: "Guest" | "Team"}) {
  const router = useRouter();
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PaymentMethod.CARD);

  const paymentSuccess = () => {
    setIsPaymentSuccess(true);
  };

  return (
    <main>
      <PaymentSuccess isShown={isPaymentSuccess} />
      <Wrapper className="pt-10 pb-20">
        <div className="py-5">
          <button className="flex items-center gap-3" onClick={() => router.back()}>
            <ArrowLeft color="#205BF3" size={18} />
            Go Back
          </button>
        </div>

        <div className="grid grid-cols-12 gap-12 items-start">
          <div className="col-span-7 property-book">
            <div className="text-[#6D6E78] text-sm flex gap-3">
              <button
                className={cn(
                  "payment-method flex-1",
                  paymentMethod === PaymentMethod.CARD
                    ? "active-payment-method"
                    : "non-active-payment-method",
                )}
                onClick={() => setPaymentMethod(PaymentMethod.CARD)}
              >
                <CreditCard />
                <span className="blockfont-medium">Card</span>
              </button>
              <button
                className={cn(
                  "payment-method flex-1",
                  paymentMethod === PaymentMethod.GOOGLE
                    ? "active-payment-method"
                    : "non-active-payment-method",
                )}
                onClick={() => setPaymentMethod(PaymentMethod.GOOGLE)}
              >
                <span>
                  <Gpay size={16} />
                </span>
                <span className="block">Google Pay</span>
              </button>
              <button
                className={cn(
                  "payment-method flex-1",
                  paymentMethod === PaymentMethod.BANK
                    ? "active-payment-method"
                    : "non-active-payment-method",
                )}
                onClick={() => setPaymentMethod(PaymentMethod.BANK)}
              >
                <Bank />
                <span className="block">Bank Account</span>
              </button>
              <button className="payment-method w-fit">
                <Ellipsis color="#205BF3" />
              </button>
            </div>

            <div className="relative overflow-hidden">
              <div
                className={cn(
                  "flex relative top-0 transition-all",
                  paymentMethod === PaymentMethod.CARD
                    ? "left-0"
                    : paymentMethod === PaymentMethod.GOOGLE
                      ? "-left-full"
                      : "-left-[200%]",
                )}
              >
                <CardsPayment className="" paymentSuccess={paymentSuccess} />
                <GooglePay className="" paymentSuccess={paymentSuccess} />
                <BankAccount className="" paymentSuccess={paymentSuccess} />
              </div>
            </div>
          </div>
          <div className="col-span-5 property-book">
            <div className="p-6">
              <h4 className=" text-grey font-medium text-lg">Booking details</h4>
              <Booking label={label} />
            </div>
          </div>
        </div>
      </Wrapper>
    </main>
  );
}

export default Checkout;
