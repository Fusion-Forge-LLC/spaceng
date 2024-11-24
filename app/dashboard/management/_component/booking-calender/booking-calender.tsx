"use client";

import React, {Dispatch, SetStateAction, useState} from "react";
import {DayPicker} from "react-day-picker";

import {DropdDown} from "@/components/style-guide/style-guide";
import {cn} from "@/lib/utils";

import {months, years} from "./dropdown-data";

function BookingCalender({
  activeDates,
  selectedDate,
  setSelectedDate,
}: {
  activeDates: string[];
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
}) {
  const [month, setMonth] = useState(new Date());
  const [choosedMonth, setChoosedMonth] = useState<string>(new Date().getMonth().toString());
  const [choosedYear, setChoosedYear] = useState<string>(new Date().getFullYear().toString());
  const bookedDates = activeDates.map((item) => new Date(item).toLocaleDateString());

  React.useEffect(() => {
    const month = parseInt(choosedMonth);
    const year = parseInt(choosedYear);

    const newDate = new Date(year, month);

    setMonth(newDate);
  }, [choosedMonth, choosedYear]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <DropdDown
          className="w-fit lg:min-w-28 rounded-xl"
          options={months}
          placeholder="Month"
          value={choosedMonth}
          onValueChange={setChoosedMonth}
        />

        <DropdDown
          className="w-fit rounded-xl"
          options={years}
          placeholder="Month"
          value={choosedYear?.toString()}
          onValueChange={setChoosedYear}
        />
      </div>

      <DayPicker
        showOutsideDays
        captionLayout="dropdown"
        classNames={{
          table: "w-full border-collapse space-y-1",
          nav_button: "hidden",
          day_outside: "opacity-45",
          day: "calender-item",
          head_cell: "h-12 w-12",
          caption:
            "flex justify-center pt-1 relative items-center bg-blue rounded px-5 py-2 text-white w-fit mx-auto",
          month: "border border-grey-200 p-2 rounded-3xl max-lg:w-fit max-w-full max-lg:mx-auto",
          day_selected: "bg-blue text-white",
        }}
        components={{
          Day: (props) => {
            const {date} = props;
            const dateString = date.toLocaleDateString();
            const isActive = dateString === selectedDate.toLocaleDateString();

            return (
              <button
                className={cn(
                  "calender-item relative",
                  isActive && "bg-blue text-white",
                  date.getMonth().toString() !== choosedMonth && "opacity-45",
                )}
                onClick={() => setSelectedDate(date)}
              >
                {date.getDate()}
                {bookedDates.includes(dateString) && (
                  <span
                    className={cn(
                      isActive ? "bg-white" : "bg-blue",
                      "block h-1 w-1 rounded-full bottom-1.5 absolute left-1/2 -translate-x-1/2",
                    )}
                  />
                )}
              </button>
            );
          },
        }}
        mode="single"
        month={month}
        onMonthChange={setMonth}
      />
    </div>
  );
}

export default BookingCalender;
