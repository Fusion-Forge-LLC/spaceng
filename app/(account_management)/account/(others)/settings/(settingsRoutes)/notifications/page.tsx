"use client";

import React from "react";
import {useEffect, useState} from "react";
import {toast} from "sonner";

import {useUpdateProfile} from "@/api/profile/update-profile";
import NotificationCheckMark from "@/app/dashboard/(others)/_components/settings/notifications";
import {useUser} from "@/context/user";
import {checkAllChecked} from "@/lib/utils";

export default function Notifications() {
  const [notificationBlock, setNotificationBlock] = useState(false);
  const [currentNotification, setCurrentNotification] = useState("Newsletter and services");
  const {User} = useUser();

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
                <p className="text-grey-200 mb-1.5">{User?.email}</p>
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
  const {User, setUser} = useUser();
  const {mutateAsync: profileUpdate, isPending: isUpdating} = useUpdateProfile();
  const newsletters = User!.newsletter_and_services;
  const allChecked = checkAllChecked(newsletters);
  const [isChecked, setisChecked] = useState(allChecked);
  const [isProductChecked, setIsProductChecked] = useState(
    checkAllChecked(User!.product_and_services),
  );

  useEffect(() => {
    setisChecked(checkAllChecked(User!.newsletter_and_services));
    setIsProductChecked(checkAllChecked(User!.product_and_services));
  }, [User]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkedStatus = event.target.checked;
    const newData = {
      deal_discovery: checkedStatus,
      rewards: checkedStatus,
      refer_a_friend: checkedStatus,
      search_assistant: checkedStatus,
      direct_mail: checkedStatus,
    };

    profileUpdate({newsletter_and_services: newData}).then(() => {
      toast.success("Notification changed successfully");
      setUser((prevState) => {
        if (prevState) {
          return {
            ...prevState,
            newsletter_and_services: {...newData, _id: prevState.newsletter_and_services._id},
          };
        } else {
          return null;
        }
      });
      setisChecked((prevState) => !prevState);
    });
  };

  const handleProductChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkedStatus = event.target.checked;
    const newData = {
      for_business: checkedStatus,
      customer_feedback: checkedStatus,
      product_announcement: checkedStatus,
    };

    profileUpdate({product_and_services: newData}).then(() => {
      toast.success("Notification changed successfully");
      setUser((prevState) => {
        if (prevState) {
          return {
            ...prevState,
            product_and_services: {...newData, _id: prevState.product_and_services._id},
          };
        } else {
          return null;
        }
      });
      setIsProductChecked((prevState) => !prevState);
    });
  };

  const unsubscribeAll = () => {
    const newsletter_and_services = {
      deal_discovery: false,
      rewards: false,
      refer_a_friend: false,
      search_assistant: false,
      direct_mail: false,
    };
    const product_and_services = {
      for_business: false,
      customer_feedback: false,
      product_announcement: false,
    };

    profileUpdate({newsletter_and_services}).then(() => {
      profileUpdate({product_and_services}).then(() => {
        toast.success("Notification changed successfully");
        setUser((prevState) => {
          if (prevState) {
            return {
              ...prevState,
              newsletter_and_services: {
                ...newsletter_and_services,
                _id: prevState.newsletter_and_services._id,
              },
              product_and_services: {
                ...product_and_services,
                _id: prevState.product_and_services._id,
              },
            };
          } else {
            return null;
          }
        });
        setIsProductChecked((prevState) => !prevState);
      });
    });
  };

  return (
    <div className="flex flex-col gap-5 lg:gap-6">
      <div className="py-3 lg:py-6">
        <div className="flex flex-row-reverse lg:flex-row justify-end lg:justify-between items-center gap-2 mb-4 ">
          <label
            className="text-grey font-semibold text-lg lg:text-2xl"
            htmlFor={"promotions_and_deals"}
          >
            Promotions and deals
          </label>
          <div className="flex gap-2.5 items-center w-fit">
            <div className="w-full flex mgap-10 justify-between">
              <input
                checked={isChecked}
                className="hidden peer"
                disabled={isUpdating}
                id={"promotions_and_deals"}
                name={"promotions_and_deals"}
                type="checkbox"
                onChange={handleChange}
              />
              <label
                className="ml-auto cursor-pointer block w-12 h-6 rounded-full bg-grey-200 p-1 peer-checked:[&_span]:translate-x-6 peer-checked:bg-blue"
                htmlFor={"promotions_and_deals"}
              >
                <span className="block h-4 w-4 rounded-full bg-white transition-all" />
              </label>
            </div>
            <p className="text-grey-200 hidden lg:block whitespace-nowrap">Subscribe to all</p>
          </div>
        </div>
        <p className="text-grey-200 w-full md:max-w-[70%] text-sm lg:text-base ">
          Emails based on destinations you&apos;re interested in (Search assistant) and newsletters
          highlighting deals (Deals discovery).
        </p>
      </div>
      <NewsletterItem
        id="deal-discovery"
        name="Deal discovery"
        objKey="newsletter_and_services.deal_discovery"
        value={User!.newsletter_and_services.deal_discovery}
      />
      <NewsletterItem
        id="rewards"
        name="Rewards"
        objKey="newsletter_and_services.rewards"
        value={User!.newsletter_and_services.rewards}
      />
      <NewsletterItem
        id="refer-a-friend"
        name="Refer a friend"
        objKey="newsletter_and_services.refer_a_friend"
        value={User!.newsletter_and_services.refer_a_friend}
      />
      <NewsletterItem
        id="search-assistant"
        name="Search assistant"
        objKey="newsletter_and_services.search_assistant"
        value={User!.newsletter_and_services.search_assistant}
      />
      <NewsletterItem
        id="direct-mail"
        name="Direct mail"
        objKey="newsletter_and_services.direct_mail"
        value={User!.newsletter_and_services.direct_mail}
      />
      <div
        className="flex flex-row-reverse lg:flex-row justify-end lg:justify-between items-center gap-2 py-4 lg:py-6 mt-2 border-b-[#D7D7D7] "
        style={{borderBottomWidth: "0.2px"}}
      >
        <label
          className="text-grey font-semibold text-lg lg:text-2xl"
          htmlFor={"product_and_services"}
        >
          Spacefinda products and services
        </label>
        <div className="flex gap-2.5 items-center">
          <div className="w-full flex mgap-10 justify-between">
            <input
              checked={isProductChecked}
              className="hidden peer"
              disabled={isUpdating}
              id={"product_and_services"}
              name={"product_and_services"}
              type="checkbox"
              onChange={handleProductChange}
            />
            <label
              className="ml-auto cursor-pointer block w-12 h-6 rounded-full bg-grey-200 p-1 peer-checked:[&_span]:translate-x-6 peer-checked:bg-blue"
              htmlFor={"promotions_and_deals"}
            >
              <span className="block h-4 w-4 rounded-full bg-white transition-all" />
            </label>
          </div>
          <p className="text-grey-200 hidden lg:block whitespace-nowrap">Subscribe to all</p>
        </div>
      </div>
      <NewsletterItem
        id="for-business"
        name="SpacesNG.com for business"
        objKey="product_and_services.for_business"
        value={User!.product_and_services.for_business}
      />
      <NewsletterItem
        id="feedback-and-survey"
        name="Customer feedback and survey"
        objKey="product_and_services.customer_feedback"
        value={User!.product_and_services.customer_feedback}
      />
      <NewsletterItem
        id="announcement-and-news"
        name="Product announcements and news"
        objKey="product_and_services.product_announcement"
        value={User!.product_and_services.product_announcement}
      />
      <button
        className="text-white font-medium px-3 lg:px-4 py-4 lg:py-6 text-sm lg:text-base rounded-lg bg-[#CCDAFE] mx-auto"
        disabled={isUpdating}
        onClick={unsubscribeAll}
      >
        Unsubscribe from all newsletter and services emails
      </button>
    </div>
  );
};

