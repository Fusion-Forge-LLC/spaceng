"use client";

import {Search} from "lucide-react";
import React, {useCallback, useEffect, useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

import {Input} from "@/components/ui/input";
import {debounce} from "@/lib/utils";
import {useSearchProperties} from "@/api/property/search-property";
import Loader from "@/components/loader/loader";
import {PropertyResponse} from "@/@types/types";

function SearchProperties({
  type,
  setSearchedData,
}: {
  type: "shortlet" | "workspace";
  setSearchedData: React.Dispatch<React.SetStateAction<PropertyResponse[] | null>>;
}) {
  const searchParams = useSearchParams();
  const searchString = searchParams.get("q");
  const [searchValue, setSearchValue] = useState(searchString || "");
  const {mutateAsync, isPending: isSearching} = useSearchProperties();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (searchString) {
      searchProperties(searchString);
    }
  }, []);

  useEffect(() => {
    if (isSearching) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isSearching]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchValue(value);

    searchProperties(value);
  };

  const searchProperties = useCallback(
    debounce((value: string) => {
      const params = new URLSearchParams();

      params.set("q", value);
      if (value) {
        mutateAsync({type: type, searchString: value}).then((data) => {
          router.push(`${pathname}?${params.toString()}`);
          setSearchedData(data.data.properties);
        });
      } else {
        setSearchedData(null);
      }
    }, 500),
    [],
  );

  return (
    <div className="bg-[#FDFDFD] relative rounded-md w-full sm:max-w-80">
      {isSearching && (
        <div className="fixed top-0 left-0 h-full w-full bg-black/30 grid place-content-center">
          <Loader />
        </div>
      )}
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
