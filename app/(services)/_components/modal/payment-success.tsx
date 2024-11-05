import {Check, X} from "lucide-react";
import {useRouter} from "next/navigation";
import React, {useEffect} from "react";

import Wrapper from "./wrapper";

function PaymentSuccess({isShown}: {isShown: boolean}) {
  const router = useRouter();

  useEffect(() => {
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  useEffect(() => {
    if (isShown) {
      document.body.classList.add("overflow-hidden");
    }
  }, [isShown]);

  return (
    <>
      {isShown && (
        <Wrapper>
          <div className="bg-white p-6 rounded-lg z-10 relative">
            <button
              className="right-4 top-4 absolute h-9 w-9 grid place-content-center hover:bg-black/20 rounded-full"
              onClick={() => router.back()}
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
              <p className="text-2xl font-bold">₦25,000</p>
            </header>
            <div className="pt-5">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="py-2 text-grey-200 pr-10">Ref Number</td>
                    <td className="font-medium text-right ">000023451127</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-grey-200 pr-10">Payment Time</td>
                    <td className="font-medium text-right ">24-08-2024, 11:36:12</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-grey-200 pr-10">Payment Method</td>
                    <td className="font-medium text-right ">Card Payment</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-grey-200 pr-10">Sender Name</td>
                    <td className="font-medium text-right ">George Jnr</td>
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
