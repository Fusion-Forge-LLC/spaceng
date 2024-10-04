import React from "react";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Title from "@/components/main/title/title";
import Wrapper from "@/components/wrapper/wrapper";
import MissionCards from "@/components/about-us/mission-cards/mission-cards";
import MembersCard from "@/components/about-us/members-card/members-card";
import Faq from "@/components/services/faq/faq";

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
        <article>
          <Wrapper className="pb-28 pt-6 sm:pt-20">
            <h3 className="text-lg font-medium mb-5 md:mb-14">
              About SpacesNG Technologies Limited
            </h3>
            <p className="leading-[2.3]">
              At SpacesNG, we are revolutionizing the way businesses and professionals discover and
              utilize workspaces and shortlets in Nigeria. Our innovative platform connects
              entrepreneurs, startups, and established companies with a network of flexible and
              affordable workspaces, empowering them to focus on growth and success. Our mission is
              to bridge the gap between businesses and suitable workspaces, reducing the stress and
              complexity associated with finding the perfect location. By providing a user-friendly
              platform for hosts to showcase their properties and for users to easily find and book
              spaces, we aim to foster a thriving community of innovators and entrepreneurs. Founded
              by a team of seven visionary individuals passionate about solving real-world problems,
              SpacesNG is committed to delivering exceptional service, flexibility, and value to our
              users. We believe that by working together, we can create a more productive,
              connected, and successful business ecosystem.
              <br />
              <br />
              Join us in shaping the future of workspaces and shortlets in Nigeria. List your
              property, find your ideal space, and experience the SpacesNG difference.
            </p>
          </Wrapper>
        </article>

        <section className="shadow-[0px_0px_25px_rgba(0,0,0,0.25)] py-16">
          <Wrapper className="py-10">
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-4 lg:gap-16">
              <MissionCards title="Mission">
                <p className="mt-auto text-sm leading-relaxed mb-auto">
                  Empower individuals, teams, and organizations to thrive in an ever-evolving world
                  by forging innovative solutions, spaces, and experiences that meet their changing
                  needs
                </p>
              </MissionCards>
              <MissionCards title="Vision">
                <p className="mt-auto text-sm leading-relaxed mb-auto">
                  To become the leading innovation hub, renowned for harnessing technology,
                  creativity, and community to create a better future for all
                </p>
              </MissionCards>
              <MissionCards title="Value">
                <ul className="mt-auto text-sm leading-relaxed">
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
            <Title title="The Inventors" />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-20 sm:gap-10 md:gap-20">
              {members.map((item, index) => {
                return <MembersCard key={index} name={item.name} role={item.role} />;
              })}
            </ul>
          </Wrapper>
        </section>

        <section>
          <Wrapper className="py-10">
            <h3 className="font-medium text-xl md:text-4xl sm:mb-10 text-center">
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
