"use client";
import {usePathname} from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function SettingsRoutesLayout({children}: {children: React.ReactNode}) {
  const pathName = usePathname();

  return (
    <>
      <div className="flex justify-between gap-[100px] py-5 lg:py-20 px-5 lg:px-24">
        <div className="hidden md:flex flex-col gap-2">
          {sidebar.map((item) => (
            <SideBarItem
              key={item.url}
              icon={item.icon}
              pathName={pathName}
              title={item.title}
              url={item.url}
            />
          ))}
        </div>
        <div className={`mx-auto w-full`}>{children}</div>
      </div>
    </>
  );
}

export default SettingsRoutesLayout;

const SideBarItem = ({
  icon,
  title,
  url,
  pathName,
}: {
  icon: string;
  title: string;
  url: string;
  pathName: string;
}) => {
  return (
    <Link
      key={url}
      className={` ${pathName === url ? "bg-[#E8E8E8]" : ""} flex gap-[14px] items-center p-6 w-[300px] hover:bg-[#E8E8E8] cursor-pointer`}
      href={url}
    >
      <Image alt={title} className="rounded-full" height={24} src={icon} width={24} />
      <p className="text-grey-200 text-sm lg:text-base relative top-[1px] ">{title}</p>
    </Link>
  );
};

const sidebar = [
  {
    icon: "/account_management/personalcard.svg",
    title: "Personal info",
    url: "/account/settings/personal-info",
  },
  {
    icon: "/account_management/securitycard.svg",
    title: "Security",
    url: "/account/settings/security",
  },
  {
    icon: "/account_management/paymentcard.svg",
    title: "Payment info",
    url: "/account/settings/payment-info",
  },
  {
    icon: "/account_management/notificationcard.svg",
    title: "Email Notification",
    url: "/account/settings/notifications",
  },
  {
    icon: "/account_management/user-add.svg",
    title: "Other renters",
    url: "/account/settings/renters",
  },
  {
    icon: "/account_management/privacy.svg",
    title: "Privacy",
    url: "/account/settings/privacy",
  },
  {
    icon: "/account_management/preference.svg",
    title: "Preferences",
    url: "/account/settings/preference",
  },
];
