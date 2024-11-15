"use client";

import {ChangeEvent, useState} from "react";

import EmailInput from "../components/EmailInput";
import PrimaryAuthButton from "../components/PrimaryAuthButton";

function ForgotPassword() {
  const [formData, setFormData] = useState({});

  return (
    <form className="py-10 px-2 lg:px-6 md:text-base w-full">
      <h1 className="text-grey font-semibold text-2xl mb-4">Request password reset</h1>
      <p className="text-[#707070] text-sm lg:text-base mb-4">
        Enter your email address in the form below to request a password reset link
      </p>
      <EmailInput
        className="mb-6"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFormData({...formData, clientEmail: e.target.value})
        }
      />
      <PrimaryAuthButton buttonName="Request Password Reset" onClick={() => {}} />
    </form>
  );
}

export default ForgotPassword;
