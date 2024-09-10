import React from "react";

import {cn} from "@/lib/utils";

import FormControl from "../../../_components/form-control/form-control";
function Page() {
  return (
    <div className="business-auth-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-poppin">
      <h3 className="auth-title mb-2">Create a New Password!</h3>
      <p className="text-grey-200">Enter a new password and make sure you don’t forget this time</p>
      <form action="" className="space-y-6 py-6">
        <FormControl isPassword id="new_password" label="New Password" type="password" />
        <FormControl isPassword id="confirm_password" label="Confirm Password" type="password" />
        <div className="pt-4">
          <button
            className={cn(
              "business-auth-button font-medium py-3 text-white bg-blue hover:bg-white hover:text-blue w-full",
            )}
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}

export default Page;
