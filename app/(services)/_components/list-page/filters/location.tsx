import React from "react";
import {Check, ChevronsUpDown} from "lucide-react";
import {useRouter, useSearchParams} from "next/navigation";

import {Button} from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {cn} from "@/lib/utils";
import {useGetPropertiesLocations} from "@/api/property/properties-location";

function LocationFilter() {
  const {data} = useGetPropertiesLocations();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(searchParams.get("location") || "");

  const locations = data?.data?.map((item) => {
    return {
      value: item.location,
      label: item.location,
    };
  });

  const handleSelect = (currentValue: string) => {
    setValue(currentValue === value ? "" : currentValue);
    setOpen(false);
    const params = new URLSearchParams(searchParams.toString());

    params.set("location", currentValue);
    router.push(`?${params.toString()}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className="justify-between w-32"
          role="combobox"
          variant="outline"
        >
          {value || "Location"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 z-[2000]">
        <Command>
          <CommandInput placeholder="Search location..." />
          <CommandList>
            <CommandEmpty>No location found.</CommandEmpty>
            <CommandGroup className="z-[2000]">
              <CommandItem value={""} onSelect={handleSelect}>
                <Check className={cn("mr-2 h-4 w-4", value === "" ? "opacity-100" : "opacity-0")} />
                All
              </CommandItem>
              {locations?.map((location) => {
                if (!location.value) return;

                return (
                  <CommandItem key={location.value} value={location.value} onSelect={handleSelect}>
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === location.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {location.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default LocationFilter;
