"use client";

import React from "react";
import {Poppins} from "next/font/google";
import Link from "next/link";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import {useLogIn} from "@/api/auth/login";
import {Form, FormField, FormItem, FormMessage, FormControl, FormLabel} from "@/components/ui/form";
import {googleSignin} from "@/lib/utils";
import {Checkbox} from "@/components/ui/checkbox";

import SocialBtn from "./social-btn/social-btn";
import FormInput from "./form-control/form-control";
import AuthBtn from "./auth-btn/auth-btn";

const poppin = Poppins({subsets: ["latin"], weight: ["400", "500", "600", "700"]});

const loginSchema = yup.object({
  email: yup.string().email().required("Please enter email address"),
  password: yup.string().required("Please enter password"),
  rememberMe: yup.boolean().default(false).optional(),
});

type LoginType = yup.InferType<typeof loginSchema>;

function Page() {
  const form = useForm<LoginType>({
    resolver: yupResolver(loginSchema),
    defaultValues: {email: "", password: ""},
  });
  const {isPending, mutate: loginUser} = useLogIn(
    "/auth/business/signup/verify-email",
    "/dashboard/overview",
  );

  function onSubmit(data: LoginType) {
    const source: "business" = "business";
    const payload = {
      ...data,
      source,
    };

    loginUser(payload);
  }

  return (
    <div className="business-auth-wrapper">
      <header className="text-blue font-bold text-2xl mb-4">
        <Link href={"/"}>SpaceFinda</Link>
      </header>
      <h3 className="auth-title mb-3">Welcome Back!</h3>
      <Form {...form}>
        <form className="space-y-5 mb-6" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <FormInput id="email" label="Email Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <FormInput isPassword id="password" label="Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rememberMe"
            render={({field}) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 ">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    className="accent-blue"
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Remember Login</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <Link
            className="text-right text-sm text-[#F90000] w-fit ml-auto hover:underline block -mt-5"
            href="/auth/business/login/forgot-password"
          >
            Forget Password?
          </Link>
          <AuthBtn showLoader={isPending} text="Login" />
        </form>
      </Form>
      <div className="text-center text-sm">
        Don’t have an account?{" "}
        <Link className="text-blue hover:underline" href={"signup"}>
          Create an account
        </Link>
      </div>
      <div className={poppin.className}>
        <div className="flex items-center gap-8 px-4 py-4">
          <div className="flex-1 h-px bg-grey" />
          <span className="text-sm font-medium text-black">OR</span>
          <div className="flex-1 h-px bg-grey" />
        </div>

        <div className="flex justify-center gap-3 pt-4">
          <SocialBtn
            image="/icons/google.svg"
            name="Continue with Google"
            signIn={() => googleSignin("business")}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
