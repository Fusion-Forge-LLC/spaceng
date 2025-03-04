import React, {FormEvent, useState} from "react";
import {toast} from "sonner";

import {useUpdateProfile} from "@/api/profile/update-profile";
import Loader from "@/components/loader/loader";
import {useUser} from "@/context/user";

function Gender() {
  const {User, setUser} = useUser();
  const [isEditMode, setEdit] = useState(false);
  const [value, setValue] = useState(User?.gender || "");
  const {mutateAsync: profileUpdate, isPending: isUpdating} = useUpdateProfile();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    profileUpdate({gender: value}).then(() => {
      toast.success("Profile updated successfully");
      setUser((prevState) => {
        if (prevState === null) {
          return null;
        } else {
          const data = {...prevState, gender: value};

          return data;
        }
      });
      setEdit(false);
    });
  };

  const toggleEditMode = () => setEdit((prevState) => !prevState);

  return (
    <div className="">
      <div
        className={` ${isEditMode ? "hidden" : "lg:flex"} py-4  justify-between items-start border-grey-200 box-border `}
        style={{borderBottomWidth: "0.1px"}}
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <h2 className="font-medium">Gender</h2>
            <p className="text-grey-200 capitalize">{User?.gender || "Select your gender"}</p>
          </div>
        </div>
        <button
          className="text-blue font-medium cursor-pointer hidden lg:block"
          onClick={toggleEditMode}
        >
          Edit
        </button>
        <button
          className="text-blue font-medium cursor-pointer block lg:hidden ml-auto"
          onClick={toggleEditMode}
        >
          Edit
        </button>
      </div>
      <form
        className={` ${isEditMode ? "" : "hidden"}  py-4 border-grey-200 box-border `}
        style={{borderBottomWidth: "0.1px"}}
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between gap-2 mb-2">
          <h2 className="font-medium">Gender</h2>
          <button
            className="text-blue font-medium cursor-pointer hidden lg:block"
            type="button"
            onClick={toggleEditMode}
          >
            Cancel
          </button>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label className="text-grey-200" htmlFor="gender">
            Select your gender
          </label>
          <select
            className="py-3.5 px-4 outline-none border-grey-200 rounded-lg max-w-[380px] "
            id="gender"
            name="gender"
            style={{borderWidth: "0.5px"}}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <option value={"male"}>Male</option>
            <option value={"female"}>Female</option>
            <option value="others">Others</option>
          </select>
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
            disabled={isUpdating || value === User?.phone || !value}
          >
            {isUpdating ? <Loader /> : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Gender;
