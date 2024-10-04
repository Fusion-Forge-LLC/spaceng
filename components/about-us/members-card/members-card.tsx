import {Montserrat} from "next/font/google";
import React from "react";

import {cn} from "@/lib/utils";

const montesserat = Montserrat({subsets: ["latin"]});

function MembersCard({name, role}: {name: string; role: string}) {
  return (
    <li className="bg-grey space-y-8 p-4">
      <div className="aspect-[526/406] bg-white rounded-[15px]" />
      <div className="w-4/5">
        <h4 className="bg-white rounded-[15px] py-2 px-3 text-lg md:text-xl mb-4 font-medium">
          {name}
        </h4>
        <span
          className={cn(
            montesserat.className,
            "text-xs sm:font-base lg:text-lg font-medium rounded-[15px] py-2 px-3 border border-white text-white block",
          )}
        >
          {role}
        </span>
      </div>
    </li>
  );
}

export default MembersCard;
