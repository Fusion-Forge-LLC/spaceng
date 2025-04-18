"use client";

import React from "react";
import dynamic from "next/dynamic";

import {useGetProperty} from "@/api/property/property";
import Loader from "@/components/loader/loader";
import NotFound from "@/components/not-found/not-found";
import {Type} from "@/api/property/property-list";

const Checkout = dynamic(() => import("../../../_components/checkout-page/checkout"), {ssr: false});

function Page({params}: {params: {type: Type; id: string}}) {
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
      label={params.type === "shortlet" ? "Guest" : "Team"}
      price={data.data.price}
      propertyType={params.type}
    />
  );
}

export default Page;
