import React from "react";

import {BarCharts} from "../_components/charts/bar-charts";

function Page() {
  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
        <div className="flex-1">
          <h3 className="font-medium text-lg">Earning Summary for August 2024</h3>
          <p className=" text-sm text-grey-200 ">Monthly Earning Chart</p>

          <BarCharts />
        </div>
        <div className="lg:w-[300px]">
          <h3 className="font-medium text-lg">Payout Methods</h3>
          <p className=" text-sm text-grey-200 ">Manage Payment Methods</p>

          <ul className="pt-4 space-y-2">
            <li className="border border-grey-200 p-3 rounded-3xl">
              <table className="w-full">
                <tbody className="text-sm font-medium">
                  <tr>
                    <td>Account name</td>
                    <td className="text-right py-1">Oluwatosin Oladele</td>
                  </tr>
                  <tr>
                    <td>Bank</td>
                    <td className="text-right py-">GT Bank</td>
                  </tr>
                  <tr>
                    <td>Account Number</td>
                    <td className="text-right py-1">***1234</td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td className="text-right py-1">Primary</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li className="border border-grey-200 p-3 rounded-3xl">
              <table className="w-full">
                <tbody className="text-sm font-medium">
                  <tr>
                    <td>Account name</td>
                    <td className="text-right py-1">Oluwatosin Oladele</td>
                  </tr>
                  <tr>
                    <td>Bank</td>
                    <td className="text-right py-">GT Bank</td>
                  </tr>
                  <tr>
                    <td>Account Number</td>
                    <td className="text-right py-1">***1234</td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td className="text-right py-1">Primary</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li className="border border-grey-200 p-3 rounded-3xl">
              <table className="w-full">
                <tbody className="text-sm font-medium">
                  <tr>
                    <td>Account name</td>
                    <td className="text-right py-1">Oluwatosin Oladele</td>
                  </tr>
                  <tr>
                    <td>Bank</td>
                    <td className="text-right py-">GT Bank</td>
                  </tr>
                  <tr>
                    <td>Account Number</td>
                    <td className="text-right py-1">***1234</td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td className="text-right py-1">Primary</td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-7">
        <h3 className="font-medium text-lg">Payout History</h3>
        <p className=" text-sm text-grey-200 ">Recent Payouts</p>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 py-5">
          <li className="border border-grey-200 px-3 py-1 lg:p-4 rounded-3xl">
            <table className="w-full">
              <tbody className="text-sm font-medium">
                <tr>
                  <td>Date</td>
                  <td className="py-1 md:py-2 max-md:text-right">August 10, 2024</td>
                </tr>
                <tr>
                  <td>Amount</td>
                  <td className="py-1 md:py-2 max-md:text-right">N500,000</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td className="py-1 md:py-2 max-md:text-right">Completed</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li className="border border-grey-200 px-3 py-1 lg:p-4 rounded-3xl">
            <table className="w-full">
              <tbody className="text-sm font-medium">
                <tr>
                  <td>Date</td>
                  <td className="py-1 md:py-2 max-md:text-right">June 25, 2024</td>
                </tr>
                <tr>
                  <td>Amount</td>
                  <td className="py-1 md:py-2 max-md:text-right">N500,000</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td className="py-1 md:py-2 max-md:text-right">Completed</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li className="border border-grey-200 px-3 py-1 lg:p-4 rounded-3xl">
            <table className="w-full">
              <tbody className="text-sm font-medium">
                <tr>
                  <td>Date</td>
                  <td className="py-1 md:py-2 max-md:text-right">July 5, 2024</td>
                </tr>
                <tr>
                  <td>Amount</td>
                  <td className="py-1 md:py-2 max-md:text-right">N530,000</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td className="py-1 md:py-2 max-md:text-right">Completed</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li className="border border-grey-200 px-3 py-1 lg:p-4 rounded-3xl">
            <table className="w-full">
              <tbody className="text-sm font-medium">
                <tr>
                  <td>Date</td>
                  <td className="py-1 md:py-2 max-md:text-right">May 10, 2024</td>
                </tr>
                <tr>
                  <td>Amount</td>
                  <td className="py-1 md:py-2 max-md:text-right">N600,000</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td className="py-1 md:py-2 max-md:text-right">Completed</td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Page;
