"use client";

import React from "react";
import {Poppins} from "next/font/google";
import Link from "next/link";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import {useLogIn} from "@/api/auth/login";
import {Form, FormField, FormItem, FormMessage, FormControl} from "@/components/ui/form";
import {faceBookSignin, googleSignin} from "@/lib/utils";

import SocialBtn from "./social-btn/social-btn";
import FormInput from "./form-control/form-control";
import AuthBtn from "./auth-btn/auth-btn";

const poppin = Poppins({subsets: ["latin"], weight: ["400", "500", "600", "700"]});

const loginSchema = yup.object({
  email: yup.string().email().required("Please enter email address"),
  password: yup.string().required("Please enter password"),
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
    <div className="business-auth-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h3 className="auth-title mb-6">Welcome Back!</h3>
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
          <Link
            className="text-right text-sm text-[#F90000] w-fit ml-auto hover:underline block -mt-5"
            href="/auth/business/login/forgot-password"
          >
            Forget Password?
          </Link>
          <AuthBtn showLoader={isPending} text="Login" />
        </form>
      </Form>
      <div className={poppin.className}>
        <div className="flex items-center gap-8 px-4 py-4">
          <div className="flex-1 h-px bg-grey" />
          <span className="text-sm font-medium text-black">OR</span>
          <div className="flex-1 h-px bg-grey" />
        </div>

        <div className="flex justify-center gap-3 pt-4">
          <SocialBtn
            image="/icons/facebook.svg"
            name="Continue with Facebook"
            signIn={faceBookSignin}
          />
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
