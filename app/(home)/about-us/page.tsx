import React from "react";

import Wrapper from "@/components/wrapper/wrapper";
import Uniqueness from "@/components/main/uniqueness/unigueness";
import OurStory from "@/components/main/our-story/our-story";

function Page() {
  return (
    <section className="bg-[#F6F6F6] mb-10 sm:mb-20">
      <Wrapper className="py-20">
        <article className="pb-8 sm:pb-14 space-y-8">
          <h1 className="font-semibold text-[22px] sm:text-3xl mb-2">
            What Make Us <span className="block sm:inline">Different?</span>
          </h1>
          <Uniqueness />
        </article>
        <OurStory />
      </Wrapper>
    </section>
  );
}

export default Page;
