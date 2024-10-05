"use client";

import React, {FormEvent} from "react";
import {Poppins} from "next/font/google";
import {useRouter} from "next/navigation";

import {cn} from "@/lib/utils";

import FormControl from "../_components/form-control/form-control";
import SocialBtn from "../_components/social-btn/social-btn";

const poppin = Poppins({subsets: ["latin"], weight: ["400", "500", "600", "700"]});

function Page() {
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/auth/business/signup/verify");
  };

  return (
    <div className="business-auth-wrapper">
      <h3 className="auth-title mb-7">Create your Property Owner Account</h3>
      <form className="space-y-5 mb-8" onSubmit={handleSubmit}>
        <FormControl id="full_name" label="Full Name" />
        <FormControl id="email_address" label="Email Address" />
        <FormControl id="phone_number" label="Phone Number" />
        <FormControl isPassword id="password" label="Password" type="password" />
        <button
          className={cn(
            poppin.className,
            "business-auth-button text-white bg-blue hover:bg-white hover:text-blue w-full",
          )}
        >
          Sign Up and Start Listing
        </button>
      </form>
      <div className={poppin.className}>
        <p className="text-sm text-center">
          By proceeding, you agree to our Terms and conditions and our Privacy policy{" "}
        </p>

        <div className="flex items-center gap-8 px-4 py-4">
          <div className="flex-1 h-px bg-grey" />
          <span className="text-sm font-medium text-black">OR</span>
          <div className="flex-1 h-px bg-grey" />
        </div>

        <div className="grid grid-cols-2 px-8 sm:px-0 sm:flex justify-center gap-2 sm:gap-8 pt-4">
          <SocialBtn image="/icons/facebook.svg" name="Facebook" />
          <SocialBtn image="/icons/google.svg" name="Google" />
        </div>
      </div>
    </div>
  );
}

export default Page;
