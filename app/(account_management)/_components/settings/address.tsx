import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {toast} from "sonner";

import {useUpdateProfile} from "@/api/profile/update-profile";
import Loader from "@/components/loader/loader";
import {useUser} from "@/context/user";
import countries from "@/countries/countries";

type AddressTypes = {
  country: string;
  address: string;
  city: string;
  postcode: number;
};

function Address() {
  const {User, setUser} = useUser();
  const [isEditMode, setEdit] = useState(false);

  const {mutateAsync: profileUpdate, isPending: isUpdating} = useUpdateProfile();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<AddressTypes>();

  const onSubmit: SubmitHandler<AddressTypes> = (data) => {
    profileUpdate({location: data}).then(() => {
      toast.success("Profile updated successfully");
      setUser((prevState) => {
        if (prevState === null) {
          return null;
        } else {
          return {...prevState, location: data};
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
          <h2 className="font-medium">Address</h2>
          <p className="text-grey-200">Enter your address</p>
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
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between gap-2 mb-2">
          <h2 className="font-medium">Address</h2>
          <button
            className="text-blue font-medium cursor-pointer hidden lg:block"
            type="button"
            onClick={toggleEditMode}
          >
            Cancel
          </button>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label className="text-grey-200" htmlFor="address">
            Select the region/ country you’re from
          </label>
          <select
            className="py-3.5 px-4 outline-none border-grey-200 rounded-lg max-w-[380px] "
            defaultValue={User?.location?.country}
            id="country"
            style={{borderWidth: "0.5px"}}
            {...register("country")}
          >
            {countries.map((item) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.note}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label className="text-grey-200" htmlFor="address">
            Address
          </label>
          <input
            className="py-3.5 px-4 outline-none border-grey-200 rounded-lg max-w-[399px] "
            defaultValue={User?.location?.address}
            id="address"
            placeholder="No 6 park, Agbowo Ikeja"
            style={{borderWidth: "0.5px"}}
            type="text"
            {...register("address", {required: true})}
          />
          {errors.address && <span className="text-xs text-red">This field is required</span>}
        </div>
        <div className="flex gap-4 mb-4">
          <div className="flex flex-col gap-1 mb-4">
            <label className="text-grey-200" htmlFor="address">
              Town/city
            </label>
            <input
              className="py-3.5 px-3 lg:px-4 outline-none border-grey-200 rounded-lg w-full max-w-[191px] "
              defaultValue={User?.location?.city}
              id="city"
              placeholder="Lagos"
              style={{borderWidth: "0.5px"}}
              type="text"
              {...register("city", {required: true})}
            />
            {errors.city && <span className="text-xs text-red">This field is required</span>}
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label className="text-grey-200" htmlFor="address">
              Postcode
            </label>
            <input
              className="py-3.5 px-3 lg:px-4 outline-none border-grey-200 rounded-lg w-full max-w-[191px] "
              defaultValue={User?.location?.postcode}
              id="postcode"
              placeholder="567871"
              style={{borderWidth: "0.5px"}}
              type="text"
              {...register("postcode")}
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
          <button className="py-2 lg:py-3 px-2.5 lg:px-4 text-sm lg:text-base bg-blue rounded-lg text-white block ml-auto">
            {isUpdating ? <Loader /> : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Address;
