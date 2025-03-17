"use client";

import * as yup from "yup";
import React from "react";
import {useRouter} from "next/navigation";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";

import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";

import FormInput from "../../../_components/form-control/form-control";
import AuthBtn from "../../../_components/auth-btn/auth-btn";

const loginSchema = yup.object({
  email: yup.string().email().required("Please enter email address"),
});

type LoginType = yup.InferType<typeof loginSchema>;

function Page() {
  const form = useForm<LoginType>({resolver: yupResolver(loginSchema), defaultValues: {email: ""}});
  const router = useRouter();

  const onSubmit = (values: LoginType) => {
    router.push(`/auth/business/login/forgot-password/email/verify?email=${values.email}`);
  };

  return (
    <div className="business-auth-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-poppin text-grey-200">
      <h3 className="auth-title mb-2 text-grey">Reset Password?</h3>
      <p className="text-grey-200 text-sm text-center max-w-sm mx-auto">
        Provide your registered email to receive a link to reset your password
      </p>
      <Form {...form}>
        <form className="" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="py-6 space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <FormInput id="email" label="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <AuthBtn showLoader={false} text="Continue" />
        </form>
      </Form>
    </div>
  );
}

export default Page;
