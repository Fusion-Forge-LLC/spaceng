"use client";

import React, {useEffect} from "react";
import {useSearchParams} from "next/navigation";

import {useLogIn} from "@/api/auth/google-login";
import Loader from "@/components/loader/loader";

function Page() {
  const {mutate, isPending} = useLogIn();
  const searchParams = useSearchParams();
  const authCode = searchParams.get("code");

  useEffect(() => {
    const accountType = localStorage.getItem("oathRedirect");

    if (authCode) {
      mutate({
        code: authCode,
        source: accountType === "business" ? "business" : "client",
      });
    }
  }, []);

  return (
    <div className="h-screen w-full grid place-content-center">
      <Loader />
    </div>
  );
}

export default Page;
