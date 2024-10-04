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
import {Input} from "@/components/ui/input";
import {DropdDown} from "@/components/style-guide/style-guide";

function Page() {
  return (
    <div>
      <Header />
      <main className="pb-16">
        <section>
          <Wrapper className="py-10 pb-20">
            <Title title="Get Started With SpaceNG" />
            <form action="">
              <div className="grid grid-cols-2 gap-24">
                <div>
                  <h4 className="font-medium mb-3">Specialist teams to help you get started</h4>
                  <p className="mb-10 text-sm max-w-sm">
                    Connect with our professional advisors to explore options and book an optional,
                    hassle-free tour.
                  </p>

                  <div className="space-y-6">
                    <Input className="border-grey-100 py-3 h-12" placeholder="Full Name" />
                    <Input className="border-grey-100 py-3 h-12" placeholder="Email" />
                    <Input
                      className="border-grey-100 py-3 h-12 block"
                      placeholder="(+234) 00000000"
                    />
                    <DropdDown
                      className="border-grey-100 py-3 h-12"
                      options={[
                        {
                          value: "coworking",
                          note: "CoWorking",
                        },
                        {
                          value: "shortlet",
                          note: "Shortlet",
                        },
                        {
                          value: "workspace",
                          note: "Workspace",
                        },
                        {
                          value: "virtual-office",
                          note: "Virtual Office",
                        },
                      ]}
                      placeholder="What are you interested in"
                    />
                  </div>
                </div>
                <div className='pl-5 relative after:content-[""] after:h-[95%] after:rounded-full after:w-[5px] after:bg-grey after:hidden after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2'>
                  <h4 className="font-medium mb-3">Existing customer and need support</h4>
                  <p className="text-sm mb-5 max-w-sm">
                    If you need to ask a question relating to your agreement, bookings, billing, or
                    have any other queries, please reach out to our customer support team. They will
                    be happy to help
                  </p>

                  <div className="about-label mb-5 max-w-sm">
                    <span>Talk to our Customer Services</span>
                    <Image alt="Icon" height={28} src={"/icons/customer-service.png"} width={28} />
                  </div>

                  <h4 className="font-medium mb-3">Call our sales team</h4>
                  <p className="text-sm mb-5 max-w-sm">
                    Speak to our team of professional advisors who are there to help with discussing
                    options and booking an optional no-hassle tour.
                  </p>

                  <div className="flex items-center gap-3">
                    <svg
                      fill="none"
                      height="15"
                      viewBox="0 0 19 15"
                      width="19"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.2885 0.5H2.32617V14.5H16.2885V0.5Z" fill="#F1F5F7" />
                      <path
                        d="M9.30859 8.97222L16.2896 14.5V3.58698L9.30859 8.97222Z"
                        fill="#DCE6EA"
                      />
                      <path
                        d="M16.871 0.5H16.2893L9.3083 6.02771L2.32695 0.5H1.74525C0.781943 0.5 0 1.28389 0 2.24997V12.75C0 13.7158 0.781943 14.5 1.74525 14.5H2.32695V3.58693L9.3083 8.97104L16.2893 3.58564V14.5H16.871C17.8345 14.5 18.6164 13.7158 18.6164 12.75V2.25001C18.6165 1.28393 17.8346 0.5 16.871 0.5Z"
                        fill="#F84437"
                      />
                    </svg>
                    <Link
                      className="text-[#EB001B] hover:underline"
                      href={"mailto:spacefindatechnologiesltd@gmail.com"}
                    >
                      spacefindatechnologiesltd@gmail.com
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-10 pb-4">
                <input className="h-8 w-8" id="receive-offers" type="checkbox" />
                <label className="text-lg" htmlFor="receive-offers">
                  I would like SpaceNG to send me offers and communications.
                </label>
              </div>
              <p className="text-lg mb-10">
                By submitting this form you agree to our{" "}
                <Link className="text-blue font-semibold" href={"/privacy-policy"}>
                  Privacy Policy
                </Link>
              </p>

              <button className="w-9/12 mx-auto bg-blue py-4 px-4 mt-10 text-white text-xl font-semibold block hover:opacity-70">
                ENQUIRE NOW
              </button>
            </form>
          </Wrapper>
        </section>

        {/* <section>
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
        </section> */}
        {/* <section>
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
        </section> */}

        <section>
          <Wrapper className="py-10">
            <span className="bg-blue py-3 px-5 invisible rounded-md text-white font-medium block w-fit mx-auto">
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
            <h3 className="py-4 pt-12 text-4xl font-medium text-grey-200">The Benefits</h3>
            <ul className="pb-16 grid grid-cols-3 gap-x-8 gap-y-16">
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
      </main>
      <Footer />
    </div>
  );
}

export default Page;
