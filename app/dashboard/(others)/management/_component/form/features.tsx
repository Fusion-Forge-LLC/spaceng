import React, {ChangeEvent, Dispatch, SetStateAction} from "react";
import {UseFormReturn} from "react-hook-form";

import {amenities} from "./amenities";
import {PropertySchemaType} from "./schema";

interface Props {
  features: string[];
  setFeatures: Dispatch<SetStateAction<string[]>>;
  form: UseFormReturn<PropertySchemaType, any, undefined>;
}

function Features({setFeatures, features, form}: Props) {
  const propertyType: "shortlet" | "workspace" = form.watch("type");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    if (event.currentTarget.checked) {
      setFeatures((prevState) => [...prevState, value]);
    } else {
      setFeatures((prevState) => prevState.filter((item) => item != value));
    }
  };

  return (
    <div className="min-h-full">
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {amenities[propertyType].map((item, index) => {
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
