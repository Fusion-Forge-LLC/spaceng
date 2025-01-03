import React, {FormEvent, useState} from "react";
import {toast} from "sonner";

import {useUpdateProfile} from "@/api/profile/update-profile";
import Loader from "@/components/loader/loader";
import {useUser} from "@/context/user";

function Fullname({prevValue}: {prevValue: string}) {
  const {User, setUser} = useUser();
  const [editMode, setEdit] = useState(false);
  const [value, setValue] = useState(prevValue);
  const {mutateAsync: profileUpdate, isPending: isUpdating} = useUpdateProfile();

  const toggleEditMode = () => setEdit((prevState) => !prevState);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    profileUpdate({fullname: value}).then(() => {
      toast.success("Profile updated successfully");
      setUser((prevState) => {
        if (prevState === null) {
          return null;
        } else {
          const data = {...prevState, fullname: value};

          return data;
        }
      });
      setEdit(false);
    });
  };

  return (
    <div className="">
      <div
        className={` ${editMode ? "hidden" : "lg:flex"} py-4  justify-between items-start box-border `}
        style={{borderBottomWidth: "0.1px"}}
      >
        <div className="flex flex-col gap-3">
          <h2 className="font-medium">Fullname</h2>
          <p className="text-grey-200 capitalize">{User?.fullname}</p>
        </div>
        <button
          className="text-blue font-medium cursor-pointer hidden lg:block"
          onClick={toggleEditMode}
        >
          Edit
        </button>
        <button
          className="text-blue font-medium cursor-pointer block lg:hidden ml-auto "
          onClick={toggleEditMode}
        >
          Edit
        </button>
      </div>
      <form
        className={`${editMode ? "" : "hidden"} py-4 border-grey-200 box-border`}
        style={{borderBottomWidth: "0.1px"}}
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between gap-2 mb-3">
          <h2 className="font-medium">Name</h2>
          <button
            className="text-blue font-medium cursor-pointer hidden lg:block"
            type="button"
            onClick={toggleEditMode}
          >
            Cancel
          </button>
        </div>
        <p className="text-grey-200 mb-6 hidden lg:block">
          Make sure the name match the name on your government ID
        </p>
        <div className="flex flex-col md:flex-row gap-5 lg:gap-6 mb-4">
          <div className="flex flex-col gap-1">
            <label className="text-grey-200 text-sm" htmlFor="lastName">
              Fullname on ID
            </label>
            <input
              className="py-3.5 px-4 outline-none border-[#D5D8DA] rounded-lg"
              id="fullname"
              name="fullname"
              placeholder="Peters"
              style={{borderWidth: "0.5px"}}
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="text-blue font-medium cursor-pointer text-sm lg:hidden"
            type="button"
            onClick={toggleEditMode}
          >
            Cancel
          </button>
          <button
            className="py-2 lg:py-3 px-2.5 lg:px-4 text-sm lg:text-base bg-blue rounded-lg text-white block ml-auto hover:opacity-75 disabled:cursor-not-allowed disabled:hover:opacity-50 disabled:opacity-50"
            disabled={isUpdating || value === prevValue || !value}
          >
            {isUpdating ? <Loader /> : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Fullname;
