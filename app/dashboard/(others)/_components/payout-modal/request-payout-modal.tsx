"use client";

import React from "react";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";

import {Button} from "@/components/ui/button";
import ModalWrapper from "@/components/ui/modals/modal-wrapper";
import {Form, FormField, FormItem, FormMessage, FormControl} from "@/components/ui/form";
import AuthBtn from "@/app/auth/business/(screens)/_components/auth-btn/auth-btn";
import {Input} from "@/components/ui/input";
import {getAmountString} from "@/lib/utils";
import {useUser} from "@/context/user";
import {useRequestPayout} from "@/api/payout/request-payout";

function RequestPayoutModal({showText}: {showText?: boolean}) {
  const {User} = useUser();
  const {mutateAsync: requestPayout, isPending} = useRequestPayout();
  const availableBalance = User?.total_earnings || 0;

  const formSchema = yup.object({
    amount: yup
      .number()
      .required("Please enter amount")
      .positive("Amount cannot be negative")
      .integer("Amount cannot be empty")
      .max(availableBalance),
  });

  type formType = yup.InferType<typeof formSchema>;

  const form = useForm<formType>({
    resolver: yupResolver(formSchema),
    defaultValues: {amount: 0},
  });

  const fillMax = () => form.setValue("amount", availableBalance);

  function onSubmit(data: formType) {
    requestPayout(data);
  }

  return (
    <ModalWrapper
      title="Add New Payout Method"
      trigger={<Button className="bg-blue">Withdraw</Button>}
    >
      <div className="pt-8 pb-1 flex gap-4">
        <Form {...form}>
          <form className="space-y-5 w-full mb-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="bg-grey-200/10 py-8  text-center">
              <h4 className="text-2xl font-semibold">{getAmountString(availableBalance)}</h4>
              <span>Available Balance</span>
            </div>
            <div className="w-full">
              <label className="text-grey-200 block mb-2 text-left" htmlFor={"bank"}>
                Amount
              </label>
              <FormField
                control={form.control}
                name="amount"
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          className="payment-input"
                          id="account_number"
                          placeholder="0204568945"
                          type="number"
                          {...field}
                          max={availableBalance}
                        />
                        <button
                          className="absolute right-4 top-1/2 -translate-y-1/2"
                          type="button"
                          onClick={fillMax}
                        >
                          Max
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <AuthBtn showLoader={isPending} text="Withdraw" />
          </form>
        </Form>
      </div>
    </ModalWrapper>
  );
}

export default RequestPayoutModal;
