import React, {useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Sort() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());
  const [sort, setSort] = useState(query["sort"] || "newest");

  const updateSort = (value: string) => {
    setSort(value);
    const params = new URLSearchParams(searchParams.toString());

    params.set("sort", value);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="z-[1000] flex items-center gap-2">
      <div className="flex items-center gap-3">
        <label className="text-sm">Sort By</label>
        <Select value={sort} onValueChange={updateSort}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent className="z-[2000]">
            <SelectItem value="newest">Newest Listing</SelectItem>
            <SelectItem value="lowToHigh">Price: Low to High</SelectItem>
            <SelectItem value="highToLow">Price: High to Low</SelectItem>
            <SelectItem value="rating">Property Rating</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default Sort;
