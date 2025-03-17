import React, {ChangeEvent, Dispatch, SetStateAction} from "react";

import {amenities} from "./amenities";

interface Props {
  features: string[];
  setFeatures: Dispatch<SetStateAction<string[]>>;
}

function Features({setFeatures, features}: Props) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    if (event.currentTarget.checked) {
      setFeatures((prevState) => [...prevState, value]);
    } else {
      setFeatures((prevState) => prevState.filter((item) => item != value));
    }
  };

  return (
    <div className="">
      <ul className="grid grid-cols-3 gap-4">
        {amenities.map((item, index) => {
          return (
            <li key={index} className="flex items-center gap-4">
              <input
                defaultChecked={features.includes(item)}
                id={item.replace(" ", "")}
                name="amenities"
                type="checkbox"
                value={item}
                onChange={handleChange}
              />
              <label htmlFor={item.replace(" ", "")}>{item}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Features;
