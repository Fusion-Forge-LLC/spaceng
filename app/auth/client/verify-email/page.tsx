"use client";

import {REGEXP_ONLY_DIGITS} from "input-otp";
import React, {FormEvent} from "react";
import {useSearchParams} from "next/navigation";

import {useSendOtp} from "@/api/auth/send-otp";
import {useVerifyOtp} from "@/api/auth/verify-otp";
import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/components/ui/input-otp";

import PrimaryAuthButton from "../components/PrimaryAuthButton";

function VerifyEmail() {
  const [code, setCode] = React.useState("");

  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const {mutate: sendTop} = useSendOtp();

  const {isPending, mutate: verifyOtp} = useVerifyOtp(
    `/auth/client/verify-email/success?code=${code}`,
  );

  React.useEffect(() => {
    sendTop({email});
  }, []);

  const submitCode = (e: FormEvent) => {
    e.preventDefault();
    verifyOtp({otpCode: code, id: ""});
  };

  return (
    <form className="py-10 px-2 lg:px-6 md:text-base w-full" onSubmit={submitCode}>
      <h1 className="text-grey font-semibold text-2xl mb-6">Verify email</h1>
      <p className="text-[#707070] text-sm lg:text-base mb-2">
        A 6 Digit Verification Code Has Been Sent To Your Email Address. Enter The 6 Digit Code
        Below
      </p>
      <div className="py-4">
        <h3 className="mb-2">Enter 6 Digit Code</h3>
        <InputOTP
          maxLength={4}
          pattern={REGEXP_ONLY_DIGITS}
          value={code}
          onChange={(value) => setCode(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot index={1} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <PrimaryAuthButton
        buttonName="Verify Email"
        className="mb-6"
        isDisabled={code.length < 4}
        isLoading={isPending}
        onClick={() => {}}
      />
      <button className="text-[#707070] font-medium mx-auto block py-2.5 hover:bg-grey-200/10 w-full rounded-md">
        Resend verification code
      </button>
    </form>
  );
}

export default VerifyEmail;
