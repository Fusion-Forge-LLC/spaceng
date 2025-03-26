"use client";

import React from "react";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import Image from "next/image";
import "react-phone-number-input/style.css";
import "./styles.css";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import {Button} from "@/components/ui/button";
import Wrapper from "@/components/wrapper/wrapper";
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";
import {useSendContactMessage} from "@/api/contact-message";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import Loader from "@/components/loader/loader";

import phoneImage from "../../../public/phone-icon.png";

const contactFormSchema = yup.object({
  full_name: yup.string().required("Please enter your full name"),
  email: yup
    .string()
    .email()
    .required("Please enter email address")
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email must have a valid domain"),
  number: yup.string().required("Phone Number is required"),
  comment: yup.string().required("Please state your reason for visit"),
});

type ContactFormType = yup.InferType<typeof contactFormSchema>;

function Page() {
  const {mutateAsync: sendMessage, isPending} = useSendContactMessage();

  const form = useForm<ContactFormType>({
    resolver: yupResolver(contactFormSchema),
  });

  const onsubmit = async (values: ContactFormType) => {
    await sendMessage(values);
    form.reset({
      full_name: "",
      number: "",
      email: "",
      comment: "",
    });
  };

  return (
    <section className="mb-10 sm:mb-20">
      <Wrapper className="py-10 px-0 sm:px-4">
        <article className="pb-8 sm:pb-14 space-y-8">
          <h1 className="font-semibold text-[22px] mb-2 px-4">Contact us</h1>

          <div className="grid grid-cols-12 gap-5">
            <Form {...form}>
              <form
                className="col-span-12 sm:col-span-8 bg-[#F3F3F3] px-4 sm:px-5 md:px-16 py-10 space-y-4 order-2 sm:order-1"
                onSubmit={form.handleSubmit(onsubmit)}
              >
                <FormField
                  control={form.control}
                  name="full_name"
                  render={({field}) => (
                    <FormItem>
                      <label className="font-medium text-lg px-2" htmlFor="full_name">
                        Full name
                      </label>
                      <FormControl>
                        <Input className="contact-input h-14" id="full_name" {...field} />
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
                      <label className="font-medium text-lg px-2" htmlFor="email">
                        Email
                      </label>
                      <FormControl>
                        <Input id="email" type="email" {...field} className="contact-input h-14" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="number"
                  render={({field}) => (
                    <FormItem>
                      <label className="font-medium text-lg px-2" htmlFor="mobile_number">
                        Mobile Number
                      </label>
                      <FormControl>
                        <PhoneInputWithCountrySelect
                          className="contact-input h-14 hover:outline-none px-[14px]"
                          defaultCountry="NG"
                          id="number"
                          placeholder="(+234) 00000000"
                          // value={phoneNumber}
                          // onChange={(value: any) => setPhoneNumber(value)}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="comment"
                  render={({field}) => (
                    <FormItem>
                      <label className="font-medium text-lg px-2" htmlFor="comment">
                        Comment
                      </label>
                      <FormControl>
                        <Textarea
                          className="resize-none contact-input"
                          id="comment"
                          rows={10}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <Button className="bg-blue px-10 sm:px-16 py-3 md:py-6 rounded-none md:rounded-md">
                    {isPending ? <Loader /> : "Send"}
                  </Button>
                </div>
              </form>
            </Form>

            <Image
              alt="Phone image"
              className="w-full object-cover col-span-12 sm:col-span-4 order-1 sm:order-2 px-4"
              src={phoneImage}
            />
          </div>
        </article>
      </Wrapper>
    </section>
  );
}

export default Page;
