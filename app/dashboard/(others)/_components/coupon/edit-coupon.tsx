"use client";

import React from "react";
import * as yup from "yup";
import {format} from "date-fns";
import {CalendarIcon} from "lucide-react";
import {Copy} from "lucide-react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useState} from "react";
import {toast} from "sonner";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {FormField, FormItem, FormMessage, FormControl, Form, FormLabel} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useGetBusinessProperties} from "@/api/property/user-properties";
import {Calendar} from "@/components/ui/calendar";
import {cn} from "@/lib/utils";
import Loader from "@/components/loader/loader";
import {CouponResponse} from "@/@types/types";
import {useEditCoupon} from "@/api/coupon/edit-coupon";

const couponSchema = yup.object({
  property: yup.string().required("Please select property"),
  minimum_duration: yup.number().required("Please enter minimum days"),
  amount: yup.number().required("Please enter discount amount"),
  expiry_date: yup.date(),
});

type CouponTypes = yup.InferType<typeof couponSchema>;

export function EditCoupon({
  data,
  editRef,
}: {
  data: CouponResponse;
  editRef: React.RefObject<HTMLButtonElement>;
}) {
  const [coupon, setCoupon] = useState<boolean>(false);
  const {data: properties} = useGetBusinessProperties();
  const {mutateAsync: editCoupon, isPending} = useEditCoupon();
  const form = useForm<CouponTypes>({
    resolver: yupResolver(couponSchema),
    defaultValues: {
      property: data.property._id,
      minimum_duration: data.minimum_duration,
      amount: data.amount,
      expiry_date: data.expiry_date,
    },
  });

  const onSubmit = async (form: CouponTypes) => {
    await editCoupon({
      id: data._id,
      data: form,
    });

    setCoupon(true);
  };

  function copyToClipboard() {
    if (!data.code) return;
    navigator.clipboard
      .writeText(data.code)
      .then(() => {
        toast.success("Coupon Copied Successfully");
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          ref={editRef}
          className="bg-blue px-1 py-1 sm:px-4 sm:py-2 text-white hidden font-medium rounded-md hover:opacity-75"
        >
          Edit
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Coupon</DialogTitle>
          <DialogDescription>Edit Coupon</DialogDescription>
        </DialogHeader>
        {!coupon ? (
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="property"
                render={({field}) => (
                  <FormItem>
                    <FormLabel> Property</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className="rounded-md border border-grey-200 bg-white  focus-visible:ring-blue">
                          <SelectValue className="capitalize" placeholder={"Select Type"} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="z-50">
                        {properties?.data.map((item) => (
                          <SelectItem key={item._id} value={item._id}>
                            {item.property_title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="minimum_duration"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Minimum Duration</FormLabel>
                    <FormControl>
                      <Input
                        id="minimum_duration"
                        type="number"
                        {...field}
                        className="rounded-md border border-grey-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input
                        id="amount"
                        type="number"
                        {...field}
                        className="rounded-md border border-grey-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                              "text-left font-normal rounded-md border border-grey-200",
                              !field.value && "text-muted-foreground",
                            )}
                            variant={"outline"}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Select Expiry Date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent align="start" className="w-auto p-0">
                        <Calendar
                          disabled={(date) => date < new Date()}
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
                {isPending ? <Loader /> : "Update"}
              </button>
            </form>
          </Form>
        ) : (
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label className="sr-only" htmlFor="link">
                Link
              </Label>
              <Input readOnly className="h-12" defaultValue={data.code} id="link" />
            </div>
            <Button className="px-3 h-12" size="sm" type="submit" onClick={copyToClipboard}>
              <span className="sr-only">Copy</span>
              <Copy />
            </Button>
          </div>
        )}
        <DialogFooter className="sm:justify-start hidden">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
