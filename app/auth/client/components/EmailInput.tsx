import React, {ChangeEvent} from "react";
import Image from "next/image";

interface EmailInputProps {
  // eslint-disable-next-line no-undef
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const EmailInput: React.FC<EmailInputProps> = ({onChange, placeholder, className}) => {
  return (
    <div className={` ${className} flex flex-col gap-1.5 w-full`}>
      <label className="text-grey" htmlFor="clientEmail">
        Enter email address
      </label>
      <div className="relative">
        <input
          required
          className="border-[#707070] border rounded-lg w-full py-3.5 pl-12 px-4 flex items-center text-grey placeholder:text-[#707070] focus:outline-none"
          id="clientEmail"
          name="clientEmail"
          placeholder={placeholder || "Your email"}
          type="email"
          onChange={onChange}
        />
        <Image
          alt="elements"
          className="absolute m-auto left-4 top-0 bottom-0"
          height={18}
          src="/images/mail.svg"
          width={20}
        />
      </div>
    </div>
  );
};

export default EmailInput;
