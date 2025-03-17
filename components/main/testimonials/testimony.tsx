import React from "react";
import Image from "next/image";

import {Quote} from "@/components/Icons/icons";

import image from "../../../public/unsplash_6anudmpILw4.png";

function Testimony() {
  return (
    <div className="from-[#474747] to-[#222] bg-gradient-to-br pb-10 md:pb-24 max-w-6xl mx-auto lg:mb-10">
      <div className="pt-8 md:pt-12 p-4 md:p-8 lg:px-16 md:flex lg:items-center justify-between">
        <div className="relative md:w-fit shrink-0">
          <Image alt="Testimonial image" className="max-md:w-2/3" src={image} />
          <div className="bg-white py-5 md:p-10 text-center space-y-2 w-fit absolute -bottom-10 right-0 md:-right-1/2 max-md:w-2/3">
            <div className="h-12 md:h-[72px] w-12 md:w-[72px] rounded-full bg-white shadow-lg z-10 shadow-[#2387C0]/15 absolute -top-6 left-1/2 -translate-x-1/2 grid place-content-center">
              <Quote />
            </div>
            <h4 className="text-[#242527] text-xl md:text-2xl font-semibold">Jane Amadi</h4>
            <p className="text-[#292D32] max-sm:text-xs">Marketing Manager at SpacesNG </p>
          </div>
        </div>
        <article className="space-y-2 lg:space-y-6 md:w-1/2 md:pl-10 pt-20 md:pt-10 lg:pt-0">
          <h4 className="text-lg sm:text-2xl lg:text-4xl font-semibold text-white leading-relaxed">
            What we have done & what our Customers say
          </h4>
          <p className="text-[#C4C4C4] leading-loose">
            Spacefinda made finding a temporary office for our team so easy! The platform was
            user-friendly, and we found the perfect space within our budget.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Testimony;
