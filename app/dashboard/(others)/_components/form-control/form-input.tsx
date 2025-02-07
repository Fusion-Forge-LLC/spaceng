import React from "react";

import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";

interface FormInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  labelExample?: string;
}

function FormControl(props: FormInput) {
  return (
    <div>
      <label className="text-grey-200 block mb-2 text-left" htmlFor={props.id}>
        {props.label} <span className="text-sm text-grey-300">{props.labelExample}</span>
      </label>
      <div className="relative">
        <Input
          className={cn("rounded-md bg-white border border-grey-200 h-12  focus-visible:ring-blue")}
          {...props}
        />
      </div>
    </div>
  );
}

export default FormControl;
