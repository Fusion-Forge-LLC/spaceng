"use client";

import {useRouter} from "next/navigation";
import React, {FormEvent, useState} from "react";

import {useGetPropertiesLocations} from "@/api/property/properties-location";
import {DropdDown} from "@/components/style-guide/style-guide";
import {Button} from "@/components/ui/button";

function SearchProperties() {
  const {data} = useGetPropertiesLocations();
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
    <div className="bg-[#181818] p-4 pb-10 md:w-10/12 border-2 z-10 border-white">
      <h4>Find Your Space</h4>
      <form className="space-y-6 mt-4 text-[#434343]" onSubmit={handleSubmit}>
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
            {value: "workspace", note: "Workspace"},
          ]}
          placeholder="Type"
          value={type}
          onValueChange={(value) => setType(value)}
        />
        <Button className="bg-blue text-white rounded-none w-full py-2">Search</Button>
      </form>
    </div>
  );
}

export default SearchProperties;
