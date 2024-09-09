"use client";

import {ArrowLeft, Ellipsis} from "lucide-react";
import Image from "next/image";
import {useRouter} from "next/navigation";
import React, {FormEvent, useState} from "react";

import {Bank, CreditCard, Gpay} from "@/components/Icons/icons";
import {DropdDown} from "@/components/style-guide/style-guide";
import {Input} from "@/components/ui/input";
import Wrapper from "@/components/wrapper/wrapper";
import {cn} from "@/lib/utils";

import countries from "../../../../countries/countries";
import PaymentSuccess from "../modal/payment-success";
import Booking from "../booking-page/booking";

function Checkout({label}: {label: "Guest" | "Team"}) {
  const router = useRouter();
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    card_number: "",
    expiry_date: "",
  });

  function handleInput(event: FormEvent<HTMLInputElement>) {
    const inputValue = event.currentTarget.value;
    const formattedValue = inputValue
      .replace(/\D/g, "") // Remove non-numeric characters
      .replace(/\s/g, "") // Remove spaces
      .replace(/(\d{4})(?=(\d{4})+$)/g, "$1 "); // Insert spaces every 4 digits

    setCardDetails((prevState) => {
      return {...prevState, card_number: formattedValue};
    });
  }

  function handleExpiryInput(event: FormEvent<HTMLInputElement>) {
    const inputValue = event.currentTarget.value;
    const formattedValue = inputValue
      .replace(/\D/g, "") // Remove non-numeric characters
      .replace(/\s/g, "") // Remove spaces
      .replace(/(\d{2})(?=(\d{2})+$)/g, "$1/"); // Insert a slash after two digits

    // Validate the expiry date (e.g., ensure it's in MM/YY format and not in the past)
    if (formattedValue.length === 5 && isValidExpiryDate(formattedValue)) {
      setCardDetails((prevState) => {
        return {...prevState, expiry_date: formattedValue};
      });
    } else {
      // Handle invalid input (e.g., show an error message)
      setCardDetails((prevState) => {
        return {...prevState, expiry_date: ""};
      });
    }

    function isValidExpiryDate(expiryDate: string) {
      // Implement your validation logic here, e.g., check if the date is in MM/YY format and not in the past
      // You can use a library like moment.js or Luxon for more advanced date validation
      const [month, year] = expiryDate.split("/");
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth() + 1;

      return (
        parseInt(month) >= 1 &&
        parseInt(month) <= 12 &&
        parseInt(year) >= currentYear &&
        (parseInt(year) > currentYear || parseInt(month) >= currentMonth)
      );
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsPaymentSuccess(true);
  }

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
            <ul className="text-[#6D6E78] text-sm flex gap-3">
              <li className={cn("p-4 space-y-2 border-2 border-blue rounded-md flex-1")}>
                <CreditCard />
                <span className="block text-blue font-medium">Card</span>
              </li>
              <li className="payment-method flex-1">
                <span>
                  <Gpay />
                </span>
                <span className="block">Google Pay</span>
              </li>
              <li className="payment-method flex-1">
                <Bank />
                <span className="block">Bank Account</span>
              </li>
              <li className="payment-method w-fit">
                <Ellipsis color="#205BF3" />
              </li>
            </ul>

            <form className="space-y-6 py-7" onSubmit={handleSubmit}>
              <div className="relative">
                <label className="text-[15px] text-[#30313D]" htmlFor="card_number">
                  Card Number
                </label>
                <Input
                  className="payment-input"
                  id="card_number"
                  maxLength={20}
                  placeholder="1234 1234 1234 1234"
                  value={cardDetails.card_number}
                  onInput={handleInput}
                />

                <div className="flex gap-0.5 absolute right-2 bottom-3">
                  <Image alt="Master card" height={16} src={"/cards/MasterCard.svg"} width={26} />
                  <Image alt="Visa card" height={16} src={"/cards/Visa.svg"} width={26} />
                  <Image
                    alt="America Express card"
                    height={16}
                    src={"/cards/Amex.svg"}
                    width={26}
                  />
                  <Image alt="Discover card" height={16} src={"/cards/discover.svg"} width={26} />
                </div>
              </div>

              <div className="grid-cols-2 grid gap-4">
                <div>
                  <label className="text-[15px] text-[#30313D]" htmlFor="expiry_date">
                    Expiry Date
                  </label>
                  <Input
                    className="payment-input"
                    id="expiry_date"
                    placeholder="MM / YY"
                    value={cardDetails.expiry_date}
                    onInput={handleExpiryInput}
                  />
                </div>
                <div>
                  <label className="text-[15px] text-[#30313D]" htmlFor="cvv">
                    CVV
                  </label>
                  <Input
                    className="payment-input"
                    id="cvv"
                    maxLength={3}
                    minLength={3}
                    placeholder="123"
                    type="number"
                  />
                </div>
              </div>
              <div className="mb-7">
                <label className="text-[15px] text-[#30313D]" htmlFor="Country">
                  Country
                </label>
                <DropdDown
                  className="payment-input w-full"
                  options={countries}
                  placeholder="Select"
                />
              </div>

              <button className="booking-btn w-full block">Pay ₦25,000</button>
            </form>
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
