"use client";

import {Search} from "lucide-react";
import React, {useCallback, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";

import {Input} from "@/components/ui/input";
import {debounce} from "@/lib/utils";

function SearchProperties() {
  const searchParams = useSearchParams();
  const searchString = searchParams.get("q");
  const [searchValue, setSearchValue] = useState(searchString || "");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchValue(value);
    searchProperties(value);
  };

  const searchProperties = useCallback(
    debounce((value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set("q", value);
      if (!value) params.delete("q");
      router.push("?" + params.toString());
    }, 500),
    [],
  );

  return (
    <div className="bg-[#FDFDFD] relative rounded-md w-full sm:max-w-80">
      <Input
        className="md:border-none border border-[#E7E7E7] shadow-none rounded-md py-4 focus-visible:ring-blue w-full h-12"
        placeholder="Search Property or Location"
        value={searchValue}
        onChange={(e) => handleChange(e)}
      />
      <span className="grid place-content-center h-7 w-7 rounded-full bg-blue absolute top-1/2 right-2 -translate-y-1/2">
        <Search color="#FFF" size={14} />
      </span>
    </div>
  );
}

export default SearchProperties;
