"use client";

import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useRouter, useSearchParams} from "next/navigation";
import {toast} from "sonner";

import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {useResetPassword} from "@/api/auth/reset-password";

import PrimaryAuthButton from "../components/PrimaryAuthButton";

const schema = yup.object({
  password: yup.string().required("Please enter password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Passwords must match")
    .required("Confirm password is required"),
});

type FormValues = yup.InferType<typeof schema>;

function ResetPassword() {
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
      router.push("/auth/client/signin");
    } catch (e) {
      toast.error("An error occured");
    }
  }

  return (
    <Form {...form}>
      <form
        className="py-10 px-2 lg:px-6 md:text-base w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h1 className="text-grey font-semibold text-2xl mb-4">Reset Password</h1>
        <FormField
          control={form.control}
          name="password"
          render={({field}) => (
            <FormItem>
              <FormControl>
                <div className="mb-4 flex flex-col gap-1.5 w-full">
                  <label className="text-grey" htmlFor="password">
                    Enter New Password
                  </label>
                  <input
                    className="border-[#707070] border rounded-lg w-full py-3 lg:py-3.5 pr-12 px-4 flex items-center text-grey placeholder:text-[#707070] focus:outline-none"
                    id="password"
                    {...field}
                    placeholder="New Password"
                    type="password"
                  />
                </div>
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
                <div className="mb-6 flex flex-col gap-1.5 w-full">
                  <label className="text-grey" htmlFor="confirmPassword">
                    Confirm New Password
                  </label>
                  <input
                    className="border-[#707070] border rounded-lg w-full py-3 lg:py-3.5 pr-12 px-4 flex items-center text-grey placeholder:text-[#707070] focus:outline-none"
                    id="confirmPassword"
                    {...field}
                    placeholder="Confirm Password"
                    type="password"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <PrimaryAuthButton
          buttonName="Reset Password"
          isDisabled={isPending}
          isLoading={isPending}
        />
      </form>
    </Form>
  );
}

export default ResetPassword;
