"use client";

import * as yup from "yup";
import {format} from "date-fns";
import {CalendarIcon} from "lucide-react";
import {Copy, Plus} from "lucide-react";
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
import {useCreateCoupon} from "@/api/coupon/new-coupon";
import Loader from "@/components/loader/loader";

const couponSchema = yup.object({
  property: yup.string().required("Please select property"),
  minimum_duration: yup.number().required("Please enter minimum days"),
  amount: yup.number().required("Please enter discount amount"),
  expiry_date: yup.date(),
});

type CouponTypes = yup.InferType<typeof couponSchema>;

export function CouponModal() {
  const [coupon, setCoupon] = useState<null | string>(null);
  const {data, isLoading} = useGetBusinessProperties();
  const {mutateAsync: createCoupon, isPending} = useCreateCoupon();
  const form = useForm<CouponTypes>({
    resolver: yupResolver(couponSchema),
  });

  const onSubmit = async (data: CouponTypes) => {
    const result = await createCoupon(data);

    setCoupon(result.data.code);
  };

  function copyToClipboard() {
    if (!coupon) return;
    navigator.clipboard
      .writeText(coupon)
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
        <button className="bg-blue px-1 py-1 sm:px-4 sm:py-2 text-white font-medium rounded-md hover:opacity-75">
          <span className="hidden sm:inline text-sm">Generate Coupon</span>{" "}
          <Plus className="sm:hidden" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Generate Coupon</DialogTitle>
          <DialogDescription>
            {!coupon
              ? "Generate Coupon and Share with your clients"
              : "Copy Coupon and send to your client"}
          </DialogDescription>
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
                        {data?.data.map((item) => (
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
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          // initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button className="bg-blue w-full py-3 text-white font-medium rounded-md">
                {isPending ? <Loader /> : "Generate"}
              </button>
            </form>
          </Form>
        ) : (
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label className="sr-only" htmlFor="link">
                Link
              </Label>
              <Input readOnly className="h-12" defaultValue={coupon} id="link" />
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
