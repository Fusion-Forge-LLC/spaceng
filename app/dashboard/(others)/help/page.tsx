import {ChevronLeft} from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

import {ChatIcon, EmailIcon2, PlayIcon} from "@/components/Icons/icons";

const faqs = [
  {
    title: "How do I list a property?",
  },
  {
    title: "How do I update my booking calendar?",
  },
  {
    title: "What are the fees and commissions?",
  },
  {
    title: "How can I edit my property’s price?",
  },
  {
    title: "How do I reset my password?",
  },
  {
    title: "How can I delete a property listing?",
  },
  {
    title: "What are the payment options for receiving payouts?",
  },
  {
    title: "How do I respond to guest reviews?",
  },
  {
    title: "How can I increase my property’s visibility?",
  },
];

function Page() {
  return (
    <div className="px-4 py-3 sm:p-3 max-md:pb-20">
      <h3 className="font-medium text-xl">Find Answers & Support Easily</h3>

      <div className="grid grid-cols-1 lg:grid-cols-4 min-[1200px]:grid-cols-5 gap-5 min-[1200px]:gap-10">
        <section className="sm:p-3 text-grey-200 text-sm lg:col-span-2 space-y-8">
          <div>
            <h4 className="mb-4 font-medium text-base">Getting Started Guide</h4>
            <p className="mb-3">
              Step-by-step instructions for setting up your property listing, managing bookings, and
              navigating the platform
            </p>

            <div className="aspect-video relative">
              <Image
                fill
                alt="Business Image"
                className="object-cover object-center"
                src={"/business-bg.png"}
              />
              <div className="absolute h-full w-full top-0 left-0 bg-black/50 grid place-content-center">
                <button className="h-20 w-20 grid place-content-center rounded-full border-2 border-white">
                  <PlayIcon />
                </button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-medium text-base">Property Management Guide</h4>
            <p className="mb-4">
              Learn how to edit property details, manage booking calendars, and handle guest
              communications.
            </p>

            <div className="aspect-video relative">
              <Image
                fill
                alt="Business Image"
                className="object-cover object-center"
                src={"/ikoyi.png"}
              />
              <div className="absolute h-full w-full top-0 left-0 bg-black/50 grid place-content-center">
                <button className="h-20 w-20 grid place-content-center rounded-full border-2 border-white">
                  <PlayIcon />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:col-span-2 min-[1200px]:col-span-3 text-sm space-y-8">
          <div>
            <h4 className="mb-4 font-medium text-base">FAQS</h4>
            <ul className="border border-blue rounded-xl p-3">
              {faqs.map((item, index) => {
                return (
                  <li key={index} className="py-2.5 flex justify-between">
                    <span>{item.title}</span>
                    <button>
                      <ChevronLeft />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="min-[1200px]:text-base space-y-5">
            <h4 className="mb-3 font-medium text-base">Contact Support</h4>
            <Link className="flex items-center gap-5" href={"https://x.com/spacefinda"}>
              <span className="flex items-center gap-2">
                <ChatIcon /> Live Chat
              </span>
              <span className="flex-1">Chat with a support agent for real-time assistance.</span>
            </Link>
            <Link
              className="flex items-center gap-5"
              href={"mailto:spacefindatechnologiesltd@gmail.com"}
            >
              <span className="flex items-center gap-2">
                <EmailIcon2 /> Email Support
              </span>
              <span className="flex-1">Submit a ticket for complex inquiries.</span>
            </Link>
            {/* <div className="flex items-center gap-5">
              <span className="flex items-center gap-2">
                <PhoneIcon2 /> Email Support
              </span>
              <span className="flex-1">Call our support line during business hours..</span>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
