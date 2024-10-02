"use client";
import {useState} from "react";
import Image from "next/image";

export default function PaymentInfo() {
  const [paymentBlock, setPaymentBlock] = useState(false);

  return (
    <div className="w-full">
      <div className="md:p-4 ">
        <h1 className="text-lg lg:text-2xl font-semibold mb-2">Payment info</h1>
        <p className="text-grey-200 text-sm lg:text-base ">
          Securely add or remove payment methods to make it easier when you book.
        </p>
      </div>
      <div className="py-2 md:p-4 flex flex-col gap-4">
        <div className="">
          <div
            className={` ${paymentBlock ? "hidden" : ""} py-4 flex justify-between items-start `}
          >
            <div className="flex flex-col gap-3">
              <h2 className="font-medium">Payment cards</h2>
              <p className="text-grey-200">
                Securely add or remove payment methods to make it easier when you book.
              </p>
            </div>
            <button
              className="text-blue font-medium cursor-pointer"
              onClick={() => setPaymentBlock(true)}
            >
              Add card
            </button>
          </div>

          <div className={`${paymentBlock ? "" : "hidden"} py-4`}>
            <div className="flex justify-between gap-2 mb-6">
              <h2 className="font-medium">Payment cards</h2>
              <button
                className="text-blue font-medium cursor-pointer"
                onClick={() => setPaymentBlock(false)}
              >
                Cancel
              </button>
            </div>
            <div className="flex gap-6 items-center mb-6">
              <Image
                alt="Mastercard"
                height={24}
                src="/account_management/mastercard.svg"
                width={30}
              />
              <Image alt="visa" height={24} src="/account_management/visa.svg" width={53} />
              <Image alt="paypal" height={24} src="/account_management/paypal.svg" width={20} />
              <Image alt="opay" height={24} src="/account_management/opay.svg" width={24} />
            </div>
            <div className="w-full max-w-[500px] mb-16">
              <div className="flex flex-col gap-1 mb-4">
                <label className="text-grey-200" htmlFor="cardHolderName">
                  Cardholder’s name
                </label>
                <input
                  className="py-3.5 px-4 outline-none border-grey-200 rounded-lg max-w-[380px] "
                  id="cardHolderName"
                  name="cardHolderName"
                  placeholder=""
                  style={{borderWidth: "0.5px"}}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1 mb-4">
                <label className="text-grey-200" htmlFor="cardNumber">
                  Card number
                </label>
                <input
                  required
                  autoComplete="cc-number"
                  className="py-3.5 px-4 outline-none border-grey-200 rounded-lg max-w-[380px] "
                  id="cardNumber"
                  inputMode="numeric"
                  maxLength={19}
                  name="cardNumber"
                  pattern="[0-9\s]{13,19}"
                  placeholder="xxxx xxxx xxxx xxxx"
                  style={{borderWidth: "0.5px"}}
                  type="tel"
                />
              </div>
              <div className="flex flex-col gap-1 mb-4">
                <label className="text-grey-200" htmlFor="expiryDate">
                  Expiry date
                </label>
                <input
                  className="py-3.5 px-4 outline-none border-grey-200 rounded-lg max-w-[380px] "
                  id="expiryDate"
                  name="expiryDate"
                  placeholder=""
                  style={{borderWidth: "0.5px"}}
                  type="date"
                />
              </div>
            </div>
            <button className="py-3 px-4 bg-blue rounded-lg text-white block ml-auto">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
