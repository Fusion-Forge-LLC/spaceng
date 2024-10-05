"use client";

import React from "react";
import {Poppins} from "next/font/google";
import {useRouter} from "next/navigation";

import FormControl from "../../../_components/form-control/form-control";

const poppin = Poppins({subsets: ["latin"], weight: ["400", "500", "600", "700"]});

function Page() {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.push("/auth/business/login/forgot-password/email/verify");
  };

  return (
    <div className="business-auth-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-poppin text-grey-200">
      <h3 className="auth-title mb-2 text-grey">Reset Password?</h3>
      <p className="text-grey-200 text-sm text-center max-w-sm mx-auto">
        Provide your registered email to receive a link to reset your password
      </p>
      <form className="" onSubmit={handleSubmit}>
        <div className="py-6 space-y-5">
          <FormControl id="email" label="Email" type="email" />
        </div>
        <button className="business-auth-button text-white bg-blue hover:bg-white py-3 hover:text-blue w-full font-medium">
          Continue
        </button>
      </form>
    </div>
  );
}

export default Page;
