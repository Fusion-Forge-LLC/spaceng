"use client";

import {Eye} from "lucide-react";
import React, {useState} from "react";

import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";

interface FormInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  isPassword?: boolean;
  classNames?: string;
}

function FormControl(props: FormInput) {
  const [type, setType] = useState(props.type);

  const updateType = () => {
    setType((prevState) => {
      if (prevState === "password") {
        return "text";
      } else {
        return "password";
      }
    });
  };

  return (
    <div>
      <label className="text-grey-200 block mb-1 text-left" htmlFor={props.id}>
        {props.label}
      </label>
      <div className="relative">
        <Input
          className={cn(
            "border border-grey-200 focus-visible:ring-blue",
            props.classNames || "h-12 sm:h-14 rounded-2xl",
          )}
          type={type}
          {...props}
        />
        {props.isPassword && (
          <button
            className="absolute z-10 top-1/2 -translate-y-1/2 right-4"
            type="button"
            onClick={updateType}
          >
            <Eye />
          </button>
        )}
      </div>
    </div>
  );
}

export default FormControl;
