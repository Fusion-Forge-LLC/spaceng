import React from "react";
import {Poppins} from "next/font/google";
import Link from "next/link";

import {cn} from "@/lib/utils";

import FormControl from "../_components/form-control/form-control";
import SocialBtn from "../_components/social-btn/social-btn";

const poppin = Poppins({subsets: ["latin"], weight: ["400", "500", "600", "700"]});

function Page() {
  return (
    <div className="business-auth-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h3 className="auth-title mb-6">Welcome Back!</h3>
      <form action="" className="space-y-5 mb-6 text-right">
        <FormControl id="email_address" label="Email Address" />
        <FormControl isPassword id="password" label="Password" type="password" />
        <Link
          className="text-right text-sm text-[#F90000] w-fit ml-auto hover:underline -mt-5"
          href="/auth/business/login/forgot-password"
        >
          Forget Password?
        </Link>
        <button
          className={cn(
            poppin.className,
            "business-auth-button text-white bg-blue hover:bg-white hover:text-blue w-full",
          )}
        >
          Login
        </button>
      </form>
      <div className={poppin.className}>
        <div className="flex items-center gap-8 px-4 py-4">
          <div className="flex-1 h-px bg-grey" />
          <span className="text-sm font-medium text-black">OR</span>
          <div className="flex-1 h-px bg-grey" />
        </div>

        <div className="flex justify-center gap-3 pt-4">
          <SocialBtn image="/icons/facebook.svg" name="Continue with Facebook" />
          <SocialBtn image="/icons/google.svg" name="Continue with Google" />
        </div>
      </div>
    </div>
  );
}

export default Page;
