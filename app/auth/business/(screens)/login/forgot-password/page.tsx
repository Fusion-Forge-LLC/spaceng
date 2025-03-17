"use client";

import React, {FormEvent} from "react";
import {useRouter} from "next/navigation";

import {CallIcon, EmailIcon} from "@/components/Icons/icons";

function Page() {
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    router.push("/auth/business/login/forgot-password/email");
  };

  return (
    <div className="business-auth-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-poppin text-grey-200">
      <h3 className="auth-title mb2 text-grey">Forgot Password?</h3>
      <p className="text-grey-200 text-sm">
        Where would you like to receive your One Time Password (OTP)
      </p>
      <form className="space-y-3     mb-6 text-right" onSubmit={handleSubmit}>
        <div className="py-6 space-y-5">
          <div className="flex gap-3">
            <input className="h-6 w-6" id="email" name="otp_channel" type="radio" value="email" />
            <label className="flex items-center gap-2" htmlFor="email">
              <EmailIcon />
              <span>Email</span>
            </label>
          </div>
          <div className="flex gap-3">
            <input
              className="h-6 w-6"
              id="phone_number"
              name="otp_channel"
              type="radio"
              value="phone_number"
            />
            <label className="flex items-center gap-2" htmlFor="phone_number">
              <CallIcon />
              <span>Phone Number</span>
            </label>
          </div>
        </div>
        <button className="business-auth-button text-white bg-blue hover:bg-white py-3 hover:text-blue w-full font-medium">
          Continue
        </button>
      </form>
    </div>
  );
}

export default Page;
