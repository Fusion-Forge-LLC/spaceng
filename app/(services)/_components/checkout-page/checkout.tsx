"use client";

import {ArrowLeft} from "lucide-react";
import {useParams, useRouter, useSearchParams} from "next/navigation";
import React, {useState} from "react";
import Paystack from "@paystack/inline-js";
import {toast} from "sonner";

import {Bank, CreditCard, Gpay} from "@/components/Icons/icons";
import Wrapper from "@/components/wrapper/wrapper";
import {calculateDays, cn} from "@/lib/utils";
import {useInitTransaction} from "@/api/transaction/initpayment";
import {useUser} from "@/context/user";
import {BookingResponse, useCreateBooking} from "@/api/booking/create-booking";
import Loader from "@/components/loader/loader";

import PaymentSuccess from "../modal/payment-success";
import Booking from "../booking-page/booking";

import CardsPayment from "./payment-methods/cards";
import GooglePay from "./payment-methods/google-pay";
import BankAccount from "./payment-methods/bank-account";

enum PaymentMethod {
  CARD = "card",
  BANK = "bank_transfer",
}

function Checkout({
  label,
  price,
  propertyType,
}: {
  label: "Guest" | "Team";
  price: number;
  propertyType: "workspace" | "shortlet";
}) {
  const params = useParams();
  const {User} = useUser();
  const searchParams = useSearchParams();
  const propertyId = params.id as string;
  const popup = new Paystack();
  const {mutateAsync, isPending: initatingTransaction} = useInitTransaction();
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);
  const checkin = searchParams.get("checkin");
  const checkout = searchParams.get("checkout");
  const guestCount = searchParams.get("guest");
  const {mutateAsync: createBooking, isPending} = useCreateBooking();
  const [bookingData, setBookingData] = useState<BookingResponse | null>(null);

  const totalCost = calculateDays(checkin ?? "", checkout ?? "", propertyType) * price;

  const makePayment = async () => {
    if (!checkin || !checkout) return;
    if (!paymentMethod) {
      toast.error("Please select a payment method");

      return;
    }
    const data = await mutateAsync({
      params: searchParams.toString(),
      data: {
        email: User?.email || "",
        amount: 4000,
        propertyId,
        checkin,
        checkout,
        channel: paymentMethod,
        guestCount: guestCount || 1,
      },
    });

    //@ts-ignore
    popup.resumeTransaction(data.data.access_code, {
      //@ts-ignore
      onSuccess: async (transaction) => {
        const data = await createBooking(transaction.trxref);

        setBookingData(data.data);
      },
      onCancel: () => {
        console.log("onCancel");
      },
      onError: (error: any) => {
        console.log("Error: ", error.message);
      },
    });
  };

  return (
    <main>
      {isPending && (
        <div className="h-full w-full z-10 fixed top-0 left-0 grid place-content-center">
          <div className="h-full w-full absolute bg-black/30" />
          <Loader />
        </div>
      )}
      {bookingData && <PaymentSuccess {...bookingData} />}
      <Wrapper className="pt-10">
        <div className="py-5">
          <button className="flex items-center gap-3" onClick={() => router.back()}>
            <ArrowLeft color="#205BF3" size={18} />
            Go Back
          </button>
        </div>
      </Wrapper>
      <Wrapper className="pt-8 md:pt-0 pb-20 max-sm:px-0">
        <div className="md:grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="md:col-span-6 lg:col-span-7 property-book">
            <h4 className="text-xl text-center font-semibold mb-10">Select Payment Method</h4>

            <div className="text-[#6D6E78] text-sm flex flex-col gap-5 mb-8">
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
                  "payment-method flex-1 hidden",
                  paymentMethod === PaymentMethod.BANK
                    ? "active-payment-method"
                    : "non-active-payment-method",
                )}
                onClick={() => setPaymentMethod(PaymentMethod.BANK)}
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
                <span className="block">Bank Transfer</span>
              </button>
            </div>

            <button className="booking-btn w-full block" onClick={makePayment}>
              {initatingTransaction ? <Loader /> : <span>Pay ₦{price.toLocaleString()}</span>}
            </button>

            <div className="relative overflow-hidden hidden">
              <div
                className={cn(
                  "flex relative top-0 transition-all",
                  paymentMethod === PaymentMethod.CARD
                    ? "left-0"
                    : paymentMethod === PaymentMethod.BANK
                      ? "-left-full"
                      : "-left-[200%]",
                )}
              >
                <CardsPayment className="" price={totalCost.toLocaleString()} />
                <GooglePay className="" price={totalCost.toLocaleString()} />
                <BankAccount className="" price={totalCost.toLocaleString()} />
              </div>
            </div>
          </div>
          <div className="hidden md:block col-span-6 lg:col-span-5 property-book">
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
