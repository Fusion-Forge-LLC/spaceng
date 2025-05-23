"use client";

import React from "react";
import {useSearchParams} from "next/navigation";

import {useGetCouponList} from "@/api/coupon/get-coupons";
import Loader from "@/components/loader/loader";

import {CouponModal} from "../_components/coupon/generate";
import {CouponList} from "../_components/coupon/lists";

function Page() {
  const param = useSearchParams().entries();
  const query = Object.fromEntries(param);
  const {data, isLoading} = useGetCouponList(query);

  if (isLoading) {
    return (
      <div className="py-40">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <section className="flex items-center justify-between px-4 py-6 md:p-3 border-b border-b-grey-200">
        <div>
          <h1 className="text-grey text-lg sm:text-xl font-semibold capitalize">Coupons</h1>
          <p className="font-medium text-sm">Manage your coupons</p>
        </div>

        <CouponModal />
      </section>

      <section className="px-4 py-6 md:p-3">
        <CouponList data={data?.data} isPending={isLoading} />
      </section>
    </div>
  );
}

export default Page;
