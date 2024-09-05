import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  placeholder: string;
  options: {value: string; note: string}[];
}

export function DropdDown({placeholder, options}: Props) {
  return (
    <Select>
      <SelectTrigger className="bg-white rounded-none">
        <SelectValue className="capitalize" placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((item, index) => {
          return (
            <SelectItem key={index} value={item.value}>
              {item.note}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
