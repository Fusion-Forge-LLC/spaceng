import Link from "next/link";
import React, {ReactNode} from "react";

import {cn} from "@/lib/utils";

function Layout({children}: {children: ReactNode}) {
  return (
    <div className="px-4 py-2 md:p-2">
      <div className="hidden sm:flex gap-5 items-center text-grey-100">
        <Link className={cn("property-tab-link", "active")} href={""}>
          Property List
        </Link>
        <Link className={cn("property-tab-link")} href={""}>
          Property Details
        </Link>
        <Link className={cn("property-tab-link")} href={""}>
          Booking Calender
        </Link>
        <Link className={cn("property-tab-link")} href={""}>
          Review & Ratings
        </Link>
      </div>
      {children}
    </div>
  );
}

export default Layout;
