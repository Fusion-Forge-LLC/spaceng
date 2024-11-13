"use client";

import React from "react";
import Image from "next/image";
import * as yup from "yup";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useRouter} from "next/navigation";

import {useSignUp} from "@/api/auth/signup";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";

import PasswordValidators from "../components/password-validators";
import PrimaryAuthButton from "../components/PrimaryAuthButton";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/password-input";

const registerSchema = yup.object({
  fullname: yup.string().required("Please enter full name"),
  email: yup
    .string()
    .email()
    .required("Please enter email address")
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email must have a valid domain"),
  phone_number: yup.string().required("Phone Number is required"),
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

type RegisterType = yup.InferType<typeof registerSchema>;

function ClientSignUp() {
  const router = useRouter();
  const {isPending, mutateAsync} = useSignUp();
  const form = useForm<RegisterType>({
    resolver: yupResolver(registerSchema),
  });

  const onsubmit = (values: RegisterType) => {
    mutateAsync(values).then(() => {
      router.push(`/auth/client/verify-email?email=${values.email}`);
    });
  };

  return (
    <Form {...form}>
      <form
        className="py-5 lg:py-10 px-2 space-y-4 lg:px-6 md:text-base w-full"
        onSubmit={form.handleSubmit(onsubmit)}
      >
        <FormField
          control={form.control}
          name="fullname"
          render={({field}) => (
            <FormItem>
              <FormControl>
                <div className="flex flex-col gap-1.5 w-full">
                  <label className="text-grey" htmlFor="fullname">
                    Enter Your Full Name
                  </label>
                  <input
                    className="client-register-input"
                    id="fullname"
                    placeholder="Enter Full Name"
                    type="text"
                    {...field}
                  />
                </div>
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
                <EmailInput {...field} />
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
                <div className="flex flex-col gap-1.5 w-full">
                  <label className="text-grey" htmlFor="phone_number">
                    Enter Phone Number
                  </label>
                  <input
                    className="client-register-input"
                    id="phone_number"
                    placeholder="(+234)"
                    type="tel"
                    {...field}
                  />
                </div>
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
                <PasswordInput field={field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="hidden">
          <FormField
            control={form.control}
            defaultValue="client"
            name="role"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <input id="role" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* TODO: Extract these validators into a single component with props */}
        <PasswordValidators password={form.getValues("password")} />
        <p className="text-[#707070] mb-6">By signing up, you agree to SpacesNG Global Policy</p>
        <div>
          <PrimaryAuthButton
            buttonName="Sign Up"
            className="mb-6"
            isLoading={isPending}
            onClick={() => {}}
          />
          <div className="flex flex-col gap-4">
            <button
              className="outline-none text-[#707070] font-medium flex items-center justify-center gap-1.5 bg-[#F2F2F2] rounded-lg py-3.5 w-full"
              type="button"
            >
              <Image
                alt="google signIn"
                className=""
                height={24}
                src="/images/GoogleIcon.svg"
                width={24}
              />
              <span>Sign Up With Google</span>
            </button>
            <button
              className="text-[#707070] font-medium flex items-center justify-center gap-1.5 bg-[#F2F2F2] rounded-lg py-3.5 w-full"
              type="button"
            >
              <Image
                alt="facebook SignIn"
                className=""
                height={24}
                src="/images/FacebookIcon.svg"
                width={24}
              />
              <span>Sign Up With Facebook</span>
            </button>
            <div className="text-grey flex gap-2 items-center justify-center py-1.5">
              <p>Don’t have an account?</p>
              <Link
                className="border-none outline-none text-[#707070] font-medium"
                href={"/auth/client/signin"}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default ClientSignUp;
