"use client";

import {useCreateProperty} from "@/api/property/new-property";

import PropertyForm from "../_component/form/property-form";

function Page() {
  const {mutate: uploadProperty, isPending} = useCreateProperty();

  return <PropertyForm defaultValues={null} isPending={isPending} mutate={uploadProperty} />;
}

export default Page;
