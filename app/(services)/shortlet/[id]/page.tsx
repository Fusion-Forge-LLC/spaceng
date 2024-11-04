"use client";

import React from "react";

import {useGetProperty} from "@/api/property/property";
import Loader from "@/components/loader/loader";
import NotFound from "@/components/not-found/not-found";

import DetailsPage from "../../_components/property-detail-page/details-page";

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

  const {
    property_title,
    price,
    property_description,
    property_address,
    gallery,
    features,
    reviews,
  } = data.data;

  return (
    <DetailsPage
      amenities={features}
      cost={price}
      description={property_description}
      descriptionTitle={property_title}
      images={gallery}
      label="Guest"
      location={`${property_address.address}, ${property_address.neighborhood}, ${property_address.location}`}
      reviews={reviews}
      title={property_title}
    />
  );
}

export default Page;
