"use client";

import Image from "next/image";
import {useState} from "react";

export default function Notifications() {
  const [notificationBlock, setNotificationBlock] = useState(false);
  const [currentNotification, setCurrentNotification] = useState("Newsletter and services");

  return (
    <div className="w-full">
      <div className={`${notificationBlock ? "hidden" : ""} md:p-4 `}>
        <h1 className="text-xl lg:text-2xl font-bold lg:font-semibold mb-2">Notifications</h1>
        <p className="text-grey-200 text-sm lg:text-base ">
          Decide what you want to be notified about, and unsubscribe from what you don&apos;t
        </p>
      </div>

      <div className="py-2 md:p-4 flex flex-col gap-4">
        <div className="">
          <div
            className={` ${notificationBlock ? "hidden" : "lg:flex"} py-4  lg:justify-between items-start `}
          >
            <div className="flex flex-col gap-3">
              <h2 className="font-medium text-grey">Email preference</h2>
              <div className="text-sm lg:text-base">
                <p className="text-grey-200 mb-1.5">akinpeters333@gmail.com</p>
                <p className="text-grey-200">
                  This is the email address you use to sign in. It’s also where we send your booking
                  confirmations
                </p>
              </div>
            </div>
            <button
              className="text-blue font-medium cursor-pointer hidden lg:block"
              onClick={() => setNotificationBlock(true)}
            >
              Manage
            </button>
            <button
              className="text-blue font-medium cursor-pointer block lg:hidden ml-auto mt-3"
              onClick={() => setNotificationBlock(true)}
            >
              Manage
            </button>
          </div>

          <div className={`${notificationBlock ? "" : "hidden"} py-4`}>
            <h1 className="text-xl lg:text-[32px] font-semibold mb-6 lg:mb-8">
              Manage your email communication preferences
            </h1>
            <div className="lg:border lg:border-grey-200 lg:py-8 lg:px-6 rounded-lg">
              <div
                className="lg:mb-8 border-grey-200 flex gap-6"
                style={{borderBottomWidth: "0.5px"}}
              >
                <button
                  className={`font-medium cursor-pointer ${currentNotification == "Newsletter and services" ? " border-b-[1.5px] border-b-blue text-blue" : "text-grey"}`}
                  onClick={() => setCurrentNotification("Newsletter and services")}
                >
                  Newsletter and services
                </button>
                <button
                  className={`font-medium cursor-pointer ${currentNotification == "Bookings" ? " border-b-[1.5px] border-b-blue text-blue" : "text-grey"}`}
                  onClick={() => setCurrentNotification("Bookings")}
                >
                  Bookings
                </button>
              </div>
              {notificationBlock && currentNotification == "Newsletter and services" ? (
                <NewsletterView />
              ) : notificationBlock && currentNotification == "Bookings" ? (
                <BookingsView />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const NewsletterView = () => {
  return (
    <div className="flex flex-col gap-5 lg:gap-6">
      <div className="py-3 lg:py-6">
        <div className="flex flex-row-reverse lg:flex-row justify-end lg:justify-between items-center gap-2 mb-4 ">
          <p className="text-grey font-semibold text-lg lg:text-2xl">Promotions and deals</p>
          <div className="flex gap-2.5 items-center w-fit">
            <Image
              alt="toggle"
              className="w-9 h-6 lg:w-[51px] lg:h-[31px]"
              height={31}
              src="/account_management/toggle.svg"
              width={51}
            />
            <p className="text-grey-200 hidden lg:block">Subscribe to all</p>
          </div>
        </div>
        <p className="text-grey-200 w-full md:max-w-[70%] text-sm lg:text-base ">
          Emails based on destinations you&apos;re interested in (Search assistant) and newsletters
          highlighting deals (Deals discovery).
        </p>
      </div>
      <NewsletterItem name="Deal discovery" />
      <NewsletterItem name="Rewards" />
      <NewsletterItem name="Refer a friend" />
      <NewsletterItem name="Search assistant" />
      <NewsletterItem name="Direct mail" />
      <div
        className="flex flex-row-reverse lg:flex-row justify-end lg:justify-between items-center gap-2 py-4 lg:py-6 mt-2 border-b-[#D7D7D7] "
        style={{borderBottomWidth: "0.2px"}}
      >
        <p className="text-grey font-semibold text-lg lg:text-2xl">
          SpaceNG.com products and services
        </p>
        <div className="flex gap-2.5 items-center">
          <Image
            alt="toggle"
            className="w-9 h-6 lg:w-[51px] lg:h-[31px]"
            height={31}
            src="/account_management/toggle.svg"
            width={51}
          />
          <p className="text-grey-200 hidden lg:block">Subscribe to all</p>
        </div>
      </div>
      <NewsletterItem name="SpacesNG.com for business" />
      <NewsletterItem name="Customer feedback and survey" />
      <NewsletterItem name="Product announcements and news" />
      <button className="text-white font-medium px-3 lg:px-4 py-4 lg:py-6 text-sm lg:text-base rounded-lg bg-[#CCDAFE] mx-auto">
        Unsubscribe from all newsletter and services emails
      </button>
    </div>
  );
};

const NewsletterItem = ({name}: {name: string}) => {
  return (
    <div
      className="flex justify-between items-center gap-2 pt-0.5 pb-4 lg:py-6 border-b-[#D7D7D7] "
      style={{borderBottomWidth: "0.2px"}}
    >
      <p className="text-grey font-medium text-sm lg:text-lg">{name}</p>
      <div className="flex gap-2.5 items-center">
        <Image
          alt="toggle"
          className="w-9 h-6 lg:w-[51px] lg:h-[31px]"
          height={31}
          src="/account_management/toggle.svg"
          width={51}
        />
        <p className="text-grey-200 hidden lg:block">Subscribe to all</p>
      </div>
    </div>
  );
};

const BookingsView = () => {
  return (
    <div className="flex flex-col gap-5 lg:gap-6 py-2">
      <div className="py-3 lg:py-6">
        <div className="flex justify-between items-center gap-2 lg:mb-4">
          <p className="text-grey font-medium lg:font-semibold text-base lg:text-2xl">
            Appointments emails
          </p>
          <div className="flex gap-2.5 items-center">
            <Image
              alt="toggle"
              className="w-9 h-6 lg:w-[51px] lg:h-[31px]"
              height={31}
              src="/account_management/toggle2.svg"
              width={51}
            />
            <p className="text-grey-200 hidden lg:block">Subscribe to all</p>
          </div>
        </div>
        <p className="text-grey-200 w-full md:max-w-[70%] hidden lg:block ">
          Emails you receive after making an appointments. This includes invitations to review the
          properties you stayed in.
        </p>
      </div>
      <BookingsItem
        description="Emails that remind you of your upcoming appointments with all the details you need"
        name="Upcoming appointments"
      />
      <BookingsItem
        description="Emails inviting you to leave a review on the property you rented"
        name="Review impacts"
      />
      <BookingsItem
        description="Other product deals and upgrades in your confirmation emails."
        name="Offers in confirmation emails"
      />
      <BookingsItem
        description="You are not able to unsubscribe from booking confirmation emails"
        name="Booking confirmation emails"
      />
      <button className="text-white font-medium px-3 lg:px-4 py-4 lg:py-6 text-sm lg:text-base rounded-lg bg-[#CCDAFE] mx-auto">
        Unsubscribe from all booking emails
      </button>
    </div>
  );
};

const BookingsItem = ({name, description}: {name: string; description: string}) => {
  return (
    <div className="py-3 lg:py-6 border-b-[#D7D7D7] " style={{borderBottomWidth: "0.2px"}}>
      <div className="flex justify-between items-center gap-2 lg:mb-4">
        <p className="text-grey font-medium text-base lg:text-lg">{name}</p>
        <div className="flex gap-2.5 items-center">
          <Image
            alt="toggle"
            className="w-9 h-6 lg:w-[51px] lg:h-[31px]"
            height={31}
            src="/account_management/toggle2.svg"
            width={51}
          />
          <p className="text-grey-200 hidden lg:block">Subscribe to all</p>
        </div>
      </div>
      <p className="text-grey-200 w-full md:max-w-[70%] hidden lg:block ">{description}</p>
    </div>
  );
};
