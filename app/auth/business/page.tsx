import Link from "next/link";
import React from "react";

function Page() {
  return (
    <main className='h-screen w-full bg-[url("/business-bg.png")] bg-cover bg-center grid place-content-center px-4'>
      <div className="text-white text-center w-fit max-w-full">
        <h3 className="font-bold text-3xl mb-2">Welcome to Spacefinda</h3>
        <p className="font-medium text-lg">Manage and lease your properties with ease</p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-12">
          <Link
            className="business-auth-button bg-blue hover:bg-white hover:text-blue"
            href={"/auth/business/signup"}
          >
            Sign Up
          </Link>

          <Link
            className="business-auth-button bg-white text-blue hover:bg-blue hover:text-white"
            href={"/auth/business/login"}
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Page;
