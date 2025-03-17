import React, {useState} from "react";
import {Eye, EyeOff} from "lucide-react";

function PasswordInput({field}: {field: any}) {
  const [passwordType, setPasswordType] = useState<"password" | "text">("password");

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-grey" htmlFor="password">
        Enter Password
      </label>
      <div className="mb-1.5 relative">
        <input
          className="client-register-input"
          id="password"
          placeholder="Password"
          type={passwordType}
          {...field}
        />
        <button
          className="absolute m-auto right-4 top-0 bottom-0"
          type="button"
          onClick={() =>
            setPasswordType((prevState) => (prevState === "password" ? "text" : "password"))
          }
        >
          {passwordType === "password" ? <Eye /> : <EyeOff />}
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;
