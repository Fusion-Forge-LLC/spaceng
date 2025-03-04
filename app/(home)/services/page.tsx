import React from "react";

import Wrapper from "@/components/wrapper/wrapper";
import ServiceList from "@/components/main/services/service-list";

function Page() {
  return (
    <section className="bg-[#F6F6F6] mb-10 sm:mb-20">
      <Wrapper className="py-20">
        <article className="pb-8 sm:pb-14">
          <h1 className="font-semibold text-[22px] sm:text-3xl mb-2">
            Our Excellent <span className="block sm:inline">Services</span>
          </h1>
          <p className="leading-loose max-w-[651px] hidden sm:block text-[#707070]">
            Spacefinda connects you with a diverse range of flexible spaces, including shortlets for
            temporary stays, workspaces for increased productivity, and corporate venues for
            professional gatherings. Find the perfect space to suit your needs, all in one
            convenient platform
          </p>
        </article>
        <ServiceList />
      </Wrapper>
    </section>
  );
}

export default Page;
