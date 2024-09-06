import {Phone} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Title from "@/components/main/title/title";
import {DropdDown} from "@/components/style-guide/style-guide";
import {Input} from "@/components/ui/input";
import Wrapper from "@/components/wrapper/wrapper";
import CommunityCard from "@/components/about-us/community/community-card";
import MissionCards from "@/components/about-us/mission-cards/mission-cards";
import MembersCard from "@/components/about-us/members-card/members-card";

import contactUs from "../../public/contact-us.png";

const members = [
  {
    name: "Olawale Eniola",
    role: "Chief Executive & Information Officer",
  },
  {
    name: "George Okata",
    role: "Chief Product & Visual Officer",
  },
  {
    name: "Emerald Olumide",
    role: "Chief Technology Officer",
  },
  {
    name: "Anthony Kelvin",
    role: "Head of Technology Officer",
  },
  {
    name: "Gbolahan Olanipekun",
    role: "Product Growth Management Officer",
  },
  {
    name: "Effiong Bassey",
    role: "Head of Marketing",
  },
  {
    name: "Odujebe Sodiq Pelumi",
    role: "Head of Social Media Content Management",
  },
  {
    name: "Oluwatosin Oladele",
    role: "Head of Business Brand Development",
  },
];

function Page() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <Wrapper className="pt-10">
            <Title title="Get Started With SpaceNG" />
            <form action="">
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <h4 className="text-xl font-medium mb-3">
                    Specialist teams to help you get started
                  </h4>
                  <p className="text-lg mb-10">
                    Connect with our professional advisors to explore options and book an optional,
                    hassle-free tour.
                  </p>

                  <div className="space-y-6">
                    <Input className="border-blue py-3" placeholder="Full Name" />
                    <Input className="border-blue py-3" placeholder="Email" />
                    <Input className="border-blue py-3 block" placeholder="(+234) 00000000" />
                    <DropdDown
                      className="border-blue py-3"
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
                <div className='pl-5 relative after:content-[""] after:h-[95%] after:rounded-full after:w-[5px] after:bg-grey after:block after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2'>
                  <h4 className="text-xl font-medium mb-3">
                    Book meeting rooms, Virtual offices and shortlet
                  </h4>
                  <p className="text-lg mb-5">
                    Our workspaces and shortets are available to book all day.
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-5">
                    <div className="about-label">
                      <span>Book Workspace</span>
                      <Image alt="Icon" height={36} src={"/icons/workspace.png"} width={36} />
                    </div>
                    <div className="about-label">
                      <span>Book Shortlets</span>
                      <Image alt="Icon" height={36} src={"/icons/shortlet.png"} width={36} />
                    </div>
                  </div>

                  <h4 className="text-xl font-medium mb-3">Existing customer and need support</h4>
                  <p className="text-lg mb-5">
                    If you need to ask a question relating to your agreement, bookings, billing, or
                    have any other queries, please reach out to our customer support team. They will
                    be happy to help
                  </p>

                  <div className="about-label w-fit mx-auto mb-5">
                    <span>Talk to our Customer Services</span>
                    <Image alt="Icon" height={36} src={"/icons/customer-service.png"} width={36} />
                  </div>

                  <h4 className="text-xl font-medium mb-3">Call our sales team</h4>
                  <p className="text-lg mb-5">
                    Speak to our team of professional advisors who are there to help with discussing
                    options and booking an optional no-hassle tour.
                  </p>

                  <div className="flex items-center gap-3">
                    <Phone color="#205BF3" />
                    <span className="text-xl">(+234) 00000000</span>
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
                <Link className="text-blue font-semibold" href={""}>
                  Privacy Policy
                </Link>
              </p>

              <button className="w-9/12 mx-auto bg-blue py-4 px-4 text-white text-xl font-semibold block hover:opacity-70">
                ENQUIRE NOW
              </button>
            </form>
          </Wrapper>
        </section>

        <section>
          <Wrapper className="py-10">
            <Image alt="Image of a sitting room" src={contactUs} />

            <article className="pt-16">
              <Title title="Our Community" />
              <p className="py-2 px-3 text-white text-lg leading-loose bg-grey rounded my-12">
                Welcome to SpaceNG Technology Community. A top platform for innovators,
                entrepreneurs, and technologists. Converge, collaborate, and create groundbreaking
                solutions. In today’s fast-paced world, we offer a dynamic, adaptive, and inclusive
                ecosystem. Foster creativity, productivity, and growth with us. SpaceNG Technology
                is built on modern tech principles, embracing these core tenets.
              </p>
            </article>

            <ul className="space-y-16">
              <CommunityCard
                image="/community/agility.png"
                label="agility"
                note="Embracing flexibility and speed to stay ahead of the curve."
              />
              <CommunityCard
                image="/community/innovation.png"
                label="innovation"
                note="Encouraging experimentation, learning, and continuous improvement."
              />
              <CommunityCard
                image="/community/co-operation.png"
                label="co-operation"
                note="Fostering collaborative environments for collective success."
              />
              <CommunityCard
                image="/community/data-driven.png"
                label="data driven insight"
                note="Leveraging analytics and intelligence to inform decisions."
              />
            </ul>
          </Wrapper>
        </section>

        <section className="shadow-[0px_0px_25px_rgba(0,0,0,0.25)] py-16">
          <Wrapper className="py-10">
            <ul className="grid grid-cols-3 gap-16">
              <MissionCards title="Mission">
                <p className="mt-auto">
                  Empower individuals, teams, and organizations to thrive in an ever-evolving world
                  by forging innovative solutions, spaces, and experiences that meet their changing
                  needs
                </p>
              </MissionCards>
              <MissionCards title="Vision">
                <p className="mt-auto">
                  To become the leading innovation hub, renowned for harnessing technology,
                  creativity, and community to create a better future for all
                </p>
              </MissionCards>
              <MissionCards title="Value">
                <ul className="mt-auto">
                  <li className="values-list">Innovate Fearlessly</li>
                  <li className="values-list">User-centric</li>
                  <li className="values-list">Collaborate Openly</li>
                  <li className="values-list">Adapt Agilely</li>
                  <li className="values-list">Serve Selflessly</li>
                </ul>
              </MissionCards>
            </ul>
          </Wrapper>
        </section>

        <section>
          <Wrapper className="py-24">
            <Title title="Member Directory" />
            <ul className="grid grid-cols-2 gap-20">
              {members.map((item, index) => {
                return <MembersCard key={index} name={item.name} role={item.role} />;
              })}
            </ul>
          </Wrapper>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
