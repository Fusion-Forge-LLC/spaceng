"use client";

import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useParams} from "next/navigation";
import {toast} from "sonner";

import TabBtn from "@/app/dashboard/(others)/_components/tab-btn/tab-btn";
import {Form} from "@/components/ui/form";
import {PropertyPayload, PropertyResponse} from "@/@types/types";
import {Button} from "@/components/ui/button";
import Loader from "@/components/loader/loader";

import ImageGallery from "./image-gallery";
import PropertyVideo from "./property-video";
import Features from "./features";
import Basic from "./basic";
import CautionFee from "./caution-fee";
import Discount from "./discount";
import {propertySchema, PropertySchemaType} from "./schema";

function PropertyForm({
  mutate,
  isPending,
  defaultValues,
  title,
}: {
  mutate: any;
  isPending: boolean;
  defaultValues: PropertyResponse | null;
  title: string;
}) {
  const [currentTab, setCurrentTab] = useState("basic");
  const [images, setImages] = useState<string[]>(defaultValues ? defaultValues.gallery : []);
  const [features, setFeatures] = useState<string[]>(defaultValues ? defaultValues.features : []);
  const [video, setVideo] = useState<string[]>(defaultValues ? defaultValues.video : []);
  const {id} = useParams();

  const form = useForm<PropertySchemaType>({
    resolver: yupResolver(propertySchema),
    defaultValues:
      defaultValues === null
        ? {enableDiscount: false}
        : {
            property_title: defaultValues.property_title,
            property_address: defaultValues.property_address.address,
            property_description: defaultValues.property_description,
            price: defaultValues.price,
            old_price: defaultValues.old_price,
            caution_fee: defaultValues.caution_fee,
            price_postfix: defaultValues.price_postfix,
            type: defaultValues.type,
            location: defaultValues.property_address.location,
            neighborhood: defaultValues.property_address.neighborhood,
            state: defaultValues.property_address.state,
            coordinates: defaultValues.property_address.coordinates,
            bedroom: defaultValues.bedroom,
            property_terms: defaultValues.property_terms,
            enableDiscount: defaultValues.enableDiscount || false,
          },
  });

  const {errors} = form.formState;

  const {property_title, property_address, type} = form.getValues();

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const errorKey = Object.keys(errors)[0];

      //@ts-ignore
      toast.error(errors[errorKey].message);

      return;
    }
  }, [errors]);

  function moveTab() {
    setCurrentTab((prevState) => {
      switch (prevState) {
        case "basic":
          return "gallery";
        case "gallery":
          return "video";
        case "video":
          return "features";
        case "features":
          return "caution";
        case "caution":
          return "discount";
        default:
          return "basic";
      }
    });
  }

  const prevTab = () => {
    setCurrentTab((prevState) => {
      if (prevState === "gallery") {
        return "basic";
      } else if (prevState === "video") {
        return "gallery";
      } else if (prevState === "features") {
        return "video";
      } else if (prevState === "caution") {
        return "features";
      } else if (prevState === "discount") {
        return "caution";
      } else {
        return "basic";
      }
    });
  };

  const onSubmit = (values: PropertySchemaType) => {
    const payload: PropertyPayload = {
      ...values,
      property_description: values.property_description || "",
      property_terms: values.property_terms || "",
      gallery: images,
      video,
      features,
    };

    mutate(id ? {id, data: payload} : payload);
  };

  return (
    <div className="relative flex-1 min-h-full">
      <div className="py-3 sm:px-5">
        <h4 className="text-grey text-lg sm:text-2xl font-semibold max-sm:px-4">{title}</h4>

        <div className="sm:shadow-md mt-3">
          <div className="flex gap-2 bg-grey-300/10 px-4 max-sm:overflow-x-scroll">
            <TabBtn currentTab={currentTab} setTab={setCurrentTab} tab="basic" />
            <TabBtn
              currentTab={currentTab}
              isDisabled={!property_address || !property_title || !type}
              setTab={setCurrentTab}
              tab="gallery"
            />
            <TabBtn
              currentTab={currentTab}
              isDisabled={!property_address || !property_title || !type}
              setTab={setCurrentTab}
              tab="video"
            />
            <TabBtn
              currentTab={currentTab}
              isDisabled={!property_address || !property_title || !type}
              setTab={setCurrentTab}
              tab="features"
            />
            <TabBtn
              currentTab={currentTab}
              isDisabled={!property_address || !property_title || !type}
              setTab={setCurrentTab}
              tab="caution"
            />
            <TabBtn
              currentTab={currentTab}
              isDisabled={!property_address || !property_title || !type}
              setTab={setCurrentTab}
              tab="discount"
            />
          </div>

          <Form {...form}>
            <form className="px-4 py-6" id="property-form" onSubmit={form.handleSubmit(onSubmit)}>
              {currentTab === "basic" && <Basic form={form} />}

              {currentTab === "gallery" && <ImageGallery images={images} setImages={setImages} />}

              {currentTab === "video" && <PropertyVideo setVideo={setVideo} video={video} />}

              {currentTab === "features" && (
                <Features features={features} form={form} setFeatures={setFeatures} />
              )}

              {currentTab === "caution" && <CautionFee form={form} />}
              {currentTab === "discount" && <Discount form={form} />}
            </form>
          </Form>
        </div>
      </div>
      <div className="sticky bottom-0 left-0 w-full px-4 bg-white py-5 border-t border-t-grey flex justify-between z-50">
        <Button
          className="bg-blue"
          disabled={currentTab === "basic"}
          type="button"
          onClick={prevTab}
        >
          Previous
        </Button>

        {currentTab !== "discount" ? (
          <Button
            className="bg-blue"
            disabled={!property_address || !property_title || !type}
            type="button"
            onClick={moveTab}
          >
            Next
          </Button>
        ) : (
          <button
            className="bg-blue h-9 px-4 py-2 text-white rounded-md text-sm"
            disabled={isPending}
            form="property-form"
            type="submit"
          >
            {isPending ? <Loader /> : "Submit Property"}
          </button>
        )}
      </div>
    </div>
  );
}

export default PropertyForm;
