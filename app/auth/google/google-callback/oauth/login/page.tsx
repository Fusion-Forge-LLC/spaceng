"use client";

import React, {useEffect} from "react";

import {useLogIn} from "@/api/auth/google-login";

function Page({searchParams}: {searchParams: {code: string}}) {
  const {mutate, isPending} = useLogIn();

  useEffect(() => {
    const accountType = localStorage.getItem("oathRedirect");

    mutate({
      code: searchParams.code,
      source: accountType === "business" ? "business" : "client",
    });
  }, []);

  return <div>{searchParams.code}</div>;
}

export default Page;
