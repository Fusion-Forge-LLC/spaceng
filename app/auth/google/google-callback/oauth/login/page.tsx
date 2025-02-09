"use client";

import React, {useEffect} from "react";

import {useLogIn} from "@/api/auth/google-login";
import Loader from "@/components/loader/loader";

function Page({searchParams}: {searchParams: {code: string}}) {
  const {mutate, isPending} = useLogIn();

  useEffect(() => {
    const accountType = localStorage.getItem("oathRedirect");

    mutate({
      code: searchParams.code,
      source: accountType === "business" ? "business" : "client",
    });
  }, []);

  return (
    <div className="h-screen w-full grid place-content-center">
      <Loader />
    </div>
  );
}

export default Page;
