"use client";

import {yupResolver} from "@hookform/resolvers/yup";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import ReactQuill from "react-quill";

import {FormField, FormItem, FormMessage, Form, FormControl} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import "react-quill/dist/quill.snow.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {useCreateProperty} from "@/api/property/new-property";
import {PropertyPayload} from "@/@types/types";
import Loader from "@/components/loader/loader";

import FormInput from "../../_components/form-control/form-input";
import TabBtn from "../../_components/tab-btn/tab-btn";

import PropertyVideo from "./_components/property-video";
import Features from "./_components/features";
import ImageGallery from "./_components/image-gallery";

const propertySchema = yup.object({
  property_title: yup.string().required("Please enter property title"),
  property_address: yup.string().required("Please enter property address"),
  property_description: yup.string(),
  price: yup.number().required("Please enter price"),
  old_price: yup.number(),
  price_prefix: yup.string(),
  price_postfix: yup.string(),
  type: yup.string().oneOf(["workspace", "shortlet"], "Invalid type").required("Type if required"),
  location: yup.string(),
  neighborhood: yup.string(),
  bedroom: yup.number(),
});

type PropertyType = yup.InferType<typeof propertySchema>;

function Page() {
  const {mutate: uploadProperty, isPending} = useCreateProperty();

  const [currentTab, setCurrentTab] = useState("basic");
  const [images, setImages] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [video, setVideo] = useState<string[]>([]);

  const form = useForm<PropertyType>({
    resolver: yupResolver(propertySchema),
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

    uploadProperty(payload);
  };

  return (
    <div className="relative flex-1 overflow-y-scroll">
      <div className="py-3 px-5">
        <h4 className="text-grey text-lg sm:text-2xl font-semibold">Add New Property</h4>

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
              {currentTab === "basic" && (
                <div className="space-y-5">
                  <FormField
                    control={form.control}
                    name="property_title"
                    render={({field}) => (
                      <FormItem>
                        <FormControl>
                          <FormInput id="property_title" label="Property Title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className='h-80 p-5 bg-[url("/dummymap.png")] bg-center space-y-2'>
                    <FormField
                      control={form.control}
                      name="property_address"
                      render={({field}) => (
                        <FormItem>
                          <FormControl>
                            <FormInput id="property_address" label="Property Address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button className="bg-blue">Find Address</Button>
                  </div>

                  <div>
                    <label className="text-grey-200 block mb-2 text-left" htmlFor={"type"}>
                      Property Description
                    </label>
                    <FormField
                      control={form.control}
                      name="property_description"
                      render={({field}) => (
                        <FormItem>
                          <FormControl>
                            <ReactQuill
                              theme="snow"
                              value={field.value}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="price"
                      render={({field}) => (
                        <FormItem>
                          <FormControl>
                            <FormInput id="price" label="Price" type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="old_price"
                      render={({field}) => (
                        <FormItem>
                          <FormControl>
                            <FormInput
                              id="old_price"
                              label="Old Price"
                              labelExample={"{ if any }"}
                              type="number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="price_prefix"
                      render={({field}) => (
                        <FormItem>
                          <FormControl>
                            <FormInput
                              id="price_prefix"
                              label="Price Prefix"
                              labelExample="Example: Starting Form"
                              type="number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="price_postfix"
                      render={({field}) => (
                        <FormItem>
                          <FormControl>
                            <FormInput
                              id="price_postfix"
                              label="Price Postfix"
                              labelExample="Example: Per Month"
                              type="number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div>
                      <label className="text-grey-200 block mb-2 text-left" htmlFor={"type"}>
                        Type
                      </label>
                      <FormField
                        control={form.control}
                        name="type"
                        render={({field}) => (
                          <FormItem>
                            <FormControl>
                              <Select value={field.value} onValueChange={field.onChange}>
                                <SelectTrigger className="rounded-md bg-white border border-grey-200 h-12  focus-visible:ring-blue">
                                  <SelectValue className="capitalize" placeholder={"Select Type"} />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="workspace">Workspace</SelectItem>
                                  <SelectItem value="shortlet">Shortlet</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="location"
                      render={({field}) => (
                        <FormItem>
                          <FormControl>
                            <FormInput id="location" label="Location" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="neighborhood"
                      render={({field}) => (
                        <FormItem>
                          <FormControl>
                            <FormInput id="neighborhood" label="Neighborhood" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="bedroom"
                      render={({field}) => (
                        <FormItem>
                          <FormControl>
                            <FormInput id="bedroom" label="Bedroom" type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}

              {currentTab === "gallery" && <ImageGallery images={images} setImages={setImages} />}

              {currentTab === "video" && <PropertyVideo setVideo={setVideo} video={video} />}

              {currentTab === "features" && (
                <Features features={features} setFeatures={setFeatures} />
              )}
              <button>Submit</button>
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

export default Page;
