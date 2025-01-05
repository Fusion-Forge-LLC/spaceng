"use client";

import React from "react";
import {useForm, SubmitHandler} from "react-hook-form";

import {useChangePassword} from "@/api/profile/change-client-password";
import Loader from "@/components/loader/loader";
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";

type FormValues = {
  new_password: string;
  confirm_password: string;
};

function Page({searchParams}: {searchParams: {auth: string}}) {
  const auth = searchParams.auth;
  const {mutate: changePassword, isPending} = useChangePassword();
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<FormValues>({
    defaultValues: {
      new_password: "",
      confirm_password: "",
    },
  });

  const password = watch("new_password");

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    changePassword({
      auth_id: auth,
      ...data,
    });
  };

  return (
    <form className="space-y-3 pt-10" onSubmit={handleSubmit(onSubmit)}>
      <h4 className="text-2xl font-semibold mb-4">Enter your new password</h4>
      <div>
        <label className="text-grey-200 block mb-1" htmlFor={"new_password"}>
          New Password
        </label>
        <Input
          className="password-input"
          id="new_password"
          type="password"
          {...register("new_password", {
            required: "Password is required",
            validate: {
              hasLowercase: (value) => /[a-z]/.test(value) || "Must include a lowercase letter",
              hasUppercase: (value) => /[A-Z]/.test(value) || "Must include an uppercase letter",
              hasNumber: (value) => /\d/.test(value) || "Must include a number",
              hasSpecialChar: (value) =>
                /[@$!%*?&()#^]/.test(value) || "Must include a special character",
              hasMinLength: (value) => value.length >= 8 || "Must be at least 8 characters long",
            },
          })}
        />
        {errors.new_password && <p className="text-red">{errors.new_password.message}</p>}
      </div>
      <div>
        <label className="text-grey-200 block mb-1" htmlFor={"confirm_password"}>
          Confirm Password
        </label>
        <Input
          className="password-input"
          id="confirm_password"
          type="password"
          {...register("confirm_password", {
            required: "Confirm Password is required",
            validate: (value) => value === password || "Passwords must match",
          })}
        />
        {errors.confirm_password && <p className="text-red">{errors.confirm_password.message}</p>}
      </div>
      <button className={cn("booking-btn mx-auto", "py-2 text-base w-full")}>
        {isPending ? <Loader /> : "Save Changes"}
      </button>
    </form>
  );
}

export default Page;
