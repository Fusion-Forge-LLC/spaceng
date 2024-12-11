import React from "react";

import {cn} from "@/lib/utils";
import {useGetPayoutMethods} from "@/api/payout/get-payout-accounts";
import Loader from "@/components/loader/loader";

import AddPayoutMethod from "../payout-modal/payout-modal";

function PayoutMethod() {
  const {data, isPending} = useGetPayoutMethods();

  if (isPending) {
    return (
      <div className="flex-1 py-10 grid place-content-center">
        <Loader />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex-1 py-10 grid place-content-center">
        <span className="italic">An error occured</span>
      </div>
    );
  }

  return (
    <div className={cn("pt-4 space-y-2 flex-1", !data.data.length && "grid place-content-center")}>
      {data.data.length === 0 ? (
        <div className="flex flex-col gap-3 py-8 text-grey-200 items-center">
          <h4>No Payout Method found</h4>
          <AddPayoutMethod showText />
        </div>
      ) : (
        <ul>
          {data.data.map((item) => {
            return (
              <li key={item._id} className="border border-grey-200 p-3 rounded-3xl">
                <table className="w-full">
                  <tbody className="text-sm font-medium">
                    <tr>
                      <td>Account name</td>
                      <td className="text-right py-1">
                        <p className="whitespace-nowrap overflow-hidden text-ellipsis max-w-36 capitalize">
                          {item.account_name}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Bank</td>
                      <td className="text-right py-">{item.bank_name}</td>
                    </tr>
                    <tr>
                      <td>Account Number</td>
                      <td className="text-right py-1">
                        {item.account_number?.toString().slice(-4).padStart(8, "*")}
                      </td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td className="text-right py-1">{item.is_primary ? "Primary" : "Other"}</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default PayoutMethod;
