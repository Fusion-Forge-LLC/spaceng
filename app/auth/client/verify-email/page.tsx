"use client";

//import {useState} from "react";

import PrimaryAuthButton from "../components/PrimaryAuthButton";

function VerifyEmail() {
  //const [formData, setFormData] = useState({});

  return (
    <form className="py-10 px-2 lg:px-6 md:text-base w-full">
      <h1 className="text-grey font-semibold text-2xl mb-4">Verify email</h1>
      <p className="text-[#707070] text-sm lg:text-base mb-6">
        A 6 Digit Verification Code Has Been Sent To Your Email Address. Enter The 6 Digit Code
        Below
      </p>
      <PrimaryAuthButton buttonName="Verify Email" className="mb-6" onClick={() => {}} />
      <button className="text-[#707070] font-medium mx-auto block py-2.5">
        Resend verification code
      </button>
    </form>
  );
}

export default VerifyEmail;
