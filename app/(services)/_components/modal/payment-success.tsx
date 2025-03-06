import {Check, X} from "lucide-react";
import {useRouter} from "next/navigation";
import React, {useEffect} from "react";

import {BookingResponse} from "@/api/booking/create-booking";

import Wrapper from "./wrapper";

function PaymentSuccess(props: BookingResponse) {
  const router = useRouter();

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  return (
    <>
      {props && (
        <Wrapper>
          <div className="bg-white p-6 rounded-lg z-20 relative">
            <button
              className="right-4 top-4 absolute h-9 w-9 grid place-content-center hover:bg-black/20 rounded-full"
              onClick={() => router.push("/account/bookings")}
            >
              <X color="#E94235" />
            </button>
            <header className="flex flex-col items-center gap-3 border-b pb-5 border-b-[#EDEDED]">
              <div className="bg-[#F4F7FE] p-5 w-fit rounded-full">
                <div className="bg-blue h-9 w-9 grid place-content-center rounded-full">
                  <Check color="#FFF" />
                </div>
              </div>

              <h4 className="text-grey-200 text-lg ">Payment Success!</h4>
              <p className="text-2xl font-bold">₦{props.amountPaid.toLocaleString()}</p>
            </header>
            <div className="pt-5">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="py-2 text-grey-200 pr-10">Ref Number</td>
                    <td className="font-medium text-right ">{props.refNumber}</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-grey-200 pr-10">Payment Time</td>
                    <td className="font-medium text-right ">
                      {new Date(props.time).toLocaleDateString("en-GB")},{" "}
                      {new Date(props.time).toLocaleTimeString()}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 text-grey-200 pr-10">Payment Method</td>
                    <td className="font-medium text-right capitalize">{props.method} Payment</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-grey-200 pr-10">Sender Name</td>
                    <td className="font-medium text-right capitalize">{props.clientName}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
}

export default PaymentSuccess;
