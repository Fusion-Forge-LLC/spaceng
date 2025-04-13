"use client";

import React from "react";
import dynamic from "next/dynamic";

import {useGetProperty} from "@/api/property/property";
import Loader from "@/components/loader/loader";
import NotFound from "@/components/not-found/not-found";

const Checkout = dynamic(() => import("../../../_components/checkout-page/checkout"), {ssr: false});

function Page({params}: {params: {id: string}}) {
  const {data, isLoading} = useGetProperty(params.id);

  if (isLoading) {
    return (
      <div className="h-screen grid place-content-center">
        <Loader />
      </div>
    );
  }

  if (!data?.data) {
    return <NotFound />;
  }

  return (
    <Checkout
      cautionFee={data.data.caution_fee}
      label="Guest"
      price={data.data.price}
      propertyType="shortlet"
    />
  );
}

export default Page;
