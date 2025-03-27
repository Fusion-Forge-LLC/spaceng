"use client";

import React from "react";
import {useParams, useSearchParams} from "next/navigation";
import Paystack from "@paystack/inline-js";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";
import {useGetBanks} from "@/api/transaction/getSupportedBanks";
import Loader from "@/components/loader/loader";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {useInitBankTransaction} from "@/api/transaction/initPaywithBank";

const FormSchema = yup.object({
  bank_code: yup.string().required("Please select your bank"),
  account_number: yup.string().required("Please Enter your account number"),
});

type FormType = yup.InferType<typeof FormSchema>;

function BankAccount({className, price}: {className: string; price: string}) {
  const {data} = useGetBanks("pay_with_bank=true");
  const params = useParams();
  const searchParams = useSearchParams();
  const popup = new Paystack();
  const {mutateAsync, isPending} = useInitBankTransaction();
  const form = useForm<FormType>({
    resolver: yupResolver(FormSchema),
  });
  const checkin = searchParams.get("checkin");
  const checkout = searchParams.get("checkout");

  const handleSubmit = () => {};

  return (
    <Form {...form}>
      <form
        className={cn(
          "pt-5 space-y-4 w-full shrink-0",
          className,
          isPending && "invisible relative",
        )}
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        {isPending && (
          <div className="h-full w-full absolute top-0 left-0 grid place-content-center">
            <Loader />
          </div>
        )}
        <div>
          <label className="text-[15px] text-[#30313D]" htmlFor="account_number">
            Account Number
          </label>
          <FormField
            control={form.control}
            name="account_number"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="payment-input"
                    id="account_number"
                    placeholder="0204568945"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <label className="text-[15px] text-[#30313D]" htmlFor="full_name">
            Account Name
          </label>
          <Input className="payment-input" id="full_name" placeholder="Co-Worka Limited" />
        </div>
        <div className="">
          <label className="text-[15px] text-[#30313D]" htmlFor="bank_name">
            Select Bank
          </label>
          <FormField
            control={form.control}
            name="bank_code"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="payment-input">
                      <SelectValue className="capitalize" placeholder={"Select Bank"} />
                    </SelectTrigger>
                    <SelectContent>
                      {data?.data.map((item) => {
                        return (
                          <SelectItem key={item.id} className="bg-white w-full" value={item.code}>
                            {item.name}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <button className="booking-btn w-full block">
          {isPending ? <Loader /> : `Pay ₦${price}`}
        </button>
      </form>
    </Form>
  );
}

export default BankAccount;
