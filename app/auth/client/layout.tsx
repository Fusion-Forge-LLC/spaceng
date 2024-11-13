import React from "react";
import Image from "next/image";
/* import {Inter} from "next/font/google";

const inter = Inter({
  subsets: ["latin"], // You can adjust this based on the languages you support
  weight: ["400", "500", "600", "700"], // Choose the font weights you need
}); */

function ClientAuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div className={`p-5 lg:py-[40px] px-5 lg:max-w-6xl xl:max-w-7xl container mx-auto`}>
      <header className="text-blue font-bold text-2xl lg:text-4xl mb-5">SpaceFinda</header>
      <main className="flex flex-col lg:flex-row lg:gap-10 xl:gap-20 justify-between items-center ">
        <div className="w-full flex-1">
          <p className="text-grey lg:mb-7 font-medium text-sm lg:text-lg">
            Welcome to a dynamic world of versatile workspaces and premium shortlets, designed to
            meet your every need.
          </p>
          <Image
            priority
            alt="Sign In Image"
            className="hidden lg:block"
            height={620}
            layout="responsive"
            objectFit="cover"
            src="/images/Placeholder.png"
            width={586}
          />
        </div>
        <div className="flex-1 w-full">{children}</div>
      </main>
    </div>
  );
}

export default ClientAuthLayout;
