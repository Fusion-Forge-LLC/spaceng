import React from "react";
import Image from "next/image";
import Link from "next/link";

import success from "@/public/success.png";
function Page() {
  return (
    <div className="business-auth-wrapper flex flex-col items-center font-poppin">
      <Image alt="Success icon" src={success} />
      <h3 className="font-medium text-lg mb-10">Verification Successful</h3>
      <Link
        className="business-auth-button font-medium py-3 text-white bg-blue hover:bg-white hover:text-blue w-full"
        href={"/auth/client/signin"}
      >
        Log in
      </Link>
    </div>
  );
}

export default Page;
