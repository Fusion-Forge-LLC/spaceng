"use client";

import React from "react";
import {useSearchParams} from "next/navigation";

import {Type, useGetPropertiesList} from "@/api/property/property-list";
import Loader from "@/components/loader/loader";

import Lists from "../_components/list-page/lists";

function Page({params}: {params: {type: Type}}) {
  const param = useSearchParams().entries();
  const query = Object.fromEntries(param);
  const {data, isLoading} = useGetPropertiesList(params.type, query);

  if (isLoading) {
    return (
      <div className="h-screen grid place-content-center">
        <Loader />
      </div>
    );
  }

  return (
    <Lists
      properties={data?.data.properties || []}
      total={data?.data.total_properties || 0}
      type={params.type}
    />
  );
}

export default Page;
