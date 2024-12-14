"use client";
import {Check, ChevronsUpDown} from "lucide-react";

import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {BankResponse} from "@/api/transaction/getSupportedBanks";

export function BankName({form, banks}: {form: any; banks: BankResponse[]}) {
  return (
    <FormField
      control={form.control}
      name="bank"
      render={({field}) => (
        <FormItem className="flex flex-col">
          <FormLabel>Banks</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  className={cn(
                    "w-[200px] justify-between",
                    !field.value && "text-muted-foreground",
                  )}
                  role="combobox"
                  variant="outline"
                >
                  {field.value
                    ? banks.find((bank) => bank.name === field.value)?.name
                    : "Select language"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search language..." />
                <CommandList>
                  <CommandEmpty>No Bank found.</CommandEmpty>
                  <CommandGroup>
                    {banks.map((bank) => (
                      <CommandItem
                        key={bank.code}
                        value={bank.name}
                        onSelect={() => {
                          form.setValue("bank", bank.name);
                        }}
                      >
                        {bank.name}
                        <Check
                          className={cn(
                            "ml-auto",
                            bank.name === field.value ? "opacity-100" : "opacity-0",
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
