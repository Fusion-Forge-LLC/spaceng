"use client";

import React from "react";
import {Poppins} from "next/font/google";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useRouter} from "next/navigation";

import "yup-phone-lite";
import {useSignUp} from "@/api/auth/signup";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {googleSignin} from "@/lib/utils";
import PasswordValidators from "@/app/auth/client/components/password-validators";

import FormInput from "../_components/form-control/form-control";
import SocialBtn from "../_components/social-btn/social-btn";
import AuthBtn from "../_components/auth-btn/auth-btn";

const poppin = Poppins({subsets: ["latin"], weight: ["400", "500", "600", "700"]});

const signUpSchema = yup.object({
  fullname: yup.string().required("Please enter full name"),
  email: yup
    .string()
    .email()
    .required("Please enter email address")
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email must have a valid domain"),
  phone_number: yup
    .string()
    .phone(undefined, "Invalid phone number, number must start with country code")
    .required("Phone Number is required"),
  role: yup.string().oneOf(["client", "business"], "Invalid role").required("Role is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),
});

type SignUpType = yup.InferType<typeof signUpSchema>;

function Page() {
  const router = useRouter();
  const {isPending, mutateAsync} = useSignUp();

  const form = useForm<SignUpType>({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (values: SignUpType) => {
    const payload = {
      ...values,
    };

    mutateAsync(payload).then(() => {
      router.push(`/auth/business/signup/verify-email?email=${values.email}`);
    });
  };

  return (
    <div className="business-auth-wrapper">
      <h3 className="auth-title mb-7">Create your Property Owner Account</h3>
      <Form {...form}>
        <form className="space-y-5 mb-8" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="fullname"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <FormInput id="fullname" label="Full Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            name="phone_number"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <FormInput id="phone_number" label="Phone Number" {...field} />
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
          <div className="hidden">
            <FormField
              control={form.control}
              defaultValue="business"
              name="role"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <FormInput id="role" label="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <PasswordValidators password={form.watch("password")} />
          <AuthBtn showLoader={isPending} text="Sign Up and Start Listing" />
        </form>
      </Form>
      <div className={poppin.className}>
        <p className="text-sm text-center">
          By proceeding, you agree to our Terms and conditions and our Privacy policy{" "}
        </p>

        <div className="flex items-center gap-8 px-4 py-4">
          <div className="flex-1 h-px bg-grey" />
          <span className="text-sm font-medium text-black">OR</span>
          <div className="flex-1 h-px bg-grey" />
        </div>

        <div className="px-8 flex justify-center pt-4">
          <SocialBtn
            image="/icons/google.svg"
            name="Sign up with Google"
            signIn={() => googleSignin("business")}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
