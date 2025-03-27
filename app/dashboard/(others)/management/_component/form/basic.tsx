"use client";

import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import ReactQuill from "react-quill";
import dynamic from "next/dynamic";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {FormField, FormItem, FormMessage, FormControl} from "@/components/ui/form";
import FormInput from "@/app/dashboard/(others)/_components/form-control/form-input";
import "react-quill/dist/quill.snow.css";
import {nigeriaStates} from "@/countries/states";
import {debounce} from "@/lib/utils";
import {GeoLocation} from "@/@types/types";

type Address = {
  address: string;
  latitude: string;
  longitude: string;
};

function Basic({form}: {form: any}) {
  const [showAddressSuggestion, setShowAddressSuggestion] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<{
    latitude: number;
    longitude: number;
  } | null>(
    form.getValues()?.coordinates
      ? {
          latitude: form.getValues()?.coordinates[0],
          longitude: form.getValues()?.coordinates[1],
        }
      : null,
  );
  const [suggestedAddress, setSuggestedAddress] = useState<Address[]>([]);
  const propertyAddress = form.watch("property_address");
  const addressRef = useRef<HTMLDivElement>(null);

  const Map = useMemo(() => dynamic(() => import("@/components/map/singlemap"), {ssr: false}), []);

  useEffect(() => {
    if (propertyAddress) {
      fetchAddressSuggestions(form.watch("property_address"));
    }
  }, [propertyAddress]);

  useEffect(() => {
    const handleClickEvent = (ev: MouseEvent) => {
      if (addressRef.current && !addressRef.current.contains(ev.target as Node)) {
        setShowAddressSuggestion(false);
      }
    };

    document.addEventListener("click", handleClickEvent);

    return () => document.removeEventListener("click", handleClickEvent);
  }, []);

  const fetchAddressSuggestions = useCallback(
    debounce(async (value: string) => {
      setSuggestedAddress([]);
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${value}`,
      );
      const data: GeoLocation[] = await response.json();

      setSuggestedAddress(
        data.map((item) => ({
          address: item.display_name,
          latitude: item.lat,
          longitude: item.lon,
        })),
      );
    }, 500),
    [],
  );

  const setAddress = (address: Address) => {
    form.setValue("property_address", address.address);
    form.setValue("coordinates", [address.latitude, address.longitude]);
    setShowAddressSuggestion(false);
    setSelectedAddress({
      latitude: parseFloat(address.latitude),
      longitude: parseFloat(address.longitude),
    });
  };

  return (
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

      <div ref={addressRef} className="h-80 p-3 sm:p-5 relative space-y-2 z-10">
        <div className="opacity-40 h-full w-full absolute top-0 left-0 -z-10 overflow-hidden">
          <Map
            posix={
              selectedAddress
                ? [selectedAddress.latitude, selectedAddress.longitude]
                : [7.3786064, 3.8969928]
            }
          />
        </div>
        <div className="relative">
          <FormField
            control={form.control}
            name="property_address"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <FormInput
                    id="property_address"
                    label="Property Address"
                    {...field}
                    autoComplete={"off"}
                    onFocus={() => setShowAddressSuggestion(true)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {showAddressSuggestion && propertyAddress && (
            <ul className="bg-white max-h-48 overflow-y-scroll shadow p-4 absolute top-20 w-full left-0">
              {suggestedAddress.map((item, index) => {
                return (
                  <li key={index} className="overflow-hidden">
                    <button
                      className="text-left py-2 px-2 hover:bg-gray-300 whitespace-nowrap overflow-hidden text-ellipsis block max-sm:text-sm w-full"
                      type="button"
                      onClick={() => setAddress(item)}
                    >
                      {item.address}
                    </button>
                  </li>
                );
              })}
              {suggestedAddress.length === 0 && <li className="italic">Address not found</li>}
            </ul>
          )}
          {/* <Button className="bg-blue">Find Address</Button> */}
        </div>
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
                <ReactQuill theme="snow" value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  type="text"
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
                  type="text"
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
        <div>
          <label className="text-grey-200 block mb-2 text-left" htmlFor={"type"}>
            State
          </label>
          <FormField
            control={form.control}
            name="state"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="rounded-md bg-white border border-grey-200 h-12  focus-visible:ring-blue">
                      <SelectValue className="capitalize" placeholder={"Select property state"} />
                    </SelectTrigger>
                    <SelectContent>
                      {nigeriaStates.map((item, index) => {
                        return (
                          <SelectItem key={index} value={item}>
                            {item}
                          </SelectItem>
                        );
                      })}
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
  );
}

export default Basic;
