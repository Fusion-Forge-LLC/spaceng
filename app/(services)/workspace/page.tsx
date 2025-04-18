"use client";

import React from "react";
import {useSearchParams} from "next/navigation";

import Loader from "@/components/loader/loader";
import {useGetPropertiesList} from "@/api/property/property-list";

import Lists from "../_components/list-page/lists";

function Page() {
  const param = useSearchParams().entries();
  const query = Object.fromEntries(param);
  const {data, isLoading} = useGetPropertiesList("workspace", query);

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
      type="workspace"
    />
  );
}

export default Page;
