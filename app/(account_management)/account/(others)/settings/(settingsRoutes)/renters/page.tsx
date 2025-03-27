"use client";

import {Plus, User} from "lucide-react";
import {useState} from "react";
import {useForm, SubmitHandler} from "react-hook-form";

import {useAddOtherRental} from "@/api/other-rentals/add-other-rentals";
import {useDeleteOtherRental} from "@/api/other-rentals/delete-other-rentals";
import {useGetOtherRentals} from "@/api/other-rentals/get-other-rentals";
import Loader from "@/components/loader/loader";

type RentersType = {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: string;
};

export default function Renters() {
  const [rentersBlock, setRentersBlock] = useState(false);
  const {data} = useGetOtherRentals();
  const {mutate, isPending} = useAddOtherRental();
  const {mutate: deleteRental, isPending: deleting} = useDeleteOtherRental();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<RentersType>();

  const onSubmit: SubmitHandler<RentersType> = (data) => {
    mutate(data);
  };

  return (
    <div className="w-full text-grey-200">
      <div className="md:p-4 ">
        <h1 className="text-xl lg:text-2xl font-bold lg:font-semibold mb-2 text-grey ">
          Other renters
        </h1>
        <p className="text-grey-200 text-sm lg:text-base ">
          Add or edit information about the people you want to share space with
        </p>
      </div>

      <div className="md:px-4">
        {data?.data.other_rentals.map((item) => {
          return (
            <div key={item._id}>
              <div className="flex items-center gap-2">
                <User />
                <span className="capitalize">
                  {item.first_name} {item.last_name}
                </span>
                <button
                  className="text-blue py-1.5 px-4 hover:bg-blue hover:text-white rounded-md ml-auto"
                  disabled={deleting}
                  onClick={() => deleteRental(item._id)}
                >
                  Remove
                </button>
              </div>
              <div className="py-5 border-b border-b-grey-200">
                <h4 className="text-grey">Name</h4>
                <p className="text-grey-200 capitalize">
                  {item.first_name} {item.last_name}
                </p>
              </div>
              <div className="py-5 border-b border-b-grey-200">
                <h4 className="text-grey">Date of Birth</h4>
                <p className="text-grey-200">
                  {new Date(item.date_of_birth).toLocaleDateString("en-GB")}
                </p>
              </div>
              <div className="py-5">
                <h4 className="text-grey">Gender</h4>
                <p className="text-grey-200 capitalize">{item.gender}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={` ${rentersBlock ? "hidden" : ""} py-2 md:p-4`}>
        <button
          className="ml-auto py-2 lg:py-3 px-4 text-sm lg:text-base flex items-center gap-2 bg-blue font-medium text-white rounded-lg"
          onClick={() => setRentersBlock(true)}
        >
          <Plus className="w-4 h-4 lg:w-6 lg:h-6" />
          Add new renters
        </button>
      </div>

      <form className="py-2 md:p-4 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className={`${rentersBlock ? "" : "hidden"} py-4`}>
          <button
            className="text-blue font-medium cursor-pointer mb-6 ml-auto hidden lg:block"
            type="button"
            onClick={() => setRentersBlock(false)}
          >
            Remove
          </button>
          <div className="w-full max-w-[600px] mb-4">
            <div className="flex flex-col gap-1 mb-4">
              <label className="text-grey-200 text-sm " htmlFor="first_name">
                First name
              </label>
              <input
                className="py-3.5 px-4 outline-none border-grey-200 rounded-lg "
                id="first_name"
                placeholder="Lewis"
                style={{borderWidth: "0.5px"}}
                type="text"
                {...register("first_name", {required: true})}
              />
              {errors.first_name && (
                <span className="text-red text-xs">First name is required</span>
              )}
            </div>
            <div className="flex flex-col gap-1 mb-6">
              <label className="text-grey-200 text-sm " htmlFor="lastName">
                Last name
              </label>
              <input
                className="py-3.5 px-4 outline-none border-grey-200 rounded-lg "
                id="last_name"
                placeholder="Bimbo"
                style={{borderWidth: "0.5px"}}
                type="text"
                {...register("last_name", {required: true})}
              />
              {errors.last_name && <span className="text-red text-xs">Last name is required</span>}
              <p className="text-xs">
                Please enter this person’s name exactly as written on their government ID
              </p>
            </div>
            <div className="flex flex-col gap-1 mb-6">
              <label className="text-grey-200 text-sm " htmlFor="dob">
                Date of birth
              </label>
              <input
                className="py-3.5 px-4 outline-none border-grey-200 rounded-lg "
                id="date_of_birth"
                placeholder=""
                style={{borderWidth: "0.5px"}}
                type="date"
                {...register("date_of_birth", {required: true})}
              />
              {errors.date_of_birth && (
                <span className="text-red text-xs">Date of Birth is required</span>
              )}
              <p className="text-xs">
                It’s important to enter a correct date of birth, as these details can be used for
                booking
              </p>
            </div>
            <div className="flex flex-col gap-1 mb-6">
              <label className="text-grey-200 text-sm " htmlFor="gender">
                Select your gender
              </label>
              <select
                className="py-3.5 px-4 outline-none border-grey-200 rounded-lg max-w-[380px] "
                id="gender"
                style={{borderWidth: "0.5px"}}
                {...register("gender", {required: true})}
              >
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
                <option value="others">Others</option>
              </select>
              {errors.gender && <span className="text-red text-xs">Gender is required</span>}
              <p className="text-xs">
                {`Please select the gender written on this person's government ID`}
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <input
                required
                className="relative top-1.5"
                id="confirm"
                name="confirm"
                type="checkbox"
              />
              <label htmlFor="confirm">
                I confirm that I’m authorised to provide the personal data of any co-renter to
                Spacefinda for this service. In addition, I confirm that I’ve informed the other
                renter that I’m providing their personal data to Spacefinda
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="text-blue font-medium cursor-pointer text-sm lg:hidden"
              type="button"
              onClick={() => setRentersBlock(false)}
            >
              Remove
            </button>
            <button
              className="py-2 lg:py-3 px-2.5 lg:px-4 text-sm lg:text-base bg-blue rounded-lg text-white block ml-auto"
              disabled={isPending}
            >
              {isPending ? <Loader /> : "Save"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
