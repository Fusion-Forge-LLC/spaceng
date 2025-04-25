import React from "react";
import {useRouter, useSearchParams} from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function BedFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [value, setValue] = React.useState<string>(searchParams.get("bedrooms") || "");

  const handleSelect = (currentValue: string) => {
    setValue(currentValue === value ? "" : currentValue);
    const params = new URLSearchParams(searchParams.toString());

    params.set("bedrooms", currentValue);
    params.set("page", "1");
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="z-[1000]">
      <Select value={value} onValueChange={handleSelect}>
        <SelectTrigger className="w-20">
          <SelectValue placeholder="Bed" />
        </SelectTrigger>
        <SelectContent className="z-[2000]">
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default BedFilter;
