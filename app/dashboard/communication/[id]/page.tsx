import {SendHorizonal, Trash} from "lucide-react";
import Image from "next/image";
import React from "react";

import {Input} from "@/components/ui/input";
import {Archive} from "@/components/Icons/icons";

function Page() {
  return (
    <section className="flex-1 px-4 overflow-hidden flex flex-col h-full gap-3 pb-1">
      <header className="flex items-center gap-4">
        <h3 className="text-lg font-semibold mr-auto">Chats Details</h3>

        <button>
          <Archive />
        </button>
        <button>
          <Trash size={18} />
        </button>
      </header>
      <div className="flex-1 overflow-y-scroll no-scrollbar">
        <div className="px-3 py-2">
          <div className="flex items-center gap-3 mb-1">
            <div className="h-12 w-12 rounded-full relative overflow-hidden">
              <Image
                fill
                alt="profile image"
                className="object-cover object-center"
                src={"/reviews/image3.jpg"}
              />
            </div>
            <h4 className="text-grey font-medium">Sarah Thomas</h4>
          </div>
          <p className=" text-grey-200 text-sm leading-loose">
            Beautiful home and excellent location. We enjoyed our stay, but we did encounter some
            issues with the Wi-Fi connection. However, the host was quick to assist, and it didn’t
            impact our overall experience. We would definitely consider staying here again.
          </p>
        </div>

        <div className="px-3 py-2">
          <div className="flex items-center flex-row-reverse gap-3 mb-1">
            <div className="h-12 w-12 rounded-full relative overflow-hidden">
              <Image
                fill
                alt="profile image"
                className="object-cover object-center"
                src={"/reviews/image4.jpg"}
              />
            </div>
            <h4 className="text-grey font-medium">Oluwatosin Oladele</h4>
          </div>
          <p className=" text-grey-200 text-sm leading-loose">
            Thank you for your feedback! We apologize for the inconvenience with the Wi-Fi and
            appreciate your understanding. We’ll work on improving this for future guests
          </p>
        </div>

        <div className="px-3 py-2">
          <div className="flex items-center gap-3 mb-1">
            <div className="h-12 w-12 rounded-full relative overflow-hidden">
              <Image
                fill
                alt="profile image"
                className="object-cover object-center"
                src={"/reviews/image3.jpg"}
              />
            </div>
            <h4 className="text-grey font-medium">Sarah Thomas</h4>
          </div>
          <p className=" text-grey-200 text-sm leading-loose">
            Beautiful home and excellent location. We enjoyed our stay, but we did encounter some
            issues with the Wi-Fi connection. However, the host was quick to assist, and it didn’t
            impact our overall experience. We would definitely consider staying here again.
          </p>
        </div>

        <div className="px-3 py-2">
          <div className="flex items-center flex-row-reverse gap-3 mb-1">
            <div className="h-12 w-12 rounded-full relative overflow-hidden">
              <Image
                fill
                alt="profile image"
                className="object-cover object-center"
                src={"/reviews/image4.jpg"}
              />
            </div>
            <h4 className="text-grey font-medium">Oluwatosin Oladele</h4>
          </div>
          <p className=" text-grey-200 text-sm leading-loose">
            Thank you for your feedback! We apologize for the inconvenience with the Wi-Fi and
            appreciate your understanding. We’ll work on improving this for future guests
          </p>
        </div>
      </div>
      <form className="relative">
        <Input
          className="h-14 p-4 rounded-xl border-[#77787D] focus-visible:ring-blue"
          placeholder="Message"
        />
        <button className="absolute top-1/2 -translate-y-1/2 right-4 hover:scale-105 transition-all">
          <SendHorizonal color="#205BF3" />
        </button>
      </form>
    </section>
  );
}

export default Page;
