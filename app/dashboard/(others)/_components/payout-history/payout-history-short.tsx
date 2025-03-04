"use client";

import React from "react";

import {useGetPayouts} from "@/api/payout/get-payouts";
import Loader from "@/components/loader/loader";
import {getAmountString} from "@/lib/utils";

function PayoutHistoryShort() {
  const {data, isPending} = useGetPayouts();

  if (isPending) {
    return (
      <div className="h-full w-full grid place-content-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="h-full w-full">
      <h4 className="text-black font-medium mb-5">Payouts</h4>

      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="text-left">Amount (N)</th>
            <th className="text-right pb-3">Date</th>
          </tr>
        </thead>
        {data && data.data.length > 0 ? (
          <tbody>
            {data.data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{getAmountString(item.amount)}</td>
                  <td className="text-right py-1.5">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan={2}>
                <p className="py-10 text-center italic">No Payout History</p>
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}

export default PayoutHistoryShort;
