"use client";

import {ArrowUp, Delete} from "lucide-react";
import {Work_Sans} from "next/font/google";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

import {cn} from "@/lib/utils";

const worksans = Work_Sans({subsets: ["latin"]});

function EmailVerification({redirect}: {redirect: string}) {
  const router = useRouter();
  const [code, setCode] = useState<string[]>(["", "", "", ""]);
  const [countdown, setCoundown] = useState("00:59");

  useEffect(() => {
    startCountDown();
  }, []);

  const startCountDown = () => {
    let seconds = 59;
    const interValId = setInterval(() => {
      seconds--;
      setCoundown(`00:${seconds.toString().padStart(2, "0")}`);
      if (seconds === 0) {
        clearInterval(interValId);
      }
    }, 1000);
  };

  const selectNumber = (number: number) => {
    const index = code.findIndex((item) => item === "");

    if (index === -1) return;
    const instanceofCodes = [...code];

    instanceofCodes[index] = number.toString();
    setCode(instanceofCodes);
  };

  const deleteLast = () => {
    const emptyIndex = code.findIndex((item) => item === "");
    const instanceofCodes = [...code];

    if (emptyIndex === -1) {
      //Delete last item
      instanceofCodes[3] = "";
      setCode(instanceofCodes);
    } else {
      // delete the item before the index
      instanceofCodes[emptyIndex - 1] = "";
      setCode(instanceofCodes);
    }
  };

  const verifyCode = () => {
    router.push(redirect);
  };

  return (
    <div className="business-auth-wrapper font-poppin px-8 sm:px-0">
      <h3 className="auth-title mb-2">Please verify your email address</h3>
      <p className="text-xs sm:text-base text-center text-grey-200">
        We’ve sent an email to oluwatosin@gmail.com, please enter the code below.
      </p>

      <div className="pt-7 pb-3 mb-5 flex flex-col items-center w-fit mx-auto gap-4">
        <div className="bg-grey flex items-center w-fit px-4 py-2 sm:p-4 text-white text-xs rounded-lg">
          Please Enter code <ArrowUp className="rotate-45" />
        </div>
        <div className="flex justify-between gap-4 pt-3 sm:gap-8">
          {code.map((item, index) => {
            return (
              <div
                key={index}
                className="h-8 sm:h-14 w-8 sm:w-14 rounded-md border border-grey-200 grid place-content-center sm:text-xl font-medium"
              >
                {item}
              </div>
            );
          })}
        </div>
        <button className="text-xs font-medium px-3 py-1.5 rounded-md bg-grey-100/5">
          Resend code <span className={cn(countdown === "00:00" && "hidden")}>in {countdown}</span>
        </button>
        <div className={cn(worksans.className, "grid grid-cols-3 w-full gap-2")}>
          <button className="verify-btn" onClick={() => selectNumber(1)}>
            1
          </button>
          <button className="verify-btn" onClick={() => selectNumber(2)}>
            2
          </button>
          <button className="verify-btn" onClick={() => selectNumber(3)}>
            3
          </button>
          <button className="verify-btn" onClick={() => selectNumber(4)}>
            4
          </button>
          <button className="verify-btn" onClick={() => selectNumber(5)}>
            5
          </button>
          <button className="verify-btn" onClick={() => selectNumber(6)}>
            6
          </button>
          <button className="verify-btn" onClick={() => selectNumber(7)}>
            7
          </button>
          <button className="verify-btn" onClick={() => selectNumber(8)}>
            8
          </button>
          <button className="verify-btn" onClick={() => selectNumber(9)}>
            9
          </button>
          <div />
          <button className="verify-btn" onClick={() => selectNumber(0)}>
            0
          </button>
          <button
            className="grid place-content-center hover:bg-grey-100 rounded-lg"
            onClick={deleteLast}
          >
            <Delete />
          </button>
        </div>
      </div>

      <button
        className={cn(
          "business-auth-button py-1.5 sm:py-4 text-white bg-blue hover:bg-white hover:text-blue w-full disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none",
        )}
        disabled={code.some((item) => item === "")}
        onClick={verifyCode}
      >
        Continue
      </button>
    </div>
  );
}

export default EmailVerification;
