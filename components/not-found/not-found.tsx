import Link from "next/link";
import React from "react";

import {cn} from "@/lib/utils";

function NotFound() {
  return (
    <main className="relative w-full py-20">
      <div className="w-full p-4 md:p-8 lg:p-12 h-auto centered">
        <div className="min-w-full md:min-w-[660px] p-1 md:p-5 md:px-8  space-y-6 flex flex-col items-center text-tertiary90">
          <Link className="" href="/">
            <span className={cn("text-2xl md:text-4xl")}>SPACEFINDA</span>
          </Link>
          <div className="flex flex-col justify-between w-full bg-white  p-4 px-8 md:p-8 md:px-[84px] fade-in-30 rounded-[32px]  border-[0.5px] border-stroke400">
            <p className="text-2xl md:text-3xl text-center">404 not found</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
