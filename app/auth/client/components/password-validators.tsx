"use client";

import Image from "next/image";
import React from "react";

import {cn} from "@/lib/utils";

function PasswordValidators({password}: {password: string}) {
  const hasCapitalLetter = /[A-Z]/.test(password || "");
  const hasSmallLetter = /[a-z]/.test(password || "");
  const eightChar = password?.length >= 8;
  const hasNumber = /\d/.test(password || "");
  const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password || "");

  return (
    <div className="mb-6 flex gap-3.5 flex-wrap">
      <div className={cn(`password-confirmation-tag`, eightChar && "password-confirmation-true")}>
        <span>8 characters</span>
        <Image
          alt={""}
          className=""
          height={12}
          src={eightChar ? "/images/good2.svg" : "/images/good.svg"}
          width={12}
        />
      </div>
      <div
        className={cn(
          `password-confirmation-tag`,
          hasCapitalLetter && "password-confirmation-true",
        )}
      >
        <span>Uppercase</span>
        <Image
          alt={""}
          className=""
          height={12}
          src={hasCapitalLetter ? "/images/good2.svg" : "/images/good.svg"}
          width={12}
        />
      </div>
      <div
        className={cn(`password-confirmation-tag`, hasSmallLetter && "password-confirmation-true")}
      >
        <span>Lowercase</span>
        <Image
          alt={""}
          className=""
          height={12}
          src={hasSmallLetter ? "/images/good2.svg" : "/images/good.svg"}
          width={12}
        />
      </div>
      <div className={cn(`password-confirmation-tag`, hasNumber && "password-confirmation-true")}>
        <span>Number</span>
        <Image
          alt={""}
          className=""
          height={12}
          src={hasNumber ? "/images/good2.svg" : "/images/good.svg"}
          width={12}
        />
      </div>
      <div
        className={cn(
          `password-confirmation-tag`,
          hasSpecialCharacter && "password-confirmation-true",
        )}
      >
        <span>Special character</span>
        <Image
          alt={""}
          className=""
          height={12}
          src={hasSpecialCharacter ? "/images/good2.svg" : "/images/good.svg"}
          width={12}
        />
      </div>
    </div>
  );
}

export default PasswordValidators;
