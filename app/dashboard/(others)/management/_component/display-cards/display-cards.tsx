import Image from "next/image";
import Link from "next/link";
import React, {ReactNode} from "react";

function DisplayProperties({data, children}: {data: any; children: ReactNode}) {
  return (
    <>
      {data && data.data.length > 0 ? (
        <>{children}</>
      ) : (
        <div className="px-5 lg:px-24 py-7">
          <div className="w-full max-w-[447px] mx-auto ">
            <div className="w-fit sm:mx-auto">
              <Image
                alt="office"
                className="z-10 relative w-[260px] h-[150px] lg:w-[284px] lg:h-[173px] "
                height={173}
                src="/account_management/Office1.svg"
                width={284}
              />
              <Image
                alt="office"
                className="relative w-[260px] h-[150px] lg:w-[284px] lg:h-[173px]  bottom-[44px] left-14 md:left-[74px]"
                height={173}
                src="/account_management/Office3.svg"
                width={284}
              />
            </div>
            <div className="text-center flex flex-col items-center gap-2">
              <h2 className="mb-2 text-base lg:text-lg font-medium text-grey">
                No Property Upload
              </h2>
              <Link
                className="bg-blue px-1 w-fit py-1 sm:px-4 sm:py-2 text-white font-medium rounded-md hover:opacity-75"
                href={"/dashboard/management/new-property"}
              >
                Start Uploading
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DisplayProperties;
