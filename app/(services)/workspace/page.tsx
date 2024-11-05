"use client";

import React from "react";

import Loader from "@/components/loader/loader";
import {useGetPropertiesList} from "@/api/property/property-list";

import Lists from "../_components/list-page/lists";

function Page() {
  const {data, isLoading} = useGetPropertiesList("workspace");

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
      type="workspaces"
    />
  );
}

export default Page;
