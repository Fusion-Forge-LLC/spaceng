import React from "react";

import Checkout from "@/app/(services)/_components/checkout-page/checkout";
import NotFound from "@/components/not-found/not-found";
import Loader from "@/components/loader/loader";
import {useGetProperty} from "@/api/property/property";

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

  return <Checkout label="Guest" price={data.data.price} propertyType="workspace" />;
}

export default Page;
