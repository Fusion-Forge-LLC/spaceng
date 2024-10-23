import {Poppins} from "next/font/google";
import React from "react";

import Loader from "@/components/loader/loader";
import {cn} from "@/lib/utils";

const poppin = Poppins({subsets: ["latin"], weight: ["400", "500", "600", "700"]});

function AuthBtn({showLoader, text}: {showLoader: boolean; text: string}) {
  return (
    <button
      className={cn(
        poppin.className,
        "business-auth-button text-white bg-blue h-12 hover:bg-white disabled:hover:bg-blue hover:text-blue disabled:hover:text-white disabled:cursor-not-allowed w-full",
      )}
      disabled={showLoader}
    >
      {showLoader ? <Loader /> : text}
    </button>
  );
}

export default AuthBtn;
