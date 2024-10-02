import Image from "next/image";
import {ChevronUp} from "lucide-react";
import {ChevronRight} from "lucide-react";

export default function HelpCenter() {
  return (
    <div className="max-w-[983px] py-6 lg:py-20 px-5 lg:px-24 text-grey-200">
      <h1 className="mb-6 text-3xl font-semibold text-grey ">Help center</h1>
      <div className="mb-[58px] border-[#D7D7D7] p-4" style={{borderWidth: "0.5px"}}>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Image alt="alert" height={24} src="/account_management/alert.svg" width={24} />
            <p className="relative top-[2px] font-medium ">Stay safe online</p>
          </div>
          <ChevronUp className="cursor-pointer text-grey" size={24} />
        </div>
        <p className="mb-4">
          Protect your security by never sharing your personal or credit card information over the
          phone, by email or chat.
        </p>
        <p className="font-medium text-grey">Learn more</p>
      </div>
      <h2 className="mb-4 text-3xl font-semibold text-grey ">Welcome to the Help Centre</h2>
      <p className="mb-4">We&apos;re available 24 hours a day</p>
      <button className="py-3 px-4 bg-blue rounded-lg text-white mb-[34px]">
        Get help with a booking
      </button>

      <div className="">
        <h3 className="text-2xl font-semibold text-grey mb-11">Frequently asked questions</h3>
        <div
          className="border-[#D7D7D7] rounded-lg py-4 flex flex-col gap-6"
          style={{borderWidth: "1px"}}
        >
          {faqs.map((faq) => (
            <Faq key={faq.title} title={faq.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Faq({title}: {title: string}) {
  return (
    <div
      className="flex items-center justify-between px-4 py-[18.5px] border-b-[#D7D7D7]"
      style={{borderBottomWidth: "0.2px"}}
    >
      <p className="">{title}</p>
      <ChevronRight className="cursor-pointer text-grey" size={20} />
    </div>
  );
}

const faqs = [
  {
    title: "Cancellation",
  },
  {
    title: "Payment",
  },
  {
    title: "Booking details",
  },
  {
    title: "Communications",
  },
  {
    title: "Pricing",
  },
  {
    title: "Credit cards",
  },
  {
    title: "Property policy",
  },
  {
    title: "Security and awareness",
  },
];
