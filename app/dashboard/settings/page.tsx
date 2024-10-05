import {Edit3} from "lucide-react";
import Image from "next/image";
import React from "react";

import FormControl from "@/app/auth/business/(screens)/_components/form-control/form-control";

function Page() {
  return (
    <div className="px-4 py-3 sm:p-3 max-md:pb-20">
      <h3 className="font-medium text-xl">Profile Management</h3>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 min-[1200px]:gap-x-20 gap-y-4 pt-8 text-grey-200 text-sm">
        <div>
          <h4 className="text-grey-200 mb-5 font-medium text-base">Manage Your Profile</h4>

          <div>
            <div className="flex justify-between items-end gap-3 pb-8">
              <div className="h-20 w-20 rounded-full relative">
                <Image fill alt="Profile Image" src={"/avatar.png"} />
              </div>

              <label className="text-blue" htmlFor="upload_image">
                <Edit3 size={18} />
                <input hidden id="upload_image" name="upload_image" type="file" />
              </label>
            </div>

            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                Name Oluwatosin Oladele
                <button className="text-blue">
                  <Edit3 size={18} />
                </button>
              </li>

              <li className="flex items-center justify-between">
                <span>
                  Email <span className="text-blue">tosin@example.com</span>
                </span>
                <button className="text-blue">
                  <Edit3 size={18} />
                </button>
              </li>

              <li className="flex items-center justify-between">
                Phone 0712346789
                <button className="text-blue">
                  <Edit3 size={18} />
                </button>
              </li>
              <li className="flex items-center justify-between">
                Address 10 Oladele Street, Lagos, Nigeria
                <button className="text-blue">
                  <Edit3 size={18} />
                </button>
              </li>
            </ul>

            <form className="space-y-4 pt-10" method="post">
              <FormControl
                isPassword
                id="current_password"
                label="Current Password"
                type="password"
              />
              <FormControl isPassword id="new_password" label="New Password" type="password" />
              <FormControl
                isPassword
                id="confirm_password"
                label="Confirm Password"
                type="password"
              />
            </form>
          </div>
        </div>
        <div className="font-medium space-y-6">
          <div>
            <h4 className="text-grey-200 mb-5 font-medium text-base">Manage Your Profile</h4>

            <ul className="space-y-5">
              <li className="flex ">
                <span className="w-1/2">Email Notification</span>
                <div className="space-y-2 flex-1">
                  <CheckMark id="email_booking_alerts" label="Booking Alerts" />
                  <CheckMark id="email_promotion" label="Promotions" />
                </div>
              </li>

              <li className="flex">
                <span className="w-1/2">SMS Notification</span>
                <div className="space-y-2 flex-1">
                  <CheckMark id="sms_booking_alerts" label="Booking Alerts" />
                  <CheckMark id="sms_promotion" label="Promotions" />
                </div>
              </li>

              <li className="flex">
                <span className="w-1/2">App Notifications</span>
                <div className="space-y-2 flex-1">
                  <CheckMark id="new_booking" label="New Booking" />
                  <CheckMark id="messages" label="Messages" />
                  <CheckMark id="offers" label="Offers" />
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-grey-200 mb-5 font-medium text-base">Security Settings</h4>
            <ul>
              <li className="flex">
                <span className="w-1/2">Two - Factor Authentication</span>
                <div className="space-y-2 flex-1">
                  <CheckMark id="current_status" label="Current Status" />
                  <CheckMark id="Manage" label="Manage" />
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-grey-200 mb-5 font-medium text-base">Login History</h4>
            <ul className="space-y-2 mb-7">
              <li className="flex justify-between">
                Last login August 20, 2024, from Lagos, Nigeria
              </li>
              <li>Device iPhone 13 Pro Max</li>
            </ul>

            <button className="border mx-auto block hover:bg-blue hover:text-white transition-all border-blue text text-blue rounded-3xl py-2.5 px-5 text-sm font-medium">
              Remove Device
            </button>
          </div>
        </div>

        <div className="sm:col-span-2">
          <button className="booking-btn mx-auto">Save Changes</button>
        </div>
      </section>
    </div>
  );
}

function CheckMark({id, label}: {id: string; label: string}) {
  return (
    <div className="w-full flex mgap-10 justify-between">
      <label htmlFor={id}>{label}</label>
      <input className="hidden peer" id={id} name={id} type="checkbox" />
      <label
        className="ml-auto block w-12 h-6 rounded-full bg-grey-200 p-1 peer-checked:[&_span]:translate-x-6"
        htmlFor={id}
      >
        <span className="block h-4 w-4 rounded-full bg-white transition-all" />
      </label>
    </div>
  );
}

export default Page;
