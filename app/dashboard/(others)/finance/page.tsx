"use client";

import React from "react";

import {BarCharts} from "../_components/charts/bar-charts";
import AddPayoutMethod from "../_components/payout-modal/payout-modal";
import PayoutMethods from "../_components/payout-method/payout-method";
import {PayoutHistory} from "../_components/payout-history/payout-history";
import RequestPayoutModal from "../_components/payout-modal/request-payout-modal";

function Page() {
  const date = new Date();

  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
        <div className="flex-1">
          <h3 className="font-medium text-lg">
            Earning Summary for {date.toLocaleDateString("en-US", {month: "long", year: "numeric"})}
          </h3>
          <p className=" text-sm text-grey-200 ">Monthly Earning Chart</p>

          <BarCharts />
        </div>
        <div className="lg:w-[300px] flex flex-col">
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1">
              <h3 className="font-medium text-lg">Payout Methods</h3>
              <p className=" text-sm text-grey-200 ">Manage Payment Methods</p>
            </div>

            <AddPayoutMethod />
          </div>

          <PayoutMethods />
        </div>
      </div>

      <div className="pt-7">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-lg">Payout History</h3>
            <p className=" text-sm text-grey-200 ">Recent Payouts</p>
          </div>
          <RequestPayoutModal />
        </div>

        <PayoutHistory />
      </div>
    </div>
  );
}

export default Page;
