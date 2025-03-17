"use client";

import React from "react";
import Image from "next/image";
import {CheckCircle2Icon} from "lucide-react";
import {useRouter} from "next/navigation";
import PaystackInline from "@paystack/inline-js";

import Wrapper from "@/components/wrapper/wrapper";
import {cn} from "@/lib/utils";
import {useUser} from "@/context/user";
import {useInitPlan} from "@/api/transaction/initPlan";
import {useNewPlan} from "@/api/profile/plan";
import Loader from "@/components/loader/loader";
import {useFreePlan} from "@/api/profile/free-plan";

function Page() {
  return (
    <Wrapper>
      <article className="text-center max-w-3xl mx-auto py-10 space-y-6">
        <h3 className="text-2xl font-medium">Our Pricing Plan</h3>
        <p className="leading-loose">
          Discover our flexible pricing options designed to meet your specific needs. Whether
          you&apos;re an Basic, Standard or Premium, we have a plan that offers the features and
          benefits you&apos;re looking for.
        </p>
      </article>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
        <Card
          amount={0}
          benefits={["Basic Listing", "Limited Analytics", "Standard Customer Support"]}
          bg="bg-[#EDCB50]"
          color="#EDCB50"
          hover="hover:bg-[#EDCB50]"
          plan="basic"
          text="text-[#EDCB50]"
        />
        <Card
          amount={15}
          benefits={[
            "Priority Listing",
            "Customization Listings",
            "Advanced Analytics",
            "Dedicated Customer Support",
            "Membership Reward",
          ]}
          bg="bg-[#A2629B]"
          color="#A2629B"
          hover="hover:bg-[#A2629B]"
          plan="standard"
          text="text-[#A2629B]"
        />
        <Card
          amount={45}
          benefits={[
            "Priority Listing",
            "Customization Listings",
            "Advanced Analytics",
            "Dedicated Customer Support",
            "Membership Reward",
            "Integration with Marketing tools",
          ]}
          bg="bg-[#448C74]"
          color="#448C74"
          hover="hover:bg-[#448C74]"
          plan="premium"
          text="text-[#448C74]"
        />
      </div>
    </Wrapper>
  );
}

function Card({
  bg,
  text,
  plan,
  amount,
  color,
  benefits,
  hover,
}: {
  bg: string;
  text: string;
  plan: string;
  amount: number;
  color: string;
  benefits: string[];
  hover: string;
}) {
  const popup = new PaystackInline();
  const router = useRouter();
  const {User} = useUser();
  const {mutateAsync, isPending} = useInitPlan();
  const {mutate, isPending: isLoading} = useNewPlan();
  const {mutate: Freeplan, isPending: freePlanLoading} = useFreePlan();

  const handleClick = () => {
    if (!User) {
      router.push("/auth/business/login?redirect=/pricing");

      return;
    }

    if (plan === "basic") {
      Freeplan(null);

      return;
    }
    mutateAsync({plan}).then((data) => {
      //@ts-ignore
      popup.resumeTransaction(data.data.access_code, {
        //@ts-ignore
        onSuccess: (transaction) => {
          mutate({transactionRef: transaction.trxref});
        },
        onCancel: () => {},
        onError: (error: any) => {},
      });
    });
  };

  return (
    <div
      className={cn(
        "rounded-3xl p-8 border border-[#EAEBEC] flex flex-col hover:shadow-2xl",
        plan !== "basic" && "invisible",
      )}
    >
      <header className="flex gap-3 py-3 border-b border-b-[#EAEBEC]">
        <div className={cn("h-16 w-16 grid place-content-center rounded-xl", bg)}>
          <Image alt="Trophy" height={40} src={"/vector.svg"} width={40} />
        </div>
        <div>
          <span className={cn("font-medium text-lg", text)}>{plan}</span>
          <p className="flex items-end gap-3">
            ₦ <span className="font-medium text-4xl">{amount}</span>
          </p>
        </div>
        <div className="flex items-end">
          <span className="text-[#545B67] text-outline ">
            Per
            <br />
            month
          </span>
        </div>
      </header>
      <ul className="py-8 space-y-5">
        {benefits.map((item, index) => {
          return (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle2Icon color={color} />
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
      <button
        className={cn(
          "w-full p-2.5 border border-[#EAEBEC] rounded-xl mt-auto hover:text-white",
          hover,
          text,
        )}
        disabled={isPending || isLoading}
        onClick={handleClick}
      >
        {isPending || isLoading || freePlanLoading ? <Loader /> : "Get Started"}
      </button>
    </div>
  );
}

export default Page;
