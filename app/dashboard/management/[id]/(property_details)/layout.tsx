"use client";

import Link from "next/link";
import React, {ReactNode} from "react";
import {useParams, usePathname} from "next/navigation";

import {cn} from "@/lib/utils";

function Layout({children}: {children: ReactNode}) {
  const pathname = usePathname();
  const {id} = useParams();

  return (
    <div className="px-4 py-2 md:p-2 h-full overflow-hidden flex flex-col flex-1">
      <div className="hidden sm:flex gap-5 items-center text-grey-100">
        <Link
          className={cn(
            "property-tab-link",
            !pathname.includes("reviews") && !pathname.includes("booking") && "active",
          )}
          href={`/dashboard/management/${id}`}
        >
          Property Details
        </Link>
        <Link
          className={cn("property-tab-link", pathname.includes("booking") && "active")}
          href={`/dashboard/management/${id}/booking`}
        >
          Booking Calender
        </Link>
        <Link
          className={cn("property-tab-link", pathname.includes("reviews") && "active")}
          href={`/dashboard/management/${id}/reviews`}
        >
          Review & Ratings
        </Link>
      </div>
      {children}
    </div>
  );
}

export default Layout;
