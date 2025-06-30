"use client";

import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useRouter} from "next/navigation";

import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";

import EmailInput from "../components/EmailInput";
import PrimaryAuthButton from "../components/PrimaryAuthButton";

const emailSchema = yup.object({
  email: yup
    .string()
    .email()
    .required("Please enter email address")
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email must have a valid domain"),
});

type EmailType = yup.InferType<typeof emailSchema>;

function ForgotPassword() {
  const router = useRouter();

  const form = useForm<EmailType>({
    resolver: yupResolver(emailSchema),
  });

  const onsubmit = (values: EmailType) => {
    router.push(`/auth/client/forgot-password/verify?email=${values.email}`);
  };

  return (
    <Form {...form}>
      <form
        className="py-5 lg:py-10 px-2 space-y-4 lg:px-6 md:text-base w-full"
        onSubmit={form.handleSubmit(onsubmit)}
      >
        <h1 className="text-grey font-semibold text-2xl mb-4">Request password reset</h1>
        <p className="text-[#707070] text-sm lg:text-base mb-4">
          Enter your email address in the form below to request a password reset link
        </p>
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
        <PrimaryAuthButton buttonName="Request Password Reset" />
      </form>
    </Form>
  );
}

export default ForgotPassword;
