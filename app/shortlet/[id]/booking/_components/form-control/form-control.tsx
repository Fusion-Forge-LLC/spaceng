import React from "react";

import {Input} from "@/components/ui/input";
import {NigeriaFlag} from "@/components/Icons/icons";
import {Textarea} from "@/components/ui/textarea";

interface InputElementProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function FormControl(props: InputElementProps) {
  return (
    <div className="relative">
      <Input
        autoComplete="off"
        className="h-16 rounded-[5px] border-[#E6E6E6] peer px-6 focus-visible:ring-blue"
        placeholder=""
        {...props}
      />
      <label
        className="absolute left-6 top-1/2 -translate-y-1/2 peer-placeholder-shown:block hidden"
        htmlFor={props.id}
      >
        {props.label} <sup className="text-[#E94235]">*</sup>
      </label>
    </div>
  );
}

export function PhoneNumber(props: InputElementProps) {
  return (
    <div className="relative">
      <NigeriaFlag className="absolute top-1/2 -translate-y-1/2 left-6" />
      <Input
        autoComplete="off"
        className="h-16 rounded-[5px] border-[#E6E6E6] peer pl-14 pr-6 focus-visible:ring-blue"
        placeholder="+234 740 2345 345"
        type="number"
        {...props}
      />
    </div>
  );
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea(props: TextAreaProps) {
  return (
    <div className="relative">
      <Textarea
        className="rounded-[5px] border-[#E6E6E6] resize-none p-6 h-36 focus-visible:ring-blue"
        {...props}
        placeholder="Reason for Visit?"
      />
    </div>
  );
}

export default FormControl;
