"use client";

import {Search} from "lucide-react";
import {useRouter} from "next/navigation";
import React, {FormEvent, useState} from "react";

import {useGetPropertiesLocations} from "@/api/property/properties-location";
import {DropdDown} from "@/components/style-guide/style-guide";
import {Button} from "@/components/ui/button";

function SearchProperties() {
  const {data, isLoading} = useGetPropertiesLocations();
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (type && location) {
      router.push(`/${type}?q=${location}`);
    }
  };

  return (
    <div className="bg-grey p-4 w-11/12 mx-auto md:mx-0 md:w-80 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0">
      <h4 className="flex items-center justify-between text-white">
        Find Your Spacefinda
        <Search />
      </h4>
      <form className="space-y-3.5 mt-4" onSubmit={handleSubmit}>
        <DropdDown
          options={
            data
              ? data.data.map((item) => {
                  return {value: item.location, note: item.location};
                })
              : []
          }
          placeholder="Location"
          value={location}
          onValueChange={(value) => setLocation(value)}
        />
        <DropdDown
          options={[
            {value: "shortlet", note: "Shortlet"},
            {value: "workspace", note: "Worksplace"},
          ]}
          placeholder="Type"
          value={type}
          onValueChange={(value) => setType(value)}
        />
        <Button className="bg-blue text-white rounded-none w-full">Find my Spacefinda</Button>
      </form>
    </div>
  );
}

export default SearchProperties;
