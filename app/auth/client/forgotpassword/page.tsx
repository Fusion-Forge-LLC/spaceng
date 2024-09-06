"use client";

import {useState} from "react";

import EmailInput from "../components/EmailInput";
import PrimaryAuthButton from "../components/PrimaryAuthButton";

function ForgotPassword() {
  const [formData, setFormData] = useState({});

  return (
    <form className="py-10 px-6 md:text-base">
      <h1 className="text-grey font-semibold lg:text-2xl mb-4">Request password reset</h1>
      <p className="text-[#707070] lg:text-base mb-4">
        Enter your email address in the form below to request a password reset link
      </p>
      <EmailInput
        className="mb-6"
        onChange={(e) => setFormData({...formData, clientEmail: e.target.value})}
      />
      <PrimaryAuthButton buttonName="Request Password Reset" onClick={() => {}} />
    </form>
  );
}

export default ForgotPassword;
