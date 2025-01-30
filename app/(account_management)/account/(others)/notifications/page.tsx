import React from "react";
import Image from "next/image";

const NotificationsPage: React.FC = () => {
  return (
    <div className="py-5 lg:py-20 px-5 lg:px-24 text-grey-200">
      <h1 className="text-xl lg:text-2xl font-semibold text-grey mb-3 lg:mb-[100px]">
        Notifications
      </h1>
      <p className="block lg:hidden mb-5 text-sm">
        Exercise your privacy rights and control how your data is used.
      </p>
      <div className={`hidden mx-auto max-w-[783px]`}>
        <div className="flex gap-5 lg:gap-6 rounded-lg p-6 bg-[#E8E8E8] mb-6 items-start ">
          <Image
            alt="close"
            className="cursor-pointer"
            height={24}
            src="/account_management/close1.svg"
            width={24}
          />

          <div className="">
            <p className="mb-1 text-sm lg:text-base">
              Please confirm your email address by clicking on the link we just emailed you. If you
              cannot find the email, you can request a new confirmation email or change your email
              address.
            </p>
            <span className="text-xs">August 26, 2024</span>
          </div>
        </div>
        <div className="flex gap-6 rounded-lg p-6 bg-[#E8E8E8] mb-6 items-start ">
          <Image
            alt="close"
            className="cursor-pointer"
            height={24}
            src="/account_management/close1.svg"
            width={24}
          />

          <div className="">
            <p className="mb-4 text-sm lg:text-base">
              Hello Akin, we detected an unusual attempt as someone is trying to login in your
              account from unverified device. SpaceNG has blocked them but you should check what
              happened. Review your account activity to make sure no one else has access.
            </p>
            <button className="bg-blue text-white font-medium px-2 lg:px-4 py-3 text-sm lg:text-base rounded-lg mb-1 block">
              Check activity
            </button>
            <span className="text-xs">August 26, 2024</span>
          </div>
        </div>
      </div>
      <div className={``}>
        <Image
          alt="Notifications"
          className="mx-auto mb-10"
          height={150}
          src={"/account_management/notification.svg"}
          width={150}
        />
        <p className="text-grey text-center mb-4">Oops! No Notifications Yet!</p>
        <p className="mb-6 text-center">
          Looks like you’ll have to keep checking back for any notifications.
        </p>
      </div>
      {/* <p className="text-center" >
        You have no new notification at this time!
      </p> */}
    </div>
  );
};

export default NotificationsPage;
