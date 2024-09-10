"use client";

import {Work_Sans} from "next/font/google";
import React, {useEffect, useState} from "react";

import EmailVerification from "../../_components/email-verification/email-verification";

const worksans = Work_Sans({subsets: ["latin"]});

function Page() {
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

  return <EmailVerification />;
}

export default Page;
