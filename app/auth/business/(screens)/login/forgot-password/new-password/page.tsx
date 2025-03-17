"use client";

import React from "react";
import {useRouter, useSearchParams} from "next/navigation";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import {Form, FormField, FormItem, FormMessage, FormControl} from "@/components/ui/form";
import {useResetPassword} from "@/api/auth/reset-password";

import FormInput from "../../../_components/form-control/form-control";
import AuthBtn from "../../../_components/auth-btn/auth-btn";

const schema = yup.object({
  password: yup.string().required("Please enter password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Passwords must match")
    .required("Confirm password is required"),
});

type FormValues = yup.InferType<typeof schema>;

function Page() {
  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {password: "", confirmPassword: ""},
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const otpId = searchParams.get("code");
  const {isPending, mutateAsync: resetPassword} = useResetPassword();

  async function onSubmit(data: FormValues) {
    try {
      await resetPassword({otp: otpId as string, ...data});
      router.push("/auth/business/login/forgot-password/new-password/success");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="business-auth-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-poppin">
      <h3 className="auth-title mb-2">Create a New Password!</h3>
      <p className="text-grey-200">Enter a new password and make sure you don’t forget this time</p>
      <Form {...form}>
        <form className="space-y-4 sm:space-y-6 py-6" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="password"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <FormInput
                    isPassword
                    id="password"
                    label="New Password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <FormInput
                    isPassword
                    id="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="pt-2 sm:pt-4">
            <AuthBtn showLoader={isPending} text="Continue" />
          </div>
        </form>
      </Form>
    </div>
  );
}

export default Page;
