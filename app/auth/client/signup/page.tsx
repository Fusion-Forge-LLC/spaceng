"use client";

import React, {useState} from "react";
import Image from "next/image";

import EmailInput from "../components/EmailInput";
import PrimaryAuthButton from "../components/PrimaryAuthButton";

function ClientSignUp() {
  const [formData, setFormData] = useState({});
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <form className="py-5 lg:py-10 px-2 lg:px-6 md:text-base w-full">
      <div className="mb-4 flex flex-col gap-1.5 w-full">
        <label className="text-grey" htmlFor="clientName">
          Enter Your Full Name
        </label>
        <input
          className="border-[#707070] border rounded-lg w-full py-3 lg:py-3.5 pr-12 px-3.5 lg:px-4 flex items-center text-grey placeholder:text-[#707070] focus:outline-none"
          id="clientName"
          name="clientName"
          placeholder="Enter Full Name"
          type="text"
        />
      </div>
      <EmailInput className="mb-4" onChange={handleSubmit} />
      <div className="mb-4 flex flex-col gap-1.5 w-full">
        <label className="text-grey" htmlFor="clientPhoneNumber">
          Enter Phone Number
        </label>
        <input
          className="border-[#707070] border rounded-lg w-full py-3 lg:py-3.5 pr-12 px-3.5 lg:px-4  flex items-center text-grey placeholder:text-[#707070] focus:outline-none"
          id="clientPhoneNumber"
          name="clientPhoneNumber"
          placeholder="(+234)"
          type="tel"
        />
      </div>
      <div className="mb-6 flex flex-col gap-1.5 w-full">
        <label className="text-grey" htmlFor="clientPassword">
          Enter Password
        </label>
        <div className="mb-1.5 relative">
          <input
            className="border-[#707070] border rounded-lg w-full py-3 lg:py-3.5 pr-12 px-3.5 lg:px-4 flex items-center text-grey placeholder:text-[#707070] focus:outline-none"
            id="clientPassword"
            name="clientPassword"
            placeholder="Password"
            type="password"
          />
          {/* <Mail /> */}
          <Image
            alt="elements"
            className="absolute m-auto right-4 top-0 bottom-0"
            height={24}
            src="/images/eye.svg"
            width={24}
          />
        </div>
      </div>
      {/* TODO: Extract these validators into a single component with props */}
      <div className="mb-6 flex gap-3.5 flex-wrap">
        <div
          className={`bg-[#707070] text-white rounded-3xl px-1.5 py-1 lg:py-1.5 flex items-center justify-center gap-1.5 w-fit `}
        >
          <span>8 characters</span>
          <Image alt={""} className="" height={12} src="/images/good2.svg" width={12} />
        </div>
        <div
          className={`bg-[#707070] text-white rounded-3xl px-1.5 py-1 lg:py-1.5 flex items-center justify-center gap-1.5 w-fit `}
        >
          <span>Uppercase</span>
          <Image alt={"Validated"} height={12} src="/images/good2.svg" width={12} />
        </div>
        <div
          className={`text-[#707070] bg-white border-grey rounded-3xl px-1.5 py-1 lg:py-1.5 flex items-center justify-center gap-1.5 w-fit `}
          style={{borderWidth: "0.5px"}}
        >
          <span>Lowercase</span>
          <Image alt={"Validated"} className="" height={12} src="/images/good.svg" width={12} />
        </div>
        <div
          className={`bg-[#707070] text-white rounded-3xl px-1.5 py-1 lg:py-1.5 flex items-center justify-center gap-1.5 w-fit `}
        >
          <span>Number</span>
          <Image alt={"Validated"} className="" height={12} src="/images/good2.svg" width={12} />
        </div>
        <div
          className={`bg-[#707070] text-white rounded-3xl px-2 py-1 lg:py-1.5 flex items-center justify-center gap-1.5 w-fit `}
        >
          <span>Special character</span>
          <Image alt={"Validated"} className="" height={12} src="/images/good2.svg" width={12} />
        </div>
      </div>
      <p className="text-[#707070] mb-6">By signing up, you agree to SpacesNG Global Policy</p>
      <div>
        <PrimaryAuthButton buttonName="Sign Up" className="mb-6" onClick={() => {}} />
        <div className="flex flex-col gap-4">
          <button className="outline-none text-[#707070] font-medium flex items-center justify-center gap-1.5 bg-[#F2F2F2] rounded-lg py-3.5 w-full">
            <Image
              alt="google signIn"
              className=""
              height={24}
              src="/images/GoogleIcon.svg"
              width={24}
            />
            <span>Sign Up With Google</span>
          </button>
          <button className="text-[#707070] font-medium flex items-center justify-center gap-1.5 bg-[#F2F2F2] rounded-lg py-3.5 w-full">
            <Image
              alt="facebook SignIn"
              className=""
              height={24}
              src="/images/FacebookIcon.svg"
              width={24}
            />
            <span>Sign Up With Facebook</span>
          </button>
          <div className="text-grey flex gap-2 items-center justify-center py-1.5">
            <p>Don’t have an account?</p>
            <button className="border-none outline-none text-[#707070] font-medium">Sign In</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ClientSignUp;
