import React from "react";
import Image from "next/image";
/* import {Inter} from "next/font/google";

const inter = Inter({
  subsets: ["latin"], // You can adjust this based on the languages you support
  weight: ["400", "500", "600", "700"], // Choose the font weights you need
}); */

function ClientAuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div className={`py-[70px] px-5 lg:max-w-4xl xl:max-w-7xl container mx-auto`}>
      <header className="text-blue font-bold text-4xl mb-[72.5px]">SpacesNG</header>
      <main className="flex flex-col md:flex-row gap-10 xl:gap-20 justify-between items-center ">
        <div className="w-full flex-1">
          <p className="text-grey mb-7 font-medium lg:text-lg">
            Welcome to a dynamic world of versatile workspaces and premium shortlets, designed to
            meet your every need.
          </p>
          <Image
            priority
            alt="Sign In Image"
            height={620}
            layout="responsive"
            objectFit="cover"
            src="/images/Placeholder.png"
            width={586}
          />
        </div>
        <div className="flex-1">{children}</div>
      </main>
    </div>
  );
}

export default ClientAuthLayout;
