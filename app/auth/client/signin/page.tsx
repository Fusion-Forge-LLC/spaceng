"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";

import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {useLogIn} from "@/api/auth/login";
import {googleSignin} from "@/lib/utils";

import EmailInput from "../components/EmailInput";
import PrimaryAuthButton from "../components/PrimaryAuthButton";
import PasswordInput from "../components/password-input";

const registerSchema = yup.object({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

type LoginType = yup.InferType<typeof registerSchema>;

function ClientSignIn() {
  const {mutate, isPending} = useLogIn("/auth/client/verify-email", "/account/settings");
  const form = useForm<LoginType>({
    resolver: yupResolver(registerSchema),
  });

  const onsubmit = (values: LoginType) => {
    const source: "client" = "client";
    const payload = {
      ...values,
      source,
    };

    mutate(payload);
  };

  return (
    <Form {...form}>
      <form
        className="py-5 space-y-6 lg:py-10 px-2 lg:px-6 md:text-base w-full"
        onSubmit={form.handleSubmit(onsubmit)}
      >
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
        <div className="mb-6 flex flex-col gap-1.5 w-full">
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
          <Link href={"/auth/client/forgot-password"}>
            <span className="text-[#707070] text-right font-medium">Forget Password?</span>
          </Link>
        </div>
        <div>
          <PrimaryAuthButton buttonName="Sign In" className="mb-6" isLoading={isPending} />
          <div className="flex flex-col gap-4">
            <button
              className="outline-none text-[#707070] font-medium flex items-center justify-center gap-1.5 bg-[#F2F2F2] rounded-lg py-3.5 w-full"
              type="button"
              onClick={() => googleSignin("client")}
            >
              <Image
                alt="google signIn"
                className=""
                height={24}
                src="/images/GoogleIcon.svg"
                width={24}
              />
              <span>Sign In With Google</span>
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
              <span>Sign In With Facebook</span>
            </button>
            <div className="text-grey flex gap-2 items-center justify-center py-1.5">
              <p>Don’t have an account?</p>
              <Link className="border-none outline-none text-[#707070] font-medium" href={"signup"}>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default ClientSignIn;
