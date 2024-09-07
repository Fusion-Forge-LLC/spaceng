import React, {ReactNode} from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {cn} from "@/lib/utils";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";

interface Props {
  placeholder: string;
  options: {value: string; note: string}[];
  className?: string;
}

export function DropdDown({placeholder, options, className}: Props) {
  return (
    <Select>
      <SelectTrigger className={cn("bg-white rounded-none", className)}>
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

export function PopoverElement({trigger, children}: {trigger: ReactNode; children: ReactNode}) {
  return (
    <Popover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  );
}
