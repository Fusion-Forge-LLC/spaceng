"use client";
import {useState} from "react";

export default function Privacy() {
  const [privacyBlock, setPrivacyBlock] = useState(false);

  return (
    <div className="w-full text-grey-200">
      <div className={` ${privacyBlock ? "hidden" : ""} md:p-4`}>
        <h1 className="text-lg lg:text-2xl font-semibold mb-2 text-grey">Privacy</h1>
        <p className=" text-sm lg:text-base">
          Exercise your privacy rights and control how your data is used.
        </p>
      </div>

      <div className="py-2 md:p-4 flex flex-col gap-4">
        <div className={` ${privacyBlock ? "hidden" : ""}  py-4 flex justify-between items-start `}>
          <div className="flex flex-col gap-3">
            <h2 className="font-medium text-grey">Privacy settings</h2>
            <div className="">
              <p className=" mb-1.5">akinpeters333@gmail.com</p>
              <p className="">
                Select ‘Manage’ to change your privacy settings and exercise your rights using our
                request form.
              </p>
            </div>
          </div>
          <button
            className="text-blue font-medium cursor-pointer"
            onClick={() => setPrivacyBlock(true)}
          >
            Manage
          </button>
        </div>

        <div className={`${privacyBlock ? "" : "hidden"} py-4`}>
          <h1 className="text-2xl font-semibold mb-4 text-grey">
            Exercise your rights regarding your personal data
          </h1>
          <p className=" mb-10">
            Exercise your privacy rights under local law. To make a request to SpacesNG.com and have
            it routed to the SpacesNG.com privacy team, use the ‘Data subject request form’.
            <br />
            For more information, or to exercise other rights, please take a look at our SpaceNG.com
            Privacy Statement
          </p>
          <div className="mb-6 flex flex-col gap-4">
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm" htmlFor="firstName">
                First name
              </label>
              <input
                className="py-3.5 px-4 rounded-lg w-full border-grey-200 outline-none"
                id="firstName"
                name="firstName"
                placeholder="Lewis"
                style={{borderWidth: "0.5px"}}
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm" htmlFor="lastName">
                Last name
              </label>
              <input
                className="py-3.5 px-4 rounded-lg w-full border-grey-200 outline-none"
                id="lastName"
                name="lastName"
                placeholder="Bimbo"
                style={{borderWidth: "0.5px"}}
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                className="py-3.5 px-4 rounded-lg w-full border-grey-200 outline-none"
                id="email"
                name="email"
                placeholder="akinpeters333@gmail.com"
                style={{borderWidth: "0.5px"}}
                type="email"
              />
            </div>
            <div
              className="py-3.5 px-4 rounded-lg w-full border-grey-200 outline-none bg-[#D7D7D7]"
              style={{borderWidth: "0.5px"}}
            >
              <p>We&apos;ll send an email to this address to verify your identity.</p>
            </div>
          </div>
          <h3 className="font-semibold text-2xl text-grey mb-4">
            Which of the following rights would you like to exercise?
          </h3>
          <form className="p-2.5 flex flex-col gap-6 ">
            <RightsRadioItem
              description="Get a copy of your personal data."
              title="Right of access to personal data"
              value="rightOfAccess"
            />
            <RightsRadioItem
              description="Erase your personal data from our system."
              title="Right to be forgotten"
              value="rightToBeForgotten"
            />
            <RightsRadioItem
              description="Manage your subscription to our mailing lists."
              title="Unsubscribe from email marketing"
              value="unsubscribeFromEmailMarketing"
            />
            <RightsRadioItem
              description="(This is a privacy-specific request. If you're looking to change a booking, you can do so under 'Bookings & Trips' when signed in to your SpacesNG.com account. For customer service assistance, please visit the SpacesNG.com Help Centre)"
              title="Right to correct my personal data"
              value="rightToCorrectMyPersonalData"
            />
            <button
              className="bg-blue text-white font-medium py-3 px-4 w-fit rounded-lg"
              type="submit"
            >
              Submit request form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const RightsRadioItem = ({
  title,
  description,
  value,
}: {
  title: string;
  description: string;
  value: string;
}) => {
  return (
    <div className="flex gap-1 items-start">
      <input className="relative top-[5px]" id={value} name="rights" type="radio" />
      <label htmlFor={value}>
        <h4 className="font-medium text-grey mb-1.5">{title}</h4>
        <p>{description}</p>
      </label>
    </div>
  );
};
