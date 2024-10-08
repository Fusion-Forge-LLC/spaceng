"use client";

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";

import EmailInput from "../components/EmailInput";
import PrimaryAuthButton from "../components/PrimaryAuthButton";

function ClientSignIn() {
  const [formData, setFormData] = useState({});
  // eslint-disable-next-line no-undef
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <form className="py-5 lg:py-10 px-2 lg:px-6 md:text-base w-full">
      <EmailInput className="mb-4" onChange={handleSubmit} />
      <div className="mb-6 flex flex-col gap-1.5 w-full">
        <label className="text-grey" htmlFor="clientPassword">
          Enter Password
        </label>
        <div className="mb-1.5 relative">
          <input
            className="border-[#707070] border rounded-lg w-full py-3.5 pr-12 px-4 flex items-center text-grey placeholder:text-[#707070] focus:outline-none"
            id="clientPassword"
            name="clientPassword"
            placeholder="Password"
            type="password"
          />
          <Image
            alt="elements"
            className="absolute m-auto right-4 top-0 bottom-0"
            height={24}
            src="/images/eye.svg"
            width={24}
          />
        </div>
        <Link href={"/auth/client/forgot-password"}>
          <span className="text-[#707070] text-right font-medium">Forget Password?</span>
        </Link>
      </div>
      <div>
        <PrimaryAuthButton buttonName="Sign In" className="mb-6" onClick={() => {}} />
        <div className="flex flex-col gap-4">
          <button className="outline-none text-[#707070] font-medium flex items-center justify-center gap-1.5 bg-[#F2F2F2] rounded-lg py-3.5 w-full">
            <Image
              alt="google signIn"
              className=""
              height={24}
              src="/images/GoogleIcon.svg"
              width={24}
            />
            <span>Sign In With Google</span>
          </button>
          <button className="text-[#707070] font-medium flex items-center justify-center gap-1.5 bg-[#F2F2F2] rounded-lg py-3.5 w-full">
            <Image
              alt="facebook SignIn"
              className=""
              height={24}
              src="/images/FacebookIcon.svg"
              width={24}
            />
            <span>Sign In With Facebook</span>
          </button>
          <div className="text-grey flex gap-2 items-center justify-center py-1.5">
            <p>Don’t have an account?</p>
            <button className="border-none outline-none text-[#707070] font-medium">Sign Up</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ClientSignIn;
