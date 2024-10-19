"use client";
import Image from "next/image";
import {useState} from "react";

export default function PersonalInfoPage() {
  type PersonalInfoBlocks = {
    [key: string]: boolean;
  };

  const [personalInfoBlocks, setPersonalInfoBlocks] = useState<PersonalInfoBlocks>({
    name: false,
    displayName: false,
    emailAddress: false,
    phoneNumber: false,
    dateOfBirth: false,
    nationality: false,
    gender: false,
    address: false,
    governmentId: false,
  });

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
        <Image
          alt="profile picture"
          className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
          height={64}
          src={"/account_management/Image holder.svg"}
          width={64}
        />
      </div>
      <div className="py-2 md:p-4 flex flex-col gap-4">
        <div className="">
          <div
            className={` ${personalInfoBlocks.name ? "hidden" : "lg:flex"} py-4  justify-between items-start box-border `}
            style={{borderBottomWidth: "0.1px"}}
          >
            <div className="flex flex-col gap-3">
              <h2 className="font-medium">Name</h2>
              <p className="text-grey-200">Akin Peters</p>
            </div>
            <button
              className="text-blue font-medium cursor-pointer hidden lg:block"
              onClick={() => handleEdit("name")}
            >
              Edit
            </button>
            <button
              className="text-blue font-medium cursor-pointer block lg:hidden ml-auto "
              onClick={() => handleEdit("name")}
            >
              Edit
            </button>
          </div>
          <div
            className={`${personalInfoBlocks.name ? "" : "hidden"} py-4 border-grey-200 box-border`}
            style={{borderBottomWidth: "0.1px"}}
          >
            <div className="flex justify-between gap-2 mb-3">
              <h2 className="font-medium">Name</h2>
              <button
                className="text-blue font-medium cursor-pointer hidden lg:block"
                onClick={() => handleEdit("name")}
              >
                Cancel
              </button>
            </div>
            <p className="text-grey-200 mb-6 hidden lg:block">
              Make sure the name match the name on your government ID
            </p>
            <div className="flex flex-col md:flex-row gap-5 lg:gap-6 mb-4">
              <div className="flex flex-col gap-1">
                <label className="text-grey-200 text-sm" htmlFor="firstName">
                  First name on ID
                </label>
                <input
                  className="py-3.5 px-4 outline-none border-[#D5D8DA] rounded-lg"
                  id="firstName"
                  name="firstName"
                  placeholder="Akin"
                  style={{borderWidth: "0.5px"}}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-grey-200 text-sm" htmlFor="lastName">
                  Last name on ID
                </label>
                <input
                  className="py-3.5 px-4 outline-none border-[#D5D8DA] rounded-lg"
                  id="lastName"
                  name="lastName"
                  placeholder="Peters"
                  style={{borderWidth: "0.5px"}}
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="text-blue font-medium cursor-pointer text-sm lg:hidden"
                onClick={() => handleEdit("name")}
              >
                Cancel
              </button>
              <button className="py-2 lg:py-3 px-2.5 lg:px-4 text-sm lg:text-base bg-blue rounded-lg text-white block ml-auto">
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div
            className={` ${personalInfoBlocks.displayName ? "hidden" : "lg:flex"} py-4  justify-between items-start border-grey-200 box-border `}
            style={{borderBottomWidth: "0.1px"}}
          >
            <div className="flex flex-col gap-3">
              <h2 className="font-medium">Display name</h2>
              <p className="text-grey-200">Choose a display name</p>
            </div>
            <button
              className="text-blue font-medium cursor-pointer hidden lg:block"
              onClick={() => handleEdit("displayName")}
            >
              Edit
            </button>
            <button
              className="text-blue font-medium cursor-pointer block lg:hidden ml-auto"
              onClick={() => handleEdit("displayName")}
            >
              Edit
            </button>
          </div>
          <div
            className={` ${personalInfoBlocks.displayName ? "" : "hidden"}  py-4 border-grey-200 box-border `}
            style={{borderBottomWidth: "0.1px"}}
          >
            <div className="flex justify-between gap-2 mb-3">
              <h2 className="font-medium">Display name</h2>
              <button
                className="text-blue font-medium cursor-pointer hidden lg:block"
                onClick={() => handleEdit("displayName")}
              >
                Cancel
              </button>
            </div>
            <p className="text-grey-200 mb-6">
              This how your first name will appear to hosts and guests
            </p>
            <div className="flex flex-col gap-1 mb-4">
              <label className="text-grey-200 text-sm" htmlFor="displayName">
                Preferred name (optional)
              </label>
              <input
                className="py-3.5 px-4 outline-none border-[#D5D8DA] rounded-lg max-w-[380px] "
                id="firstName"
                name="firstName"
                placeholder="Peters"
                style={{borderWidth: "0.5px"}}
                type="text"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="text-blue font-medium cursor-pointer text-sm lg:hidden"
                onClick={() => handleEdit("displayName")}
              >
                Cancel
              </button>
              <button className="py-2 lg:py-3 px-2.5 lg:px-4 text-sm lg:text-base bg-blue rounded-lg text-white block ml-auto">
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div
            className={` ${personalInfoBlocks.emailAddress ? "hidden" : "lg:flex"} py-4  justify-between items-start border-grey-200 box-border `}
            style={{borderBottomWidth: "0.1px"}}
          >
            <div className="flex flex-col gap-3">
              <h2 className="font-medium">Email Address</h2>
              <p className="text-grey-200">aki***ers33@gmail.com</p>
            </div>
            <button
              className="text-blue font-medium cursor-pointer hidden lg:block"
              onClick={() => handleEdit("emailAddress")}
            >
              Edit
            </button>
            <button
              className="text-blue font-medium cursor-pointer block lg:hidden ml-auto"
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

        <div className="">
          <div
            className={` ${personalInfoBlocks.phoneNumber ? "hidden" : "lg:flex"} py-4  justify-between items-start border-grey-200 box-border `}
            style={{borderBottomWidth: "0.1px"}}
          >
            <div className="flex flex-col gap-3">
              <h2 className="font-medium">Phone Number</h2>
              <p className="text-grey-200">+2348968***890</p>
            </div>
            <button
              className="text-blue font-medium cursor-pointer hidden lg:block"
              onClick={() => handleEdit("phoneNumber")}
            >
              Edit
            </button>
            <button
              className="text-blue font-medium cursor-pointer block lg:hidden ml-auto "
              onClick={() => handleEdit("phoneNumber")}
            >
              Edit
            </button>
          </div>
          <div
            className={` ${personalInfoBlocks.phoneNumber ? "" : "hidden"}  py-4 border-grey-200 box-border `}
            style={{borderBottomWidth: "0.1px"}}
          >
            <div className="flex justify-between gap-2 mb-3">
              <h2 className="font-medium">Phone number</h2>
              <button
                className="text-blue font-medium cursor-pointer hidden lg:block"
                onClick={() => handleEdit("phoneNumber")}
              >
                Cancel
              </button>
            </div>
            <p className="text-grey-200 mb-6">
              Workspace or Shortlet you book will use this number if they need to contact you
            </p>
            <div className="flex flex-col gap-1 mb-4">
              <label className="text-grey-200 text-sm" htmlFor="phoneNumber">
                Phone number
              </label>
              <input
                className="py-3.5 px-4 outline-none border-grey-200 rounded-lg max-w-[380px] "
                id="phoneNumber"
                name="phoneNumber"
                placeholder="+234 8122228990"
                style={{borderWidth: "0.5px"}}
                type="tel"
              />
            </div>
            <div className="flex items-center justify-between lg:justify-end">
              <button
                className="text-blue font-medium cursor-pointer text-sm lg:hidden"
                onClick={() => handleEdit("phoneNumber")}
              >
                Cancel
              </button>
              <div className="flex gap-4 items-center justify-end">
                <button className="py-2 lg:py-3 px-2.5 lg:px-4 text-sm lg:text-base bg-blue rounded-lg text-white">
                  Save
                </button>
                <button className="py-2 lg:py-3 px-2.5 lg:px-4 text-sm lg:text-base border-blue border text-blue rounded-lg bg-white">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            className={` ${personalInfoBlocks.dateOfBirth ? "hidden" : "lg:flex"} py-4  justify-between items-start border-grey-200 box-border `}
            style={{borderBottomWidth: "0.1px"}}
          >
            <div className="flex flex-col gap-3">
              <h2 className="font-medium">Date of birth</h2>
              <p className="text-grey-200">Enter your date of birth</p>
            </div>
            <button
              className="text-blue font-medium cursor-pointer hidden lg:block"
              onClick={() => handleEdit("dateOfBirth")}
            >
              Edit
            </button>
            <button
              className="text-blue font-medium cursor-pointer block lg:hidden ml-auto"
              onClick={() => handleEdit("dateOfBirth")}
            >
              Edit
            </button>
          </div>
          <div
            className={` ${personalInfoBlocks.dateOfBirth ? "" : "hidden"}  py-4 border-grey-200 box-border `}
            style={{borderBottomWidth: "0.1px"}}
          >
            <div className="flex justify-between gap-2 mb-2">
              <h2 className="font-medium">Date of birth</h2>
              <button
                className="text-blue font-medium cursor-pointer hidden lg:block"
                onClick={() => handleEdit("dateOfBirth")}
              >
                Cancel
              </button>
            </div>
            <div className="flex flex-col gap-1 mb-4">
              {/* <label className="text-grey-200 text-sm" htmlFor="dateOfBirth">
                Date of birth
              </label> */}
              <input
                className="py-3.5 px-4 outline-none border-grey-200 rounded-lg max-w-[380px] "
                id="dateOfBirth"
                name="dateOfBirth"
                style={{borderWidth: "0.5px"}}
                type="date"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="text-blue font-medium cursor-pointer text-sm lg:hidden"
                onClick={() => handleEdit("dateOfBirth")}
              >
                Cancel
              </button>
              <button className="py-2 lg:py-3 px-2.5 lg:px-4 text-sm lg:text-base bg-blue rounded-lg text-white block ml-auto">
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div
            className={` ${personalInfoBlocks.nationality ? "hidden" : "lg:flex"} py-4  justify-between items-start border-grey-200 box-border `}
            style={{borderBottomWidth: "0.1px"}}
          >
            <div className="flex flex-col gap-3">
              <h2 className="font-medium">Nationality</h2>
              <p className="text-grey-200">Select the country/ region you’re from</p>
            </div>
            <button
              className="text-blue font-medium cursor-pointer hidden lg:block"
              onClick={() => handleEdit("nationality")}
            >
              Edit
            </button>
            <button
              className="text-blue font-medium cursor-pointer block lg:hidden ml-auto"
              onClick={() => handleEdit("nationality")}
            >
              Edit
            </button>
          </div>
          <div
            className={` ${personalInfoBlocks.nationality ? "" : "hidden"}  py-4 border-grey-200 box-border `}
            style={{borderBottomWidth: "0.1px"}}
          >
            <div className="flex justify-between gap-2 mb-2">
              <h2 className="font-medium">Nationality</h2>
              <button
                className="text-blue font-medium cursor-pointer hidden lg:block"
                onClick={() => handleEdit("nationality")}
              >
                Cancel
              </button>
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <label className="text-grey-200" htmlFor="nationality">
                Select the region/ country you’re from
              </label>
              <input
                className="py-3.5 px-4 outline-none border-grey-200 rounded-lg max-w-[380px] "
                id="nationality"
                name="nationality"
                placeholder="Nigeria"
                style={{borderWidth: "0.5px"}}
                type="text"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="text-blue font-medium cursor-pointer text-sm lg:hidden"
                onClick={() => handleEdit("nationality")}
              >
                Cancel
              </button>
              <button className="py-2 lg:py-3 px-2.5 lg:px-4 text-sm lg:text-base bg-blue rounded-lg text-white block ml-auto">
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div
            className={` ${personalInfoBlocks.gender ? "hidden" : "lg:flex"} py-4  justify-between items-start border-grey-200 box-border `}
            style={{borderBottomWidth: "0.1px"}}
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">
                <h2 className="font-medium">Gender</h2>
                <p className="text-grey-200">Select your gender</p>
              </div>
            </div>
            <button
              className="text-blue font-medium cursor-pointer hidden lg:block"
              onClick={() => handleEdit("gender")}
            >
              Edit
            </button>
            <button
              className="text-blue font-medium cursor-pointer block lg:hidden ml-auto"
              onClick={() => handleEdit("gender")}
            >
              Edit
            </button>
          </div>
          <div
            className={` ${personalInfoBlocks.gender ? "" : "hidden"}  py-4 border-grey-200 box-border `}
            style={{borderBottomWidth: "0.1px"}}
          >
            <div className="flex justify-between gap-2 mb-2">
              <h2 className="font-medium">Gender</h2>
              <button
                className="text-blue font-medium cursor-pointer hidden lg:block"
                onClick={() => handleEdit("gender")}
              >
                Cancel
              </button>
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <label className="text-grey-200" htmlFor="gender">
                Select your gender
              </label>
              <input
                className="py-3.5 px-4 outline-none border-grey-200 rounded-lg max-w-[380px] "
                id="gender"
                name="gender"
                placeholder="Male"
                style={{borderWidth: "0.5px"}}
                type="text"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="text-blue font-medium cursor-pointer text-sm lg:hidden"
                onClick={() => handleEdit("gender")}
              >
                Cancel
              </button>
              <button className="py-2 lg:py-3 px-2.5 lg:px-4 text-sm lg:text-base bg-blue rounded-lg text-white block ml-auto">
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div
            className={` ${personalInfoBlocks.address ? "hidden" : "lg:flex"} py-4  justify-between items-start border-grey-200 box-border `}
            style={{borderBottomWidth: "0.1px"}}
          >
            <div className="flex flex-col gap-3">
              <h2 className="font-medium">Address</h2>
              <p className="text-grey-200">Enter your address</p>
            </div>
            <button
              className="text-blue font-medium cursor-pointer hidden lg:block"
              onClick={() => handleEdit("address")}
            >
              Edit
            </button>
            <button
              className="text-blue font-medium cursor-pointer block lg:hidden ml-auto"
              onClick={() => handleEdit("address")}
            >
              Edit
            </button>
          </div>
          <div
            className={` ${personalInfoBlocks.address ? "" : "hidden"}  py-4 border-grey-200 box-border `}
            style={{borderBottomWidth: "0.1px"}}
          >
            <div className="flex justify-between gap-2 mb-2">
              <h2 className="font-medium">Address</h2>
              <button
                className="text-blue font-medium cursor-pointer hidden lg:block"
                onClick={() => handleEdit("address")}
              >
                Cancel
              </button>
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <label className="text-grey-200" htmlFor="address">
                Select the region/ country you’re from
              </label>
              <input
                className="py-3.5 px-4 outline-none border-grey-200 rounded-lg max-w-[399px] "
                id="address"
                name="address"
                placeholder="Nigeria"
                style={{borderWidth: "0.5px"}}
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <label className="text-grey-200" htmlFor="address">
                Address
              </label>
              <input
                className="py-3.5 px-4 outline-none border-grey-200 rounded-lg max-w-[399px] "
                id="address"
                name="address"
                placeholder="No 6 park, Agbowo Ikeja"
                style={{borderWidth: "0.5px"}}
                type="text"
              />
            </div>
            <div className="flex gap-4 mb-4 items-center">
              <div className="flex flex-col gap-1 mb-4">
                <label className="text-grey-200" htmlFor="address">
                  Town/city
                </label>
                <input
                  className="py-3.5 px-3 lg:px-4 outline-none border-grey-200 rounded-lg w-full max-w-[191px] "
                  id="address"
                  name="address"
                  placeholder="Lagos"
                  style={{borderWidth: "0.5px"}}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1 mb-4">
                <label className="text-grey-200" htmlFor="address">
                  Postcode
                </label>
                <input
                  className="py-3.5 px-3 lg:px-4 outline-none border-grey-200 rounded-lg w-full max-w-[191px] "
                  id="address"
                  name="address"
                  placeholder="567871"
                  style={{borderWidth: "0.5px"}}
                  type="text"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="text-blue font-medium cursor-pointer text-sm lg:hidden"
                onClick={() => handleEdit("address")}
              >
                Cancel
              </button>
              <button className="py-2 lg:py-3 px-2.5 lg:px-4 text-sm lg:text-base bg-blue rounded-lg text-white block ml-auto">
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div
            className={` ${personalInfoBlocks.governmentId ? "hidden" : "lg:flex"} py-4  justify-between items-start border-grey-200 box-border `}
            style={{borderBottomWidth: "0.1px"}}
          >
            <div className="flex flex-col gap-3">
              <h2 className="font-medium">Government ID</h2>
              <p className="text-grey-200">Not provided</p>
            </div>
            <button
              className="text-blue font-medium cursor-pointer hidden lg:block"
              onClick={() => handleEdit("governmentId")}
            >
              Add
            </button>
            <button
              className="text-blue font-medium cursor-pointer block lg:hidden ml-auto"
              onClick={() => handleEdit("governmentId")}
            >
              Add
            </button>
          </div>
          <div className={`${personalInfoBlocks.governmentId ? "" : "hidden"} `}>
            <div className="flex justify-between gap-2 mb-3">
              <h2 className="font-medium">Government ID</h2>
              <button
                className="text-blue font-medium cursor-pointer hidden lg:block"
                onClick={() => handleEdit("governmentId")}
              >
                Cancel
              </button>
            </div>
            <p className="text-grey-200 mb-6">
              We’ll need you to add an official Government ID. This step helps to make sure it’s
              really you
            </p>
            <div className="flex flex-col md:flex-row gap-10 lg:gap-7 mb-4">
              <div className="w-full flex-1">
                <div
                  className="lg:border-grey-200 lg:box-border flex justify-between py-1 lg:py-4 mb-4 w-full text-grey font-semibold"
                  style={{borderBottomWidth: "0.1px"}}
                >
                  Take a photo with your webcam
                  <svg
                    fill="none"
                    height="17"
                    viewBox="0 0 16 17"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="8.78516" fill="#434343" r="8" />
                    <circle cx="8" cy="8.78516" fill="#D9D9D9" r="4" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="text-blue font-medium cursor-pointer text-sm lg:hidden"
                    onClick={() => handleEdit("governmentId")}
                  >
                    Cancel
                  </button>
                  <button className="py-2 lg:py-3 px-2.5 lg:px-4 text-sm lg:text-base bg-blue rounded-lg text-white block ml-auto">
                    Save
                  </button>
                </div>
              </div>
              <div className="flex-1 border border-grey-200 p-5 rounded-lg">
                <h3 className="text-grey font-semibold mb-3.5">Your Privacy</h3>
                <p className="text-grey-200">
                  We aim to keep the data you share during this process private, safe, and secure.
                  Learn more in our <span className="font-bold">Privacy Policy</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
