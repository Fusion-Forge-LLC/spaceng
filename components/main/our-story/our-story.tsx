import {Poppins} from "next/font/google";
import Image from "next/image";
import React from "react";

import {cn} from "@/lib/utils";

import ourStory from "../../../public/our-story.png";

const poppin = Poppins({subsets: ["latin"], weight: ["500", "600", "700", "400"]});

function OurStory() {
  return (
    <section className="py-10 md:py-20 space-y-10 flex flex-col-reverse md:flex-row gap-5 items-center">
      <div className="space-y-5 flex-1">
        <h3
          className={cn(
            poppin.className,
            "text-[#242527] text-2xl sm:text-3xl md:text-5xl font-semibold",
          )}
        >
          <span className="leading-snug">
            Our Story <br />
            Who we are
          </span>
        </h3>
        <p className="text-[#707070] leading-loose">
          Spacefinda was born from the need for a simpler, more comprehensive way to find and book
          flexible spaces. We envisioned a platform that seamlessly connects people with diverse
          space requirements, from short-term stays to productive workspaces and professional
          venues. Our mission is to empower individuals and businesses to discover the perfect space
          for any purpose, all in one convenient location.
        </p>
      </div>
      <div className="shadow-md flex-1">
        <Image alt="Our Story" src={ourStory} />
      </div>
    </section>
  );
}

export default OurStory;
