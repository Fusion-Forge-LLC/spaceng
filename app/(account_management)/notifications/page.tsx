import React from "react";

const NotificationsPage: React.FC = () => {
  return (
    <div className="py-6 lg:py-20 px-5 lg:px-24 text-grey-200">
      <h1 className="text-2xl font-semibold text-grey mb-[100px]">Notifications</h1>
      <div className="mx-auto max-w-[783px] ">
        <div className="flex gap-6 rounded-lg p-6 bg-[#E8E8E8] mb-6 ">
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
              fill="#434343"
            />
          </svg>

          <div className="">
            <p className="mb-1">
              Please confirm your email address by clicking on the link we just emailed you. If you
              cannot find the email, you can request a new confirmation email or change your email
              address.
            </p>
            <span className="text-xs">August 26, 2024</span>
          </div>
        </div>
        <div className="flex gap-6 rounded-lg p-6 bg-[#E8E8E8] mb-6 ">
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
              fill="#434343"
            />
          </svg>

          <div className="">
            <p className="mb-4">
              Hello Akin, we detected an unusual attempt as someone is trying to login in your
              account from unverified device. SpaceNG has blocked them but you should check what
              happened. Review your account activity to make sure no one else has access.
            </p>
            <button className="bg-blue text-white font-medium px-4 py-3 rounded-lg mb-1 block">
              Check activity
            </button>
            <span className="text-xs">August 26, 2024</span>
          </div>
        </div>
      </div>
      {/* <p className="text-center" >
        You have no new notification at this time!
      </p> */}
    </div>
  );
};

export default NotificationsPage;
