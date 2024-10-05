import {Eye} from "lucide-react";
import React from "react";

import {Input} from "@/components/ui/input";

interface FormInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  isPassword?: boolean;
}

function FormControl(props: FormInput) {
  return (
    <div>
      <label className="text-grey-200 block mb-2 text-left" htmlFor={props.id}>
        {props.label}
      </label>
      <div className="relative">
        <Input
          className="rounded-2xl border border-grey-200 h-12 sm:h-14 focus-visible:ring-blue"
          {...props}
        />
        {props.isPassword && (
          <button className="absolute z-10 top-1/2 -translate-y-1/2 right-4">
            <Eye />
          </button>
        )}
      </div>
    </div>
  );
}

export default FormControl;
