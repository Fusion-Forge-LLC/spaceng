"use client";

import * as yup from "yup";
import {format} from "date-fns";
import {CalendarIcon} from "lucide-react";
import {Plus} from "lucide-react";
import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import ModalWrapper from "@/components/ui/modals/modal-wrapper";
import {FormField, FormItem, FormMessage, FormControl, Form, FormLabel} from "@/components/ui/form";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {useGetBusinessProperties} from "@/api/property/user-properties";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {Calendar} from "@/components/ui/calendar";

const couponSchema = yup.object({
  property: yup.string().required("Please select property"),
  minimum_duration: yup.number().required("Please enter minimum days"),
  amount: yup.number().required("Please enter discount amount"),
  expiry_date: yup.date(),
});

type CouponTypes = yup.InferType<typeof couponSchema>;

function GenerateCoupon() {
  const {data, isLoading} = useGetBusinessProperties();
  const form = useForm<CouponTypes>({
    resolver: yupResolver(couponSchema),
  });

  const onSubmit = (data: CouponTypes) => {
    console.log(data);
  };

  return (
    <ModalWrapper
      title="Generate Coupon"
      trigger={
        <button className="bg-blue px-1 py-1 sm:px-4 sm:py-2 text-white font-medium rounded-md hover:opacity-75">
          <span className="hidden sm:inline text-sm">Generate Coupon</span>{" "}
          <Plus className="sm:hidden" />
        </button>
      }
    >
      <Form {...form}>
        <form className="space-y-5 pt-5" onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <label className="text-grey-200 block mb-2 text-left" htmlFor={"type"}>
              Property
            </label>
            <FormField
              control={form.control}
              name="property"
              render={({field}) => (
                <FormItem>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="rounded-md bg-white border border-grey-200 h-12  focus-visible:ring-blue">
                        <SelectValue className="capitalize" placeholder={"Select Type"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="z-50">
                      {/* {data?.data.map((item) => <SelectItem key={item._id} value={item._id}>{item.property_title}</SelectItem>)} */}
                      <SelectItem value={"item._id"}>{"item.property_title"}</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <label className="text-grey-200 block mb-2 text-left" htmlFor={"minimum_duration"}>
              Minimum Duration
            </label>
            <FormField
              control={form.control}
              name="minimum_duration"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input id="minimum_duration" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <label className="text-grey-200 block mb-2 text-left" htmlFor={"amount"}>
              Amount
            </label>
            <FormField
              control={form.control}
              name="amount"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input id="amount" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="expiry_date"
            render={({field}) => (
              <FormItem className="flex flex-col">
                <FormLabel>Expirty Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        className={cn(
                          "text-left font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                        variant={"outline"}
                      >
                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="w-auto p-0">
                    <Calendar
                      initialFocus
                      disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <button className="bg-blue w-full py-3 text-white font-medium rounded-md">
            Generate
          </button>
        </form>
      </Form>
    </ModalWrapper>
  );
}

export default GenerateCoupon;
