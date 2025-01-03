import React, {FormEvent, useState} from "react";
import {toast} from "sonner";

import {useUpdateProfile} from "@/api/profile/update-profile";
import Loader from "@/components/loader/loader";
import {useUser} from "@/context/user";
import {hidePhoneNumber} from "@/lib/utils";

function Phone() {
  const {User, setUser} = useUser();
  const [isEditMode, setEdit] = useState(false);
  const [value, setValue] = useState(User?.phone || "");
  const {mutateAsync: profileUpdate, isPending: isUpdating} = useUpdateProfile();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    profileUpdate({phone: value}).then(() => {
      toast.success("Profile updated successfully");
      setUser((prevState) => {
        if (prevState === null) {
          return null;
        } else {
          const data = {...prevState, phone: value};

          return data;
        }
      });
      setEdit(false);
    });
  };

  const toggleEditMode = () => setEdit((prevState) => !prevState);

  return (
    <form className="" onSubmit={handleSubmit}>
      <div
        className={` ${isEditMode ? "hidden" : "lg:flex"} py-4  justify-between items-start border-grey-200 box-border `}
        style={{borderBottomWidth: "0.1px"}}
      >
        <div className="flex flex-col gap-3">
          <h2 className="font-medium">Phone Number</h2>
          <p className="text-grey-200">{hidePhoneNumber(User?.phone || "")}</p>
        </div>
        <button
          className="text-blue font-medium cursor-pointer hidden lg:block"
          type="button"
          onClick={toggleEditMode}
        >
          Edit
        </button>
        <button
          className="text-blue font-medium cursor-pointer block lg:hidden ml-auto "
          type="button"
          onClick={toggleEditMode}
        >
          Edit
        </button>
      </div>
      <div
        className={` ${isEditMode ? "" : "hidden"}  py-4 border-grey-200 box-border `}
        style={{borderBottomWidth: "0.1px"}}
      >
        <div className="flex justify-between gap-2 mb-3">
          <h2 className="font-medium">Phone number</h2>
          <button
            className="text-blue font-medium cursor-pointer hidden lg:block"
            onClick={toggleEditMode}
          >
            Cancel
          </button>
        </div>
        <p className="text-grey-200 mb-6">
          Workspace or Shortlet you book will use this number if they need to contact you
        </p>
        <div className="flex flex-col gap-1 mb-4">
          <label className="text-grey-200 text-sm" htmlFor={"phone"}>
            Phone number
          </label>
          <input
            className="py-3.5 px-4 outline-none border-grey-200 rounded-lg max-w-[380px] "
            id={"phone"}
            name={"phone"}
            placeholder="+234 8122228990"
            style={{borderWidth: "0.5px"}}
            type="tel"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between lg:justify-end">
          <button
            className="text-blue font-medium cursor-pointer text-sm lg:hidden"
            type="button"
            onClick={toggleEditMode}
          >
            Cancel
          </button>
          <div className="flex gap-4 items-center justify-end">
            <button
              className="py-2 lg:py-3 px-2.5 lg:px-4 text-sm lg:text-base bg-blue rounded-lg text-white"
              disabled={isUpdating || value === User?.phone || !value}
            >
              {isUpdating ? <Loader /> : "Save"}
            </button>
            <button
              className="py-2 lg:py-3 px-2.5 lg:px-4 text-sm lg:text-base border-blue border text-blue rounded-lg bg-white"
              type="button"
              onClick={() => setValue("")}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Phone;
