"use client";

import React from "react";

import GenerateCoupon from "../_components/coupon/generate-coupon";
import {CouponModal} from "../_components/coupon/generate";

function Page() {
  return (
    <div>
      <section className="flex items-center justify-between px-4 py-6 md:p-3 border-b border-b-grey-200">
        <div>
          <h1 className="text-grey text-lg sm:text-xl font-semibold capitalize">Coupons</h1>
          <p className="font-medium text-sm">Manage your coupons</p>
        </div>

        <GenerateCoupon />
        <CouponModal />
      </section>

      <section />
    </div>
  );
}

export default Page;
