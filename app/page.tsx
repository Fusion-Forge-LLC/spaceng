import {Playfair_Display_SC} from "next/font/google";
import Image from "next/image";
import {Search} from "lucide-react";

import Wrapper from "@/components/wrapper/wrapper";
import {DropdDown} from "@/components/style-guide/style-guide";
import {Button} from "@/components/ui/button";
import OverviewWithLabel from "@/components/main/overview/overview";
import Title from "@/components/main/title/title";
import Features from "@/components/main/features/features";
import TestimonialCard from "@/components/main/testimonials/testimonial-card";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

import century from "../public/partners/century.png";
import remax from "../public/partners/remax.png";
import zillow from "../public/partners/zillow.png";
import about from "../public/about.png";
import hero from "../public/hero-image.png";
import apartments from "../public/partners/apartments.png";

const playfair = Playfair_Display_SC({
  subsets: ["latin"],
  weight: "400",
});

const partners = [zillow, remax, apartments, century];

const testimonies = [
  {
    user: {
      name: "Emily Chen",
      occupation: "Graphics designer",
      reviewType: "Shortlet Reviews",
    },
    testimony:
      "Spacefinda Shortlet was a lifesaver for my remote team,We needed a temporary space for a project, and their flexible rentals and amenities made it easy to get work done. 10/10 would recommend.",
  },
  {
    user: {
      name: "David Plate",
      occupation: "Engineer",
      reviewType: "Shortlet Reviews",
    },
    testimony:
      "I was traveling for work and needed a productive space to get some work done. FusionForge's Shortlet provided a comfortable and equipped space that helped me stay focused. Great experience.",
  },
  {
    user: {
      name: "Sarah Lee",
      occupation: "Freelancer",
      reviewType: "Shortlet Reviews",
    },
    testimony:
      "As a freelancer, I need flexible workspace options. FusionForge's Shortlet has been a game-changer for me  easy to book, great amenities, and a supportive community",
  },
  {
    user: {
      name: "Raj Desai",
      occupation: "Developer",
      reviewType: "Workspace Reivews",
    },
    testimony:
      "Spacefinda's Workspace helped our startup scale quickly by providing a collaborative environment and access to resources we needed. We've seen significant growth since moving in",
  },
  {
    user: {
      name: "Mia Kim",
      occupation: "Product Designer",
      reviewType: "Workspace Reivews",
    },
    testimony:
      "As a creative agency, we need a space that inspires us. FusionForge's Workspace delivers - from the design to the community events, it's helped us produce our best work yet.",
  },
  {
    user: {
      name: "Jack Taylor",
      occupation: "Site Engineer",
      reviewType: "Workspace Reviews",
    },
    testimony:
      "Spacefinda's Workspace has been instrumental in connecting us with other innovators and potential partners. The networking opportunities have been invaluable for our business",
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Wrapper className="pb-20">
          <div className="py-10 space-y-5">
            <h1 className="text-blue text-xl sm:text-3xl md:text-5xl text-center">
              <span className={playfair.className}>THE FUTURE OF FLEXIBLE LIVING </span>
            </h1>

            <p className="text-grey text-center">
              Spacefinda revolutionizes by blending short-termrentals with dynamic workspaces.
            </p>
          </div>

          <div className="relative mt-8 flex flex-col-reverse gap-8 md:block">
            <div className="bg-grey p-4 w-11/12 mx-auto md:mx-0 md:w-80 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0">
              <h4 className="flex items-center justify-between text-white">
                Find Your Spacefinda
                <Search />
              </h4>
              <div className="space-y-3.5 mt-4">
                <DropdDown
                  options={[
                    {value: "lagos", note: "Lagos"},
                    {value: "ibadan", note: "Ibadan"},
                    {value: "abuja", note: "Abuja"},
                  ]}
                  placeholder="Location"
                />
                <DropdDown
                  options={[
                    {value: "shortlet", note: "Shortlet"},
                    {value: "workspace", note: "Worksplace"},
                    {value: "rent", note: "Rent"},
                  ]}
                  placeholder="Type"
                />
                <DropdDown options={[]} placeholder="Date" />
                <Button className="bg-blue text-white rounded-none w-full">
                  Find my Spacefinda
                </Button>
              </div>
            </div>
            <Image
              alt="A room with desk and chairs"
              className="md:ml-auto w-full md:w-11/12 lg:w-[75%]"
              src={hero}
            />
          </div>
        </Wrapper>
        <section className="bg-grey">
          <Wrapper className="flex flex-col md:flex-row pt-20 pb-10 text-white">
            <article className="flex flex-col max-sm:items-center max-sm:gap-12 justify-between md:w-1/2 pb-20 md:pr-10">
              <svg
                fill="none"
                height="160"
                viewBox="0 0 160 160"
                width="160"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect fill="white" height="160" rx="80" width="160" />
                <circle cx="80" cy="80" fill="#434343" r="59" />
                <path
                  d="M80 117.146C72.8799 117.146 65.9197 114.979 59.9995 110.919C54.0793 106.858 49.4651 101.087 46.7404 94.3341C44.0156 87.5817 43.3027 80.1515 44.6917 72.9831C46.0808 65.8147 49.5095 59.2302 54.5442 54.0621C59.5789 48.8939 65.9935 45.3744 72.9768 43.9485C79.9601 42.5227 87.1985 43.2545 93.7766 46.0514C100.355 48.8484 105.977 53.5849 109.933 59.6619C113.889 65.739 116 72.8837 116 80.1925C116 89.9933 112.207 99.3927 105.456 106.323C98.7046 113.253 89.5478 117.146 80 117.146ZM80 49.3975C74.0666 49.3975 68.2664 51.2036 63.3329 54.5874C58.3994 57.9712 54.5543 62.7807 52.2836 68.4077C50.013 74.0348 49.4189 80.2266 50.5765 86.2003C51.734 92.1739 54.5912 97.6611 58.7868 101.968C62.9824 106.275 68.3279 109.208 74.1473 110.396C79.9667 111.584 85.9987 110.974 91.4805 108.643C96.9623 106.313 101.648 102.365 104.944 97.3012C108.241 92.237 110 86.2831 110 80.1925C110 72.0251 106.839 64.1923 101.213 58.4171C95.5871 52.6419 87.9565 49.3975 80 49.3975Z"
                  fill="white"
                />
                <path d="M83 104.828H77V126.385H83V104.828Z" fill="white" />
                <path d="M83 34H77V55.5565H83V34Z" fill="white" />
                <path d="M125 77.113H104V83.272H125V77.113Z" fill="white" />
                <path d="M56 77.113H35V83.272H56V77.113Z" fill="white" />
                <path
                  d="M80 92.5104C77.6266 92.5104 75.3066 91.788 73.3332 90.4345C71.3598 89.081 69.8217 87.1572 68.9135 84.9063C68.0052 82.6555 67.7676 80.1788 68.2306 77.7893C68.6936 75.3999 69.8365 73.205 71.5147 71.4823C73.193 69.7596 75.3312 68.5864 77.6589 68.1111C79.9867 67.6359 82.3995 67.8798 84.5922 68.8121C86.7849 69.7444 88.6591 71.3233 89.9776 73.3489C91.2962 75.3746 92 77.7562 92 80.1925C92 83.4594 90.7357 86.5925 88.4853 88.9026C86.2348 91.2127 83.1826 92.5104 80 92.5104ZM80 74.0335C78.8133 74.0335 77.6533 74.3947 76.6666 75.0714C75.6799 75.7482 74.9109 76.7101 74.4567 77.8355C74.0026 78.9609 73.8838 80.1993 74.1153 81.394C74.3468 82.5887 74.9183 83.6862 75.7574 84.5475C76.5965 85.4089 77.6656 85.9955 78.8295 86.2331C79.9934 86.4708 81.1998 86.3488 82.2961 85.8826C83.3925 85.4165 84.3295 84.6271 84.9888 83.6142C85.6481 82.6014 86 81.4106 86 80.1925C86 78.559 85.3679 76.9924 84.2426 75.8374C83.1174 74.6823 81.5913 74.0335 80 74.0335Z"
                  fill="white"
                />
              </svg>

              <h3 className="text-xl font-semibold">Our Mission</h3>

              <p className="max-sm:text-center font-medium">
                Enable individuals, teams, and organizations to thrive by creating innovative
                solutions, spaces, and experiences for their evolving needs.
              </p>
            </article>
            <div className="relative 1/2 max-sm:pr-6">
              <Image alt="Office settings image" src={about} />

              <ul className="bg-white text-center flex px-3 md:px-6 py-3 gap-2.5 md:gap-8 absolute -bottom-5 right-0 md:-right-8">
                <li className="about-count-wrapper">
                  <span className="text-xs sm:text-lg font-semibold">10000+</span>
                  <span className="font-medium text-[8px] sm:text-xs">request completed</span>
                </li>
                <li className="about-count-wrapper">
                  <span className="text-xs sm:text-lg font-semibold">5000+</span>
                  <span className="font-medium text-[8px] sm:text-xs">Uptime request</span>
                </li>
                <li className="about-count-wrapper">
                  <span className="text-xs sm:text-lg font-semibold">98%</span>
                  <span className="font-medium text-[8px] sm:text-xs">satisfaction rate</span>
                </li>
                <li className="about-count-wrapper">
                  <span className="text-xs sm:text-lg font-semibold">2000+</span>
                  <span className="font-medium text-[8px] sm:text-xs">Business Supported</span>
                </li>
              </ul>
            </div>
          </Wrapper>
        </section>

        <section>
          <Wrapper className="py-20">
            <Title title="The Spacefinda Overview" />

            <div className="space-y-10 mb-16">
              <OverviewWithLabel
                label="Space"
                lists={[
                  {
                    note: "A flexible, short-term rental solution for individuals and teams",
                    image: "/overview/image1.png",
                  },
                  {
                    note: "Fully furnished, tech-enabled, and design-driven spaces",
                    image: "/overview/image2.png",
                  },
                  {
                    note: "Access to amenities like high-speed internet and meeting rooms",
                    image: "/overview/image3.png",
                  },
                ]}
              />

              {/* <Overview
                lists={[
                  {
                    note: "Flexible rental periods (hours, days, weeks, or months)",
                    image: "/overview/image4.png",
                  },
                  {
                    image: "/overview/image5.png",
                  },
                  {
                    showPrefix: true,
                    note: "Remote workers, Freelancers, Entrepreneurs and others.",
                    image: "/overview/image6.png",
                  },
                ]}
              /> */}
            </div>

            <div className="space-y-10">
              <OverviewWithLabel
                label="Workspace"
                lists={[
                  {
                    note: "Dynamic, adaptive spaces for teams, innovators, and creators",
                    image: "/overview/image7.png",
                  },
                  {
                    note: "Flexible membership plans (part-time, full-time, or virtual)",
                    image: "/overview/image8.png",
                  },
                  {
                    note: "Collaborative environment with networking opportunities",
                    image: "/overview/image9.png",
                  },
                ]}
              />

              {/* <Overview
                lists={[
                  {
                    note: "Access to workshops, webinars, and community events",
                    image: "/overview/image10.png",
                  },
                  {
                    image: "/overview/image11.png",
                  },
                  {
                    showPrefix: true,
                    note: "Startups, Small businesses, Innovation teams, Creative agencies and others.",
                    image: "/overview/image12.png",
                  },
                ]}
              /> */}
            </div>
          </Wrapper>
        </section>

        <section>
          <Wrapper className="py-20 space-y-10">
            <Title title="The Features" />

            <ul className="space-y-20">
              <Features
                image="/features/image1.png"
                note="Dynamic, adaptive spaces are revolutionizing the way we work, create, and interact. "
                title="Dynamic, Adaptive Spaces"
              />
              <Features
                image="/features/image1.png"
                note="The new standards with cutting-edge solutions, sleek design, and unmatched performance."
                title="State-of-the-art equipment"
              />
              <Features
                image="/features/image2.png"
                note="These spaces boost support, communication, and problem-solving, enhancing productivity and growth."
                title="Dynamic, Adaptive Spaces"
              />
            </ul>
          </Wrapper>
        </section>

        <section>
          <Wrapper className="py-20 space-y-10">
            <Title title="The Partners" />
            <div className="grid grid-cols-2 sm:flex items-center justify-between">
              {partners.map((item, index) => {
                return (
                  <Image
                    key={index}
                    alt="Partner logo"
                    className="h-12 object-contain aspect-auto "
                    src={item}
                  />
                );
              })}
            </div>
          </Wrapper>
        </section>

        <section>
          <Wrapper className="py-20 space-y-10">
            <Title title="The Testimonials" />
            <div className=" relative">
              <video poster="/video-poster.png">
                <source src="" type="video/mp4" />
              </video>
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg
                  fill="none"
                  height="83"
                  viewBox="0 0 67 83"
                  width="67"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L66 41.5L1 82V1Z"
                    fill="white"
                    stroke="#C5C5C5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
              {testimonies.map((item, index) => {
                return (
                  <TestimonialCard
                    key={index}
                    image="/user.png"
                    name={item.user.name}
                    occupation={item.user.occupation}
                    reviewType={item.user.reviewType}
                    testimony={item.testimony}
                  />
                );
              })}
            </ul>
          </Wrapper>
        </section>
      </main>
      <Footer />
    </div>
  );
}
