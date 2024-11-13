import React from "react";
import Image from "next/image";

const EmailInput = (props: any) => {
  return (
    <div className={`flex flex-col gap-1.5 w-full`}>
      <label className="text-grey" htmlFor="email">
        Enter email address
      </label>
      <div className="relative">
        <input
          className="client-register-input pl-12 "
          id="email"
          placeholder={"Your email"}
          type="email"
          {...props}
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