const NewsletterItem = ({
  id,
  name,
  value,
  objKey,
}: {
  name: string;
  id: string;
  value: boolean;
  objKey: string;
}) => {
  return (
    <div
      className="flex text-sm lg:text-lg text-grey font-medium justify-between items-center gap-2 pt-0.5 pb-4 lg:py-6 border-b-[#D7D7D7] "
      style={{borderBottomWidth: "0.2px"}}
    >
      <NotificationCheckMark id={id} label={name} objKey={objKey} value={value} />
      <div className="flex gap-2.5 items-center">
        <p className="text-grey-200 text-base whitespace-nowrap hidden lg:block">
          Subscribe to all
        </p>
      </div>
    </div>
  );
};

const BookingsView = () => {
  const {User, setUser} = useUser();
  const {mutateAsync: profileUpdate, isPending: isUpdating} = useUpdateProfile();
  const appointmentEmails = User!.appointment_emails;
  const allChecked = checkAllChecked(appointmentEmails);
  const [isChecked, setisChecked] = useState(allChecked);

  useEffect(() => {
    setisChecked(checkAllChecked(User!.appointment_emails));
  }, [User]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkedStatus = event.target.checked;

    updateStatus(checkedStatus);
  };

  const updateStatus = (checkedStatus: boolean) => {
    const newData = {
      upcoming_appointments: checkedStatus,
      review_impacts: checkedStatus,
      Offers_in_confirmation_emails: checkedStatus,
    };

    profileUpdate({appointment_emails: newData}).then(() => {
      toast.success("Notification changed successfully");
      setUser((prevState) => {
        if (prevState) {
          return {
            ...prevState,
            appointment_emails: {
              ...newData,
              booking_confirmation_emails: true,
              _id: prevState.appointment_emails._id,
            },
          };
        } else {
          return null;
        }
      });
      setisChecked((prevState) => !prevState);
    });
  };

  return (
    <div className="flex flex-col gap-5 lg:gap-6 py-2">
      <div className="py-3 lg:py-6">
        <div className="flex justify-between items-center gap-2 lg:mb-4">
          <label
            className="text-grey font-medium lg:font-semibold text-base lg:text-2xl"
            htmlFor={"appointment_emails"}
          >
            Appointments emails
          </label>
          <div className="flex gap-2.5 items-center">
            <div className="w-full flex mgap-10 justify-between">
              <input
                checked={isChecked}
                className="hidden peer"
                disabled={isUpdating}
                id={"appointment_emails"}
                name={"appointment_emails"}
                type="checkbox"
                onChange={handleChange}
              />
              <label
                className="ml-auto cursor-pointer block w-12 h-6 rounded-full bg-grey-200 p-1 peer-checked:[&_span]:translate-x-6 peer-checked:bg-blue"
                htmlFor={"appointment_emails"}
              >
                <span className="block h-4 w-4 rounded-full bg-white transition-all" />
              </label>
            </div>
            <p className="text-grey-200 hidden lg:block whitespace-nowrap">Subscribe to all</p>
          </div>
        </div>
        <p className="text-grey-200 w-full md:max-w-[70%] hidden lg:block ">
          Emails you receive after making an appointments. This includes invitations to review the
          properties you stayed in.
        </p>
      </div>
      <BookingsItem
        description="Emails that remind you of your upcoming appointments with all the details you need"
        id="upcoming-appointments"
        name="Upcoming appointments"
        objKey="appointment_emails.upcoming_appointments"
        value={User!.appointment_emails.upcoming_appointments}
      />
      <BookingsItem
        description="Emails inviting you to leave a review on the property you rented"
        id="review-impacts"
        name="Review impacts"
        objKey="appointment_emails.review_impacts"
        value={User!.appointment_emails.review_impacts}
      />
      <BookingsItem
        description="Other product deals and upgrades in your confirmation emails."
        id="offers-confirmation-email"
        name="Offers in confirmation emails"
        objKey="appointment_emails.Offers_in_confirmation_emails"
        value={User!.appointment_emails.Offers_in_confirmation_emails}
      />
      <BookingsItem
        description="You are not able to unsubscribe from booking confirmation emails"
        id="confirmation-emails"
        name="Booking confirmation emails"
        objKey="appointment_emails.booking_confirmation_emails"
        value={User!.appointment_emails.booking_confirmation_emails}
      />
      <button
        className="text-white font-medium px-3 lg:px-4 py-4 lg:py-6 text-sm lg:text-base rounded-lg bg-[#CCDAFE] mx-auto"
        disabled={isUpdating}
        onClick={() => updateStatus(false)}
      >
        Unsubscribe from all booking emails
      </button>
    </div>
  );
};

const BookingsItem = ({
  id,
  name,
  value,
  objKey,
  description,
}: {
  name: string;
  description: string;
  id: string;
  value: boolean;
  objKey: string;
}) => {
  return (
    <div className="py-3 lg:py-6 border-b-[#D7D7D7] " style={{borderBottomWidth: "0.2px"}}>
      <div className="flex justify-between items-center gap-2 lg:mb-4 text-grey font-medium text-base lg:text-lg">
        <NotificationCheckMark id={id} label={name} objKey={objKey} value={value} />
        <div className="flex gap-2.5 items-center">
          <p className="text-grey-200 hidden lg:block text-base whitespace-nowrap">
            Subscribe to all
          </p>
        </div>
      </div>
      <p className="text-grey-200 w-full md:max-w-[70%] hidden lg:block ">{description}</p>
    </div>
  );
};
