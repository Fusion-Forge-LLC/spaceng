"use client";

import React, {useEffect} from "react";
import {useSearchParams} from "next/navigation";

import {useSendOtp} from "@/api/auth/send-otp";

import EmailVerification from "../../../../_components/email-verification/email-verification";

function Page() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const {mutate} = useSendOtp();

  useEffect(() => {
    mutate({email});
  }, []);

  return (
    <EmailVerification email={email} redirect="/auth/business/login/forgot-password/new-password" />
  );
}

export default Page;
