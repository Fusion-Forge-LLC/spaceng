"use client";

//import {useState} from "react";

import PrimaryAuthButton from "../components/PrimaryAuthButton";

function ResetPassword() {
  //const [formData, setFormData] = useState({});

  return (
    <form className="py-10 px-2 lg:px-6 md:text-base w-full">
      <h1 className="text-grey font-semibold text-2xl mb-4">Reset Password</h1>
      <div className="mb-4 flex flex-col gap-1.5 w-full">
        <label className="text-grey" htmlFor="clientNewPassword">
          Enter New Password
        </label>
        <input
          className="border-[#707070] border rounded-lg w-full py-3 lg:py-3.5 pr-12 px-4 flex items-center text-grey placeholder:text-[#707070] focus:outline-none"
          id="clientNewPassword"
          name="clientNewPassword"
          placeholder="New Password"
          type="password"
        />
      </div>
      <div className="mb-6 flex flex-col gap-1.5 w-full">
        <label className="text-grey" htmlFor="conformClientNewPassword">
          Confirm New Password
        </label>
        <input
          className="border-[#707070] border rounded-lg w-full py-3 lg:py-3.5 pr-12 px-4 flex items-center text-grey placeholder:text-[#707070] focus:outline-none"
          id="conformClientNewPassword"
          name="conformClientNewPassword"
          placeholder="Confirm Password"
          type="password"
        />
      </div>
      <PrimaryAuthButton buttonName="Reset Password" onClick={() => {}} />
    </form>
  );
}

export default ResetPassword;
