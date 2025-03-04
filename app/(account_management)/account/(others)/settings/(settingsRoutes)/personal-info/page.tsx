"use client";

import {useState} from "react";

import Fullname from "@/app/(account_management)/_components/settings/fullname";
import Loader from "@/components/loader/loader";
import {useUser} from "@/context/user";
import {hideEmail} from "@/lib/utils";
import Phone from "@/app/(account_management)/_components/settings/phone";
import Dob from "@/app/(account_management)/_components/settings/dob";
import Nationality from "@/app/(account_management)/_components/settings/nationality";
import Gender from "@/app/(account_management)/_components/settings/gender";
import Address from "@/app/(account_management)/_components/settings/address";
import Id from "@/app/(account_management)/_components/settings/id";
import ProfilePicture from "@/app/(account_management)/_components/settings/profile-picture";

type PersonalInfoBlocks = {
  [key: string]: boolean;
};

export default function PersonalInfoPage() {
  const {User, isLoading} = useUser();

  const [personalInfoBlocks, setPersonalInfoBlocks] = useState<PersonalInfoBlocks>({
    fullname: false,
    displayName: false,
    emailAddress: false,
    phone: false,
    dateOfBirth: false,
    nationality: false,
    gender: false,
    address: false,
    governmentId: false,
  });

  if (isLoading) {
    return (
      <div className="py-24 grid">
        <Loader />
      </div>
    );
  }

  if (!User) return;

  const handleEdit = (blockName: string) => {
    setPersonalInfoBlocks({
      ...personalInfoBlocks,
      [blockName]: !personalInfoBlocks[blockName],
    });
  };

  return (
    <div className="w-full">
      <div className="md:p-4 flex items-center justify-between gap-5">
        <div className="">
          <h1 className="text-xl lg:text-2xl font-semibold mb-1 lg:mb-2">Personal info</h1>
          <p className="text-grey-200 text-sm lg:text-base ">
            Update your information and found out how it’s used
          </p>
        </div>
        <ProfilePicture profileImage={User.profile_image} />
      </div>
      <div className="py-2 md:p-4 flex flex-col gap-4">
        <Fullname prevValue={User.fullname} />

        <div className="">
          <div
            className={` ${personalInfoBlocks.emailAddress ? "hidden" : "lg:flex"} py-4  justify-between items-start border-grey-200 box-border `}
            style={{borderBottomWidth: "0.1px"}}
          >
            <div className="flex flex-col gap-3">
              <h2 className="font-medium">Email Address</h2>
              <p className="text-grey-200">{hideEmail(User.email)}</p>
            </div>
            <button
              className="text-blue font-medium cursor-pointer hidden"
              onClick={() => handleEdit("emailAddress")}
            >
              Edit
            </button>
            <button
              className="text-blue font-medium cursor-pointer hidden ml-auto"
              onClick={() => handleEdit("emailAddress")}
            >
              Edit
            </button>
          </div>
          <div
            className={` ${personalInfoBlocks.emailAddress ? "" : "hidden"}  py-4 border-grey-200 box-border `}
            style={{borderBottomWidth: "0.1px"}}
          >
            <div className="flex justify-between gap-2 mb-3">
              <h2 className="font-medium">Email Address</h2>
              <button
                className="text-blue font-medium cursor-pointer hidden lg:block"
                onClick={() => handleEdit("emailAddress")}
              >
                Cancel
              </button>
            </div>
            <p className="text-grey-200 mb-6">Use an address you’ll always have access to</p>
            <div className="flex flex-col gap-1 mb-4">
              <label className="text-grey-200 text-sm" htmlFor="emailAddress">
                Email address
              </label>
              <input
                className="py-3.5 px-4 outline-none border-[#D5D8DA] rounded-lg max-w-[380px] "
                id="emailAddress"
                name="emailAddress"
                placeholder="akinpeters333@gmail.com"
                style={{borderWidth: "0.5px"}}
                type="email"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="text-blue font-medium cursor-pointer text-sm lg:hidden"
                onClick={() => handleEdit("emailAddress")}
              >
                Cancel
              </button>
              <button className="py-2 lg:py-3 px-2.5 lg:px-4 text-sm lg:text-base bg-blue rounded-lg text-white block ml-auto">
                Save
              </button>
            </div>
          </div>
        </div>

        <Phone />

        <Dob />

        <Nationality />

        <Gender />

        <Address />

        <Id />
      </div>
    </div>
  );
}
