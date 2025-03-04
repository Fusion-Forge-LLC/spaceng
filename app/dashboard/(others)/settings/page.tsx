"use client";

import React from "react";

import {useUser} from "@/context/user";
import Loader from "@/components/loader/loader";

import Avatar from "../_components/settings/avatar";
import BasicData from "../_components/settings/basic_data";
import ChangePassword from "../_components/settings/change-password";
import CheckMark from "../_components/settings/notifications";

function Page() {
  const {User, isLoading} = useUser();

  if (isLoading) {
    return (
      <div className="py-24 grid">
        <Loader />
      </div>
    );
  }

  if (!User) return;
  const loginHistory = User.login_history;

  return (
    <div className="px-4 py-3 sm:p-3 max-md:pb-20">
      <h3 className="font-medium text-xl">Profile Management</h3>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 min-[1200px]:gap-x-20 gap-y-4 pt-8 text-grey-200">
        <div>
          <h4 className="text-grey-200 mb-5 font-medium text-lg">Manage Your Profile</h4>

          <div>
            <Avatar prevProfileImage={User.profile_image} />
            <ul className="space-y-3">
              <BasicData label="Name" objKey={"fullname"} prevValue={User.fullname} />

              <li className="flex items-center justify-between">
                <span>
                  Email: <span className="text-blue">{User.email}</span>
                </span>
              </li>

              <BasicData label="Phone" objKey={"phone"} prevValue={User.phone} />

              <BasicData label="Address" objKey={"address"} prevValue={User.address} />
            </ul>

            <ChangePassword />
          </div>
        </div>
        <div className="font-medium space-y-6">
          <div>
            <h4 className="text-grey-200 mb-5 font-medium text-lg">Manage Your Profile</h4>

            <ul className="space-y-5">
              <li className="flex ">
                <span className="w-1/2">Email Notification</span>
                <div className="space-y-2 flex-1">
                  <CheckMark
                    id="email_booking_alerts"
                    label="Booking Alerts"
                    objKey="email_notifications.booking"
                    value={User?.email_notifications?.booking}
                  />
                  <CheckMark
                    id="email_promotion"
                    label="Promotions"
                    objKey="email_notifications.promotion"
                    value={User?.email_notifications?.promotion}
                  />
                </div>
              </li>

              {/* <li className="flex">
                <span className="w-1/2">SMS Notification</span>
                <div className="space-y-2 flex-1">
                  <CheckMark
                    id="sms_booking_alerts"
                    label="Booking Alerts"
                    objKey="sms_notifications.booking"
                    value={User?.sms_notifications?.booking}
                  />
                  <CheckMark
                    id="sms_promotion"
                    label="Promotions"
                    objKey="sms_notifications.promotion"
                    value={User?.sms_notifications?.promotion}
                  />
                </div>
              </li> */}

              <li className="flex">
                <span className="w-1/2">App Notifications</span>
                <div className="space-y-2 flex-1">
                  <CheckMark
                    id="new_booking"
                    label="New Booking"
                    objKey="app_notifications.booking"
                    value={User.app_notifications?.booking}
                  />
                  <CheckMark
                    id="messages"
                    label="Messages"
                    objKey="app_notifications.promotion"
                    value={User.app_notifications?.promotion}
                  />
                  <CheckMark
                    id="offers"
                    label="Offers"
                    objKey="app_notifications.Offers"
                    value={User.app_notifications?.Offers}
                  />
                </div>
              </li>
            </ul>
          </div>

          {/* <div>
            <h4 className="text-grey-200 mb-5 font-medium text-base">Security Settings</h4>
            <ul>
              <li className="flex">
                <span className="w-1/2">Two - Factor Authentication</span>
                <div className="space-y-2 flex-1">
                  <CheckMark
                    id="current_status"
                    label="Current Status"
                    objKey="two_factor_auth.current_status"
                    value={User.two_factor_auth?.current_status}
                  />
                  <CheckMark
                    id="Manage"
                    label="Manage"
                    objKey="two_factor_auth.manage"
                    value={User.two_factor_auth?.manage}
                  />
                </div>
              </li>
            </ul>
          </div> */}

          <div>
            <h4 className="text-grey-200 mb-5 font-medium text-base">Login History</h4>
            {loginHistory.length > 1 ? (
              <div>
                <ul className="space-y-2 mb-7">
                  <li className="flex justify-between">
                    Last login{" "}
                    {new Date(loginHistory[loginHistory.length - 2].timestamp).toLocaleDateString(
                      "en",
                      {
                        month: "long",
                        day: "2-digit",
                        year: "numeric",
                      },
                    )}
                    , from {loginHistory[loginHistory.length - 2].location}
                  </li>
                  <li>{loginHistory[loginHistory.length - 2].device}</li>
                </ul>
                {/* <button className="border mx-auto block hover:bg-blue hover:text-white transition-all border-blue text text-blue rounded-3xl py-2.5 px-5 text-sm font-medium">
                  Remove Device
                </button> */}
              </div>
            ) : (
              <p className="text-center opacity-75 pb-10">No history found</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
