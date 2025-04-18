"use client";

import React from "react";
import {DayPicker} from "react-day-picker";

import {useDisableDates} from "@/api/property/disable-dates";
import Loader from "@/components/loader/loader";
import ModalWrapper from "@/components/ui/modals/modal-wrapper";
import {formatDateRanges} from "@/lib/utils";
import "react-day-picker/dist/style.css";

function DisableDates({id, disabledDates}: {id: string; disabledDates: Date[] | undefined}) {
  const prevDates = disabledDates?.map((item) => new Date(item));
  const [selected, setSelected] = React.useState(prevDates);
  const {mutateAsync, isPending} = useDisableDates();

  const submitDates = async () => {
    if (!selected) return;
    await mutateAsync({
      id,
      data: selected,
    });
  };

  return (
    <ModalWrapper
      title=""
      trigger={
        <button className="property-page-link text-blue w-full hover:bg-blue hover:text-white flex justify-center items-center gap-2">
          Disable Dates
        </button>
      }
    >
      <div className="max-w-xs mx-auto">
        <h4 className="font-medium text-center text-lg text-black mb-4">
          Select Walk-in Booked Dates
        </h4>
        <div className="flex justify-center text-gray-950">
          <DayPicker
            disabled={{before: new Date()}}
            mode="multiple"
            selected={selected}
            onSelect={setSelected}
          />
        </div>

        <p className="pt-2 pb-4 px-5">Selected Dates: {formatDateRanges(selected).join(", ")}</p>
        <button
          className="property-page-link w-full bg-blue text-white"
          disabled={isPending}
          onClick={submitDates}
        >
          {isPending ? <Loader /> : "Save"}
        </button>
      </div>
    </ModalWrapper>
  );
}

export default DisableDates;
