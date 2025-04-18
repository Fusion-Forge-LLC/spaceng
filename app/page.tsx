import Image from "next/image";
import {Poppins} from "next/font/google";

import Wrapper from "@/components/wrapper/wrapper";
import FeaturesCard from "@/components/main/features/features";
import SearchProperties from "@/components/main/search/search";
import Header from "@/components/header/header";
import {cn} from "@/lib/utils";
import Testimony from "@/components/main/testimonials/testimony";
import Footer from "@/components/footer/footer";
import ServiceList from "@/components/main/services/service-list";
import Uniqueness from "@/components/main/uniqueness/unigueness";
import OurStory from "@/components/main/our-story/our-story";
import FloatingButton from "@/components/floating-button/floating-button";

import hero from "../public/hero-image.png";
import feature3 from "../public/features/unsplash_4ojhpgKpS68.png";
import feature2 from "../public/features/unsplash_yqu6tJkSQ_k.png";
import feature1 from "../public/features/unsplash_kerFMg52cUA.png";
import heroMobile from "../public/hero-mobile.png";

const poppin = Poppins({subsets: ["latin"], weight: ["500", "600", "700", "400"]});

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-[#474747] to-[#222222]">
        <Header
          className={{
            navColor: "text-[#C4C4C4]",
            logo: "text-white",
            active: "text-white",
          }}
        />
        <div className="relative overflow-hidden max-w-[1349px] mx-auto flex-1 z-10">
          <Wrapper>
            <section className="flex-row hidden md:flex">
              <div className="py-10 space-y-5 md:w-1/2 lg:w-2/5 text-white">
                <h1 className="font-semibold text-2xl sm:text-3xl md:text-6xl">
                  The Future of Flexible Living
                </h1>

                <p className="max-md:hidden">
                  Spacefinda revolutionizes by blending short-termrentals with dynamic workspaces.
                </p>

                <SearchProperties />
              </div>

              <div className="md:w-1/2 lg:w-3/5 flex flex-col -z-10">
                <div className="md:absolute md:right-0 md:bottom-0 md:h-full">
                  <Image alt="A house" className="md:ml-auto w-full" src={hero} />
                </div>

                <div className="max-md:hidden absolute w-fit right-0 bottom-0 text-white bg-gradient-to-br from-[#399FD8] via-[#0775B4] to-[#003756] flex items-center gap-4 py-7 px-7 lg:px-9 lg:pr-14">
                  <span className="font-semibold text-2xl lg:text-3xl whitespace-nowrap">
                    SPACE FINDA
                  </span>
                  <span className="max-w-60 lg:max-w-80 text-sm">
                    Spacefinda Technologies revolutionizes by blending short-term rentals with
                    dynamic workspaces.
                  </span>
                </div>
              </div>
            </section>
          </Wrapper>
          <section className="md:hidden relative z-10 pb-40">
            <h1 className="font-semibold text-2xl text-white absolute top-0 left-4">
              The Future of <br />
              Flexible Living
            </h1>

            <Image alt="A building" className="w-full -z-10" src={heroMobile} />

            <div className="w-10/12 absolute left-1/2 -translate-x-1/2 bottom-20">
              <SearchProperties />
            </div>
          </section>
        </div>
      </div>
      <div className="bg-[#F6F6F6] py-10 md:py-20">
        <Wrapper>
          <h4 className="text-xl sm:text-4xl mb-10 font-semibold text-[#242527]">
            Our Excellent <br />
            Services
          </h4>

          <ServiceList />
        </Wrapper>
      </div>
      <div className="mb-20">
        <Wrapper>
          <section className="py-10 md:py-20 space-y-10 max-sm:text-center">
            <h3
              className={cn(
                poppin.className,
                "text-[#242527] text-2xl sm:text-3xl md:text-5xl font-semibold",
              )}
            >
              <span className="leading-normal">
                What Make Us <br />
                Different?
              </span>
            </h3>
            <Uniqueness />
          </section>

          <OurStory />

          <section className="py-10 md:py-20 space-y-10">
            <h3
              className={cn(
                poppin.className,
                "text-[#242527] text-2xl sm:text-3xl md:text-5xl font-semibold",
              )}
            >
              Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <FeaturesCard
                image={feature1}
                note="Refine your search with ease using our advanced filters, including location, price, amenities, and capacity."
                title="Advanced Search Filters"
              />
              <FeaturesCard
                image={feature2}
                note="Browse only verified listings to ensure quality and peace of mind when booking your space."
                title="Verified Listings"
              />
              <FeaturesCard
                image={feature3}
                note="Enjoy a hassle-free booking experience with our secure and intuitive platform."
                title="Seamless Booking Process"
              />
            </ul>
          </section>
        </Wrapper>
      </div>
      <FloatingButton />
      <Testimony />
      <Footer />
    </>
  );
}
