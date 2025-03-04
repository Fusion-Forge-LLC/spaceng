import React, {FormEvent, useState} from "react";
import {toast} from "sonner";

import {useUpdateProfile} from "@/api/profile/update-profile";
import Loader from "@/components/loader/loader";
import {useUser} from "@/context/user";

function Dob() {
  const {User, setUser} = useUser();
  const [isEditMode, setEdit] = useState(false);
  const [value, setValue] = useState("");
  const {mutateAsync: profileUpdate, isPending: isUpdating} = useUpdateProfile();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    profileUpdate({date_of_birth: value}).then(() => {
      toast.success("Profile updated successfully");
      setUser((prevState) => {
        if (prevState === null) {
          return null;
        } else {
          const data = {...prevState, date_of_birth: value};

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
          <h2 className="font-medium">Date of birth</h2>
          <p className="text-grey-200">
            {User?.date_of_birth
              ? new Date(User?.date_of_birth).toLocaleDateString()
              : "Enter your date of birth"}
          </p>
        </div>
        <button
          className="text-blue font-medium cursor-pointer hidden lg:block"
          type="button"
          onClick={toggleEditMode}
        >
          Edit
        </button>
        <button
          className="text-blue font-medium cursor-pointer block lg:hidden ml-auto"
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
        <div className="flex justify-between gap-2 mb-2">
          <h2 className="font-medium">Date of birth</h2>
          <button
            className="text-blue font-medium cursor-pointer hidden lg:block"
            type="button"
            onClick={toggleEditMode}
          >
            Cancel
          </button>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          {/* <label className="text-grey-200 text-sm" htmlFor="dateOfBirth">
                Date of birth
              </label> */}
          <input
            className="py-3.5 px-4 outline-none border-grey-200 rounded-lg max-w-[380px] "
            id="date_of_birth"
            name="date_of_birth"
            style={{borderWidth: "0.5px"}}
            type="date"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
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
            className="py-2 lg:py-3 px-2.5 lg:px-4 text-sm lg:text-base bg-blue rounded-lg text-white block ml-auto"
            disabled={isUpdating || value === User?.date_of_birth || !value}
          >
            {isUpdating ? <Loader /> : "Save"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default Dob;
