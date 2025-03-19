"use client";

import * as yup from "yup";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useParams} from "next/navigation";

import TabBtn from "@/app/dashboard/(others)/_components/tab-btn/tab-btn";
import {Form} from "@/components/ui/form";
import {PropertyPayload, PropertyResponse} from "@/@types/types";
import {Button} from "@/components/ui/button";
import Loader from "@/components/loader/loader";

import ImageGallery from "./image-gallery";
import PropertyVideo from "./property-video";
import Features from "./features";
import Basic from "./basic";

const propertySchema = yup.object({
  property_title: yup.string().required("Please enter property title"),
  property_address: yup.string().required("Please enter property address"),
  property_description: yup.string(),
  price: yup.number().required("Please enter price"),
  old_price: yup.number(),
  price_prefix: yup.string(),
  price_postfix: yup.string(),
  type: yup.string().oneOf(["workspace", "shortlet"], "Invalid type").required("Type is required"),
  location: yup.string(),
  neighborhood: yup.string(),
  state: yup.string().required("Please select state"),
  bedroom: yup.number(),
});

type PropertyType = yup.InferType<typeof propertySchema>;

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

  const form = useForm<PropertyType>({
    resolver: yupResolver(propertySchema),
    defaultValues:
      defaultValues === null
        ? undefined
        : {
            property_title: defaultValues.property_title,
            property_address: defaultValues.property_address.address,
            property_description: defaultValues.property_description,
            price: defaultValues.price,
            old_price: defaultValues.old_price,
            price_prefix: defaultValues.price_prefix,
            price_postfix: defaultValues.price_postfix,
            type: defaultValues.type,
            location: defaultValues.property_address.location,
            neighborhood: defaultValues.property_address.neighborhood,
            state: defaultValues.property_address.state,
            bedroom: defaultValues.bedroom,
          },
  });

  const {property_title, property_address} = form.getValues();

  function moveTab() {
    setCurrentTab((prevState) => {
      switch (prevState) {
        case "basic":
          return "gallery";
        case "gallery":
          return "video";
        case "video":
          return "features";
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
      } else {
        return "basic";
      }
    });
  };

  const onSubmit = (values: PropertyType) => {
    const payload: PropertyPayload = {
      ...values,
      property_description: values.property_description || "",
      gallery: images,
      video,
      features,
    };

    mutate(id ? {id, data: payload} : payload);
  };

  return (
    <div className="relative flex-1">
      <div className="py-3 px-5">
        <h4 className="text-grey text-lg sm:text-2xl font-semibold">{title}</h4>

        <div className="shadow-md mt-3">
          <div className="flex gap-2 bg-grey-300/10 px-4">
            <TabBtn currentTab={currentTab} setTab={setCurrentTab} tab="basic" />
            <TabBtn
              currentTab={currentTab}
              isDisabled={!property_address || !property_title}
              setTab={setCurrentTab}
              tab="gallery"
            />
            <TabBtn
              currentTab={currentTab}
              isDisabled={!property_address || !property_title}
              setTab={setCurrentTab}
              tab="video"
            />
            <TabBtn
              currentTab={currentTab}
              isDisabled={!property_address || !property_title}
              setTab={setCurrentTab}
              tab="features"
            />
          </div>

          <Form {...form}>
            <form className="px-4 py-6" id="property-form" onSubmit={form.handleSubmit(onSubmit)}>
              {currentTab === "basic" && <Basic form={form} />}

              {currentTab === "gallery" && <ImageGallery images={images} setImages={setImages} />}

              {currentTab === "video" && <PropertyVideo setVideo={setVideo} video={video} />}

              {currentTab === "features" && (
                <Features features={features} setFeatures={setFeatures} />
              )}
            </form>
          </Form>
        </div>
      </div>
      <div className="sticky bottom-0 left-0 w-full px-4 bg-white py-5 border-t border-t-grey flex justify-between">
        <Button
          className="bg-blue"
          disabled={currentTab === "basic"}
          type="button"
          onClick={prevTab}
        >
          Previous
        </Button>

        {currentTab !== "features" ? (
          <Button className="bg-blue" type="button" onClick={moveTab}>
            Next
          </Button>
        ) : (
          <Button className="bg-blue" disabled={isPending} form="property-form" type="submit">
            {isPending ? <Loader /> : "Submit Property"}
          </Button>
        )}
      </div>
    </div>
  );
}

export default PropertyForm;
