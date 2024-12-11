"use client";

import React, {useCallback, useEffect, useState} from "react";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {toast} from "sonner";

import {Button} from "@/components/ui/button";
import ModalWrapper from "@/components/ui/modals/modal-wrapper";
import {Form, FormField, FormItem, FormMessage, FormControl, FormLabel} from "@/components/ui/form";
import AuthBtn from "@/app/auth/business/(screens)/_components/auth-btn/auth-btn";
import {useGetBanks} from "@/api/transaction/getSupportedBanks";
import {Input} from "@/components/ui/input";
import {AccountResponse, useVerifyAccount} from "@/api/transaction/verify-account";
import {debounce} from "@/lib/utils";
import Loader from "@/components/loader/loader";
import {useAddPayoutMethod} from "@/api/payout/submit-payout-account";
import {Checkbox} from "@/components/ui/checkbox";

const formSchema = yup.object({
  account_number: yup
    .string()
    .length(10, "invalid account number")
    .required("Please enter account number"),
  bank: yup.string().required("Please select a bank"),
  is_primary: yup.boolean().default(false).optional(),
});

type formType = yup.InferType<typeof formSchema>;

function AddPayoutMethod({showText}: {showText?: boolean}) {
  const {mutateAsync: addPayoutMethod, isPending: creatingPayoutMethod} = useAddPayoutMethod();
  const {mutateAsync: verifyAccount, isPending} = useVerifyAccount();
  const {data: banks} = useGetBanks("country=nigeria");
  const [verifiedInfo, setVerifiedInfo] = useState<null | AccountResponse>(null);

  const form = useForm<formType>({
    resolver: yupResolver(formSchema),
    defaultValues: {account_number: "", bank: "", is_primary: false},
  });

  const [account_number, bank_code] = form.watch(["account_number", "bank"]);

  const fetchAccountdetails = useCallback(
    debounce((values: {account_number: string; bank_code: string}) => {
      const params = new URLSearchParams();

      params.set("account_number", values.account_number);
      params.set("bank_code", values.bank_code);

      const searchParams = params.toString();

      verifyAccount(searchParams)
        .then((data) => {
          toast.success("Account Verified");
          setVerifiedInfo(data.data);
        })
        .catch((error) => {
          toast.error("Error: Account not found");
          setVerifiedInfo(null);
        });
    }, 500),
    [],
  );

  useEffect(() => {
    if (account_number && bank_code) {
      fetchAccountdetails({account_number, bank_code});
    }
  }, [account_number, bank_code, fetchAccountdetails]);

  function onSubmit(data: formType) {
    if (!verifiedInfo) return;
    const payload = {
      account_name: verifiedInfo.account_name,
      account_number: verifiedInfo.account_number,
      bank_code: data.bank,
      bank_name: banks?.data.find((item) => item.code === data.bank)?.name || "",
      is_primary: data.is_primary,
    };

    addPayoutMethod(payload);
  }

  return (
    <ModalWrapper
      title="Add New Payout Method"
      trigger={<Button className="bg-blue">{showText ? "Add PayoutMethod" : "+"}</Button>}
    >
      <div className="pt-8 pb-1 flex gap-4">
        <Form {...form}>
          <form className="space-y-5 mb-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div>
              <label className="text-grey-200 block mb-2 text-left" htmlFor={"bank"}>
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
              <label className="text-grey-200 block mb-2 text-left" htmlFor={"bank"}>
                Bank Name
              </label>
              <FormField
                control={form.control}
                name="bank"
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <select
                        className="border border-input focus-visible:ring-1 focus-visible:ring-ring focus:outline-none shadow-[0px_3px_6px_rgba(0,0,0,0.02),0px_1px_1px_rgba(0,0,0,0.03)] px-4 w-full h-11 rounded-md"
                        id="bank"
                        {...field}
                        value={field.value}
                        onChange={field.onChange}
                      >
                        <option value="">Select Bank</option>
                        {banks?.data.map((bank) => (
                          <option key={bank.slug} value={bank.code}>
                            {bank.name}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="is_primary"
                render={({field}) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        className="accent-blue"
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Make default payment method</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            {isPending && (
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 overflow-hidden grid place-content-center">
                  <Loader />
                </div>
                Verifying Account
              </div>
            )}
            {verifiedInfo && !isPending && (
              <p className="capitalize">Account Name: {verifiedInfo.account_name}</p>
            )}
            <AuthBtn
              isDisbaled={isPending || verifiedInfo === null}
              showLoader={creatingPayoutMethod}
              text="Submit"
            />
          </form>
        </Form>
      </div>
    </ModalWrapper>
  );
}

export default AddPayoutMethod;
