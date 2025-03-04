"use client";

import React, {useState} from "react";
import Link from "next/link";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {useParams, useSearchParams} from "next/navigation";

import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import PrimaryAuthButton from "@/app/auth/client/components/PrimaryAuthButton";
import {StarReview} from "@/components/Icons/icons";
import {Checkbox} from "@/components/ui/checkbox";
import {ratingText} from "@/lib/utils";
import {useSubmitRating} from "@/api/rating/submit-rating";
import {useGetProperty} from "@/api/property/property";

const reviewSchema = yup.object({
  name: yup.string().required("Email is required"),
  review: yup.string().required("Password is required"),
  accept: yup.boolean().default(false).required("Please accept privacy policy"),
});

type ReviewType = yup.InferType<typeof reviewSchema>;

function Page() {
  const params = useParams();
  const propertyId = params.id as string;
  const {data} = useGetProperty(propertyId);
  const searchParams = useSearchParams();
  const ratingNumber = searchParams.get("rating");
  const initialRating = ratingNumber ? parseInt(ratingNumber) : 1;
  const [rating, setRating] = useState<number>(initialRating);
  const [activeRating, setActiveRating] = useState<number>(initialRating);
  const {mutate, isPending} = useSubmitRating();

  const form = useForm<ReviewType>({
    resolver: yupResolver(reviewSchema),
  });

  const onsubmit = (values: ReviewType) => {
    const payload = {
      name: values.name,
      review_text: values.review,
      rating: activeRating,
      propertyId,
    };

    mutate(payload);
  };

  return (
    <div className="py-16">
      <div className="max-w-2xl mx-auto shadow-lg py-10 px-8">
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-xl font-medium">
            Share Your Experience at {data?.data.property_title}
          </h4>
          <h5>How would you rate this property</h5>
          <div>
            <div className="flex">
              {Array.from({length: 5}).map((_, index) => {
                return (
                  <button
                    key={index}
                    className="pr-3 last:pr-0"
                    onClick={() => setActiveRating(index + 1)}
                    onMouseLeave={() => setRating(activeRating)}
                    onMouseMove={() => setRating(index + 1)}
                  >
                    <StarReview
                      fill={index + 1 <= rating ? "#FABB05" : "#888888"}
                      opacity={index + 1 <= rating ? 1 : 0.5}
                    />
                  </button>
                );
              })}
            </div>
            <p className="h-5 text-center">{ratingText(activeRating)}</p>
          </div>
        </div>
        <Form {...form}>
          <form
            className="py-5 space-y-6 lg:py-10 px-2 lg:px-6 md:text-base w-full"
            onSubmit={form.handleSubmit(onsubmit)}
          >
            <div>
              <label htmlFor="name">Name</label>
              <FormField
                control={form.control}
                name="name"
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <input className="client-register-input" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-6 flex flex-col gap-1.5 w-full">
              <label htmlFor="review">Review</label>
              <FormField
                control={form.control}
                name="review"
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <textarea {...field} className="client-register-input resize-none h-48" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="accept"
                render={({field}) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md py-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        className="accent-blue"
                        id="accept-privacy"
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <label htmlFor="accept-privacy">
                        I accept the{" "}
                        <Link className="text-blue" href={"/privacy-policy"}>
                          privacy policy
                        </Link>
                      </label>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <div>
              <PrimaryAuthButton
                buttonName="Submit Review"
                className="mb-6"
                isDisabled={isPending}
                isLoading={isPending}
              />
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Page;
