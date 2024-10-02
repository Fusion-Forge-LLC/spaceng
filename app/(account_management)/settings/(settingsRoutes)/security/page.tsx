"use client";
import {useState} from "react";

export default function Security() {
  type SecurityBlocks = {
    [key: string]: boolean;
  };

  const [securityBlocks, setSecurityBlocks] = useState<SecurityBlocks>({
    password: false,
    twoFactor: false,
    activeSessions: false,
    deleteAccount: false,
  });

  const handleEdit = (blockName: string) => {
    setSecurityBlocks({
      ...securityBlocks,
      [blockName]: !securityBlocks[blockName],
    });
  };

  return (
    <div className="w-full">
      <div className="md:p-4 ">
        <h1 className="text-lg lg:text-2xl font-semibold mb-2">Security</h1>
        <p className="text-grey-200 text-sm lg:text-base ">
          Change your security settings, set up secure authentication or delete your account
        </p>
      </div>
      <div className="py-2 md:p-4 flex flex-col gap-4">
        <div className="">
          <div
            className={` ${securityBlocks.password ? "hidden" : ""} py-4 flex justify-between items-start border-grey-200 box-border `}
            style={{borderBottomWidth: "0.1px"}}
          >
            <div className="flex flex-col gap-3 w-full">
              <h2 className="font-medium">Password</h2>
              <p className="text-grey-200">
                Reset your password regulaly to keep your account secure
              </p>
            </div>
            <button
              className="text-blue font-medium cursor-pointer"
              onClick={() => handleEdit("password")}
            >
              Reset
            </button>
          </div>
          <div
            className={`${securityBlocks.password ? "" : "hidden"} py-4 border-grey-200 box-border`}
            style={{borderBottomWidth: "0.1px"}}
          >
            <div className="flex justify-between gap-2 mb-3">
              <h2 className="font-medium">Password</h2>
              <button
                className="text-blue font-medium cursor-pointer"
                onClick={() => handleEdit("password")}
              >
                Cancel
              </button>
            </div>
            <p className="text-grey-200 mb-3">
              To change your password, we need to send a reset link to your email address
            </p>
            <button
              className="text-blue font-medium cursor-pointer ml-auto block mb-8"
              onClick={() => handleEdit("password")}
            >
              Edit
            </button>
            <button className="py-3 px-4 bg-blue rounded-lg text-white block ml-auto">
              Send email
            </button>
          </div>
        </div>

        <div className="">
          <div
            className={` ${securityBlocks.twoFactor ? "hidden" : ""} py-4 flex justify-between items-start border-grey-200 box-border `}
            style={{borderBottomWidth: "0.1px"}}
          >
            <div className="flex flex-col gap-3">
              <h2 className="font-medium">Two-factor authentication</h2>
              <p className="text-grey-200">
                Increase the security of your account by setting tow-factor authentication
              </p>
            </div>
            <button
              className="text-blue font-medium cursor-pointer"
              onClick={() => handleEdit("twoFactor")}
            >
              Set up
            </button>
          </div>
          <div
            className={`${securityBlocks.twoFactor ? "" : "hidden"} py-4 border-grey-200 box-border`}
            style={{borderBottomWidth: "0.1px"}}
          >
            <div className="flex justify-between gap-2 mb-3">
              <h2 className="font-medium">Two-factor authentication</h2>
              <button
                className="text-blue font-medium cursor-pointer"
                onClick={() => handleEdit("twoFactor")}
              >
                Cancel
              </button>
            </div>
            <p className="text-grey-200 mb-3">
              1. Download an authenticator app
              <span className="mt-3 block">
                If you don’t have an authenticator app installed, please download one. We recommend
                using Google Authenticator or Microsoft Authenticator
              </span>
            </p>
            <button
              className="text-blue font-medium cursor-pointer ml-auto block mb-8"
              onClick={() => handleEdit("twoFactor")}
            >
              Edit
            </button>
            <button className="py-3 px-4 bg-blue rounded-lg text-white block ml-auto">Next</button>
          </div>
        </div>

        <div
          className="py-4 flex justify-between items-start border-grey-200 box-border "
          style={{borderBottomWidth: "0.1px"}}
        >
          <div className="flex flex-col gap-3">
            <h2 className="font-medium">Active sessions</h2>
            <p className="text-grey-200">
              Selecting ‘Sign out’ will sign you out from all devices except this one. The process
              can take up to 10 minutes.
            </p>
          </div>
          <span className="text-blue font-medium cursor-pointer">Sign out</span>
        </div>

        <div
          className="py-4 flex justify-between items-start border-grey-200 box-border "
          style={{borderBottomWidth: "0.1px"}}
        >
          <div className="flex flex-col gap-3">
            <h2 className="font-medium">Delete account</h2>
            <p className="text-grey-200">Permanently delete your SpacesNG.com account</p>
          </div>
          <span className="text-blue font-medium cursor-pointer">Delete account</span>
        </div>
      </div>
    </div>
  );
}
