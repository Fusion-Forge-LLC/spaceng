import React from "react";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Title from "@/components/main/title/title";
import Wrapper from "@/components/wrapper/wrapper";
import Offers from "@/components/services/offer-cards/offers";
import {
  AirCondition,
  Assistance,
  Database,
  FreeZone,
  Internet,
  Menu,
  Parking,
  Power,
} from "@/components/Icons/icons";
import Servicecards from "@/components/services/card/service-cards";
import Faq from "@/components/services/faq/faq";

import blogImage from "../../public/blog-image.png";
import aboutImage from "../../public/about2.png";
import aboutImage3 from "../../public/about3.png";
import aboutImage4 from "../../public/about4.png";
import aboutImage5 from "../../public/about5.png";

function Page() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <Wrapper className="pt-10">
            <Title title="Articles & Blog Post" />

            <article className="text-white font-montserrat relative mb-20">
              <Image alt="Image of a bedroom" src={blogImage} />
              <div className="space-y-8 absolute left-10 bottom-10 max-w-3xl">
                <h4 className="font-bold text-3xl">Latest Post On SpaceNG :</h4>
                <p className="font-thin text-xl">
                  If you need to ask a question relating to your agreement, bookings, billing, or
                  have any other queries, please reach out to our customer support team.......
                </p>
                <Link className="text-xl block" href={""}>
                  ReadMore
                </Link>
              </div>
            </article>

            <div className="relative">
              <Image alt="Conference room image" src={aboutImage} />
              <div className="flex flex-nowrap overflow-x-scroll gap-6 absolute left-2 no-scrollbar bottom-2">
                <div className="w-1/4 shrink-0">
                  <Image alt="Image of bedroom" src={aboutImage3} />
                </div>
                <div className="w-1/4 shrink-0">
                  <Image alt="image of lounge" src={aboutImage4} />
                </div>
                <div className="w-1/4 shrink-0">
                  <Image alt="Image of bedroom" src={aboutImage3} />
                </div>
                <div className="w-1/4 shrink-0">
                  <Image alt="image of lounge" src={aboutImage4} />
                </div>
              </div>
            </div>
          </Wrapper>
        </section>
        <section>
          <Wrapper className="py-20">
            <Title title="SaceNG" />

            <h3 className="text-3xl text-center max-w-3xl my-10 mx-auto">
              A co-working space to make work seamless for{" "}
              <span className="font-medium">Creatives.</span>
            </h3>

            <Link
              className="bg-blue py-3 px-5 rounded-md text-white font-medium block w-fit mx-auto"
              href={""}
            >
              Book Spaces
            </Link>

            <div className="pt-16">
              <Image alt="Office settings image" className="w-full" src={aboutImage5} />
            </div>
          </Wrapper>
        </section>

        <section>
          <Wrapper className="py-10">
            <span className="bg-blue py-3 px-5 rounded-md text-white font-medium block w-fit mx-auto">
              SpaceNG Offer
            </span>

            <h3 className="text-center text-4xl mt-16">Choose a SpaceNG that suits your needs</h3>

            <div className="grid grid-cols-2 gap-10 pt-12">
              <Offers
                Icon={Menu}
                amount={25000}
                image="/offers/workspace.png"
                note="Enjoy an affordable workspace where you can work, learn and thrive. Our thoughtfully furnished space is waiting for you."
                title="Workspace"
              />
              <Offers
                Icon={Database}
                amount={25000}
                image="/offers/shortlet.png"
                note="Enjoy an affordable workspace where you can work, learn and thrive. Our thoughtfully furnished space is waiting for you."
                title="Shortlet"
              />
            </div>

            <ul className="py-16 grid grid-cols-3 gap-x-8 gap-y-16">
              <Servicecards
                Icon={AirCondition}
                note="Achieve your goals effortlessly."
                title="Fully air-conditioned"
              />
              <Servicecards
                Icon={Power}
                note="No need to worry about electricity when it’s always available."
                title="Uninterrupted power supply"
              />
              <Servicecards
                Icon={Internet}
                note="Experience seamless work with high-speed internet."
                title="5G Network Services"
              />
              <Servicecards
                Icon={Parking}
                note="Parking space for your vehicle."
                title="Large Parking Area"
              />
              <Servicecards
                Icon={Assistance}
                note="Ready to assist anytime."
                title="Executive Assistance"
              />
              <Servicecards
                Icon={FreeZone}
                note="Enjoy a serene workspace for concentration."
                title="Distraction Free-Zone"
              />
            </ul>
          </Wrapper>
        </section>

        <section>
          <Wrapper className="py-10">
            <h3 className="font-medium text-4xl mb-10 text-center">
              Frequently Asked Questions (FAQs)
            </h3>

            <Faq />
          </Wrapper>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
