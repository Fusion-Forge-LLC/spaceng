"use client";

import {Plus} from "lucide-react";
import {useState} from "react";

export default function Renters() {
  const [rentersBlock, setRentersBlock] = useState(false);

  return (
    <div className="w-full text-grey-200">
      <div className="md:p-4 ">
        <h1 className="text-lg lg:text-2xl font-semibold mb-2 text-grey ">Other renters</h1>
        <p className="text-grey-200 text-sm lg:text-base ">
          Add or edit information about the people you want to share space with
        </p>
      </div>
      <div className={` ${rentersBlock ? "hidden" : ""} py-2 md:p-4`}>
        <button
          className="ml-auto py-3 px-4 flex items-center gap-2 bg-blue font-medium text-white rounded-lg"
          onClick={() => setRentersBlock(true)}
        >
          <Plus size={24} />
          Add new renters
        </button>
      </div>

      <div className="py-2 md:p-4 flex flex-col gap-4">
        <div className={`${rentersBlock ? "" : "hidden"} py-4`}>
          <button
            className="text-blue font-medium cursor-pointer mb-6 block ml-auto"
            onClick={() => setRentersBlock(false)}
          >
            Remove
          </button>
          <div className="w-full max-w-[600px] mb-4">
            <div className="flex flex-col gap-1 mb-4">
              <label className="text-grey-200 text-sm " htmlFor="firstName">
                First name
              </label>
              <input
                className="py-3.5 px-4 outline-none border-grey-200 rounded-lg "
                id="firstName"
                name="firstName"
                placeholder="Lewis"
                style={{borderWidth: "0.5px"}}
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1 mb-6">
              <label className="text-grey-200 text-sm " htmlFor="lastName">
                Last name
              </label>
              <input
                className="py-3.5 px-4 outline-none border-grey-200 rounded-lg "
                id="lastName"
                name="lastName"
                placeholder="Bimbo"
                style={{borderWidth: "0.5px"}}
                type="text"
              />
              <p className="text-xs">
                Please enter this person’s name exactly as written on their government ID
              </p>
            </div>
            <div className="flex flex-col gap-1 mb-6">
              <label className="text-grey-200 text-sm " htmlFor="dateOfBirth">
                Date of birth
              </label>
              <input
                className="py-3.5 px-4 outline-none border-grey-200 rounded-lg "
                id="dateOfBirth"
                name="dateOfBirth"
                placeholder=""
                style={{borderWidth: "0.5px"}}
                type="date"
              />
              <p className="text-xs">
                It’s important to enter a correct date of birth, as these details can be used for
                booking
              </p>
            </div>
            <div className="flex flex-col gap-1 mb-6">
              <label className="text-grey-200 text-sm " htmlFor="gender">
                Select your gender
              </label>
              <input
                className="py-3.5 px-4 outline-none border-grey-200 rounded-lg "
                id="gender"
                name="gender"
                placeholder="Female"
                style={{borderWidth: "0.5px"}}
                type="text"
              />
              <p className="text-xs">
                {`Please select the gender written on this person's government ID`}
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <input className="relative top-1.5" id="" name="" type="checkbox" />
              <p>
                I confirm that I’m authorised to provide the personal data of any co-renter to
                SpaceNG for this service. In addition, I confirm that I’ve informed the other renter
                that I’m providing their personal data to SpaceNG
              </p>
            </div>
          </div>
          <button className="py-3 px-4 bg-blue rounded-lg text-white block ml-auto">Save</button>
        </div>
      </div>
    </div>
  );
}
