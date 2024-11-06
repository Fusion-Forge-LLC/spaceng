"use client";

import dynamic from "next/dynamic";

import {useCreateProperty} from "@/api/property/new-property";

const PropertyForm = dynamic(() => import("../_component/form/property-form"), {ssr: false});

function Page() {
  const {mutate: uploadProperty, isPending} = useCreateProperty();

  return <PropertyForm defaultValues={null} isPending={isPending} mutate={uploadProperty} />;
}

export default Page;
