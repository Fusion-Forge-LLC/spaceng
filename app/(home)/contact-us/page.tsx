"use client";

import React, {useState} from "react";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import Image from "next/image";

import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import Wrapper from "@/components/wrapper/wrapper";

import "react-phone-number-input/style.css";
import "./styles.css";
import {Button} from "@/components/ui/button";

import phoneImage from "../../../public/phone-icon.png";

function Page() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <section className="mb-10 sm:mb-20">
      <Wrapper className="py-10 px-0 sm:px-4">
        <article className="pb-8 sm:pb-14 space-y-8">
          <h1 className="font-semibold text-[22px] mb-2 px-4">Contact us</h1>

          <div className="grid grid-cols-12 gap-5">
            <form
              action=""
              className="col-span-12 sm:col-span-8 bg-[#F3F3F3] px-4 sm:px-5 md:px-16 py-10 space-y-4 order-2 sm:order-1"
            >
              <div>
                <label className="font-medium text-lg px-2" htmlFor="full_name">
                  Full name
                </label>
                <Input className="contact-input h-14" id="full_name" />
              </div>
              <div>
                <label className="font-medium text-lg px-2" htmlFor="email">
                  Email
                </label>
                <Input className="contact-input h-14" id="email" />
              </div>
              <div>
                <label className="font-medium text-lg px-2" htmlFor="mobile_number">
                  Mobile Number
                </label>
                <PhoneInputWithCountrySelect
                  className="contact-input h-14 hover:outline-none px-[14px]"
                  defaultCountry="NG"
                  id="mobile_number"
                  name="phone"
                  placeholder="(+234) 00000000"
                  value={phoneNumber}
                  onChange={(value: any) => setPhoneNumber(value)}
                />
              </div>
              <div>
                <label className="font-medium text-lg px-2" htmlFor="commet">
                  Comment
                </label>
                <Textarea className="resize-none contact-input" id="commet" rows={10} />
              </div>

              <div>
                <Button className="bg-blue px-10 sm:px-16 py-3 md:py-5 rounded-none md:rounded-md">
                  Send
                </Button>
              </div>
            </form>

            <Image
              alt="Phone image"
              className="w-full object-cover col-span-12 sm:col-span-4 order-1 sm:order-2 px-4"
              src={phoneImage}
            />
          </div>
        </article>
      </Wrapper>
    </section>
  );
}

export default Page;
