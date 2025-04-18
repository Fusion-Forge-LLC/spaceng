import React from "react";
import Link from "next/link";
import Image from "next/image";

import whatsapp from "@/public/whatsapp.png";

function FloatingButton() {
  return (
    <Link
      className="fixed right-4 bottom-4 md:right-8 md:bottom-8 z-50"
      href={
        "https://api.whatsapp.com/send/?phone=2348020343070&text&type=phone_number&app_absent=0"
      }
      target="_blank"
    >
      <Image alt="Whatsapp logo" className="h-10 w-10 md:h-12 md:w-12" src={whatsapp} />
    </Link>
  );
}

export default FloatingButton;
