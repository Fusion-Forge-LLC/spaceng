import {ChevronDown} from "lucide-react";
import Image from "next/image";

export default function Header({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}) {
  return (
    <header
      className="lg:pt-[40px] lg:pb-[30px] py-5 px-5 lg:px-24 flex justify-between items-center sticky"
      style={{boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)"}}
    >
      <h1 className="text-blue font-bold text-lg">SpaceFinda</h1>
      <div className="flex gap-2 items-center">
        <Image
          alt="avatar"
          className="rounded-full lg:w-20 lg:h-20"
          height={40}
          src="/account_management/Profile.svg"
          width={40}
        />
        <ChevronDown className="cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
    </header>
  );
}
