"use client";

import React from "react";

import {useGetProperty} from "@/api/property/property";
import Loader from "@/components/loader/loader";
import NotFound from "@/components/not-found/not-found";
import {useUpdateProperty} from "@/api/property/update-property";

import PropertyForm from "../../_component/form/property-form";

function Page({params}: {params: {id: string}}) {
  const {data, isPending} = useGetProperty(params.id);
  const {mutate, isPending: updating} = useUpdateProperty();

  if (isPending) {
    return (
      <div className="flex-1 overflow-hidden grid place-content-center py-20">
        <Loader />
      </div>
    );
  }

  if (!data?.data) {
    return <NotFound />;
  }

  return (
    <PropertyForm
      defaultValues={data.data}
      isPending={updating}
      mutate={mutate}
      title="Edit Property"
    />
  );
}

export default Page;
